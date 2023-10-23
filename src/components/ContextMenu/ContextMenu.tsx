/*
 * Copyright 2022 OneWelcome B.V.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import React, {
  ComponentPropsWithRef,
  createRef,
  ForwardRefRenderFunction,
  ReactElement,
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import { Props as ButtonProps } from "../Button/Button";
import { Props as IconButtonProps } from "../Button/IconButton";
import { Popover, Props as PopoverProps } from "../Popover/Popover";
import { Placement, Offset } from "../../hooks/usePosition";
import classes from "./ContextMenu.module.scss";
import { useBodyClick } from "../../hooks/useBodyClick";
import { Props as ContextMenuItemProps } from "./ContextMenuItem";
import { createPortal } from "react-dom";
import { useGetDomRoot } from "../../hooks/useGetDomRoot";
import { useArrowNavigation, useDefaultOffset } from "./ContextMenuService";

export interface Props extends Omit<ComponentPropsWithRef<"div">, "onChange"> {
  trigger: ReactElement<ButtonProps> | ReactElement<IconButtonProps>;
  decorativeElement?: ReactNode;
  children: ReactElement<ContextMenuItemProps> | ReactElement<ContextMenuItemProps>[];
  placement?: Placement;
  transformOrigin?: Placement;
  offset?: Offset;
  debounceAmount?: number;
  id: string;
  show?: boolean;
  domRoot?: HTMLElement;
  onShow?: () => void;
  onClose?: () => void;
  popoverProps?: PopoverProps;
  value?: number;
  onChange?: (event: React.MouseEvent<HTMLButtonElement>, childIndex: number) => void;
}

const ContextMenuComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    trigger,
    children,
    decorativeElement,
    id,
    show = false,
    onShow,
    onClose,
    placement = { horizontal: "right", vertical: "top" },
    offset,
    transformOrigin = { horizontal: "left", vertical: "top" },
    debounceAmount,
    domRoot,
    popoverProps,
    value,
    onChange,
    ...rest
  }: Props,
  ref
) => {
  const anchorEl = useRef<HTMLButtonElement>(null);
  const wrappingDivRef = (ref as RefObject<HTMLDivElement>) || createRef<HTMLDivElement>();
  const [showContextMenu, setShowContextMenu] = useState(show);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);
  const [selectedContextMenuItem, setSelectedContextMenuItem] = useState(-1);
  const [focusedContextMenuItem, setFocusedContextMenuItem] = useState(-1);
  const [shouldClick, setShouldClick] =
    useState(
      false
    ); /** We need this, because whenever we use the arrow keys to select the contextmenu item, and we focus the currently selected item it fires the "click" listener in ContextMenuItem component. Instead, we only want this to fire if we press "enter" or "spacebar" so we set this to true whenever that is the case, and back to false when it has been executed. */
  const [childrenCount] = useState(React.Children.count(children));

  const { root } = useGetDomRoot(domRoot, wrappingDivRef);

  if (!id) {
    throw new Error("You need to provide an ID to the context menu");
  }

  const syncSelectedContextMenuItem = setSelectedContextMenuItem;

  useEffect(() => {
    value !== undefined && syncSelectedContextMenuItem(value);
  }, [value]);

  const { calculateDefaultOffset } = useDefaultOffset();
  const calculatedOffset = offset ?? calculateDefaultOffset(placement, transformOrigin);

  const { onArrowNavigation } = useArrowNavigation({
    selectedContextMenuItem,
    setSelectedContextMenuItem,
    focusedContextMenuItem,
    setFocusedContextMenuItem,
    showContextMenu,
    setShowContextMenu,
    childrenCount,
    setShouldClick
  });

  useBodyClick(
    event => {
      return (
        showContextMenu &&
        anchorEl.current !== event.target &&
        anchorEl.current !== (event.target as HTMLElement).parentElement
      );
    },
    () => {
      setShowContextMenu(false);
    },
    showContextMenu
  );

  useEffect(() => {
    if (showContextMenu === true) {
      onShow?.();
    } else {
      onClose?.();
      !hasBeenClosed && setHasBeenClosed(true);
      setFocusedContextMenuItem(-1);
      // If the user clicks on the trigger button, we want to focus it again after the context menu has been closed,
      // but only if the option doesn't open another window (such as a modal),
      // otherwise pressing enter wouldn't fire the primary action of the modal.
      if (document.activeElement?.closest(`.${wrappingDivRef.current?.className}`)) {
        hasBeenClosed && anchorEl.current && anchorEl.current.focus();
      }
    }
  }, [showContextMenu]);

  const renderTrigger = () =>
    React.cloneElement(trigger, {
      id: id,
      "aria-haspopup": "true",
      "aria-controls": `${id}-menu`,
      "aria-expanded": showContextMenu,
      onClick: () => setShowContextMenu(!showContextMenu),
      tabIndex: 0,
      ref: anchorEl
    });

  const renderChildren = () =>
    React.Children.map(children, (child, index) =>
      React.cloneElement(child as ReactElement, {
        onFocusChange: (childIndex: number) => setFocusedContextMenuItem(childIndex),
        onSelectedChange: (event: React.MouseEvent<HTMLButtonElement>, childIndex: number) => {
          setSelectedContextMenuItem(childIndex);
          setShouldClick(false);
          onChange?.(event, childIndex);
        },
        childIndex: index,
        hasFocus: focusedContextMenuItem === index,
        isSelected: selectedContextMenuItem === index,
        showActiveState:
          child?.props.showActiveState ??
          (value !== undefined && selectedContextMenuItem === index),
        contextMenuOpened: showContextMenu,
        shouldClick: shouldClick
      })
    );

  const onOutOfViewHandler = useCallback(() => {
    setShowContextMenu(false);
  }, []);

  if (!root) {
    return null;
  }

  return (
    <div
      {...rest}
      ref={wrappingDivRef}
      onKeyDown={onArrowNavigation}
      className={classes["context-menu"]}
    >
      {renderTrigger()}
      {createPortal(
        <Popover
          {...popoverProps}
          placement={placement}
          transformOrigin={transformOrigin}
          offset={calculatedOffset}
          anchorEl={anchorEl}
          debounceAmount={debounceAmount}
          show={showContextMenu}
          onAnchorOutOfView={onOutOfViewHandler}
        >
          {decorativeElement && (
            <div className={classes["decorative-element"]}>{decorativeElement}</div>
          )}
          <ul
            className={`${classes["menu"]} ${decorativeElement ? classes["no-margin-top"] : ""}`}
            id={`${id}-menu`}
            aria-describedby={id}
            role="menu"
          >
            {renderChildren()}
          </ul>
        </Popover>,
        root
      )}
    </div>
  );
};

export const ContextMenu = React.forwardRef(ContextMenuComponent);
