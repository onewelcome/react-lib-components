import React, { HTMLAttributes } from 'react';
import classes from './BaseModalActions.module.scss';

export interface Props extends HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const BaseModalActions = ({ children, className = '', ...restProps }: Props) => {
  return (
    <footer {...restProps} className={`${classes['actions']} ${className}`}>
      {children}
    </footer>
  );
};
