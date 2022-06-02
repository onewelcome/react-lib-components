import React, { HTMLProps, ReactChild } from 'react';
import classes from './DataGridCell.module.scss';

export interface Props extends HTMLProps<HTMLTableCellElement> {
  children?: ReactChild;
}

export const DataGridCell = ({ children, className }: Props) => {
  return <td className={`${classes['cell']} ${className ?? ''}`}>{children}</td>;
};
