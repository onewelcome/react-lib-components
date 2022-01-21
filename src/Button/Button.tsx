import React, { FC, ReactChild, ReactChildren } from 'react';
import { BaseButton, Props as BaseButtonProps } from './BaseButton';
import classes from './Button.module.scss';

export interface Props extends BaseButtonProps {
  children?: React.ReactNode;
  variant?: 'text' | 'fill' | 'outline';
  color?: 'primary' | 'secondary' | 'tertiary';
  startIcon?: React.Component | false;
  endIcon?: React.Component | false;
}

export const Button: FC<Props> = ({
  children,
  variant = 'fill',
  color = 'primary',
  startIcon = false,
  endIcon = false,
  ...rest
}) => {
  return (
    <BaseButton
      className={`${classes[color]} ${classes[variant]} ${
        startIcon || endIcon ? classes['has-icon'] : ''
      }`}
      {...rest}
    >
      {startIcon && <i>{startIcon}&nbsp;</i>}
      {children}
      {endIcon && <i>&nbsp;{endIcon}</i>}
    </BaseButton>
  );
};
