import React, { HTMLAttributes, ReactElement, useState } from 'react';
import { generateID } from '../util/helper';
import { TabList, Props as TabListProps } from './TabList';
import { TabPanels, Props as TabPanelsProps } from './TabPanels';
import classes from './Tabs.module.scss';

type TabListType = ReactElement<TabListProps, typeof TabList>;
type TabPanelsType = ReactElement<TabPanelsProps, typeof TabPanels>;

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: (TabListType | TabPanelsType)[];
  selected?: number;
  onTabChange?: (index: number) => void;
}

export const Tabs = ({ children, selected = 0, onTabChange, className, ...rest }: Props) => {
  function containedIndex(index: number): number {
    const max = React.Children.count(children);
    const min = 0;
    return Math.min(max, Math.max(min, index));
  }

  const [selectedTab, setSelectedTab] = useState(containedIndex(selected));
  const tablist = React.Children.map(children, (child) => child).find(
    (child) => child.type === TabList
  );
  const amountOfTabs = React.Children.count(tablist?.props.children);

  const tabIds = [...Array(amountOfTabs)].map(() => generateID());
  const tabPanelIds = [...Array(amountOfTabs)].map(() => generateID());

  const renderTabs = () =>
    React.Children.map(children, (child) => {
      if (child.type === TabList) {
        return React.cloneElement(child as TabListType, {
          selected: selectedTab,
          tabIds,
          tabPanelIds,
          onTabChange: (index: number) => {
            setSelectedTab(index);
            if (onTabChange) {
              onTabChange(index);
            }
          },
        });
      } else if (child.type === TabPanels) {
        return React.cloneElement(child as TabPanelsType, {
          selected: selectedTab,
          tabIds,
          tabPanelIds,
        });
      } else {
        return;
      }
    });

  return (
    <div {...rest} className={`${classes['tabs']} ${className ?? ''}`}>
      {renderTabs()}
    </div>
  );
};
