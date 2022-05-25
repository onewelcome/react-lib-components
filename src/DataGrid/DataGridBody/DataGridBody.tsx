import React, { HTMLProps, ReactChild } from 'react';
import classes from './DataGridBody.module.scss';

export interface Props<T> extends Omit<HTMLProps<HTMLDivElement>, 'data'> {
  children: (item: T) => ReactChild;
  data?: T[];
  loading: boolean;
}

export const DataGridBody = <T extends {}>({
  children,
  className,
  data,
  style,
  ...rest
}: Props<T>) => {
  const rows =
    data &&
    data.map((item) => {
      return children(item);
    });
  return (
    <div
      {...rest}
      className={`${classes['body']} ${className ?? ''}`}
      style={{
        ...style,
        gridTemplateColumns: `repeat(5, 1fr) 2.5rem`,
      }}
    >
      {rows}
    </div>
  );
};
