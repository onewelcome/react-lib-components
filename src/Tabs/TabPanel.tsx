import React, { ComponentPropsWithRef } from 'react';
import classes from './TabPanel.module.scss';

export interface Props extends ComponentPropsWithRef<'div'> {
  children: React.ReactNode;
  tabId: string;
  tabPanelId: string;
  selected?: boolean;
}

export const TabPanel = React.forwardRef<HTMLDivElement, Props>(
  ({ children, tabId, tabPanelId, selected = false, className, ...rest }: Props, ref) => (
    <div
      {...rest}
      ref={ref}
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
  )
);
