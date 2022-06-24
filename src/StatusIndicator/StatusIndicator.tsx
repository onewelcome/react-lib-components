import React, { ComponentPropsWithRef, ReactNode } from 'react';
import { Typography, Props as TypographyProps } from '../Typography/Typography';
import classes from './StatusIndicator.module.scss';

export interface Props extends ComponentPropsWithRef<'div'> {
  children?: ReactNode;
  status: 'active' | 'error' | 'neutral' | 'warning';
  badgeProps?: ComponentPropsWithRef<'div'>;
  typographyProps?: TypographyProps;
}

export const StatusIndicator = React.forwardRef<HTMLDivElement, Props>(
  ({ children, status, badgeProps, typographyProps, ...rest }: Props, ref) => {
    return (
      <div {...rest} className={classes['status-indicator']} ref={ref}>
        <div
          className={`${classes['status-badge']} ${classes[status]} ${badgeProps?.className ?? ''}`}
        />
        <Typography {...typographyProps} spacing={{ margin: '0' }} variant="body" tag="div">
          {typographyProps?.children || children}
        </Typography>
      </div>
    );
  }
);
