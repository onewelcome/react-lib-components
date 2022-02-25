import React, { HTMLProps, ReactChild } from 'react';
import classes from './Label.module.scss';
import readyclasses from '../../readyclasses.module.scss';
export interface Props extends HTMLProps<HTMLLabelElement> {
  children?: ReactChild;
  hidden?: boolean;
}

export const Label = ({ children, className, hidden = false, ...rest }: Props) => {
  return (
    <label
      className={`${hidden ? readyclasses.hidden : ''} ${classes.label} ${
        className ? className : ''
      }`}
      {...rest}
    >
      {children}
    </label>
  );
};
