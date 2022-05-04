import React, { Fragment, RefObject } from 'react';
import { BaseButton, Props as BaseButtonProps } from './BaseButton';
import classes from './IconButton.module.scss';
import readyclasses from '../readyclasses.module.scss';

export interface Props extends Omit<BaseButtonProps, 'ref'> {
  children?: React.ReactNode;
  iconSize?: 's' | 'm' | 'l';
  className?: string;
  title: string;
  ref?: RefObject<HTMLButtonElement>;
}

export const IconButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, color = 'primary', iconSize = 'm', title, ...rest }, ref) => {
    return (
      <BaseButton
        {...rest}
        ref={ref}
        className={`${classes['icon-button']} ${classes[color]} ${classes['button-' + iconSize]}`}
      >
        <Fragment>
          {children}
          <span className={readyclasses['sr-only']}>{title}</span>
        </Fragment>
      </BaseButton>
    );
  }
);
