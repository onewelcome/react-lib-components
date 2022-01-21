import React, { FC, HTMLAttributes, ReactChild, ReactChildren } from 'react';
import classes from './BaseButton.module.scss';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => unknown;
  className?: string;
}

export const BaseButton: FC<Props> = ({
  children,
  onClick,
  type = 'button',
  className,
}) => {
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
