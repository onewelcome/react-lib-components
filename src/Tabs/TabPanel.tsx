import React, { HTMLProps } from 'react';
import classes from './TabPanel.module.scss';

export interface Props extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  tabId: string;
  tabPanelId: string;
  selected?: boolean;
}

export const TabPanel = ({
  children,
  tabId,
  tabPanelId,
  selected = false,
  className,
  ...rest
}: Props) => (
  <div
    {...rest}
    aria-labelledby={tabId}
    className={`${classes['tabpanel']} ${selected ? classes['selected'] : ''} ${className ?? ''}`}
    id={tabPanelId}
    role="tabpanel"
    tabIndex={0}
    hidden={!selected || undefined}
    aria-hidden={!selected}
  >
    {children}
  </div>
);
