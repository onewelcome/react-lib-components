import React, { ComponentPropsWithRef } from 'react';
import classes from './BaseButton.module.scss';

export interface Props extends ComponentPropsWithRef<'button'> {
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'tertiary' | 'default';
}

export const BaseButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, type = 'button', className, ...rest }, ref) => {
    const validTypes = ['submit', 'button', 'reset'];

    if (!validTypes.includes(type))
      throw new Error(
        `You have entered an invalid button type. Expected 'submit', 'button' or 'reset' got ${type}`
      );

    return (
      <button
        {...rest}
        ref={ref}
        type={type}
        className={`${classes.button} ${className ? className : ''}`}
      >
        {children}
      </button>
    );
  }
);
