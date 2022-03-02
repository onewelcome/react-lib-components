import React from 'react';
import { Checkbox, CheckboxProps } from '../Checkbox/Checkbox';
import classes from './Toggle.module.scss';

export const Toggle = ({ children, checked, ...props }: CheckboxProps) => (
  <div className={classes['toggle-wrapper']}>
    <span
      aria-hidden="true"
      className={`${classes.toggle} ${checked ? classes.checked : ''} `}
    ></span>
    <Checkbox checked={checked} className={classes.checkbox} {...props}>
      {children}
    </Checkbox>
  </div>
);
