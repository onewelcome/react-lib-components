import React, { HTMLAttributes } from 'react';
import classes from './Icon.module.scss';

export type Icons =
  | 'bell'
  | 'bell-alt'
  | 'bookmark'
  | 'bookmark-alt'
  | 'build'
  | 'calendar'
  | 'change'
  | 'checkmark'
  | 'checkmark-circle'
  | 'checkmark-circle-alt'
  | 'checkmark-circle-breakout'
  | 'checkmark-square'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'circle'
  | 'clock'
  | 'copy'
  | 'edit'
  | 'ellipsis'
  | 'ellipsis-alt'
  | 'equal'
  | 'eye'
  | 'filter'
  | 'filter-alt'
  | 'filter-alt-arrow'
  | 'filter-alt-times'
  | 'forbidden'
  | 'fullscreen'
  | 'fullscreen-exit'
  | 'gearwheel'
  | 'grid'
  | 'hamburger'
  | 'heart'
  | 'image'
  | 'info-bell'
  | 'info-circle'
  | 'link'
  | 'minus-square'
  | 'navigation-first'
  | 'navigation-last'
  | 'plus'
  | 'radio'
  | 'refresh'
  | 'search'
  | 'share'
  | 'square'
  | 'star'
  | 'star-alt'
  | 'times'
  | 'times-circle'
  | 'times-circle-alt'
  | 'times-thin'
  | 'trash'
  | 'triangle-down'
  | 'triangle-down-circle'
  | 'triangle-left'
  | 'triangle-right'
  | 'triangle-up'
  | 'undo'
  | 'warning';

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  icon: Icons;
  color?: string;
}

export const Icon = ({
  icon,
  color = getComputedStyle(document.documentElement).getPropertyValue(
    '--default'
  ),
  ...rest
}: Props) => {
  return (
    <span
      {...rest}
      style={{ color: color }}
      className={classes[`icon-${icon}`]}
    />
  );
};
