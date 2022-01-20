import React, { FC, HTMLAttributes, ReactChild } from 'react';
import classes from './Button.module.scss';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const Button: FC<Props> = ({ children }) => {
  return <>
      <button className={classes.button}>{children}</button>
	</>;
};
