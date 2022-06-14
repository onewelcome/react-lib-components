import React, { ComponentPropsWithRef, Fragment, ReactNode } from 'react';
import { Icon, Icons } from '../../Icon/Icon';
import { ColumnName, Direction } from '../interfaces';
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
          <Icon
            className={getSortingIndicatorClasses('DESC').join(' ')}
            icon={Icons.TriangleDown}
          />
        </Fragment>
      );
    };

    const InnerContainer = ({ children }: { children: ReactNode }) =>
      disableSorting ? <div>{children}</div> : <button onClick={onCellClick}>{children}</button>;

    return (
      <th
        {...rest}
        ref={ref}
        className={classes['header-cell']}
        aria-sort={activeSortDirection && ariaSortMapping[activeSortDirection]}
      >
        <InnerContainer>
          <span className={classes['headline']}>{headline}</span>
          {!disableSorting && (
            <div className={classes['sorting-indicator-container']}>{sortingIndicator()}</div>
          )}
        </InnerContainer>
      </th>
    );
  }
);
