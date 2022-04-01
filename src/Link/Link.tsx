import React from 'react';
import classes from './Link.module.scss';

export interface Props {
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary';
  type: 'external' | 'internal' | 'action';
  to: string;
  disabled?: boolean;
  component?: React.ReactElement;
  action?: 'mailto' | 'tel';
}

export const Link = ({
  children,
  disabled = false,
  to,
  type,
  component,
  action,
  ...rest
}: Props) => {
  if (component == null) {
    return (
      <a
        rel={'noopener noreferer'}
        {...rest}
        href={`${action ? action + `:` + to : to}`}
        className={classes.link}
        aria-disabled={disabled}
        target={type == 'external' ? '_blank' : ''}
      >
        {children}
      </a>
    );
  } else {
    return React.cloneElement(component, {
      className: classes.link,
      'aria-disabled': disabled,
      to,
      rel: 'noopener noreferer',
      ...rest,
      ...component.props,
    });
  }
};
