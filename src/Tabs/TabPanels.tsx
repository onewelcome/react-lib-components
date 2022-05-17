import React, { HTMLAttributes, ReactElement } from 'react';
import { generateID } from '../util/helper';
import { TabPanel, Props as TabPanelProps } from './TabPanel';
import classes from './TabPanels.module.scss';

type ChildrenType = ReactElement<TabPanelProps, typeof TabPanel>;

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ChildrenType | ChildrenType[];
  selected?: number;
}

export const TabPanels = ({ children, selected = 0, className, ...rest }: Props) => {
  const renderTabPanels = () =>
    React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        key: generateID(),
        selected: selected === index,
      });
    });

  return (
    <div {...rest} className={`${classes['tabpanels']} ${className ? className : ''}`}>
      {renderTabPanels()}
    </div>
  );
};
