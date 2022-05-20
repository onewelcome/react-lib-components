import React, { HTMLProps, useEffect, useRef } from 'react';
import classes from './TabButton.module.scss';

export interface Props extends HTMLProps<HTMLButtonElement> {
  children?: string;
  selected?: boolean;
  focussed?: boolean;
  tabId?: string;
  tabPanelId?: string;
  onTabButtonClick?: () => void;
}

export const TabButton = ({
  children,
  selected = false,
  focussed = false,
  tabId,
  tabPanelId,
  className,
  onTabButtonClick,
  ...rest
}: Props) => {
  const tabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (focussed) {
      tabRef.current && tabRef.current.focus();
    }
  }, [focussed]);

  return (
    <button
      {...rest}
      aria-selected={selected}
      key={tabId}
      className={`${classes['tabbutton']} ${selected ? classes['selected'] : ''} ${
        focussed && !selected ? classes['focussed'] : ''
      } ${className ?? ''}`}
      ref={tabRef}
      role="tab"
      tabIndex={selected ? 0 : -1}
      type="button"
      aria-controls={tabPanelId}
      id={tabId}
      data-text={children}
      onClick={onTabButtonClick}
    >
      {children}
    </button>
  );
};
