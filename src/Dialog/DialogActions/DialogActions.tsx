import React from 'react';
import { BaseModalActions } from '../../BaseModal/BaseModalActions/BaseModalActions';
import classes from './DialogActions.module.scss';

export interface Props {
  children?: React.ReactNode;
}

export const DialogActions = ({ children }: Props) => {
  return (
    <BaseModalActions classname={classes['actions']}>
      {children}
    </BaseModalActions>
  );
};
