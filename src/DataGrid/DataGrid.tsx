import React, { HTMLProps, ReactElement } from 'react';
import { Props as ButtonProps } from '../Button/Button';
import classes from './DataGrid.module.scss';
import { DataGridHeader } from './DataGridHeader/DataGridHeader';
import { DataGridActions } from './DataGridActions';
import { DataGridBody } from './DataGridBody/DataGridBody';
import { DataGridPagination, Props as DataGridPaginationProps } from './DataGridPagination';
import { HeaderCell, OnSortFunction, Sort } from './interfaces';

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
  paginationProps: DataGridPaginationProps;
  disableContexMenuColumn: boolean;
  isLoading?: boolean;
}

export const DataGrid = <T extends {}>({
  children,
  data,
  actions,
  headers,
  onSort,
  className,
  initialSort,
  disableContexMenuColumn,
  paginationProps,
  isLoading,
  ...rest
}: Props<T>) => {
  if (!headers) {
    throw new Error('Headers definition has to be provided');
  }
  if (!children) {
    throw new Error('DataGridBody should be provieded with a template how to render rows');
  }

  return (
    <div {...rest} className={`${classes['grid-wrapper']}  ${className ?? ''}`}>
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
          disableContexMenuColumn={disableContexMenuColumn}
        />
        <DataGridBody
          children={children}
          data={data as T[]}
          headers={headers}
          isLoading={isLoading}
          disableContexMenuColumn={disableContexMenuColumn}
        />
      </table>
      {paginationProps && !isLoading && <DataGridPagination {...paginationProps} />}
    </div>
  );
};
