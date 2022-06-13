import React, { HTMLProps, ReactElement, useEffect, useState } from 'react';
import { Props as ButtonProps } from '../Button/Button';
import classes from './DataGrid.module.scss';
import { DataGridHeader } from './DataGridHeader/DataGridHeader';
import { DataGridActions } from './DataGridActions/DataGridActions';
import { DataGridBody } from './DataGridBody/DataGridBody';
import { DataGridPagination, Props as DataGridPaginationProps } from './DataGridPagination';
import { ColumnName, HeaderCell, OnSortFunction, Sort } from './interfaces';
import { Card } from '../Card/Card';

export interface Props<T> extends Omit<HTMLProps<HTMLDivElement>, 'headers' | 'data'> {
  children: ({ item, index }: { item: T; index: number }) => ReactElement;
  data?: T[];
  initialSort?: Sort;
  onSort?: OnSortFunction;
  headers: HeaderCell[];
  actions?: {
    enableAddBtn?: boolean;
    enableColumnsBtn?: boolean;
    enableSearchBtn?: boolean;
    addBtnProps?: ButtonProps;
    columnsBtnProps?: ButtonProps;
    searchBtnProps?: ButtonProps;
  };
  emptyLabel?: string;
  paginationProps?: DataGridPaginationProps;
  disableContextMenuColumn?: boolean;
  isLoading?: boolean;
  enableMultiSorting?: boolean;
}

export const DataGrid = <T extends {}>({
  children,
  data,
  initialSort,
  onSort,
  headers,
  actions = {},
  paginationProps,
  disableContextMenuColumn,
  isLoading,
  enableMultiSorting,
  emptyLabel,
  ...rest
}: Props<T>) => {
  if (!headers) {
    throw new Error('Headers definition has to be provided');
  }
  if (!children) {
    throw new Error('DataGridBody should be provieded with a template how to render rows');
  }

  const [internalHeaders, setInternalHeaders] = useState(headers);

  useEffect(() => setInternalHeaders(headers), [headers]);

  const onColumnToggled = (colName: ColumnName) => {
    setInternalHeaders(
      internalHeaders.map((item) =>
        item.name !== colName ? item : { ...item, hidden: !item.hidden }
      )
    );
  };

  return (
    <Card {...rest}>
      <DataGridActions {...actions} headers={internalHeaders} onColumnToggled={onColumnToggled} />
      <div className={classes['table-wrapper']}>
        <table className={classes['table']}>
          <DataGridHeader
            headers={internalHeaders}
            initialSort={initialSort}
            onSort={onSort}
            disableContextMenuColumn={disableContextMenuColumn}
            enableMultiSorting={enableMultiSorting}
          />
          <DataGridBody
            children={children}
            data={data as T[]}
            headers={internalHeaders}
            isLoading={isLoading}
            disableContextMenuColumn={disableContextMenuColumn}
            emptyLabel={emptyLabel}
          />
        </table>
      </div>
      {paginationProps && !isLoading && <DataGridPagination {...paginationProps} />}
    </Card>
  );
};
