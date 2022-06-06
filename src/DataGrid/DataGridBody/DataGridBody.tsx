import React, { ReactElement } from 'react';
import { HTMLProps } from '../../interfaces';
import { HeaderCell } from '../interfaces';
import { DataGridCell } from './DataGridCell';
import { DataGridRow } from './DataGridRow';

export interface Props<T> extends Omit<HTMLProps<HTMLTableSectionElement>, 'headers' | 'data'> {
  children: ({ item, index }: { item: T; index: number }) => ReactElement;
  data?: T[];
  headers: HeaderCell[];
  isLoading?: boolean;
  disableContexMenuColumn?: boolean;
}

const skeletonLoadingRows = 9;

export const DataGridBody = <T extends {}>({
  children,
  data,
  headers,
  isLoading,
  disableContexMenuColumn,
  ...rest
}: Props<T>) => {
  if (isLoading) {
    const visibleColumns = headers.filter((header) => !header.hidden).length;
    return (
      <tbody>
        {Array.from(Array(skeletonLoadingRows)).map((_, rowIdx) => (
          <DataGridRow key={rowIdx} isLoading>
            {Array.from(Array(visibleColumns)).map((__, colIdx) => (
              <DataGridCell key={colIdx} isLoading></DataGridCell>
            ))}
            {!disableContexMenuColumn && <DataGridCell></DataGridCell>}
          </DataGridRow>
        ))}
      </tbody>
    );
  }

  const rows =
    data &&
    data.map((item, index) => {
      return React.cloneElement(children({ item, index }), { headers });
    });
  return <tbody {...rest}>{rows}</tbody>;
};
