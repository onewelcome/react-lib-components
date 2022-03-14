import React from 'react';
import classes from './Label.module.scss';
import readyclasses from '../../readyclasses.module.scss';
import { HTMLProps } from '../../interfaces';

export interface Props extends HTMLProps<HTMLLabelElement> {
  children?: string;
}

export const Label = ({ children, className, hidden = false, ...rest }: Props) => {
  return (
    <label
      {...rest}
      className={`${hidden ? readyclasses.hidden : ''} ${classes.label} ${className ?? ''}`}
    >
      {children}
    </label>
  );
};
