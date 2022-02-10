import React, { TextareaHTMLAttributes } from "react";
import classes from "./Textarea.module.scss";

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = ({ children, error = false, disabled, rows = 4, ...rest }: Props) => {
  return (
    <textarea rows={rows} className={`${classes.textarea} ${error ? classes.error : ""} ${disabled ? classes.disabled : ""}`} {...rest} />
  );
};
