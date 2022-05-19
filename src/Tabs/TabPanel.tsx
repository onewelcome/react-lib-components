import React, { HTMLProps } from 'react';
import { generateID } from '../util/helper';
import classes from './TabPanel.module.scss';

export interface Props extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  tabId?: string;
  tabPanelId?: string;
  selected?: boolean;
  labelledBy?: string;
}

export const TabPanel = ({
  children,
  tabId = generateID(),
  tabPanelId,
  selected = false,
  className,
  ...rest
}: Props) => {
  return (
    <div
      {...rest}
      aria-labelledby={tabId}
      className={`${classes.tabpanel} ${selected ? classes.selected : ''} ${
        className ? className : ''
      }`}
      id={tabPanelId}
      role="tabpanel"
      tabIndex={0}
      hidden={!selected || undefined}
      aria-hidden={!selected}
    >
      {children}
    </div>
  );
};
