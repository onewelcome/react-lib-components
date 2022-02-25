import React, { HTMLAttributes, ReactChild } from 'react';
import classes from './FormGroup.module.scss';
import { FormHelperText, Props as HelperProps } from '../FormHelperText/FormHelperText';
import { Icon, Icons } from '../../Icon/Icon';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild[] | ReactChild;
  error?: boolean;
  errorMessageIcon?: Icons;
  errorMessageIconPosition?: 'before' | 'after';
  errorMessage?: string;
  errorId?: string;
  helperText?: string;
  helperId: string;
  helperProps?: HelperProps;
}

export const FormGroup = ({
  children,
  error,
  errorMessage,
  errorId,
  helperText,
  helperId,
  className,
  helperProps,
  errorMessageIcon,
  errorMessageIconPosition = 'before',
  ...rest
}: Props) => {
  return (
    <div className={`${classes['form-group']} ${error ? classes.error : ''}`} {...rest}>
      {children}

      {(helperText || errorMessage) && (
        <div
          style={{ marginLeft: `${helperProps?.indent}px` }}
          className={`${classes['default-helper']} ${
            helperProps?.className ? helperProps.className : ''
          }`}
        >
          {helperText && !error && <FormHelperText id={helperId}>{helperText}</FormHelperText>}
          {error && errorMessage && (
            <span className={classes['error-message']}>
              <span className={classes.message} id={errorId}>
                {errorMessageIcon && errorMessageIconPosition === 'before' && (
                  <Icon
                    className={`${classes['error-icon']} ${classes['error-icon-before']}`}
                    icon={errorMessageIcon}
                  />
                )}
                {errorMessage}
                {errorMessageIcon && errorMessageIconPosition === 'after' && (
                  <Icon
                    className={`${classes['error-icon']} ${classes['error-icon-after']}`}
                    icon={errorMessageIcon}
                  />
                )}
              </span>
            </span>
          )}
        </div>
      )}
    </div>
  );
};
