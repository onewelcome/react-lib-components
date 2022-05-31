import React, { Fragment, useEffect, useState } from 'react';
import { ColumnName, Direction, HeaderCell, OnSortFunction, Sort } from '../interfaces';
import { DataGridHeaderCell } from './DataGridHeaderCell';
import classes from './DataGridHeader.module.scss';

export interface Props {
  initialSort?: Sort;
  onSort?: OnSortFunction;
  headers: HeaderCell[];
}

const sortingStates = [undefined, 'ASC', 'DESC'] as (Direction | undefined)[];

export const DataGridHeader = ({ initialSort, onSort, headers, ...rest }: Props) => {
  const [sortList, setSortList] = useState(initialSort || ([] as Sort));

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
    const restSortList = sortList.filter((item) => item.name !== name);
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

  const headerCells = headers.map((header) => {
    if (header.hidden) {
      return null;
    }

    const sort = sortList.find((item) => item.name === header.name);
    return (
      <DataGridHeaderCell
        key={header.name}
        name={header.name}
        headline={header.headline}
        disableSorting={header.disableSorting}
        onSort={wrapOnSort}
        activeSortDirection={sort?.direction}
      />
    );
  });

  return (
    <Fragment {...rest}>
      {headerCells}
      <div></div>
      <div className={classes['line']}></div>
    </Fragment>
  );
};
