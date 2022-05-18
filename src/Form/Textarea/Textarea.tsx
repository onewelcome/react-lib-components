import React from 'react';
import { Icon, Props as IconProps, Icons } from '../../Icon/Icon';
import { FormElement } from '../form.interfaces';
import classes from './Textarea.module.scss';
import { HTMLAttributes } from '../../interfaces';

interface IconPropsPartial extends Partial<IconProps> {}

export interface Props extends FormElement<HTMLTextAreaElement> {
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
  errorProps?: IconPropsPartial;
}

export const Textarea = ({
  error = false,
  disabled = false,
  className,
  rows = 4,
  wrapperProps,
  errorProps,
  ...rest
}: Props) => {
  return (
    <div className={`${classes['textarea-wrapper']} ${wrapperProps?.className ?? ''}`}>
      <textarea
        {...rest}
        rows={rows}
        className={`${error ? classes['error'] : ''} ${classes['textarea']} ${className ?? ''}`}
        disabled={disabled}
      />
      {error && (
        <Icon
          {...errorProps}
          className={`${classes['warning']} ${errorProps?.className ?? ''}`}
          icon={Icons.Error}
        />
      )}
    </div>
  );
};
