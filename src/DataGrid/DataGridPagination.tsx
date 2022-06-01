import React from 'react';

export interface Props {
  totalElements?: number;
  pageSize?: number;
  currentPage?: number;
}

export const DataGridPagination = ({ totalElements, pageSize, currentPage }: Props) => {
  return (
    <div>
      Total items: <b>{totalElements}</b>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Items per page {pageSize}; Page {currentPage} of{' '}
      {Math.ceil((totalElements ?? 1) / (pageSize ?? 1))}
    </div>
  );
};
