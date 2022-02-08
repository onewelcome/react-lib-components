import React, { useEffect, useRef } from 'react';
import classes from './BaseModalContent.module.scss';

export interface Props {
  id?: string;
  children: React.ReactNode;
  className?: string;
  disableAutoFocus?: boolean;
}

export const BaseModalContent = ({
  id,
  children,
  className = '',
  disableAutoFocus = false,
}: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    !disableAutoFocus && contentRef.current?.focus();
  }, []);

  /**tabIndex is set to be able to do focus on that element which we need for catching keyDown events */
  return (
    <div ref={contentRef} id={id} className={`${classes['content']} ${className}`} tabIndex={-1}>
      {children}
    </div>
  );
};
