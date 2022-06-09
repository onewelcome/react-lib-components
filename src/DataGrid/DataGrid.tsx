import React, { HTMLProps, ReactElement } from 'react';
import { Props as ButtonProps } from '../Button/Button';
import classes from './DataGrid.module.scss';
import { DataGridHeader } from './DataGridHeader/DataGridHeader';
import { DataGridActions } from './DataGridActions';
import { DataGridBody } from './DataGridBody/DataGridBody';
import { DataGridPagination, Props as DataGridPaginationProps } from './DataGridPagination';
import { HeaderCell, OnSortFunction, Sort } from './interfaces';
import { Card } from '../Card/Card';

export interface Props<T> extends Omit<HTMLProps<HTMLDivElement>, 'headers' | 'data'> {
  children: ({ item, index }: { item: T; index: number }) => ReactElement;
  data?: T[];
  initialSort?: Sort;
  onSort?: OnSortFunction;
  headers: HeaderCell[];
  actions?: {
    addBtnProps?: ButtonProps;
    columnsBtnProps?: ButtonProps;
    searchBtnProps?: ButtonProps;
  };
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
  actions,
  paginationProps,
  disableContextMenuColumn,
  isLoading,
  enableMultiSorting,
  ...rest
}: Props<T>) => {
  if (!headers) {
    throw new Error('Headers definition has to be provided');
  }
  if (!children) {
    throw new Error('DataGridBody should be provieded with a template how to render rows');
  }

  return (
    <Card {...rest}>
      <DataGridActions
        addBtnProps={actions?.addBtnProps}
        columnsBtnProps={actions?.columnsBtnProps}
        searchBtnProps={actions?.searchBtnProps}
      />
      <table className={classes['table']}>
        <DataGridHeader
          headers={headers}
          initialSort={initialSort}
          onSort={onSort}
          disableContextMenuColumn={disableContextMenuColumn}
          enableMultiSorting={enableMultiSorting}
        />
        <DataGridBody
          children={children}
          data={data as T[]}
          headers={headers}
          isLoading={isLoading}
          disableContextMenuColumn={disableContextMenuColumn}
        />
      </table>
      {paginationProps && !isLoading && <DataGridPagination {...paginationProps} />}
    </Card>
  );
};
