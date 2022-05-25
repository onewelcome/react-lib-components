import React, { HTMLProps, ReactChild } from 'react';

export interface Props extends HTMLProps<HTMLDivElement> {
  children?: ReactChild;
}

export const DataGridPagination = ({ children }: Props) => {
  return <div>{children}</div>;
};
