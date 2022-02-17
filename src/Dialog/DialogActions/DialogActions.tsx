import React from 'react';
import {
  BaseModalActions,
  Props as BaseModalActionsProps,
} from '../../BaseModal/BaseModalActions/BaseModalActions';
import classes from './DialogActions.module.scss';

export interface Props extends BaseModalActionsProps {
  align: 'left' | 'right';
}

export const DialogActions = ({ children, align, ...restProps }: Props) => {
  return (
    <BaseModalActions
      {...restProps}
      className={`${classes['actions']}${align === 'left' ? ' ' + classes['left'] : ''}`}
    >
      {children}
    </BaseModalActions>
  );
};
