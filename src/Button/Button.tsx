import React from "react";
import { BaseButton, Props as BaseButtonProps } from "./BaseButton";
import classes from "./Button.module.scss";

export interface Props extends BaseButtonProps {
  startIcon?: React.ReactNode | false;
  endIcon?: React.ReactNode | false;
  children?: React.ReactNode;
  variant?: "text" | "fill" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      variant = "fill",
      color = "primary",
      startIcon = false,
      endIcon = false,
      className,
      ...rest
    },
    ref
  ) => {
    const additionalClasses = [];

    if (startIcon || endIcon) {
      additionalClasses.push(classes["has-icon"]);
    }

    if (startIcon) {
      additionalClasses.push(classes["start-icon"]);
    }

    if (endIcon) {
      additionalClasses.push(classes["end-icon"]);
    }

    if (className) {
      additionalClasses.push(className);
    }

    return (
      <BaseButton
        {...rest}
        ref={ref}
        className={`${classes[color]} ${classes[variant]} ${additionalClasses.join(" ")}`}
      >
        {startIcon && <i>{startIcon}&nbsp;</i>}
        <span>{children}</span>
        {endIcon && <i>&nbsp;{endIcon}</i>}
      </BaseButton>
    );
  }
);
