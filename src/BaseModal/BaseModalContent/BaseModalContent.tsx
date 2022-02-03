import React from 'react';
import classes from './BaseModalContent.module.scss';
import { HTMLAttributes } from 'react';

export interface Props {
  id?: string;
  children?: React.ReactNode;
  classname?: string;
}

export const BaseModalContent = ({ id, children, classname = '' }: Props) => {
  const idProp: HTMLAttributes<HTMLDivElement> = id ? { id } : {};
  return (
    <div className={`${classes['content']} ${classname}`} {...idProp}>
      {children}
    </div>
  );
};
