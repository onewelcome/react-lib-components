import React, { HTMLAttributes } from 'react';
import classes from './Input.module.scss';
import { WarningOutlined } from '@material-ui/icons';
import useValidation from '../../hooks/useValidation';

type type =
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
  validation?: (value: string) => boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input = ({
  validation,
  onBlur,
  onChange,
  onFocus,
  ...rest
}: Props) => {
  const { hasError, onBlurHandler, onChangeHandler, onFocusHandler } =
    useValidation(validation);

  return (
    <div className={`${classes['input-wrapper']} ${hasError && classes.error}`}>
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
