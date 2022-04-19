import React from 'react';
import { Checkbox, CheckboxProps } from '../Checkbox/Checkbox';
import classes from './Toggle.module.scss';

export interface Props extends Omit<CheckboxProps, 'indeterminate' | 'errorMessage' | 'error'> {}

export const Toggle = ({ children, checked, ...rest }: Props) => {
  const toggleIcon = (
    <span
      aria-hidden="true"
      className={`${classes.toggle} ${checked ? classes.checked : ''} `}
    ></span>
  );

  return (
    <div className={classes['toggle-wrapper']}>
      <Checkbox
        {...rest}
        checked={checked}
        className={classes.checkbox}
        additionalElement={toggleIcon}
      >
        {children}
      </Checkbox>
    </div>
  );
};
