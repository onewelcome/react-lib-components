import React from 'react';
import { Icon, Icons } from '../../Icon/Icon';
import { FormElement } from '../form.interfaces';
import classes from './Textarea.module.scss';

export interface Props extends FormElement<HTMLTextAreaElement> {
  wrapperClassName?: string;
  errorClassName?: string;
}

export const Textarea = ({
  error = false,
  disabled = false,
  className,
  rows = 4,
  wrapperClassName,
  errorClassName,
  ...rest
}: Props) => {
  return (
    <div className={`${classes['textarea-wrapper']} ${wrapperClassName ? wrapperClassName : ''}`}>
      <textarea
        {...rest}
        rows={rows}
        className={`${error ? classes['error'] : ''} ${classes['textarea']} ${className ?? ''}`}
        disabled={disabled}
      />
      {error && (
        <Icon className={`${classes['warning']} ${errorClassName ?? ''}`} icon={Icons.Warning} />
      )}
    </div>
  );
};
