import React, { TextareaHTMLAttributes } from "react";
import { Icon, Icons } from "../..";
import classes from "./Textarea.module.scss";

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  disabled?: boolean;
}

export const Textarea = ({ children, error = false, disabled = false, rows = 4, ...rest }: Props) => {
  return (
    <div className={`${classes["textarea-wrapper"]}`}>
      <textarea rows={rows} className={`${error ? classes.error : ""} ${classes.textarea}`} disabled={disabled} {...rest} />
      {error && <Icon className={classes.warning} icon={Icons.Warning} />}
    </div>
  );
};
