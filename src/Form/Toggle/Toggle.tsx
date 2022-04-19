import React from 'react';
import { Checkbox, CheckboxProps } from '../Checkbox/Checkbox';
import classes from './Toggle.module.scss';

export interface Props
  extends Omit<CheckboxProps, 'indeterminate' | 'errorMessage' | 'error' | 'children'> {
  children: string;
}

export const Toggle = ({ children, checked, ...rest }: Props) => (
  <div className={classes['toggle-wrapper']}>
    <Checkbox {...rest} checked={checked} className={classes.checkbox} label={children}>
      <span
        data-toggle
        aria-hidden="true"
        className={`${classes.toggle} ${checked ? classes.checked : ''} `}
      ></span>
    </Checkbox>
  </div>
);
