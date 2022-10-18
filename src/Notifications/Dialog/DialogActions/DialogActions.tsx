import React, { ComponentPropsWithRef } from "react";
import {
  BaseModalActions,
  Props as BaseModalActionsProps
} from "../../BaseModal/BaseModalActions/BaseModalActions";
import classes from "./DialogActions.module.scss";

export interface Props extends ComponentPropsWithRef<any>, BaseModalActionsProps {
  align: "left" | "right";
}

export const DialogActions = React.forwardRef<HTMLDivElement, Props>(
  ({ children, align, ...rest }: Props, ref) => {
    return (
      <BaseModalActions
        {...rest}
        ref={ref}
        className={`${classes["actions"]}${align === "left" ? " " + classes["left"] : ""}`}
      >
        {children}
      </BaseModalActions>
    );
  }
);
