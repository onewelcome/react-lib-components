import React, { ComponentPropsWithRef, ReactNode } from 'react';
import classes from './StatusIndicator.module.scss';

export interface Props extends ComponentPropsWithRef<'div'> {
  children?: ReactNode;
  status: 'active' | 'error' | 'neutral' | 'warning';
}

export const StatusIndicator = ({ children, status = 'active', ...rest }: Props) => {
  return (
    <div {...rest} className={classes.statusIndicator}>
      <div className={`${classes.statusBadge} ${classes[status]}`} />
      {children}
    </div>
  );
};
