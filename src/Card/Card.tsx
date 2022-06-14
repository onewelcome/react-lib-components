import React, { ComponentPropsWithRef, ReactNode } from 'react';
import classes from './Card.module.scss';

export interface Props extends ComponentPropsWithRef<'div'> {
  children?: ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...rest }: Props, ref) => (
    <div {...rest} ref={ref} className={`${classes['card']} ${className ?? ''}`}>
      {children}
    </div>
  )
);
