import React from 'react';
import classes from './BaseModalActions.module.scss';

export interface Props {
  children?: React.ReactNode;
  classname?: string;
}

export const BaseModalActions = ({ children, classname = '' }: Props) => {
  return <div className={`${classes['actions']} ${classname}`}>{children}</div>;
};
