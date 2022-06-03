import React from 'react';
import { HTMLProps } from '../../interfaces';
import { HeaderCell } from '../interfaces';
import classes from './DataGridRow.module.scss';

export interface Props extends Omit<HTMLProps<HTMLTableRowElement>, 'headers'> {
  headers?: HeaderCell[];
}

export const DataGridRow = ({ children, className, headers, ...rest }: Props) => {
  const visibleCells = React.Children.map(children, (child, index) => {
    const visible = headers?.length! > index ? !headers![index].hidden : true;
    return visible && child;
  });
  return (
    <tr {...rest} className={`${classes['row']} ${className ?? ''}`}>
      {visibleCells}
    </tr>
  );
};
