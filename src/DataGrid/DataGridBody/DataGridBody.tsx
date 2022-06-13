import React, { HTMLProps, ReactElement } from 'react';
import { HeaderCell } from '../interfaces';
import { DataGridCell } from './DataGridCell';
import { DataGridRow } from './DataGridRow';
import classes from './DataGridBody.module.scss';
import { Typography } from '../../Typography/Typography';

export interface Props<T> extends Omit<HTMLProps<HTMLTableSectionElement>, 'headers' | 'data'> {
  children: ({ item, index }: { item: T; index: number }) => ReactElement;
  data?: T[];
  headers: HeaderCell[];
  isLoading?: boolean;
  disableContextMenuColumn?: boolean;
  emptyLabel?: string;
}

const skeletonLoadingRows = 9;

export const DataGridBody = <T extends {}>({
  children,
  data,
  headers,
  isLoading,
  disableContextMenuColumn,
  emptyLabel,
  ...rest
}: Props<T>) => {
  const visibleColumns = headers.filter((header) => !header.hidden).length;
  if (isLoading) {
    return (
      <tbody {...rest}>
        {Array.from(Array(skeletonLoadingRows)).map((_, rowIdx) => (
          <DataGridRow key={rowIdx} isLoading>
            {Array.from(Array(visibleColumns)).map((__, colIdx) => (
              <DataGridCell key={colIdx} isLoading></DataGridCell>
            ))}
            {!disableContextMenuColumn && <DataGridCell></DataGridCell>}
          </DataGridRow>
        ))}
      </tbody>
    );
  }

  const emptyData = !data || data.length === 0;
  if (emptyData) {
    return (
      <tbody {...rest}>
        <tr>
          <td
            className={classes['empty']}
            colSpan={visibleColumns + (disableContextMenuColumn ? 0 : 1)}
          >
            <Typography variant="body" spacing={{ margin: 0 }}>
              {emptyLabel}
            </Typography>
          </td>
        </tr>
      </tbody>
    );
  }

  const rows = data?.map((item, index) => {
    return React.cloneElement(children({ item, index }), { headers });
  });
  return <tbody {...rest}>{rows}</tbody>;
};
