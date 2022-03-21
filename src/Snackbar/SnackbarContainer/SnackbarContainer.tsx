import React from 'react';
import classes from './SnackbarContainer.module.scss';

export interface Position {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

interface SnackbarContainerProps {
  position: Position;
  children?: React.ReactNode;
  zIndex?: number;
}

export const SnackbarContainer = ({ position, children, zIndex }: SnackbarContainerProps) => {
  return (
    <div
      style={{ zIndex }}
      className={`${classes['snackbars']} ${classes[position.horizontal]} ${
        classes[position.vertical]
      }`}
    >
      {children}
    </div>
  );
};
