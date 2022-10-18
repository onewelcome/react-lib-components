import React, { ComponentPropsWithRef } from "react";
import classes from "./BaseModalActions.module.scss";

export interface Props extends ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const BaseModalActions = React.forwardRef<HTMLDivElement, Props>(
  ({ children, className = "", ...rest }: Props, ref) => {
    return (
      <div {...rest} ref={ref} className={`${classes["actions"]} ${className}`}>
        {children}
      </div>
    );
  }
);
