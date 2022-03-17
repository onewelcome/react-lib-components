import React, { HTMLProps, ReactChild, useEffect, useRef, useState } from 'react';
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
  transformOrigin?: 'left' | 'right';
}

export const Popover = ({
  children,
  className,
  show,
  placement,
  offset = { vertical: 0, horizontal: 0 },
  transformOrigin = 'left',
  anchorEl,
  ...rest
}: Props) => {
  const [position, setPosition] = useState({ top: 'initial', left: 'initial', right: 'initial' });
  const [positionCalculationFinished, setPositionCalculationFinished] = useState(false);
  const popoverEl = useRef<HTMLDivElement>(null);

  if (show === undefined)
    throw new Error('Please make sure to define the "show" property on your Popover component');

  useEffect(() => {
    if (show && anchorEl && popoverEl.current) {
      const el = anchorEl as HTMLElement;
      const popoverWidth = popoverEl.current.querySelector('div')?.offsetWidth;
      const popoverHeight = popoverEl.current.querySelector('div')?.offsetHeight;

      const styleOffset = {
        top: offset.vertical,
        [transformOrigin]: offset.horizontal,
      };

      if (placement?.vertical) {
        /** This offset is for when the contextmenu would display offscreen (which we don't want). We calculate the amount of pixels we need in order to have it fully on screen. Also done in the horizontal placement left & right. */
        const offscreenOffset =
          popoverHeight && window.innerHeight - el.getBoundingClientRect().top < popoverHeight
            ? popoverHeight - (window.innerHeight - el.getBoundingClientRect().top)
            : 0;

        switch (placement.vertical) {
          case 'top':
            const topTop =
              (el.getBoundingClientRect().top - offscreenOffset + styleOffset.top!).toString() +
              'px';
            setPosition((prevState) => ({ ...prevState, top: topTop }));
            break;
          case 'center':
            const topCenter =
              (el.getBoundingClientRect().top - offscreenOffset + styleOffset.top!).toString() +
              'px';
            setPosition((prevState) => ({ ...prevState, top: topCenter }));

            break;
          case 'bottom':
            const topBottom =
              (
                el.getBoundingClientRect().top +
                (offscreenOffset !== 0 ? -offscreenOffset : el.offsetHeight) +
                styleOffset.top!
              ).toString() + 'px';
            setPosition((prevState) => ({ ...prevState, top: topBottom }));
            break;
        }
      }

      if (placement?.horizontal && transformOrigin === 'left') {
        const offscreenOffset =
          popoverWidth && window.innerWidth - el.getBoundingClientRect().left < popoverWidth
            ? popoverWidth - (window.innerWidth - el.getBoundingClientRect().left)
            : 0;
        switch (placement.horizontal) {
          case 'start':
            const leftStart =
              (el.getBoundingClientRect().left - offscreenOffset + styleOffset.left!).toString() +
              'px';
            setPosition((prevState) => ({ ...prevState, left: leftStart, right: 'initial' }));
            break;
          case 'center':
            const leftCenter =
              (
                el.getBoundingClientRect().left -
                (offscreenOffset !== 0 ? offscreenOffset : -el.offsetWidth / 2) +
                styleOffset.left!
              ).toString() + 'px';

            setPosition((prevState) => ({ ...prevState, left: leftCenter, right: 'initial' }));

            break;
          case 'end':
            const leftEnd =
              (
                el.getBoundingClientRect().left +
                (offscreenOffset !== 0 ? -offscreenOffset : el.offsetWidth) +
                styleOffset.left!
              ).toString() + 'px';
            setPosition((prevState) => ({ ...prevState, left: leftEnd, right: 'initial' }));
            break;
        }
      }

      if (placement?.horizontal && transformOrigin === 'right') {
        const offscreenOffset =
          popoverWidth && el.getBoundingClientRect().right < popoverWidth
            ? popoverWidth - el.getBoundingClientRect().right
            : 0;
        switch (placement.horizontal) {
          case 'end':
            const rightEnd =
              (
                window.innerWidth -
                (el.getBoundingClientRect().right + offscreenOffset) +
                styleOffset.right!
              ).toString() + 'px';
            setPosition((prevState) => ({ ...prevState, right: rightEnd, left: 'initial' }));
            break;
          case 'center':
            const rightCenter =
              (
                window.innerWidth -
                (el.getBoundingClientRect().right +
                  (offscreenOffset !== 0 ? offscreenOffset : -el.offsetWidth / 2)) +
                styleOffset.right!
              ).toString() + 'px';
            setPosition((prevState) => ({ ...prevState, right: rightCenter, left: 'initial' }));
            break;
          case 'start':
            const rightStart =
              (
                window.innerWidth -
                (el.getBoundingClientRect().right +
                  (offscreenOffset !== 0 ? offscreenOffset : -el.offsetWidth)) +
                styleOffset.right!
              ).toString() + 'px';
            setPosition((prevState) => ({ ...prevState, right: rightStart, left: 'initial' }));
        }
      }

      setPositionCalculationFinished(true);
    } else if (!show) {
      setPositionCalculationFinished(false);
    }
  }, [show, positionCalculationFinished, popoverEl.current]);

  return (
    <div ref={popoverEl}>
      {show && positionCalculationFinished && (
        <div
          {...rest}
          className={`${classes.popover} ${className ?? ''}`}
          style={{ top: position.top, left: position.left, right: position.right }}
        >
          {children}
        </div>
      )}
    </div>
  );
};
