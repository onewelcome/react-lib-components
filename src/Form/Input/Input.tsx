import React, { HTMLAttributes, useEffect } from 'react';
import classes from './Input.module.scss';
import { WarningOutlined } from '@material-ui/icons';
import { useValidation } from '../../hooks/useValidation';
import { required as requiredRule } from '../../validation/rules';

export type type =
  | 'text'
  | 'email'
  | 'file'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'time'
  | 'url'
  | 'datetime'
  | 'hidden';

export interface Props extends HTMLAttributes<HTMLInputElement> {
  type: type;
  name: string;
  value?: string;
  id?: string;
  disabled?: boolean;
  required?: boolean;
  validation?: Array<(value: string) => true | string>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onValidationError?: (errorMessage: string) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input = ({
  validation = [],
  onBlur,
  onChange,
  onFocus,
  onValidationError,
  value,
  required = false,
  ...rest
}: Props) => {
  if (required && typeof validation === 'object') validation.push(requiredRule);

  const {
    hasError,
    errorMessage,
    onBlurHandler,
    onChangeHandler,
    onFocusHandler,
  } = useValidation(validation as [], value);

  useEffect(() => {
    if (hasError && onValidationError) {
      onValidationError(errorMessage);
    }
  }, [errorMessage, hasError]);

  return (
    <div
      className={`${classes['input-wrapper']} ${hasError ? classes.error : ''}`}
    >
      <input
        className={classes.input}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        {...rest}
      />
      {hasError && (
        <span className={classes['input-error']}>
          <WarningOutlined />
        </span>
      )}
    </div>
  );
};
