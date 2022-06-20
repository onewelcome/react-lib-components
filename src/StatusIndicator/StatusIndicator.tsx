import React, { ComponentPropsWithRef, ReactNode } from 'react';
import classes from './StatusIndicator.module.scss';

export interface Props extends ComponentPropsWithRef<'div'> {
  children?: ReactNode;
  status: 'active' | 'error' | 'neutral' | 'warning';
  badgeClassName?: string;
}

export const StatusIndicator = React.forwardRef<HTMLDivElement, Props>(
  ({ children, status = 'active', badgeClassName, ...rest }: Props, ref) => {
    return (
      <div {...rest} className={classes.statusIndicator} ref={ref}>
        <div
          className={`${classes.statusBadge} ${classes[status]} ${
            badgeClassName ? badgeClassName : ''
          }`}
        />
        {children}
      </div>
    );
  }
);
