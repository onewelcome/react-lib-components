import React, { HTMLAttributes, ReactNode } from 'react';
import classes from './FormHelperText.module.scss';

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  disabled?: boolean;
  hasError?: boolean;
}

export const FormHelperText = ({
  children,
  disabled,
  hasError,
  ...rest
}: Props) => {
  const additionalClasses: string[] = [];

  if (hasError) additionalClasses.push(classes.error);

  return (
    <span
      className={`${classes['form-helper-text']} ${additionalClasses}`}
      {...rest}
    >
      {children}
    </span>
  );
};
