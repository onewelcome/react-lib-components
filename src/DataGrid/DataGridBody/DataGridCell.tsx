import React, { ComponentPropsWithRef, ReactChild } from 'react';
import { Typography } from '../../Typography/Typography';
import classes from './DataGridCell.module.scss';

export interface Props extends ComponentPropsWithRef<'td'> {
  children?: ReactChild;
  isLoading?: boolean;
}

export const DataGridCell = React.forwardRef<HTMLTableCellElement, Props>(
  ({ children, className, isLoading, ...rest }: Props, ref) => {
    return (
      <td {...rest} ref={ref} className={`${classes['cell']} ${className ?? ''}`}>
        {isLoading && (
          <div className={classes['loading']} aria-busy="true" aria-live="polite"></div>
        )}
        {!isLoading && (
          <Typography variant="body" tag="span">
            {children}
          </Typography>
        )}
      </td>
    );
  }
);
