import React, { ReactNode } from 'react';
import classes from './FormHelperText.module.scss';
import { HTMLProps } from '../../interfaces';

export interface Props extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  disabled?: boolean;
  error?: boolean;
}

export const FormHelperText = ({ children, disabled, error, className, ...rest }: Props) => {
  return (
    <div
      {...rest}
      className={`${classes['form-helper-text']} ${error ? classes.error : ''} ${className ?? ''}`}
    >
      <span>{children}</span>
    </div>
  );
};
