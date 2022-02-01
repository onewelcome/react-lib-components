import React, { HTMLAttributes, ReactChild } from 'react';
import classes from './Label.module.scss';
export interface Props extends HTMLAttributes<HTMLLabelElement> {
  children?: ReactChild;
  htmlFor: string;
  hidden?: boolean;
}

export const Label = ({
  children,
  htmlFor,
  hidden = false,
  ...rest
}: Props) => {
  return (
    <label
      className={`${hidden ? classes.hidden : ''} ${classes.label}`}
      htmlFor={htmlFor}
      {...rest}
    >
      {children}
    </label>
  );
};
