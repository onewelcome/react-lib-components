import React, { HTMLAttributes, ReactElement, useState } from 'react';
import { Tab, Props as TabProps } from './Tab';
import classes from './Tabs.module.scss';

type ChildrenType = ReactElement<TabProps, typeof Tab>;

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ChildrenType | ChildrenType[];
  'aria-label': string;
  selected?: number;
}

export const Tabs = ({
  children,
  'aria-label': ariaLabel,
  selected = 0,
  className,
  ...rest
}: Props) => {
  const [selectedTab, setSelectedTab] = useState(selected);

  const renderTabs = () =>
    React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        selected: selectedTab === index,
        onClick: () => setSelectedTab(index),
      })
    );

  return (
    <div
      {...rest}
      className={`${classes['tabs']} ${className ?? ''}`}
      role="tabs"
      aria-label={ariaLabel}
    >
      {renderTabs()}
    </div>
  );
};
