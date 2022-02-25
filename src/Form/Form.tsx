import React, { HTMLAttributes, ReactNode } from 'react';
import classes from './Form.module.scss';

export interface Props extends HTMLAttributes<HTMLFormElement> {
  children?: ReactNode;
  method?: 'POST' | 'GET' | 'post' | 'get'; // Can't add a regular expression, nor capitalisation ignore.
  action?: string;
  onSubmit?: (event: React.FormEvent) => void;
  onReset?: (event: React.FormEvent) => void;
  onChange?: (event: React.FormEvent) => void;
}

export const Form = ({ children, ...rest }: Props) => {
  return (
    <form className={classes.form} {...rest}>
      {children}
    </form>
  );
};
