import React, { HTMLAttributes } from 'react';
import classes from './BaseButton.module.scss';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => unknown;
  className?: string;
}

export const BaseButton = ({
  children,
  onClick,
  type = 'button',
  className,
}: Props) => {
  return (
    <button
      type={type}
      className={`${classes.button} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
