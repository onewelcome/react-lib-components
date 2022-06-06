import React, { HTMLProps, ReactChild } from 'react';
import { Typography } from '../../Typography/Typography';
import classes from './DataGridCell.module.scss';

export interface Props extends HTMLProps<HTMLTableCellElement> {
  children?: ReactChild;
  isLoading?: boolean;
}

export const DataGridCell = ({ children, className, isLoading, ...rest }: Props) => {
  return (
    <td {...rest} className={`${classes['cell']} ${className ?? ''}`}>
      {isLoading && <div className={classes['loading']} aria-busy="true" aria-live="polite"></div>}
      {!isLoading && (
        <Typography variant="body" tag="span">
          {children}
        </Typography>
      )}
    </td>
  );
};
