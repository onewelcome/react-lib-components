import React, { HTMLProps, ReactNode } from 'react';

export interface Props extends HTMLProps<HTMLTableElement> {
  children: ReactNode;
}

export const DataGrid = ({ children, ...rest }: Props) => {
  return <div {...rest}>{children}</div>;
};
