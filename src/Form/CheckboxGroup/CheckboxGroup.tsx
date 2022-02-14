import React, { HTMLAttributes } from "react";
import classes from "./CheckboxGroup.module.scss";

export interface Props extends HTMLAttributes<HTMLDivElement> {}

export const CheckboxGroup = ({ children, ...rest }: Props) => {
  return (
    <div className={classes["checkbox-group"]} {...rest}>
      {children}
    </div>
  );
};
