import React, { ComponentPropsWithRef } from 'react';
import classes from './Icon.module.scss';

export enum Icons {
  Bell = 'bell',
  BellAlt = 'bell-alt',
  Bookmark = 'bookmark',
  BookmarkAlt = 'bookmark-alt',
  Build = 'build',
  Calendar = 'calendar',
  Change = 'change',
  Checkmark = 'checkmark',
  CheckmarkCircle = 'checkmark-circle',
  CheckmarkCircleAlt = 'checkmark-circle-alt',
  CheckmarkCircleBreakout = 'checkmark-circle-breakout',
  CheckmarkSquare = 'checkmark-square',
  ChevronUp = 'chevron-up',
  ChevronDown = 'chevron-down',
  ChevronLeft = 'chevron-left',
  ChevronRight = 'chevron-right',
  Circle = 'circle',
  Clock = 'clock',
  Copy = 'copy',
  Edit = 'edit',
  Ellipsis = 'ellipsis',
  EllipsisAlt = 'ellipsis-alt',
  Equal = 'equal',
  Error = 'error-circle',
  Eye = 'eye',
  Filter = 'filter',
  FilterAlt = 'filter-alt',
  FilterAltArrow = 'filter-alt-arrow',
  FilterAltTimes = 'filter-alt-times',
  Forbidden = 'forbidden',
  Fullscreen = 'fullscreen',
  FullscreenExit = 'fullscreen-exit',
  Gearwheel = 'gearwheel',
  Grid = 'grid',
  Hamburger = 'hamburger',
  Heart = 'heart',
  Image = 'image',
  InfoBell = 'info-bell',
  InfoCircle = 'info-circle',
  Link = 'link',
  MinusSquare = 'minus-square',
  NavigationFirst = 'navigation-first',
  NavigationLast = 'navigation-last',
  Plus = 'plus',
  Radio = 'radio',
  Refresh = 'refresh',
  Search = 'search',
  Share = 'share',
  Square = 'square',
  Star = 'star',
  StarAlt = 'star-alt',
  TableSearch = 'table-search',
  Times = 'times',
  TimesCircle = 'times-circle',
  TimesCircleAlt = 'times-circle-alt',
  TimesThin = 'times-thin',
  Trash = 'trash',
  TriangleDown = 'triangle-down',
  TriangleDownCircle = 'triangle-down-circle',
  TriangleLeft = 'triangle-left',
  TriangleRight = 'triangle-right',
  TriangleUp = 'triangle-up',
  Undo = 'undo',
  Warning = 'warning',
}

type Tag = 'span' | 'div' | 'i';

export interface Props extends ComponentPropsWithRef<'div'> {
  icon: Icons;
  color?: string;
  size?: string;
  tag?: Tag;
}

export const Icon = React.forwardRef<HTMLDivElement, Props>(
  ({ icon, color, className, style, size, tag = 'span', ...rest }: Props, ref) => {
    const Component = tag;

    return (
      <Component
        {...rest}
        ref={ref}
        style={{ color: color, ...style, fontSize: size }}
        data-icon
        aria-hidden="true"
        className={`${classes['icon']} ${classes['icon-' + icon]} ${className ? className : ''}`}
      />
    );
  }
);
