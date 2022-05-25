import React, { useEffect, useState } from 'react';
import { HTMLProps } from '../../interfaces';
import { ColumnName, Direction, OnSortFunction, Sort } from '../interfaces';
import { DataGridHeaderCell } from './DataGridHeaderCell';
import classes from './DataGridHeader.module.scss';

interface HeaderCell {
  name: ColumnName;
  headline: string;
  disableSorting?: boolean;
  hidden?: boolean;
}

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'headers'> {
  initialSort?: Sort;
  onSort?: OnSortFunction;
  headers: HeaderCell[];
}

const sortingStates = [undefined, 'ASC', 'DESC'] as (Direction | undefined)[];

export const DataGridHeader = ({
  children,
  initialSort,
  onSort,
  headers,
  style,
  className,
  ...rest
}: Props) => {
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
    <div
      {...rest}
      className={`${classes['header']} ${className ?? ''}`}
      style={{
        ...style,
        gridTemplateColumns: `repeat(${headers.length}, 1fr) 2.5rem`,
      }}
    >
      {headerCells}
    </div>
  );
};
