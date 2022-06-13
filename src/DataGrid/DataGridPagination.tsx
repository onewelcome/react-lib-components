import React, { HTMLProps } from 'react';
import { PageSize, Pagination, PaginationTranslations } from '../Pagination/Pagination';
import classes from './DataGridPagination.module.scss';

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'translate'> {
  currentPage?: number;
  totalElements?: number;
  pageSize?: PageSize;
  translate?: PaginationTranslations;
  onPageChange: (pageToGoTo: number) => void;
  onPageSizeChange: (pageSize: PageSize) => void;
}

export const DataGridPagination = ({
  totalElements,
  pageSize,
  currentPage,
  translate,
  onPageChange,
  onPageSizeChange,
  ...rest
}: Props) => {
  return (
    <div {...rest} className={`${classes['pagination']} ${rest.className ?? ''}`}>
      <Pagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
        pageSize={pageSize}
        totalElements={totalElements}
        translate={translate}
      />
    </div>
  );
};
