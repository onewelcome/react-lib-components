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
  RefObject,
  useEffect
} from "react";
import classes from "./ContextMenuItem.module.scss";

export interface Props extends Omit<ComponentPropsWithRef<"button">, "onClick"> {
  children?: string;
  hasFocus?: boolean;
  isSelected?: boolean;
  childIndex?: number;
  shouldClick?: boolean;
  contextMenuOpened?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onFocusChange?: (childIndex: number) => void;
  onSelectedChange?: (childIndex: number) => void;
}

const ContextMenuItemComponent: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  {
    children,
    onClick,
    onFocusChange,
    onSelectedChange,
    hasFocus,
    isSelected,
    childIndex,
    contextMenuOpened,
    shouldClick,
    className,
    ...rest
  }: Props,
  ref
) => {
  let innerButtonRef = (ref as RefObject<HTMLButtonElement>) || createRef<HTMLButtonElement>();

  useEffect(() => {
    if (isSelected && innerButtonRef.current && shouldClick) {
      innerButtonRef.current.click();
    }
  }, [isSelected, shouldClick]);

  useEffect(() => {
    if (innerButtonRef.current && hasFocus && contextMenuOpened) {
      onFocusChange && childIndex && onFocusChange(childIndex);
      innerButtonRef.current.focus();
    }
  }, [hasFocus, innerButtonRef, contextMenuOpened]);

  return (
    <li role="none" className={`${classes["context-menu-item"]} ${className ?? ""}`}>
      <button
        role="menuitem"
        {...rest}
        ref={innerButtonRef}
        data-focus={hasFocus}
        tabIndex={-1}
        onClick={event => {
          onClick?.(event);
          onSelectedChange && childIndex && onSelectedChange(childIndex);
        }}
      >
        {children}
      </button>
    </li>
  );
};

export const ContextMenuItem = React.forwardRef(ContextMenuItemComponent);
