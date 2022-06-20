import React, { Fragment } from 'react';
import { BaseButton, Props as BaseButtonProps } from './BaseButton';
import classes from './IconButton.module.scss';
import readyclasses from '../readyclasses.module.scss';

export interface Props extends BaseButtonProps {
  children?: React.ReactNode;
  iconSize?: 's' | 'm' | 'l';
  variant?: 'text' | 'fill' | 'outline';
  className?: string;
  title?: string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, Props>(
  (
    { children, color = 'primary', variant = 'text', iconSize = 'm', title, className, ...rest },
    ref
  ) => {
    if (!title) {
      console.error("Please make sure to specify a 'title' prop to your IconButton component! ");
    }

    const iconButtonClasses = [
      classes['icon-button'],
      classes[variant],
      classes[color],
      classes['button-' + iconSize],
    ];

    if (className) {
      iconButtonClasses.push(className);
    }

    return (
      <BaseButton {...rest} ref={ref} className={iconButtonClasses.join(' ')}>
        <Fragment>
          {children}
          <span className={readyclasses['sr-only']}>{title}</span>
        </Fragment>
      </BaseButton>
    );
  }
);
