import React, { HTMLProps, ReactNode } from 'react';
import classes from './Form.module.scss';

export interface Props extends HTMLProps<HTMLFormElement> {
  children?: ReactNode;
}

export const Form = ({ children, className, ...rest }: Props) => {
  return (
    <form className={`${classes.form} ${className ?? ''}`} {...rest}>
      {children}
    </form>
  );
};
