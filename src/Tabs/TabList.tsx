import React, { HTMLAttributes, ReactElement, useState } from 'react';
import { generateID } from '../util/helper';
import { Tab, Props as TabProps } from './Tab';
import classes from './TabList.module.scss';

type ChildrenType = ReactElement<TabProps, typeof Tab>;

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ChildrenType | ChildrenType[];
  'aria-label': string;
  selected?: number;
  tabIds?: string[];
  tabPanelIds?: string[];
  onTabChange?: (index: number) => void;
}

export const TabList = ({
  children,
  'aria-label': ariaLabel,
  selected = 0,
  className,
  tabIds,
  tabPanelIds,
  onTabChange,
  ...rest
}: Props) => {
  const [selectedTab, setSelectedTab] = useState(selected);
  const [focussedTab, setFocussedTab] = useState(-1);

  function handleKeyDown(e: React.KeyboardEvent<HTMLElement>) {
    const max = React.Children.count(children) - 1;
    const min = 0;

    // do not show focus unless we came here before
    let currentFocussedTab = focussedTab === -1 ? selectedTab : focussedTab;

    switch (e.code) {
      case 'ArrowLeft':
        setFocussedTab(currentFocussedTab === min ? max : currentFocussedTab - 1);
        break;
      case 'ArrowRight':
        setFocussedTab(currentFocussedTab === max ? min : currentFocussedTab + 1);
        break;
      case 'Home':
        setFocussedTab(min);
        break;
      case 'End':
        setFocussedTab(max);
        break;
      case 'Space':
      case 'Enter':
        activateTab(currentFocussedTab);
        break;
    }
  }

  function handleBlur() {
    setFocussedTab(selectedTab);
  }

  function activateTab(index: number) {
    setSelectedTab(index);
    setFocussedTab(index);
    if (onTabChange) {
      onTabChange(index);
    }
  }

  const renderTabs = () =>
    React.Children.map(children, (child, index) => {
      const tabId = tabIds ? tabIds[index] : generateID();
      const tabPanelId = tabPanelIds ? tabPanelIds[index] : undefined;

      return React.cloneElement(child, {
        key: generateID(),
        selected: selectedTab === index,
        focussed: focussedTab === index,
        tabPanelId,
        tabId,
        onClick: () => activateTab(index),
      });
    });

  return (
    <div
      {...rest}
      className={`${classes['tablist']} ${className ?? ''}`}
      role="tablist"
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      {renderTabs()}
    </div>
  );
};