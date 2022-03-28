import React, { useEffect } from 'react';
import classes from './Input.module.scss';
import readyclasses from '../../readyclasses.module.scss';
import { Icon, Icons } from '../../Icon/Icon';
import { HTMLProps } from '../../interfaces';

export type Type =
  | 'text'
  | 'email'
  | 'file'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'date'
  | 'time'
  | 'url'
  | 'datetime-local'
  | 'hidden';

export interface Props extends HTMLProps<HTMLInputElement> {
  wrapperProps?: HTMLProps<HTMLInputElement>;
  labeledBy?: string;
  type: Type;
  error?: boolean;
}

export const Input = ({
  error = false,
  className,
  name,
  style,
  wrapperProps,
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
      {...wrapperProps}
      style={{ ...style }}
      className={`${classes['input-wrapper']} ${wrapperProps?.className ?? ''} ${
        type === 'hidden' ? readyclasses['hidden'] : ''
      }`}
    >
      <input
        {...rest}
        aria-labelledby={labeledBy}
        type={type}
        name={name}
        className={`${classes['input']} ${error ? classes['error'] : ''} ${
          type === 'datetime-local' || type === 'time' ? classes['remove-extra-indent'] : ''
        } ${className ?? ''}`}
      />
      {error && (
        <Icon
          className={`${classes['warning']} ${
            type === 'datetime-local' || type === 'time' ? classes['extra-indent'] : ''
          }`}
          icon={Icons.Warning}
        />
      )}
    </div>
  );
};
