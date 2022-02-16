import React, { HTMLAttributes } from "react";
import classes from "./CheckboxGroup.module.scss";
import { FormHelperText } from "../FormHelperText/FormHelperText";
import { Icon, Icons } from "../..";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  error?: boolean;
  helperText?: string;
  legend?: string;
  errorMessage?: string;
}

export const CheckboxGroup = ({ children, error, errorMessage, helperText, legend, ...rest }: Props) => {
  return (
    <div className={`${classes["checkbox-group"]} ${error ? classes.error : ""}`} {...rest}>
      {legend && <legend className={classes.legend}>{legend}</legend>}
      {children}
      <div className={classes["helper-text"]}>
        {helperText && !error && <FormHelperText indent={0}>{helperText}</FormHelperText>}
        {error && errorMessage && (
          <span className={classes["error-message"]}>
            <Icon className={classes["error-icon"]} icon={Icons.Warning} />
            <span>{errorMessage}</span>
          </span>
        )}
      </div>
    </div>
  );
};
