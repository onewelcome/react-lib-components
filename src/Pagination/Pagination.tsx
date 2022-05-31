import React, { Fragment, HTMLProps } from 'react';
import classes from './Pagination.module.scss';
import { IconButton } from '../Button/IconButton';
import { Icons, Icon } from '../Icon/Icon';
import { Input } from '../Form/Input/Input';
import { Select } from '../Form/Select/Select';
import { Option } from '../Form/Select/Option';

export type Translations = {
  totalItems: string;
  itemsPerPage: string;
  currentPage: string;
};

export type DefaultLabels = 'next' | 'previous' | 'first' | 'last';

enum DefaultTranslations {
  totalItems = 'Total items',
  itemsPerPage = 'Items per page',
  currentPage = 'Page %1 of %2',
}

type PageSize = 10 | 25 | 50;

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'translate'> {
  currentPage?: number;
  totalElements?: number;
  pageSize?: PageSize;
  translate?: Translations;
  disable?: { totalElements: boolean; itemsPerPage: boolean };
  onPageChange: (pageChangeAction: DefaultLabels) => void;
  onPageSizeChange: (pageSize: PageSize) => void;
  onCurrentPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Pagination = ({
  totalElements,
  pageSize = 10,
  translate = DefaultTranslations,
  currentPage,
  className,
  disable = { totalElements: false, itemsPerPage: false },
  onPageChange,
  onPageSizeChange,
  onCurrentPageChange,
  ...rest
}: Props) => {
  const calculateAmountOfPages = () => (totalElements ? Math.ceil(totalElements / pageSize) : 0);

  const renderCurrentPageTranslation = () => {
    const amountOfPages = calculateAmountOfPages();

    if (amountOfPages) {
      const splitCurrentPageTranslation = translate.currentPage.split(' ');

      return splitCurrentPageTranslation.map((string) => {
        if (string.includes('%1')) {
          return (
            <Input
              key="input"
              type="number"
              max={calculateAmountOfPages()}
              wrapperProps={{ className: classes['current-value-input'] }}
              name="current-value-input"
              value={currentPage}
              onChange={onCurrentPageChange}
            />
          );
        }

        if (string.includes('%2')) {
          return `${string.replace('%2', amountOfPages.toString())} `;
        }

        return `${string} `;
      });
    }

    return null;
  };

  const pageSizeChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const pageNumber = Number(event.target.value) as PageSize;
    onPageSizeChange(pageNumber);
  };

  const onPageChangeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange((event.target as HTMLElement).getAttribute('data-paginate') as DefaultLabels);
  };

  return (
    <div {...rest} className={`${classes['pagination-wrapper']} ${className ? className : ''}`}>
      {!disable.totalElements && totalElements && (
        <span className={classes.total}>
          {translate.totalItems}: <span>{totalElements}</span>
        </span>
      )}
      <div className={classes.pagination}>
        {!disable.itemsPerPage && (
          <div className={classes['per-page']}>
            <span>{translate.itemsPerPage}</span>
            {pageSize.toString()}
            <Select value={pageSize.toString()} onChange={pageSizeChangeHandler}>
              <Option value="10">10</Option>
              <Option value="25">25</Option>
              <Option value="50">50</Option>
            </Select>
          </div>
        )}
        <Fragment>
          {((currentPage && currentPage > 2) || (currentPage && currentPage > 1)) && (
            <div className={classes.previous}>
              {currentPage > 2 && (
                <IconButton title="first" onClick={onPageChangeHandler} data-paginate="first">
                  <Icon icon={Icons.NavigationFirst} />
                </IconButton>
              )}
              {currentPage > 1 && (
                <IconButton title="previous" onClick={onPageChangeHandler} data-paginate="previous">
                  <Icon icon={Icons.ChevronLeft} />
                </IconButton>
              )}
            </div>
          )}
          {totalElements && (
            <div className={classes['page']}>
              <div className={classes['current-page']}>{renderCurrentPageTranslation()}</div>
            </div>
          )}
          <div className={classes.next}>
            {((currentPage && currentPage < calculateAmountOfPages()) || !totalElements) && (
              <IconButton title="next" onClick={onPageChangeHandler} data-paginate="next">
                <Icon icon={Icons.ChevronRight} />
              </IconButton>
            )}
            {currentPage && currentPage < calculateAmountOfPages()! - 1 && (
              <IconButton title="last" onClick={onPageChangeHandler} data-paginate="last">
                <Icon icon={Icons.NavigationLast} />
              </IconButton>
            )}
          </div>
        </Fragment>
      </div>
    </div>
  );
};
