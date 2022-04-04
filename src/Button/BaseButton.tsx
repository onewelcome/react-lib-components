import React, { RefObject, useRef } from 'react';
import classes from './BaseButton.module.scss';

export interface Props extends Omit<React.HTMLProps<HTMLButtonElement>, 'ref'> {
  children?: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
  className?: string;
  disabled?: boolean;
  form?: string;
  formaction?: string;
  formenctype?: string;
  formmethod?: string;
  formtarget?: string;
  name?: string;
  value?: string;
  ref?: RefObject<HTMLButtonElement>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => unknown;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => unknown;
  onContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => unknown;
  onDragLeave?: (event: React.DragEvent<HTMLButtonElement>) => unknown;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => unknown;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => unknown;
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => unknown;
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => unknown;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => unknown;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => unknown;
  onMouseUp?: (event: React.MouseEvent<HTMLButtonElement>) => unknown;
  onTouchEnd?: (event: React.TouchEvent<HTMLButtonElement>) => unknown;
  onTouchMove?: (event: React.TouchEvent<HTMLButtonElement>) => unknown;
  onTouchStart?: (event: React.TouchEvent<HTMLButtonElement>) => unknown;
}

export const BaseButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, type = 'button', className, ...rest }, ref) => {
    const validTypes = ['submit', 'button', 'reset'];
    const localRef = useRef<HTMLButtonElement>(null);
    const buttonRef = ref || localRef;

    if (!validTypes.includes(type))
      throw new Error(
        `You have entered an invalid button type. Expected 'submit', 'button' or 'reset' got ${type}`
      );

    return (
      <button
        {...rest}
        ref={buttonRef}
        type={type}
        className={`${classes.button} ${className ? className : ''}`}
      >
        {children}
      </button>
    );
  }
);
