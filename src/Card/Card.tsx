import React, { HTMLProps, ReactNode } from 'react';
import classes from './Card.module.scss';

export interface Props extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

export const Card = ({ children, className, ...rest }: Props) => {
  return (
    <div {...rest} className={`${classes['card']} ${className ?? ''}`}>
      {children}
    </div>
  );
};
