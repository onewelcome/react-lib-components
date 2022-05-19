import React, { ReactNode } from 'react';
import { Icon, Icons } from '../../Icon/Icon';
import { HTMLProps } from '../../interfaces';
import { FormHelperText, Props as FormHelperTextProps } from '../FormHelperText/FormHelperText';
import classes from './FormSelectorWrapper.module.scss';

export interface Props extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  nestedChildren?: ReactNode;
  containerProps: HTMLProps<HTMLDivElement>;
  helperProps?: FormHelperTextProps;
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
  errorMessage?: string;
  parentHelperId?: string;
  parentErrorId?: string;
  errorId: string;
  identifier: string;
}

export const FormSelectorWrapper = ({
  children,
  className,
  nestedChildren,
  containerProps,
  helperProps,
  error,
  disabled,
  helperText,
  errorMessage,
  parentErrorId,
  errorId,
  identifier,
  ...rest
}: Props) => {
  return (
    <div
      {...rest}
      className={`${error ? classes['error'] : ''} ${disabled ? classes['disabled'] : ''} ${
        className ?? ''
      }`}
    >
      <div {...containerProps}>{children}</div>
      {helperText && (!error || parentErrorId || !errorMessage) && (
        <FormHelperText
          {...helperProps}
          id={`${identifier}`}
          className={`${classes['helper-text']} ${helperProps?.className ?? ''} ${
            error ? classes['error'] : ''
          }`}
        >
          {helperText}
        </FormHelperText>
      )}
      {errorMessage && !parentErrorId && error && (
        <span className={classes['error-message']}>
          <Icon className={classes['error-icon']} icon={Icons.Error} />
          <span id={errorId}>{errorMessage}</span>
        </span>
      )}
      {nestedChildren}
    </div>
  );
};
