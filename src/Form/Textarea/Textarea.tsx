import React, { TextareaHTMLAttributes } from 'react';
import classes from './Textarea.module.scss';

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = ({
  children,
  error = false,
  disabled,
  ...rest
}: Props) => {
  return (
    <textarea
      className={`${classes.textarea} ${error ? classes.error : ''} ${
        disabled ? classes.disabled : ''
      }`}
      {...rest}
    />
  );
};
