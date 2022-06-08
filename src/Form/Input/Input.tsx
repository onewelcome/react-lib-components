import React, { ComponentPropsWithRef, Ref, useEffect, useState } from 'react';
import classes from './Input.module.scss';
import readyclasses from '../../readyclasses.module.scss';
import { Icon, Icons } from '../../Icon/Icon';
import { FormElement } from '../form.interfaces';

const dateTypes = ['date', 'time', 'datetime-local'] as const;

export type Type =
  | 'text'
  | 'email'
  | 'file'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'url'
  | 'hidden'
  | typeof dateTypes[number];

export interface Props extends ComponentPropsWithRef<'input'>, FormElement {
  wrapperProps?: ComponentPropsWithRef<'div'>;
  labeledBy?: string;
  type: Type;
  suffix?: string;
  prefix?: string;
}

export const Input = React.forwardRef(
  (
    {
      error = false,
      className,
      name,
      style,
      wrapperProps,
      type,
      labeledBy,
      prefix,
      suffix,
      disabled,
      onFocus,
      onBlur,
      ...rest
    }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const [focus, setFocus] = useState(false);

    useEffect(() => {
      if (name === undefined) {
        throw new Error("Please give your <Input /> component a 'name' attribute");
      }
    }, []);

    const inputClassNames = [classes['input']];

    (dateTypes as ReadonlyArray<string>).includes(type) &&
      inputClassNames.push(classes['remove-extra-indent']);
    className && inputClassNames.push(className);

    const iconClassNames = [classes['warning']];
    (dateTypes as ReadonlyArray<string>).includes(type) &&
      iconClassNames.push(classes['extra-indent']);

    const wrapperClasses = [classes['input-wrapper']];

    wrapperProps?.className && wrapperClasses.push(wrapperProps.className);
    type === 'hidden' && wrapperClasses.push(readyclasses['hidden']);
    prefix && wrapperClasses.push(classes['prefix']);
    suffix && wrapperClasses.push(classes['suffix']);
    disabled && wrapperClasses.push(classes['disabled']);
    error && wrapperClasses.push(classes['error']);
    focus && wrapperClasses.push(classes['focus']);

    return (
      <div
        {...wrapperProps}
        style={{ ...style }}
        className={`${classes['input-wrapper']} ${wrapperClasses.join(' ')}`}
      >
        {prefix && (
          <div data-prefix className={classes['prefix']}>
            <span>{prefix}</span>
          </div>
        )}
        <input
          {...rest}
          ref={ref}
          onFocus={(event) => {
            setFocus(true);
            onFocus && onFocus(event);
          }}
          onBlur={(event) => {
            setFocus(false);
            onBlur && onBlur(event);
          }}
          aria-labelledby={labeledBy}
          type={type}
          name={name}
          disabled={disabled}
          className={inputClassNames.join(' ')}
        />
        {suffix && (
          <div data-suffix className={classes['suffix']}>
            <span>{suffix}</span>
          </div>
        )}
        {error && <Icon className={iconClassNames.join(' ')} icon={Icons.Error} />}
      </div>
    );
  }
);
