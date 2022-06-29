import React, { Fragment, useState } from 'react';
import { IconButton } from '../../Button/IconButton';
import { Toggle } from '../../Form/Toggle/Toggle';
import { Icon, Icons } from '../../Icon/Icon';
import { Popover, Props as PopoverProps } from '../../Popover/Popover';
import { Typography } from '../../Typography/Typography';
import { generateID } from '../../util/helper';
import { ColumnName, HeaderCell } from '../datagrid.interfaces';
import classes from './DataGridColumnsToggle.module.scss';
import { createPortal } from 'react-dom';

export interface Props extends PopoverProps {
  open: boolean;
  headers: HeaderCell[];
  titleLabel?: string;
  closeButtonTitle?: string;
  onClose: () => void;
  onToggleClicked: (colName: ColumnName) => void;
  domRoot?: HTMLElement;
}

export const DataGridColumnsToggle = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      open,
      headers,
      titleLabel = 'Show columns',
      closeButtonTitle = 'Close show columns dialog',
      onClose,
      onToggleClicked,
      className,
      domRoot = document.body,
      ...rest
    }: Props,
    ref
  ) => {
    const [id] = useState(generateID());
    const labelledId = id + '_header';

    const toggles = headers.map((item) => (
      <Toggle
        key={item.name}
        name={item.name}
        checked={!item.hidden}
        onChange={() => onToggleClicked(item.name)}
      >
        {item.headline}
      </Toggle>
    ));

    const handleBackdropClick = () => onClose();

    return (
      <Popover
        {...rest}
        ref={ref}
        className={`${classes['popover']} ${className}`}
        show={open}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledId}
      >
        {open &&
          createPortal(
            <div className={classes['backdrop']} onClick={handleBackdropClick}></div>,
            domRoot
          )}
        {open && (
          <Fragment>
            <div className={classes['header']}>
              <Typography id={labelledId} className={classes['title']} tag="span" variant="h4">
                {titleLabel}
              </Typography>
              <IconButton
                onClick={onClose}
                className={`${classes['close-btn']}`}
                title={closeButtonTitle}
              >
                <Icon icon={Icons.Times} />
              </IconButton>
            </div>
            <div className={classes['content']}>{toggles}</div>
          </Fragment>
        )}
      </Popover>
    );
  }
);
