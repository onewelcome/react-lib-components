import React, { Fragment, ReactNode } from 'react';
import { Icon, Icons } from '../../Icon/Icon';
import { ColumnName, Direction } from '../interfaces';
import classes from './DataGridHeaderCell.module.scss';

export interface Props {
  headline: string;
  name: ColumnName;
  disableSorting?: boolean;
  activeSortDirection?: Direction;
  onSort?: (name: ColumnName) => void;
}

const ariaSortMapping = {
  ASC: 'ascending',
  DESC: 'descending',
} as const;

export const DataGridHeaderCell = ({
  headline,
  name,
  disableSorting,
  activeSortDirection,
  onSort,
}: Props) => {
  const onCellClick = () => {
    onSort && onSort(name);
  };

  const sortingIndicator = () => {
    const getSortingIndicatorClasses = (direction: Direction) => {
      const sortingIndicatorClasses = [classes['indicator']];
      if (activeSortDirection) {
        if (activeSortDirection === direction) {
          sortingIndicatorClasses.push(classes['active']);
        } else {
          sortingIndicatorClasses.push(classes['hidden']);
        }
      }
      return sortingIndicatorClasses;
    };

    return (
      <Fragment>
        <Icon className={getSortingIndicatorClasses('ASC').join(' ')} icon={Icons.TriangleUp} />
        <Icon className={getSortingIndicatorClasses('DESC').join(' ')} icon={Icons.TriangleDown} />
      </Fragment>
    );
  };

  const InnerContainer = ({ children }: { children: ReactNode }) =>
    disableSorting ? (
      <div>{children}</div>
    ) : (
      <button
        onClick={onCellClick}
        aria-sort={activeSortDirection && ariaSortMapping[activeSortDirection]}
      >
        {children}
      </button>
    );

  return (
    <div className={classes['header-cell']}>
      <InnerContainer>
        <span className={classes['headline']}>{headline}</span>
        {!disableSorting && (
          <div className={classes['sorting-indicator-container']}>{sortingIndicator()}</div>
        )}
      </InnerContainer>
    </div>
  );
};
