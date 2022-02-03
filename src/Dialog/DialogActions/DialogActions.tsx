import React from 'react';
import { BaseModalActions } from '../../BaseModal/BaseModalActions/BaseModalActions';
import classes from './DialogActions.module.scss';

export interface Props {
  children: React.ReactNode;
  alignment: 'left' | 'right';
}

export const DialogActions = ({ children, alignment }: Props) => {
  return (
    <BaseModalActions
      classname={`${classes['actions']}${
        alignment === 'left' ? ' ' + classes['left'] : ''
      }`}
    >
      {children}
    </BaseModalActions>
  );
};
