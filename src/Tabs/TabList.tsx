import React, { HTMLAttributes, ReactElement, useState } from 'react';
import { generateID } from '../util/helper';
import { Tab, Props as TabProps } from './Tab';
import classes from './TabList.module.scss';

type ChildrenType = ReactElement<TabProps, typeof Tab>;

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ChildrenType | ChildrenType[];
  'aria-label': string;
  selected?: number;
  onTabChange?: (index: number) => void;
}

export const TabList = ({
  children,
  'aria-label': ariaLabel,
  selected = 0,
  className,
  onTabChange,
  ...rest
}: Props) => {
  const [selectedTab, setSelectedTab] = useState(selected);

  const renderTabs = () =>
    React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        key: generateID(),
        selected: selectedTab === index,
        onClick: () => {
          setSelectedTab(index);
          if (onTabChange) {
            onTabChange(index);
          }
        },
      })
    );

  return (
    <div
      {...rest}
      className={`${classes['tablist']} ${className ?? ''}`}
      role="tablist"
      aria-label={ariaLabel}
    >
      {renderTabs()}
    </div>
  );
};
