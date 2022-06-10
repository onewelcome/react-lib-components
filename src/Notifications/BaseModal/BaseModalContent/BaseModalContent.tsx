import React, { ComponentPropsWithRef, createRef, useEffect } from 'react';
import classes from './BaseModalContent.module.scss';

export interface Props extends ComponentPropsWithRef<'div'> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  disableAutoFocus?: boolean;
}

export const BaseModalContent = React.forwardRef<HTMLDivElement, Props>(
  ({ id, children, className = '', disableAutoFocus = false, ...rest }: Props, ref) => {
    const contentRef = createRef<HTMLDivElement>();

    useEffect(() => {
      if (!disableAutoFocus && ref) {
        (ref as React.RefObject<HTMLDivElement>).current?.focus();
      } else if (!disableAutoFocus) {
        contentRef.current?.focus();
      }
    }, []);

    /**tabIndex is set to be able to do focus on that element which we need for catching keyDown events */
    return (
      <div
        {...rest}
        ref={ref || contentRef}
        id={id}
        className={`${classes['content']} ${className}`}
        tabIndex={-1}
      >
        {children}
      </div>
    );
  }
);
