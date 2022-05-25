import React, { Fragment, Key, ReactNode } from 'react';

export interface Props {
  children?: ReactNode;
  key: Key;
}

export const DataGridRow = ({ children, key }: Props) => {
  return <Fragment key={key}>{children}</Fragment>;
};
