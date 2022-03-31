import React from 'react';
import classes from './Link.module.scss';

export interface Props {
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary';
  type: 'external' | 'internal' | 'action';
  to: string;
  disabled: boolean;
  component?: 'a' | 'button' | React.ReactElement;
  action?: 'mailto' | 'tel';
}

export interface AnchorProps extends Props {
  variant?: never;
}

export interface ButtonProps extends Props {
  variant?: 'text' | 'fill' | 'outline';
}

export const Link = ({
  children,
  disabled = false,
  variant = 'text',
  to,
  type,
  component = 'a',
  ...rest
}: AnchorProps | ButtonProps) => {
  if (component == 'a') {
    return (
      <a
        rel={'noopener noreferer'}
        {...rest}
        className={classes.link}
        href={to}
        aria-disabled={disabled}
        target={type == 'external' ? '_blank' : ''}
      >
        {children}
      </a>
    );
  } else if (component == 'button') {
    return <button>_Button</button>;
  } else {
    return React.cloneElement(component, {
      className: classes.link,
      disabled,
      variant,
      to,
      ...rest,
    });
  }
};
