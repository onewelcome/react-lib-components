import React from 'react';
import { BaseButton, Props as BaseButtonProps } from './BaseButton';
import classes from './Button.module.scss';

export interface Props extends BaseButtonProps {
  children?: React.ReactNode;
  variant?: 'text' | 'fill' | 'outline';
  color?: 'primary' | 'secondary' | 'tertiary';
  startIcon?: React.ReactNode | false;
  endIcon?: React.ReactNode | false;
}

export const Button = ({
  children,
  variant = 'fill',
  color = 'primary',
  startIcon = false,
  endIcon = false,
  ...rest
}: Props) => {
  const additionalClasses = [];

  if (startIcon || endIcon) {
    additionalClasses.push(classes['has-icon']);
  }

  if (startIcon) {
    additionalClasses.push(classes['start-icon']);
  }

  if (endIcon) {
    additionalClasses.push(classes['end-icon']);
  }

  return (
    <BaseButton
      className={`${classes[color]} ${classes[variant]} ${additionalClasses.join(' ')}`}
      {...rest}
    >
      {startIcon && <i>{startIcon}&nbsp;</i>}
      <span>{children}</span>
      {endIcon && <i>&nbsp;{endIcon}</i>}
    </BaseButton>
  );
};
