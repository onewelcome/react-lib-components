import React from 'react';
import { HTMLProps } from '../../interfaces';
import { HeaderCell } from '../interfaces';
import classes from './DataGridRow.module.scss';

export interface Props extends Omit<HTMLProps<HTMLTableRowElement>, 'headers'> {
  headers?: HeaderCell[];
  isLoading?: boolean;
}

export const DataGridRow = ({ children, className, headers, isLoading, ...rest }: Props) => {
  const visibleCells = React.Children.map(children, (child, index) => {
    const visible = headers?.length! > index ? !headers![index].hidden : true;
    return visible && child;
  });

  const classNames = [classes['row']];
  className && classNames.push(className);
  isLoading && classNames.push(classes['loading']);

  return (
    <tr {...rest} className={classNames.join(' ')}>
      {visibleCells}
    </tr>
  );
};
