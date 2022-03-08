import React, { Fragment, HTMLProps } from 'react';
import classes from './Pagination.module.scss';
import { IconButton } from '../Button/IconButton';
import { Icons, Icon } from '../Icon/Icon';

export type Translations = {
  totalItems: string;
  itemsPerPage: string;
  currentPage: string;
};

export type PageChange = 'next' | 'previous' | 'first' | 'last';

enum DefaultTranslations {
  totalItems = 'Total items',
  itemsPerPage = 'Items per page',
  currentPage = 'Page %1 of %2',
}

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'translate'> {
  currentPage?: number;
  totalElements?: number;
  pageSize?: 10 | 25 | 50;
  translate?: Translations;
  disable?: { totalElements: boolean; itemsPerPage: boolean };
  onPageChange: (pageChangeAction: PageChange) => void;
  onPageSizeChange: (pageSize: 10 | 25 | 50) => void;
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
  ...rest
}: Props) => {
  const calculateAmountOfPages = () => (totalElements ? Math.ceil(totalElements / pageSize) : 0);

  const renderCurrentPageTranslation = () => {
    const amountOfPages = calculateAmountOfPages();

    if (amountOfPages) {
      const correctHTML =
        '<div>' +
        translate.currentPage
          .replace(
            '%1',
            `<input type="number" max="${calculateAmountOfPages()}" class="${
              classes['current-value-input']
            }" name="current-value-input" value="${currentPage}" />`
          )
          .replace('%2', amountOfPages.toString()) +
        '</div>';

      return <div dangerouslySetInnerHTML={{ __html: correctHTML }}></div>;
    }

    return null;
  };

  const pageSizeChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const pageNumber = Number(event.target.value) as 10 | 25 | 50;
    onPageSizeChange(pageNumber);
  };

  const onPageChangeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange((event.target as HTMLElement).getAttribute('data-paginate') as PageChange);
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
            <select onChange={pageSizeChangeHandler}>
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>
        )}
        <Fragment>
          {((currentPage && currentPage > 2) || (currentPage && currentPage > 1)) && (
            <div className={classes.previous}>
              {currentPage > 2 && (
                <IconButton onClick={onPageChangeHandler} data-paginate="first">
                  <Icon icon={Icons.NavigationFirst} />
                </IconButton>
              )}
              {currentPage > 1 && (
                <IconButton onClick={onPageChangeHandler} data-paginate="previous">
                  <Icon icon={Icons.ChevronLeft} />
                </IconButton>
              )}
            </div>
          )}
          {totalElements && (
            <div className={classes.page}>
              <span>{renderCurrentPageTranslation()}</span>
            </div>
          )}
          <div className={classes.next}>
            {((currentPage && currentPage < calculateAmountOfPages()) || !totalElements) && (
              <IconButton onClick={onPageChangeHandler} data-paginate="next">
                <Icon icon={Icons.ChevronRight} />
              </IconButton>
            )}
            {currentPage && currentPage < calculateAmountOfPages()! - 1 && (
              <IconButton onClick={onPageChangeHandler} data-paginate="last">
                <Icon icon={Icons.NavigationLast} />
              </IconButton>
            )}
          </div>
        </Fragment>
      </div>
    </div>
  );
};
