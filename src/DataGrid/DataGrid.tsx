import React, { HTMLProps, ReactNode, ReactElement, JSXElementConstructor } from 'react';
import { Props as ButtonProps } from '../Button/Button';
import classes from './DataGrid.module.scss';
import { DataGridHeader, Props as DataGridHeaderProps } from './DataGridHeader/DataGridHeader';
import { DataGridActions } from './DataGridActions';
import { DataGridPagination } from './DataGridPagination';

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'headers'> {
  children: ReactElement[];
  leftActions?: ReactNode;
  columnsBtnProps?: ButtonProps;
  searchBtnProps?: ButtonProps;
  onColumnsBtnClicked?: () => void;
  onSearchBtnClicked?: () => void;
}

const getChildByType = (children: ReactElement[], type: string | JSXElementConstructor<any>) =>
  React.Children.map(children, (child) => child).find((child) => child.type === type);

export const DataGrid = ({
  children,
  className,
  style,
  leftActions,
  columnsBtnProps,
  ...rest
}: Props) => {
  const dataGridHeaderPropsInstance: DataGridHeaderProps = getChildByType(
    children,
    DataGridHeader
  )?.props;
  const actions = getChildByType(children, DataGridActions);
  if (dataGridHeaderPropsInstance === null) {
    throw new Error('DataGrid must contain DataGridHeader instance');
  }

  const childrenWithoutActionsAndPagination = React.Children.map(children, (child) => child).filter(
    (child) => child.type !== DataGridPagination && child.type !== DataGridActions
  );

  return (
    <div className={classes['grid-wrapper']}>
      {actions}
      <div
        {...rest}
        className={`${classes['grid']} ${className ?? ''}`}
        style={{
          ...style,
          gridTemplateColumns: `repeat(${dataGridHeaderPropsInstance.headers.length}, 1fr) 2.5rem`,
        }}
      >
        {childrenWithoutActionsAndPagination}
      </div>
      <div>PAGINATION</div>
    </div>
  );
};
