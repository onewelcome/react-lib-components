import React, { ForwardRefExoticComponent, Ref, RefAttributes } from 'react';
import { HTMLProps } from '../interfaces';
import classes from './Link.module.scss';
import { LinkProps } from './types';

type AnchorType = 'external' | 'internal' | 'download';

export interface Props extends HTMLProps<HTMLAnchorElement> {
  children?: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  type?: AnchorType;
  to: string;
  disabled?: boolean;
  component?: ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>;
  ref?: Ref<HTMLAnchorElement>;
}

export const Link = React.forwardRef(
  (
    {
      children,
      className,
      disabled = false,
      to,
      color = 'primary',
      type = 'internal',
      component,
      ...rest
    }: Props,
    ref: Ref<HTMLAnchorElement>
  ) => {
    const determineTarget = () => {
      if (rest.target) {
        return rest.target;
      }

      if (type === 'external') {
        return '_blank';
      }

      return '';
    };

    const classNames = [classes['link'], classes[color]];
    disabled && classNames.push(classes['disabled']);
    className && classNames.push(className);

    if (component) {
      return React.createElement(component, {
        ...rest,
        ref: ref,
        to: to,
        className: classNames.join(' '),
        'aria-disabled': disabled,
        style: {
          ...rest.style,
        },
        children: children,
      });
    }

    return (
      <a
        {...rest}
        ref={ref}
        download={type === 'download'}
        rel={type === 'external' ? 'noopener noreferer' : undefined}
        href={!disabled ? to : undefined}
        className={classNames.join(' ')}
        aria-disabled={disabled}
        target={determineTarget()}
        style={{
          ...rest.style,
        }}
      >
        {children}
      </a>
    );
  }
);
