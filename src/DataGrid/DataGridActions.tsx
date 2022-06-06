import React from 'react';
import { Button, Props as ButtonProps } from '../Button/Button';
import { Icon, Icons } from '../Icon/Icon';
import { HTMLProps } from '../interfaces';
import classes from './DataGridActions.module.scss';

export interface Props extends HTMLProps<HTMLDivElement> {
  addBtnProps?: ButtonProps;
  columnsBtnProps?: ButtonProps;
  searchBtnProps?: ButtonProps;
}

export const DataGridActions = ({
  addBtnProps,
  columnsBtnProps,
  searchBtnProps,
  ...rest
}: Props) => {
  const isHidden = !(addBtnProps || columnsBtnProps || searchBtnProps);
  if (isHidden) {
    return null;
  }
  return (
    <div {...rest} className={classes['actions']}>
      <div className={classes['left-actions']}>
        {addBtnProps && (
          <Button
            color="primary"
            startIcon={<Icon icon={Icons.Plus} />}
            title="Add item"
            type="button"
            variant="outline"
            children="Add item"
            {...addBtnProps}
          />
        )}
      </div>
      <div className={classes['right-actions']}>
        {columnsBtnProps && (
          <Button
            color="primary"
            startIcon={<Icon icon={Icons.Change} />}
            type="button"
            title="Show/hide columns"
            variant="text"
            children="Columns"
            {...columnsBtnProps}
          />
        )}
        {searchBtnProps && (
          <Button
            color="primary"
            startIcon={<Icon icon={Icons.TableSearch} />}
            type="button"
            title="Search"
            variant="text"
            children="Search"
            {...searchBtnProps}
          />
        )}
      </div>
    </div>
  );
};
