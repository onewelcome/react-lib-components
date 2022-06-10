import React, { ComponentPropsWithRef, ReactNode } from 'react';
import classes from './Label.module.scss';
import readyclasses from '../../readyclasses.module.scss';

export interface Props extends ComponentPropsWithRef<'label'> {
  children?: ReactNode;
}

export const Label = React.forwardRef<HTMLLabelElement, Props>(
  ({ children, className, hidden = false, ...rest }: Props, ref) => {
    return (
      <label
        {...rest}
        ref={ref}
        className={`${hidden ? readyclasses['sr-only'] : ''} ${classes['label']} ${
          className ?? ''
        }`}
      >
        {children}
      </label>
    );
  }
);
