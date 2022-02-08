import React from 'react';
import { BaseModalActions } from '../../BaseModal/BaseModalActions/BaseModalActions';
import classes from './DialogActions.module.scss';

export interface Props {
  children: React.ReactNode;
  align: 'left' | 'right';
}

export const DialogActions = ({ children, align }: Props) => {
  return (
    <BaseModalActions
      className={`${classes['actions']}${align === 'left' ? ' ' + classes['left'] : ''}`}
    >
      {children}
    </BaseModalActions>
  );
};
