import React, { Fragment, ReactChild } from 'react';

export interface Props<T> {
  children: ({ item, index }: { item: T; index: number }) => ReactChild;
  data?: T[];
  columns?: number;
}

export const DataGridBody = <T extends {}>({ children, data, columns }: Props<T>) => {
  const rows =
    data &&
    data.map((item, index) => {
      const renderedChildren = children({ item, index });
      React.Children.forEach(renderedChildren.props.children, (e) => console.log(e));
      return renderedChildren;
    });
  return <Fragment>{rows}</Fragment>;
};
