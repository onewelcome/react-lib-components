import React from 'react';
import classes from './BaseModalContent.module.scss';

export interface Props {
  children?: React.ReactNode;
  classname?: string;
}

export const BaseModalContent = ({ children, classname = '' }: Props) => {
  return (
    <div className={`${classes['content']} ${classname}`} tabIndex={0}>
      {children}
    </div>
  );
};
