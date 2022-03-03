import React, { HTMLProps, ReactNode } from 'react';
import classes from './Form.module.scss';

export interface Props extends HTMLProps<HTMLFormElement> {
  children?: ReactNode;
}

export const Form = ({ children, ...rest }: Props) => {
  return (
    <form className={classes.form} {...rest}>
      {children}
    </form>
  );
};
