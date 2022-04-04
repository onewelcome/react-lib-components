import React from 'react';
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
export interface Props extends HTMLProps<HTMLAnchorElement> {
  children?: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  type: AnchorType;
  to: string;
  disabled?: boolean;
}

export const Link = ({
  children,
  className,
  disabled = false,
  to,
  color,
  type,
  ...rest
}: Props) => {
  const determineHref = () => {
    const phoneRegex = /^(\d+|\+)((-?\d+){1,10}$)/g;
    const mailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const evaluateType = (name: string, regex: RegExp) => type === name && regex.test(to);

    if (type === undefined) {
      throw new Error(
        "Please make sure to enter the type of your <a>. You can choose the following options: 'external' | 'internal' | 'download' | 'phone' | 'tel' | 'telephone' | 'email' | 'mail'| 'mailto'"
      );
    }

    if (
      evaluateType('phone', phoneRegex) ||
      evaluateType('tel', phoneRegex) ||
      evaluateType('telephone', phoneRegex)
    ) {
      return `tel:${to}`;
      /** I have no idea why, but typescript gets confused to I have to typecast the below expressions for some reason... */
    } else if (
      (type as AnchorType) === 'phone' ||
      (type as AnchorType) === 'tel' ||
      type === 'telephone'
    ) {
      throw new Error(
        `You want an anchor tag with a phone number but you've entered an invalid value as "to" prop. Expected example format: +316-1234-5676 | 0612345678 | +0123-123456 got ${to}`
      );
    }

    if (
      evaluateType('email', mailRegex) ||
      evaluateType('mail', mailRegex) ||
      evaluateType('mailto', mailRegex)
    ) {
      return `mailto:${to}`;
    } else if (
      (type as AnchorType) === 'email' ||
      (type as AnchorType) === 'mail' ||
      type === 'mailto'
    ) {
      throw new Error(
        `You want an anchor tag with an e-mail address but entered an invalid value as "to" prop. Expected example format: test@test.com | employee@onewelcome.com got ${to}`
      );
    }

    return to;
  };

  const determineTarget = () => {
    if (rest.target) {
      return rest.target;
    }

    if (type === 'external') {
      return '_blank';
    }

    return '';
  };

  return (
    <a
      {...rest}
      download={type === 'download'}
      rel={type === 'external' ? 'noopener noreferer' : undefined}
      href={!disabled ? determineHref() : undefined}
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
