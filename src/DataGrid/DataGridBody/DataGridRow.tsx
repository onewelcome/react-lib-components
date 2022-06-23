import React, { ComponentPropsWithRef } from 'react';
import { HeaderCell } from '../datagrid.interfaces';
import classes from './DataGridRow.module.scss';

export interface Props extends ComponentPropsWithRef<'tr'> {
  headers?: HeaderCell[];
  isLoading?: boolean;
}

export const DataGridRow = React.forwardRef<HTMLTableRowElement, Props>(
  ({ children, className, headers, isLoading, ...rest }: Props, ref) => {
    const visibleCells = React.Children.map(children, (child, index) => {
      const visible = headers?.length! > index ? !headers![index].hidden : true;
      return visible && child;
    });

    const classNames = [classes['row']];
    className && classNames.push(className);
    isLoading && classNames.push(classes['loading']);

    return (
      <tr {...rest} ref={ref} className={classNames.join(' ')}>
        {visibleCells}
      </tr>
    );
  }
);
