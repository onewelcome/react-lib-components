import React, { ComponentPropsWithRef, ReactElement, Ref, useEffect, useState } from 'react';
import { Props as ButtonProps } from '../Button/Button';
import classes from './DataGrid.module.scss';
import { DataGridHeader } from './DataGridHeader/DataGridHeader';
import { DataGridActions } from './DataGridActions/DataGridActions';
import { DataGridBody } from './DataGridBody/DataGridBody';
import { ColumnName, HeaderCell, OnSortFunction, Sort } from './datagrid.interfaces';
import { Pagination, Props as PaginationProps } from '../Pagination/Pagination';

export interface Props<T> extends ComponentPropsWithRef<'div'> {
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
  paginationProps?: PaginationProps;
  disableContextMenuColumn?: boolean;
  isLoading?: boolean;
  enableMultiSorting?: boolean;
}

const DataGridInner = <T extends {}>(
  {
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
  }: Props<T>,
  ref: Ref<HTMLDivElement>
) => {
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
    <div {...rest} ref={ref}>
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
            data={data}
            headers={internalHeaders}
            isLoading={isLoading}
            disableContextMenuColumn={disableContextMenuColumn}
            emptyLabel={emptyLabel}
          />
        </table>
      </div>
      {paginationProps && !isLoading && (
        <Pagination
          {...paginationProps}
          className={`${classes['pagination']} ${paginationProps.className ?? ''}`}
        />
      )}
    </div>
  );
};

export const DataGrid = React.forwardRef(DataGridInner) as <T extends {}>(
  p: Props<T> & { ref?: Ref<HTMLDivElement> }
) => ReactElement;