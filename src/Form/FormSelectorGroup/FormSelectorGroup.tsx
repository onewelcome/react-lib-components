import React, { HTMLAttributes, ReactChild } from 'react';
import classes from './FormSelectorGroup.module.scss';
import { FormHelperText } from '../FormHelperText/FormHelperText';
import { Icon, Icons } from '../../Icon/Icon';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild[] | ReactChild;
  error?: boolean;
  errorMessage?: string;
  errorId?: string;
  helperText?: string;
  helperId: string;
}

export const FormSelectorGroup = ({
  children,
  error,
  errorMessage,
  errorId,
  helperText,
  helperId,
  className,
  ...rest
}: Props) => {
  return (
    <div className={`${classes['form-selector-group']} ${error ? classes.error : ''}`} {...rest}>
      {children}

      {(helperText || errorMessage) && (
        <div className={classes['helper-text']}>
          {helperText && !error && (
            <FormHelperText id={helperId} indent={0}>
              {helperText}
            </FormHelperText>
          )}
          {error && errorMessage && (
            <span className={classes['error-message']}>
              <Icon className={classes['error-icon']} icon={Icons.Warning} />
              <span className={classes.message} id={errorId}>
                {errorMessage}
              </span>
            </span>
          )}
        </div>
      )}
    </div>
  );
};
