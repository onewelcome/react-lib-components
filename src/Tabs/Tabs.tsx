import React, { HTMLAttributes, useEffect, useState } from 'react';
import { generateID } from '../util/helper';
import { Props as TabProps } from './Tab';
import { TabButton } from './TabButton';
import { TabPanel } from './TabPanel';
import classes from './Tabs.module.scss';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
  selected?: number;
  'aria-label'?: string;
  onTabChange?: (index: number) => void;
}

export const Tabs = ({
  children,
  selected = 0,
  'aria-label': ariaLabel,
  onTabChange,
  className,
  ...rest
}: Props) => {
  const max = React.Children.count(children) - 1;
  const min = 0;

  const [selectedTab, setSelectedTab] = useState(Math.min(max, Math.max(min, selected)));
  const [focussedTab, setFocussedTab] = useState(-1);
  const [tabIds] = useState([...Array(max)].map(() => generateID()));
  const [tabPanelIds] = useState([...Array(max)].map(() => generateID()));

  useEffect(() => {
    setSelectedTab(Math.min(max, Math.max(min, selected)));
    setFocussedTab(-1);
  }, [selected]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLElement>) {
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

  const renderTabButtons = () =>
    React.Children.map(children, (child, index) => {
      return React.createElement(TabButton, {
        key: generateID(),
        tabId: tabIds[index],
        tabPanelId: tabPanelIds[index],
        selected: selectedTab === index,
        focussed: focussedTab === index,
        onTabButtonClick: () => activateTab(index),
        children: child.props.title,
      });
    });

  const renderTabPanels = () =>
    React.Children.map(children, (child, index) => {
      return React.createElement(TabPanel, {
        key: generateID(),
        selected: selectedTab === index,
        tabId: tabIds[index],
        tabPanelId: tabPanelIds[index],
        children: child.props.children,
      });
    });

  return (
    <div {...rest} className={`${classes['tabs']} ${className ?? ''}`}>
      <div
        role="tablist"
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        aria-label={ariaLabel}
        className={classes['tablist']}
      >
        {renderTabButtons()}
      </div>
      <div className={classes['tabpanels']}>{renderTabPanels()}</div>
    </div>
  );
};
