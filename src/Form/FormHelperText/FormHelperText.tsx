import React, { ReactNode } from 'react';
import classes from './FormHelperText.module.scss';
import { HTMLProps } from '../../interfaces';
import { Typography } from '../../Typography/Typography';

export interface Props extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  error?: boolean;
}

export const FormHelperText = ({ children, error, className, ...rest }: Props) => {
  return (
    <Typography
      {...rest}
      variant="sub-text"
      tag="div"
      ref={undefined}
      className={`${classes['form-helper-text']} ${error ? classes.error : ''} ${className ?? ''}`}
    >
      {children}
    </Typography>
  );
};
