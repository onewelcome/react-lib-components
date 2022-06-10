import React, { Fragment, useRef, useState } from 'react';
import { Button, Props as ButtonProps } from '../../Button/Button';
import { Icon, Icons } from '../../Icon/Icon';
import { HTMLProps } from '../../interfaces';
import { HeaderCell, ColumnName } from '../interfaces';
import classes from './DataGridActions.module.scss';
import { DataGridColumnsToggle } from './DataGridColumnsToggle';

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'headers'> {
  addBtnProps?: ButtonProps;
  columnsBtnProps?: ButtonProps;
  showColumnsBtn?: boolean;
  searchBtnProps?: ButtonProps;
  headers: HeaderCell[];
  onColumnToggled: (colName: ColumnName) => void;
}

export const DataGridActions = ({
  addBtnProps,
  columnsBtnProps,
  showColumnsBtn,
  searchBtnProps,
  headers,
  onColumnToggled,
  ...rest
}: Props) => {
  const [showColsPopover, setShowColsPopover] = useState(false);
  const showColumnBtn = useRef<HTMLButtonElement>(null);

  const isHidden = !(addBtnProps || columnsBtnProps || searchBtnProps || showColumnsBtn);
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
        {(columnsBtnProps || showColumnsBtn) && (
          <Fragment>
            <Button
              color="primary"
              startIcon={<Icon icon={Icons.Change} />}
              type="button"
              title="Show/hide columns"
              variant="text"
              children="Columns"
              {...columnsBtnProps}
              ref={showColumnBtn}
              onClick={() => setShowColsPopover(true)}
            />
            <DataGridColumnsToggle
              aria-hidden={!showColsPopover}
              open={showColsPopover}
              headers={headers}
              onClose={() => setShowColsPopover(false)}
              onToggleClicked={onColumnToggled}
              anchorEl={showColumnBtn}
            />
          </Fragment>
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
