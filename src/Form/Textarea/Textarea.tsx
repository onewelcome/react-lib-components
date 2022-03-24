import React from 'react';
import { Icon, Icons } from '../../Icon/Icon';
import { FormElement } from '../form.interfaces';
import classes from './Textarea.module.scss';

export interface Props extends FormElement<HTMLTextAreaElement> {}

export const Textarea = ({
  children,
  error = false,
  disabled = false,
  className,
  rows = 4,
  ...rest
}: Props) => {
  return (
    <div className={`${classes['textarea-wrapper']}`}>
      <textarea
        {...rest}
        rows={rows}
        className={`${error ? classes.error : ''} ${classes.textarea} ${className ?? ''}`}
        disabled={disabled}
      />
      {error && <Icon className={classes.warning} icon={Icons.Warning} />}
    </div>
  );
};
