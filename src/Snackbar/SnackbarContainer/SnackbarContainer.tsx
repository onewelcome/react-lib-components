import React from 'react';
import classes from './SnackbarContainer.module.scss';

export interface Placement {
  vertical: 'top' | 'bottom';
  horizontal: 'start' | 'center' | 'end';
}

export interface Props {
  placement: Placement;
  children?: React.ReactNode;
  zIndex?: number;
}

export const SnackbarContainer = ({ placement, children, zIndex }: Props) => {
  return (
    <div
      style={{ zIndex }}
      className={`${classes['snackbars']} ${classes[placement.horizontal]} ${
        classes[placement.vertical]
      }`}
    >
      {children}
    </div>
  );
};
