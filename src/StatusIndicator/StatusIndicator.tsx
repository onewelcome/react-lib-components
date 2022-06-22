import React, { ComponentPropsWithRef, ReactNode } from 'react';
import classes from './StatusIndicator.module.scss';

export interface Props extends ComponentPropsWithRef<'div'> {
  children?: ReactNode;
  status: 'active' | 'error' | 'neutral' | 'warning';
  badgeProps?: ComponentPropsWithRef<'div'>;
}

export const StatusIndicator = React.forwardRef<HTMLDivElement, Props>(
  ({ children, status, badgeProps, ...rest }: Props, ref) => {
    return (
      <div {...rest} className={classes['status-indicator']} ref={ref}>
        <div
          className={`${classes['status-badge']} ${classes[status]} ${badgeProps?.className ?? ''}`}
        />
        {children}
      </div>
    );
  }
);
