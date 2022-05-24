import React, { ComponentPropsWithRef, useEffect, useRef } from 'react';
import classes from './TabButton.module.scss';

export interface Props extends ComponentPropsWithRef<'button'> {
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

  const classNames = [classes['tabbutton']];

  selected && classNames.push(classes['selected']);
  focussed && !selected && classNames.push(classes['focussed']);
  className && classNames.push(className);

  return (
    <button
      {...rest}
      aria-selected={selected}
      key={tabId}
      className={classNames.join(' ')}
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
