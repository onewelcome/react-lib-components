import React, { ComponentPropsWithRef, ReactNode } from "react";
import classes from "./FormHelperText.module.scss";
import { Typography } from "../../Typography/Typography";
import { FormElement } from "../form.interfaces";

export interface Props extends ComponentPropsWithRef<"div">, FormElement {
  children?: ReactNode;
}

export const FormHelperText = React.forwardRef<HTMLDivElement, Props>(
  ({ children, error, className, ...rest }: Props, ref) => {
    return (
      <Typography
        {...rest}
        ref={ref}
        variant="sub-text"
        tag="div"
        className={`${classes["form-helper-text"]} ${error ? classes.error : ""} ${
          className ?? ""
        }`}
      >
        {children}
      </Typography>
    );
  }
);
