import React from 'react';
import { BaseButton, Props as BaseButtonProps } from './BaseButton';
import classes from './IconButton.module.scss';
import readyclasses from '../readyclasses.module.scss';

export interface Props extends BaseButtonProps {
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary';
  iconSize?: 's' | 'm' | 'l';
  className?: string;
  title: string;
}

export const IconButton = ({
  children,
  color = 'primary',
  iconSize = 'm',
  className,
  title,
  ...rest
}: Props) => {
  return (
    <BaseButton
      {...rest}
      className={`${classes['icon-button']} ${classes[color]} ${classes['button-' + iconSize]} ${
        className ?? className
      }`}
    >
      <>
        {children}
        <span className={readyclasses['sr-only']}>{title}</span>
      </>
    </BaseButton>
  );
};
