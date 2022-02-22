import React, { InputHTMLAttributes, useEffect } from 'react';
import classes from './Input.module.scss';
import { Icon, Icons } from '../../Icon/Icon';

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

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  disabled?: boolean;
  error?: boolean;
  wrapperClass?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input = ({ error = false, className, name, style, wrapperClass, ...rest }: Props) => {
  useEffect(() => {
    if (name === undefined) {
      throw new Error("Please give your <Input /> component a 'name' attribute");
    }
  }, []);

  return (
    <div
      style={{ ...style }}
      className={`${classes['input-wrapper']} ${wrapperClass ? wrapperClass : ''}`}
    >
      <input
        name={name}
        className={`${classes.input} ${error ? classes.error : ''} ${className ? className : ''}`}
        {...rest}
      />
      {error && <Icon className={classes.warning} icon={Icons.Warning} />}
    </div>
  );
};
