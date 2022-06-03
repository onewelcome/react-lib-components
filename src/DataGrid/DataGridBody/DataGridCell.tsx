import React, { HTMLProps, ReactChild } from 'react';
import { Typography } from '../../Typography/Typography';
import classes from './DataGridCell.module.scss';

export interface Props extends HTMLProps<HTMLTableCellElement> {
  children?: ReactChild;
  isLoading?: boolean;
}

export const DataGridCell = ({ children, className, isLoading }: Props) => {
  return (
    <td className={`${classes['cell']} ${className ?? ''}`}>
      {isLoading && <div className={classes['loading']}></div>}
      <Typography variant="body" tag="span">
        {children}
      </Typography>
    </td>
  );
};
