import React, { HTMLProps } from 'react';
import { generateID } from '../util/helper';
import classes from './TabPanel.module.scss';

export interface Props extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  id?: string;
  selected?: boolean;
  labelledBy?: string;
}

export const TabPanel = ({
  children,
  id = generateID(15, 'tabpanel'),
  labelledBy,
  selected = false,
  className,
  ...rest
}: Props) => {
  return (
    <div
      {...rest}
      aria-labelledby={labelledBy}
      className={`${classes.tabpanel} ${selected ? classes.selected : ''} ${
        className ? className : ''
      }`}
      id={id}
      role="tabpanel"
      tabIndex={0}
    >
      {children}
    </div>
  );
};
