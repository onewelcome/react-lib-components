import React, { ComponentPropsWithRef, useEffect } from "react";
import classes from "./TabButton.module.scss";

export interface Props extends ComponentPropsWithRef<"button"> {
  children?: string;
  selected?: boolean;
  focussed?: boolean;
  tabId?: string;
  tabPanelId?: string;
  onTabButtonClick?: () => void;
}

export const TabButton = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      selected = false,
      focussed = false,
      tabId,
      tabPanelId,
      className,
      onTabButtonClick,
      ...rest
    }: Props,
    ref
  ) => {
    useEffect(() => {
      if (focussed && ref) {
        (ref as React.MutableRefObject<HTMLButtonElement>).current.focus();
      }
    }, [focussed]);

    const classNames = [classes["tabbutton"]];

    selected && classNames.push(classes["selected"]);
    focussed && !selected && classNames.push(classes["focussed"]);
    className && classNames.push(className);

    return (
      <button
        {...rest}
        aria-selected={selected}
        key={tabId}
        className={classNames.join(" ")}
        ref={ref}
        role="tab"
        tabIndex={selected ? 0 : -1}
        type="button"
        aria-controls={tabPanelId}
        id={tabId}
        onClick={onTabButtonClick}
      >
        <span aria-hidden="true">{children}</span>
        {children}
      </button>
    );
  }
);
