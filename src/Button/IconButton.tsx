import React from 'react';
import { BaseButton, Props as BaseButtonProps } from './BaseButton';
import classes from './IconButton.module.scss';

export interface Props extends BaseButtonProps {
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary';
  iconSize?: 's' | 'm' | 'l';
}

export const IconButton = ({ children, color = 'primary', iconSize = 'm', ...rest }: Props) => {
  return (
    <BaseButton
      {...rest}
      className={`${classes['icon-button']} ${classes[color]} ${classes['button-' + iconSize]}`}
    >
      {children}
    </BaseButton>
  );
};
