import React from 'react';
import classes from './BaseModalActions.module.scss';

export interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const BaseModalActions = ({ children, className = '' }: Props) => {
  return <div className={`${classes['actions']} ${className}`}>{children}</div>;
};
