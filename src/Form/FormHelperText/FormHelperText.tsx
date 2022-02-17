import React, { HTMLAttributes, ReactNode } from "react";
import classes from "./FormHelperText.module.scss";

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  disabled?: boolean;
  error?: boolean;
  indent?: number;
}

export const FormHelperText = ({ children, disabled, error, indent, className, ...rest }: Props) => {
  const additionalClasses: string[] = [];

  if (error) additionalClasses.push(classes.error);

  return (
    <div style={{ marginLeft: `${indent}px` }} className={`${classes["form-helper-text"]} ${additionalClasses} ${className}`} {...rest}>
      <span>{children}</span>
    </div>
  );
};
