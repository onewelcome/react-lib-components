/** The empty className property on FormHelperText is on purpose! We want to basically "filter" out the className from helperProps because we're adding this to the surrounding div. This makes it so also the errormessage receives this styling. */

import React, { ReactChild } from 'react';
import classes from './FormGroup.module.scss';
import { FormHelperText, Props as HelperProps } from '../FormHelperText/FormHelperText';
import { Icon, Icons } from '../../Icon/Icon';
import { HTMLProps } from '../../interfaces';

export interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactChild[] | ReactChild;
  error?: boolean;
  errorMessageIcon?: Icons;
  errorMessageIconPosition?: 'before' | 'after';
  errorMessage?: string;
  errorId?: string;
  helperIndent?: number;
  helperText?: string;
  helperId?: string;
  helperProps?: HelperProps;
}

export const FormGroup = ({
  children,
  className,
  error,
  errorMessage,
  errorId,
  errorMessageIcon,
  errorMessageIconPosition = 'before',
  helperText,
  helperId,
  helperProps,
  helperIndent,
  ...rest
}: Props) => {
  return (
    <div
      {...rest}
      className={`${classes['form-group']} ${error ? classes.error : ''} ${className ?? ''}`}
    >
      {children}

      {(helperText || errorMessage) && (
        <div
          style={{ marginLeft: `${helperIndent}px` }}
          className={`${classes['default-helper']} ${
            helperProps?.className ? helperProps.className : ''
          }`}
        >
          {helperText && !error && (
            <FormHelperText {...helperProps} className={''} id={helperId}>
              {helperText}
            </FormHelperText>
          )}
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
