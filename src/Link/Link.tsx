import React, { HTMLAttributes } from 'react';
import { HTMLProps } from '../interfaces';
import classes from './Link.module.scss';

type AnchorType =
  | 'external'
  | 'internal'
  | 'download'
  | 'phone'
  | 'tel'
  | 'telephone'
  | 'email'
  | 'mail'
  | 'mailto';

interface RouterProps extends HTMLAttributes<HTMLElement> {
  to: string;
}
export interface Props extends HTMLProps<HTMLAnchorElement> {
  children?: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  type?: AnchorType;
  to: string;
  disabled?: boolean;
  component?: React.FunctionComponent<RouterProps>;
}

export const Link = ({
  children,
  className,
  disabled = false,
  to,
  color,
  type = 'internal',
  component,
  ...rest
}: Props) => {
  const determineTarget = () => {
    if (rest.target) {
      return rest.target;
    }

    if (type === 'external') {
      return '_blank';
    }

    return '';
  };

  if (component) {
    return React.createElement(component, {
      ...rest,
      to: to,
      className: `${classes.link} ${disabled ? classes.disabled : ''} ${className ?? ''}`,
      'aria-disabled': disabled,
      style: {
        ...rest.style,
        color: disabled ? 'var(--greyed-out)' : `var(--color-${color ?? 'primary'})`,
      },
      children: children,
    });
  }

  return (
    <a
      {...rest}
      download={type === 'download'}
      rel={type === 'external' ? 'noopener noreferer' : undefined}
      href={!disabled ? to : undefined}
      className={`${classes.link} ${disabled ? classes.disabled : ''} ${className ?? ''}`}
      aria-disabled={disabled}
      target={determineTarget()}
      style={{
        ...rest.style,
        color: disabled ? 'var(--greyed-out)' : `var(--color-${color ?? 'primary'})`,
      }}
    >
      {children}
    </a>
  );
};
