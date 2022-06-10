import React, { Fragment, HTMLProps, useRef, useState } from 'react';
import { Button, Props as ButtonProps } from '../../Button/Button';
import { IconButton } from '../../Button/IconButton';
import { Icon, Icons } from '../../Icon/Icon';
import { HeaderCell, ColumnName } from '../interfaces';
import classes from './DataGridActions.module.scss';
import { DataGridColumnsToggle } from './DataGridColumnsToggle';

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'headers'> {
  enableAddBtn?: boolean;
  enableColumnsBtn?: boolean;
  enableSearchBtn?: boolean;
  addBtnProps?: ButtonProps;
  columnsBtnProps?: ButtonProps;
  searchBtnProps?: ButtonProps;
  headers: HeaderCell[];
  onColumnToggled: (colName: ColumnName) => void;
}

export const DataGridActions = ({
  enableAddBtn,
  enableColumnsBtn,
  enableSearchBtn,
  addBtnProps = {},
  columnsBtnProps = {},
  searchBtnProps = {},
  headers,
  onColumnToggled,
  ...rest
}: Props) => {
  const isHidden = !(enableAddBtn || enableColumnsBtn || enableSearchBtn);
  const [showColsPopover, setShowColsPopover] = useState(false);
  const showColumnBtn = useRef<HTMLButtonElement>(null);

  return isHidden ? null : (
    <div {...rest} className={classes['actions']}>
      <div className={classes['left-actions']}>
        {enableAddBtn && (
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
        {enableColumnsBtn && (
          <Fragment>
            <Button
              startIcon={<Icon icon={Icons.Change} />}
              title="Show/hide columns"
              variant="text"
              children="Columns"
              {...columnsBtnProps}
              className={`${classes['desktop']} ${columnsBtnProps?.className ?? ''}`}
              ref={showColumnBtn}
              onClick={() => setShowColsPopover(true)}
            />
            <IconButton
              title="Show/hide columns"
              {...columnsBtnProps}
              onClick={() => setShowColsPopover(true)}
              className={`${classes['mobile']} ${columnsBtnProps?.className ?? ''}`}
            >
              <Icon icon={Icons.Change} />
            </IconButton>
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
        {enableSearchBtn && (
          <Fragment>
            <Button
              startIcon={<Icon icon={Icons.TableSearch} />}
              title="Search"
              variant="text"
              children="Search"
              {...searchBtnProps}
              className={`${classes['desktop']} ${searchBtnProps?.className ?? ''}`}
            />
            <IconButton
              title="Search"
              {...searchBtnProps}
              className={`${classes['mobile']} ${columnsBtnProps?.className ?? ''}`}
            >
              <Icon icon={Icons.TableSearch} />
            </IconButton>
          </Fragment>
        )}
      </div>
    </div>
  );
};
