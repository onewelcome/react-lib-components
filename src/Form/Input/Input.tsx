import React, { InputHTMLAttributes, useEffect } from 'react';
import classes from './Input.module.scss';
import { Icon, Icons } from '../../Icon/Icon';

export type Type =
  | 'text'
  | 'email'
  | 'file'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'time'
  | 'url'
  | 'datetime-local'
  | 'hidden';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  disabled?: boolean;
  error?: boolean;
  wrapperClass?: string;
  className?: string;
  labeledBy?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input = ({
  error = false,
  className,
  name,
  style,
  wrapperClass,
  type,
  labeledBy,
  ...rest
}: Props) => {
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
        aria-labelledby={labeledBy}
        type={type}
        name={name}
        className={`${classes.input} ${error ? classes.error : ''} ${className ? className : ''}`}
        {...rest}
      />
      {error && (
        <Icon
          className={`${classes.warning} ${
            type === 'datetime-local' || type === 'time' ? classes['extra-indent'] : ''
          }`}
          icon={Icons.Warning}
        />
      )}
    </div>
  );
};
