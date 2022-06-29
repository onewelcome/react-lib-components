import React, { ComponentPropsWithRef, Fragment } from 'react';
import { Icon, Icons } from '../../Icon/Icon';
import { ColumnName, Direction } from '../datagrid.interfaces';
import classes from './DataGridHeaderCell.module.scss';

export interface Props extends ComponentPropsWithRef<'th'> {
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

export const DataGridHeaderCell = React.forwardRef<HTMLTableCellElement, Props>(
  ({ headline, name, disableSorting, activeSortDirection, onSort, ...rest }: Props, ref) => {
    const onCellClick = () => {
      onSort && onSort(name);
    };

    const sortingIndicator = () => {
      const getSortingIndicatorClasses = (direction: Direction) => {
        const sortingIndicatorClasses = [classes['indicator']];
        activeSortDirection &&
          sortingIndicatorClasses.push(
            activeSortDirection === direction ? classes['active'] : classes['hidden']
          );
        return sortingIndicatorClasses;
      };

      return (
        <Fragment>
          <Icon className={getSortingIndicatorClasses('ASC').join(' ')} icon={Icons.TriangleUp} />
          <Icon
            className={getSortingIndicatorClasses('DESC').join(' ')}
            icon={Icons.TriangleDown}
          />
        </Fragment>
      );
    };

    const innerContent = (
      <Fragment>
        <span className={classes['headline']}>{headline}</span>
        {!disableSorting && (
          <div className={classes['sorting-indicator-container']}>{sortingIndicator()}</div>
        )}
      </Fragment>
    );

    return (
      <th
        {...rest}
        ref={ref}
        className={classes['header-cell']}
        aria-sort={activeSortDirection && ariaSortMapping[activeSortDirection]}
      >
        {disableSorting ? (
          <div key={name}>{innerContent}</div>
        ) : (
          <button key={name} onClick={onCellClick}>
            {innerContent}
          </button>
        )}
      </th>
    );
  }
);
