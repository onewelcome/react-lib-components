import React, { HTMLProps, ReactNode } from 'react';
import { Button, Props as ButtonProps } from '../Button/Button';
import { Icon, Icons } from '../Icon/Icon';
import classes from './DataGridActions.module.scss';

export interface Props extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  columnsBtnProps?: ButtonProps;
  searchBtnProps?: ButtonProps;
}

export const DataGridActions = ({ children, columnsBtnProps, searchBtnProps, ...rest }: Props) => {
  const columnsBtn = columnsBtnProps && (
    <Button
      {...columnsBtnProps}
      color="primary"
      startIcon={<Icon icon={Icons.Change} />}
      type="button"
      variant="text"
    >
      Columns
    </Button>
  );

  const searchBtn = columnsBtnProps && (
    <Button
      {...searchBtnProps}
      color="primary"
      startIcon={<Icon icon={Icons.Search} />}
      type="button"
      variant="text"
    >
      Search
    </Button>
  );

  return (
    <div {...rest} className={classes['actions']}>
      <div className={classes['left-actions']}>{children}</div>
      <div className={classes['right-actions']}>
        {columnsBtn}
        {searchBtn}
      </div>
    </div>
  );
};
