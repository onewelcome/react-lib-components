import React, { ComponentPropsWithRef, createRef, RefObject, useEffect } from "react";
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

export const ContextMenuItem = React.forwardRef<HTMLButtonElement, Props>(
  (
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
      <li role="menuitem" className={classes["context-menu-item"]}>
        <button
          {...rest}
          ref={innerButtonRef}
          data-focus={hasFocus}
          onClick={event => {
            onClick && onClick(event);
            onSelectedChange && childIndex && onSelectedChange(childIndex);
          }}
        >
          {children}
        </button>
      </li>
    );
  }
);
