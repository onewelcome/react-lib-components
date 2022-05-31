import React, { Fragment, ReactChild } from 'react';

export interface Props<T> {
  children: (item: T) => ReactChild;
  data?: T[];
}

export const DataGridBody = <T extends {}>({ children, data }: Props<T>) => {
  const rows =
    data &&
    data.map((item) => {
      return children(item);
    });
  return <Fragment>{rows}</Fragment>;
};
