import React, { ComponentPropsWithRef } from 'react';
import { Checkbox, Props as CheckboxProps } from '../Checkbox/Checkbox';
import classes from './Toggle.module.scss';

export interface Props
  extends ComponentPropsWithRef<'input'>,
    Omit<CheckboxProps, 'indeterminate' | 'errorMessage' | 'error' | 'children' | 'label'> {
  children: string;
}

export const Toggle = React.forwardRef<HTMLInputElement, Props>(
  ({ children, checked, disabled, helperProps, ...rest }: Props, ref) => (
    <div className={classes['toggle-wrapper']}>
      <Checkbox
        {...rest}
        ref={ref}
        checked={checked}
        className={classes['checkbox']}
        helperProps={{ className: classes['toggle-helper'], ...helperProps }}
        disabled={disabled}
        label={children}
      >
        <span
          data-toggle
          aria-hidden="true"
          className={`${classes['toggle']} ${checked ? classes['checked'] : ''} ${
            disabled ? classes['disabled'] : ''
          } `}
        ></span>
      </Checkbox>
    </div>
  )
);
