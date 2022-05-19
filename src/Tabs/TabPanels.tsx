import React, { HTMLAttributes, ReactElement } from 'react';
import { generateID } from '../util/helper';
import { TabPanel, Props as TabPanelProps } from './TabPanel';
import classes from './TabPanels.module.scss';

type ChildrenType = ReactElement<TabPanelProps, typeof TabPanel>;

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ChildrenType | ChildrenType[];
  selected?: number;
  tabIds?: string[];
  tabPanelIds?: string[];
}

export const TabPanels = ({
  children,
  selected = 0,
  tabIds,
  tabPanelIds,
  className,
  ...rest
}: Props) => {
  const renderTabPanels = () =>
    React.Children.map(children, (child, index) => {
      const tabId = tabIds ? tabIds[index] : undefined;
      const tabPanelId = tabPanelIds ? tabPanelIds[index] : generateID();

      return React.cloneElement(child, {
        key: generateID(),
        selected: selected === index,
        tabId,
        tabPanelId,
      });
    });

  return (
    <div {...rest} className={`${classes['tabpanels']} ${className ? className : ''}`}>
      {renderTabPanels()}
    </div>
  );
};
