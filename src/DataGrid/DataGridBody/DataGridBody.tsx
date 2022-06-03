import React, { ReactElement } from 'react';
import { HeaderCell } from '../interfaces';
import { DataGridCell } from './DataGridCell';
import { DataGridRow } from './DataGridRow';

export interface Props<T> {
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
}: Props<T>) => {
  if (isLoading) {
    const visibleColumns = headers.filter((header) => !header.hidden).length;
    return (
      <tbody>
        {Array.from(Array(skeletonLoadingRows)).map((_, rowIdx) => (
          <DataGridRow key={rowIdx}>
            {Array.from(Array(visibleColumns)).map((__, colIdx) => (
              <DataGridCell key={colIdx} isLoading={true}></DataGridCell>
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
  return <tbody>{rows}</tbody>;
};
