import React, { RefObject } from 'react';
import classes from './Tab.module.scss';

export interface Props extends Omit<React.HTMLProps<HTMLButtonElement>, 'ref'> {
  children?: string;
  selected?: boolean;
  ref?: RefObject<HTMLButtonElement>;
}

export const Tab = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, selected = false, className, ...rest }: Props, ref) => {
    return (
      <button
        {...rest}
        aria-selected={selected}
        className={`${classes.tab} ${selected ? classes.selected : ''} ${
          className ? className : ''
        }`}
        ref={ref}
        role="tab"
        tabIndex={selected ? 0 : -1}
        type="button"
        data-text={children}
      >
        {children}
      </button>
    );
  }
);
