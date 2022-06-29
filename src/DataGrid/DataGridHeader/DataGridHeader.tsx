import React, { ComponentPropsWithRef, useEffect, useState } from 'react';
import { ColumnName, Direction, HeaderCell, OnSortFunction, Sort } from '../datagrid.interfaces';
import { DataGridHeaderCell } from './DataGridHeaderCell';
import classes from './DataGridHeader.module.scss';

export interface Props extends ComponentPropsWithRef<'thead'> {
  headers: HeaderCell[];
  initialSort?: Sort;
  onSort?: OnSortFunction;
  disableContextMenuColumn?: boolean;
  enableMultiSorting?: boolean;
  spacing?: React.CSSProperties;
}

const sortingStates = [undefined, 'ASC', 'DESC'] as (Direction | undefined)[];

export const DataGridHeader = React.forwardRef<HTMLTableSectionElement, Props>(
  (
    {
      initialSort,
      onSort,
      headers,
      disableContextMenuColumn,
      enableMultiSorting,
      spacing,
      ...rest
    }: Props,
    ref
  ) => {
    const [sortList, setSortList] = useState(initialSort || []);

    useEffect(() => {
      setSortList(initialSort || []);
    }, [initialSort]);

    const calculateNextSortState = (direction?: Direction) => {
      const currentDirectionIdx = sortingStates.findIndex((item) => item === direction);
      return sortingStates[currentDirectionIdx + (1 % sortingStates.length)];
    };

    /**
     * The sortList contains sorting columns objects. The order of those objects determinates priorities of sorting.
     * Last modified sorting column has the highest priority.
     */
    const updateSortList = (name: ColumnName): Sort => {
      const current = sortList.find((item) => item.name === name);
      const restSortList = enableMultiSorting ? sortList.filter((item) => item.name !== name) : [];
      const newSortDirection = calculateNextSortState(current?.direction);
      return newSortDirection
        ? [{ name, direction: newSortDirection }, ...restSortList]
        : restSortList;
    };

    const wrapOnSort = (name: ColumnName) => {
      const newSort = updateSortList(name);
      onSort && onSort(newSort);
      setSortList(newSort);
    };

    const headerCells = headers.map((header, index) => {
      if (header.hidden) {
        return null;
      }

      let headerStyle: React.CSSProperties = {};

      if (index === 0) {
        headerStyle.paddingLeft = spacing?.paddingLeft;
      }
      if (index === headers.length - 1 && disableContextMenuColumn) {
        headerStyle.paddingRight = spacing?.paddingRight;
      }

      const sort = sortList.find((item) => item.name === header.name);
      return (
        <DataGridHeaderCell
          key={header.name}
          name={header.name}
          headline={header.headline}
          disableSorting={header.disableSorting || !onSort}
          onSort={wrapOnSort}
          activeSortDirection={sort?.direction}
          style={headerStyle}
        />
      );
    });

    return (
      <thead {...rest} ref={ref} className={classes['thead']}>
        <tr className={classes['row']}>
          {headerCells}
          {!disableContextMenuColumn && (
            <td
              style={{ paddingRight: spacing?.paddingRight }}
              aria-label="context menu"
              className={classes['context-menu']}
            ></td>
          )}
        </tr>
      </thead>
    );
  }
);
