import React, { ComponentPropsWithRef } from 'react';
import { Icon, Props as IconProps, Icons } from '../../Icon/Icon';
import classes from './Textarea.module.scss';
import { FormElement } from '../form.interfaces';

interface IconPropsPartial extends Omit<Partial<IconProps>, 'ref'> {}

export interface Props extends ComponentPropsWithRef<'textarea'>, FormElement {
  wrapperProps?: ComponentPropsWithRef<'div'>;
  errorProps?: IconPropsPartial;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      error = false,
      disabled = false,
      className,
      rows = 4,
      wrapperProps,
      errorProps,
      ...rest
    }: Props,
    ref
  ) => {
    return (
      <div
        {...wrapperProps}
        className={`${classes['textarea-wrapper']} ${wrapperProps?.className ?? ''}`}
      >
        <textarea
          {...rest}
          ref={ref}
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
  }
);
