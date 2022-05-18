import React, { HTMLProps, useEffect, useRef } from 'react';
import { generateID } from '../util/helper';
import classes from './Tab.module.scss';

export interface Props extends HTMLProps<HTMLButtonElement> {
  children?: string;
  selected?: boolean;
  focussed?: boolean;
  tabId?: string;
  tabPanelId?: string;
}

export const Tab = ({
  children,
  selected = false,
  focussed = false,
  tabId = generateID(),
  tabPanelId,
  className,
  ...rest
}: Props) => {
  const tabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (focussed) {
      // Does not seem to work when using tabs root component, needed for accessibility
      tabRef.current && tabRef.current.focus();
    }
  }, [focussed]);

  return (
    <button
      {...rest}
      aria-selected={focussed}
      key={tabId}
      className={`${classes.tab} ${selected ? classes.selected : ''} ${
        focussed && !selected ? classes.focussed : ''
      } ${className ? className : ''}`}
      ref={tabRef}
      role="tab"
      tabIndex={focussed ? 0 : -1}
      type="button"
      aria-controls={tabPanelId}
      id={tabId}
      data-text={children}
    >
      {children}
    </button>
  );
};
