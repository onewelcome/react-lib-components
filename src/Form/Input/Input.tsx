import React, { HTMLAttributes, useEffect } from 'react';
import classes from './Input.module.scss';

export type type =
  | 'text'
  | 'email'
  | 'file'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'time'
  | 'url'
  | 'datetime'
  | 'hidden';

export interface Props extends HTMLAttributes<HTMLInputElement> {
  type: type;
  name: string;
  value?: string;
  id?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input = ({ error = false, className, ...rest }: Props) => {
  return (
    <input
      className={`${classes.input} ${error ? classes.error : ''} ${className}`}
      {...rest}
    />
  );
};
