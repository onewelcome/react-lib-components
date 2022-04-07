import React, { useEffect } from 'react';
import classes from './Input.module.scss';
import readyclasses from '../../readyclasses.module.scss';
import { Icon, Icons } from '../../Icon/Icon';
import { HTMLProps } from '../../interfaces';

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

export interface Props extends HTMLProps<HTMLInputElement> {
  wrapperProps?: HTMLProps<HTMLInputElement>;
  labeledBy?: string;
  type: Type;
  error?: boolean;
}

export const Input = ({
  error = false,
  className,
  name,
  style,
  wrapperProps,
  type,
  labeledBy,
  ...rest
}: Props) => {
  useEffect(() => {
    if (name === undefined) {
      throw new Error("Please give your <Input /> component a 'name' attribute");
    }
  }, []);

  const inputClassNames = [classes['input']];
  error && inputClassNames.push(classes['error']);
  (dateTypes as ReadonlyArray<string>).includes(type) &&
    inputClassNames.push(classes['remove-extra-indent']);
  className && inputClassNames.push(className);

  const iconClassNames = [classes['warning']];
  (dateTypes as ReadonlyArray<string>).includes(type) &&
    iconClassNames.push(classes['extra-indent']);

  return (
    <div
      {...wrapperProps}
      style={{ ...style }}
      className={`${classes['input-wrapper']} ${wrapperProps?.className ?? ''} ${
        type === 'hidden' ? readyclasses['hidden'] : ''
      }`}
    >
      <input
        {...rest}
        aria-labelledby={labeledBy}
        type={type}
        name={name}
        className={inputClassNames.join(' ')}
      />
      {error && <Icon className={iconClassNames.join(' ')} icon={Icons.Warning} />}
    </div>
  );
};
