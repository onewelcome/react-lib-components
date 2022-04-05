import React, { RefObject, useRef } from 'react';
import { BaseButton, Props as BaseButtonProps } from './BaseButton';
import classes from './IconButton.module.scss';
import readyclasses from '../readyclasses.module.scss';

export interface Props extends Omit<BaseButtonProps, 'ref'> {
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary';
  iconSize?: 's' | 'm' | 'l';
  className?: string;
  title: string;
  ref?: RefObject<HTMLButtonElement>;
}

export const IconButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, color = 'primary', iconSize = 'm', title, className, ...rest }, ref) => {
    const localRef = useRef<HTMLButtonElement>(null);
    const buttonRef = ref || localRef;

    return (
      <BaseButton
        {...rest}
        ref={buttonRef}
        className={`${classes['icon-button']} ${classes[color]} ${classes['button-' + iconSize]} ${
          className ?? ''
        }`}
      >
        <>
          {children}
          <span className={readyclasses['sr-only']}>{title}</span>
        </>
      </BaseButton>
    );
  }
);
