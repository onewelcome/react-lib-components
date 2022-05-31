import React, { HTMLProps, ReactChild } from 'react';
import classes from './DataGridCell.module.scss';

export interface Props extends HTMLProps<HTMLDivElement> {
  children?: ReactChild;
}

export const DataGridCell = ({ children, className }: Props) => {
  return <div className={`${classes['cell']} ${className ?? ''}`}>{children}</div>;
};
