import React, { HTMLProps } from 'react';
import classes from './DataGridPagination.module.scss';

export interface Props extends HTMLProps<HTMLDivElement> {
  totalElements?: number;
  pageSize?: number;
  currentPage?: number;
}

export const DataGridPagination = ({ totalElements, pageSize, currentPage, ...rest }: Props) => {
  return (
    <div {...rest} className={classes['pagination']}>
      Total items: <b>{totalElements}</b>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Items per page {pageSize}; Page {currentPage} of{' '}
      {Math.ceil((totalElements ?? 1) / (pageSize ?? 1))}
    </div>
  );
};
