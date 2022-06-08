import React, { ComponentPropsWithRef } from 'react';
import classes from './BaseModalActions.module.scss';

export interface Props extends ComponentPropsWithRef<'footer'> {
  children?: React.ReactNode;
}

export const BaseModalActions = React.forwardRef<HTMLElement, Props>(
  ({ children, className = '', ...rest }: Props, ref) => {
    return (
      <footer {...rest} ref={ref} className={`${classes['actions']} ${className}`}>
        {children}
      </footer>
    );
  }
);
