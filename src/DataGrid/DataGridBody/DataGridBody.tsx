import React, { Fragment, ReactChild, ReactElement, ReactNode } from 'react';
import { HeaderCell } from '../interfaces';

export interface Props<T> {
  children: ({ item, index }: { item: T; index: number }) => ReactElement;
  data?: T[];
  headers: HeaderCell[];
}

export const DataGridBody = <T extends {}>({ children, data, headers }: Props<T>) => {
  const rows =
    data &&
    data.map((item, index) => {
      return React.cloneElement(children({ item, index }), { headers });
    });
  return <tbody>{rows}</tbody>;
};
