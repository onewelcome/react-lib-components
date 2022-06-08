import React, { ComponentPropsWithRef, Fragment, useState } from 'react';
import classes from './Pagination.module.scss';
import readyclasses from '../readyclasses.module.scss';
import { IconButton } from '../Button/IconButton';
import { Icons, Icon } from '../Icon/Icon';
import { Input } from '../Form/Input/Input';
import { Select } from '../Form/Select/Select';
import { Option } from '../Form/Select/Option';
import { Label } from '../Form/Label/Label';

export type PaginationTranslations = {
  totalItems: string;
  itemsPerPage: string;
  itemsPerPageLabel: string;
  currentPage: string;
  currentPageLabel: string;
};

export type PageChangeLabels = 'next' | 'previous' | 'first' | 'last';

enum DefaultTranslations {
  totalItems = 'Total items',
  itemsPerPage = 'Items per page',
  currentPage = 'Page %1 of %2',
  itemsPerPageLabel = 'Select how many items per page you want to see.',
  currentPageLabel = 'What page you are currently on.',
}

export type PageSize = 10 | 25 | 50;

export interface Props extends Omit<ComponentPropsWithRef<'div'>, 'translate'> {
  currentPage?: number;
  totalElements?: number;
  pageSize?: PageSize;
  translate?: PaginationTranslations;
  onPageChange: (pageToGoTo: number) => void;
  onPageSizeChange: (pageSize: PageSize) => void;
}

export const Pagination = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      totalElements,
      pageSize = 10,
      translate = DefaultTranslations,
      currentPage,
      className,
      onPageChange,
      onPageSizeChange,
      ...rest
    }: Props,
    ref
  ) => {
    /** We use an internal state variable, because we don't want to fire onCurrentPageChange whenever onChange fires on the input. Rather, only when the Enter key is pressed. */
    const [internalCurrentPage, setInternalCurrentPage] = useState(currentPage?.toString() || '1');
    const calculateAmountOfPages = () => (totalElements ? Math.ceil(totalElements / pageSize) : 0);

    const onEnterListener = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.code === 'Enter') {
        onPageChange(Number(internalCurrentPage));
      }
    };

    const renderCurrentPageTranslation = () => {
      const amountOfPages = calculateAmountOfPages();

      if (amountOfPages) {
        const splitCurrentPageTranslation = translate.currentPage.split(' ');

        return splitCurrentPageTranslation.map((string) => {
          if (string.includes('%1')) {
            return (
              <Fragment key={string}>
                <Label
                  id="current-value-input-label"
                  htmlFor="current-value-input"
                  className={readyclasses['sr-only']}
                >
                  {translate.currentPageLabel}
                </Label>
                <Input
                  aria-labelledby="current-value-input-label"
                  key="input"
                  id="current-value-input"
                  type="text"
                  size={currentPage?.toString().length}
                  max={calculateAmountOfPages()}
                  wrapperProps={{ className: classes['current-value-input'] }}
                  onKeyUp={onEnterListener}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInternalCurrentPage(e.target.value)
                  }
                  name="current-value-input"
                  value={internalCurrentPage}
                  className={`${classes['form-element']} ${classes['current-page-input']}`}
                />
              </Fragment>
            );
          }

          if (string.includes('%2')) {
            return <div key={string}>{string.replace('%2', amountOfPages.toString())}&nbsp;</div>;
          }

          return <div key={string}>{string}&nbsp;</div>;
        });
      }

      return null;
    };

    const onPageSizeChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const pageSizeNumber = Number(event.target.value) as PageSize;
      onPageSizeChange(pageSizeNumber);
    };

    const onPageChangeHandler = (pageToGoTo: number) => {
      onPageChange(pageToGoTo);
    };

    return (
      <div
        {...rest}
        ref={ref}
        className={`${classes['pagination-wrapper']} ${className ? className : ''}`}
      >
        {totalElements && (
          <div className={classes['total']}>
            <span tabIndex={0}>
              {translate.totalItems}: <span>{totalElements}</span>
            </span>
          </div>
        )}
        <div className={classes['pagination']}>
          {totalElements && pageSize && (
            <div className={classes['per-page']}>
              <Label id="page-size-select-label">{translate.itemsPerPage}</Label>
              <Select
                labeledBy="page-size-select-label"
                className={`${classes['form-element']} ${classes['page-size-select']}`}
                value={pageSize.toString()}
                onChange={onPageSizeChangeHandler}
              >
                <Option value="10">10</Option>
                <Option value="25">25</Option>
                <Option value="50">50</Option>
              </Select>
            </div>
          )}
          <Fragment>
            {((currentPage && currentPage > 2) || (currentPage && currentPage > 1)) && (
              <div className={classes['previous']}>
                {currentPage > 2 && (
                  <IconButton
                    title="first"
                    onClick={() => onPageChangeHandler(0)}
                    data-paginate="first"
                  >
                    <Icon icon={Icons.NavigationFirst} />
                  </IconButton>
                )}
                {currentPage > 1 && (
                  <IconButton
                    title="previous"
                    onClick={() => onPageChangeHandler(currentPage - 1)}
                    data-paginate="previous"
                  >
                    <Icon icon={Icons.ChevronLeft} />
                  </IconButton>
                )}
              </div>
            )}
            {totalElements && (
              <div className={classes['page']}>{renderCurrentPageTranslation()}</div>
            )}
            <div className={classes['next']}>
              {((currentPage && currentPage < calculateAmountOfPages()) ||
                (currentPage && !totalElements)) && (
                <IconButton
                  title="next"
                  onClick={() => onPageChangeHandler(currentPage + 1)}
                  data-paginate="next"
                >
                  <Icon icon={Icons.ChevronRight} />
                </IconButton>
              )}
              {currentPage && totalElements && currentPage < calculateAmountOfPages()! - 1 && (
                <IconButton
                  title="last"
                  onClick={() => onPageChangeHandler(totalElements / pageSize)}
                  data-paginate="last"
                >
                  <Icon icon={Icons.NavigationLast} />
                </IconButton>
              )}
            </div>
          </Fragment>
        </div>
      </div>
    );
  }
);
