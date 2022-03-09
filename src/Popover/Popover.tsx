import React, { HTMLProps, ReactChild } from 'react';
import classes from './Popover.module.scss';

export interface Placement {
  vertical?: 'top' | 'center' | 'bottom';
  horizontal?: 'start' | 'center' | 'end';
}

export interface Offset {
  vertical?: number;
  horizontal?: number;
}

export interface Props extends HTMLProps<HTMLDivElement> {
  children?: ReactChild | ReactChild[];
  placement?: Placement;
  offset?: Offset;
  show?: boolean;
  anchorEl?: EventTarget | Element | null;
}

export const Popover = ({
  children,
  show,
  placement,
  offset = { vertical: 0, horizontal: 0 },
  anchorEl,
  ...rest
}: Props) => {
  if (show === false) return null;
  if (show === undefined)
    throw new Error('Please make sure to define the "show" property on your Popover component');

  const calculatePosition = () => {
    if (anchorEl) {
      const el = anchorEl as HTMLElement;

      const style = {
        top: '0px',
        left: '0px',
      };

      const styleOffset = {
        top: offset.vertical,
        left: offset.horizontal,
      };

      if (placement?.vertical) {
        switch (placement.vertical) {
          case 'top':
            style.top = (el.getBoundingClientRect().top + styleOffset.top!).toString() + 'px';
            break;
          case 'center':
            style.top =
              (el.getBoundingClientRect().bottom / 2 + styleOffset.top!).toString() + 'px';
            break;
          case 'bottom':
            style.top = (el.getBoundingClientRect().bottom + styleOffset.top!).toString() + 'px';
            break;
        }
      }

      if (placement?.horizontal) {
        switch (placement.horizontal) {
          case 'start':
            style.left = (el.getBoundingClientRect().left + styleOffset.left!).toString() + 'px';
            break;
          case 'center':
            style.left =
              (el.getBoundingClientRect().right / 2 + styleOffset.left!).toString() + 'px';
            break;
          case 'end':
            style.left = (el.getBoundingClientRect().right + styleOffset.left!).toString() + 'px';
            break;
        }
      }

      return style;
    }

    return {};
  };

  return (
    <div {...rest} className={classes.popover} style={calculatePosition()}>
      {children}
    </div>
  );
};
