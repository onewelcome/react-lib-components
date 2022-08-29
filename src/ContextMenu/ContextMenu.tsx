import React, {
  ComponentPropsWithRef,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState
} from "react";
import { Props as ButtonProps } from "../Button/Button";
import { Props as IconButtonProps } from "../Button/IconButton";
import { Popover } from "../Popover/Popover";
import { Placement, Offset } from "../hooks/usePosition";
import classes from "./ContextMenu.module.scss";
import { useBodyClick } from "../hooks/useBodyClick";
import { createPortal } from "react-dom";

export interface Props extends ComponentPropsWithRef<"div"> {
  trigger: ReactElement<ButtonProps> | ReactElement<IconButtonProps>;
  children: ReactNode;
  placement?: Placement;
  transformOrigin?: Placement;
  offset?: Offset;
  id: string;
  show?: boolean;
  domRoot?: HTMLElement;
  onShow?: () => void;
  onClose?: () => void;
}

export const ContextMenu = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      trigger,
      children,
      id,
      show = false,
      onShow,
      onClose,
      placement = { horizontal: "right", vertical: "top" },
      offset = { top: 0, bottom: 0, left: 0, right: 0 },
      transformOrigin = { horizontal: "left", vertical: "top" },
      domRoot = document.body,
      ...rest
    }: Props,
    ref
  ) => {
    const anchorEl = useRef<HTMLButtonElement>(null);
    const [showContextMenu, setShowContextMenu] = useState(show);
    const [hasBeenClosed, setHasBeenClosed] = useState(false);
    const [selectedContextMenuItem, setSelectedContextMenuItem] = useState(-1);
    const [focusedContextMenuItem, setFocusedContextMenuItem] = useState(-1);
    const [shouldClick, setShouldClick] =
      useState(
        false
      ); /** We need this, because whenever we use the arrow keys to select the contextmenu item, and we focus the currently selected item it fires the "click" listener in ContextMenuItem component. Instead, we only want this to fire if we press "enter" or "spacebar" so we set this to true whenever that is the case, and back to false when it has been executed. */
    const [childrenCount] = useState(React.Children.count(children));

    if (!id) {
      throw new Error("You need to provide an ID to the context menu");
    }

    const onArrowNavigation = (event: React.KeyboardEvent) => {
      if (focusedContextMenuItem === -1 && selectedContextMenuItem !== -1) {
        setFocusedContextMenuItem(selectedContextMenuItem);
      }

      const codesToPrevenDefault = [
        "ArrowDown",
        "ArrowUp",
        "ArrowLeft",
        "ArrowRight",
        "Enter",
        "Space",
        "Escape",
        "End",
        "Home"
      ];

      if (codesToPrevenDefault.includes(event.code)) {
        event.preventDefault();
      }

      switch (event.code) {
        case "ArrowDown":
          if (!showContextMenu) {
            setShowContextMenu(true);
            return;
          }
          setFocusedContextMenuItem(prevState => {
            return prevState + 1 > childrenCount - 1 ? 0 : prevState + 1;
          });
          return;
        case "ArrowUp":
          setFocusedContextMenuItem(prevState => {
            return prevState - 1 < 0 ? childrenCount - 1 : prevState - 1;
          });
          return;
        case "Enter":
        case "Space":
          if (!showContextMenu) {
            setShowContextMenu(true);
            return;
          }

          setShouldClick(true);
          setSelectedContextMenuItem(focusedContextMenuItem);
          setShowContextMenu(false);
          return;
        case "Tab":
        case "Escape":
          setShowContextMenu(false);
          return;
        case "End":
          setFocusedContextMenuItem(childrenCount - 1);
          return;
        case "Home":
          setFocusedContextMenuItem(0);
          return;
      }
    };

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
        onShow && onShow();
      } else {
        onClose && onClose();
        !hasBeenClosed && setHasBeenClosed(true);
        setFocusedContextMenuItem(-1);
        hasBeenClosed && anchorEl.current && anchorEl.current.focus();
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

    const renderChildren = () => {
      return React.Children.map(children, (child, index) => {
        return React.cloneElement(child as ReactElement, {
          onFocusChange: (childIndex: number) => setFocusedContextMenuItem(childIndex),
          onSelectedChange: (childIndex: number) => {
            setSelectedContextMenuItem(childIndex);
            setShouldClick(false);
          },
          childIndex: index,
          hasFocus: focusedContextMenuItem === index,
          isSelected: selectedContextMenuItem === index,
          contextMenuOpened: showContextMenu,
          shouldClick: shouldClick
        });
      });
    };

    return (
      <div {...rest} ref={ref} onKeyDown={onArrowNavigation} className={classes["context-menu"]}>
        {renderTrigger()}
        {createPortal(
          <Popover
            placement={placement}
            transformOrigin={transformOrigin}
            offset={offset}
            anchorEl={anchorEl}
            show={showContextMenu}
          >
            <ul className={classes["menu"]} id={`${id}-menu`} aria-describedby={id} role="menu">
              {renderChildren()}
            </ul>
          </Popover>,
          domRoot
        )}
      </div>
    );
  }
);
