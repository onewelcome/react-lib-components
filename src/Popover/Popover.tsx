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
  const [popoverWidth, setPopoverWidth] = useState<number | undefined>(0);
  const [popoverHeight, setPopoverHeight] = useState<number | undefined>(0);
  const el = anchorEl as HTMLElement;

  useEffect(() => {
    setPopoverWidth(popoverEl?.current?.querySelector('div')?.offsetWidth);
    setPopoverHeight(popoverEl?.current?.querySelector('div')?.offsetHeight);
  }, [popoverEl]);

  if (show === undefined)
    throw new Error('Please make sure to define the "show" property on your Popover component');

  const calculateVerticalPlacement = () => {
    const offscreenOffset =
      popoverHeight && window.innerHeight - el.getBoundingClientRect().top < popoverHeight
        ? popoverHeight - (window.innerHeight - el.getBoundingClientRect().top)
        : 0;

    switch (placement?.vertical) {
      case 'top':
        const topTop =
          (el.getBoundingClientRect().top - offscreenOffset + offset.vertical!).toString() + 'px';
        setPosition((prevState) => ({ ...prevState, top: topTop }));
        break;
      case 'center':
        const topCenter =
          (el.getBoundingClientRect().top - offscreenOffset + offset.vertical!).toString() + 'px';
        setPosition((prevState) => ({ ...prevState, top: topCenter }));

        break;
      case 'bottom':
        const topBottom =
          (
            el.getBoundingClientRect().top +
            (offscreenOffset !== 0 ? -offscreenOffset : el.offsetHeight) +
            offset.vertical!
          ).toString() + 'px';
        setPosition((prevState) => ({ ...prevState, top: topBottom }));
        break;
    }
  };

  const calculateHorizontalLeftPlacement = () => {
    const offscreenOffset =
      popoverWidth && window.innerWidth - el.getBoundingClientRect().left < popoverWidth
        ? popoverWidth - (window.innerWidth - el.getBoundingClientRect().left)
        : 0;
    switch (placement?.horizontal) {
      case 'start':
        const leftStart =
          (el.getBoundingClientRect().left - offscreenOffset + offset.horizontal!).toString() +
          'px';
        setPosition((prevState) => ({ ...prevState, left: leftStart, right: 'initial' }));
        break;
      case 'center':
        const leftCenter =
          (
            el.getBoundingClientRect().left -
            (offscreenOffset !== 0 ? offscreenOffset : -el.offsetWidth / 2) +
            offset.horizontal!
          ).toString() + 'px';

        setPosition((prevState) => ({ ...prevState, left: leftCenter, right: 'initial' }));

        break;
      case 'end':
        const leftEnd =
          (
            el.getBoundingClientRect().left +
            (offscreenOffset !== 0 ? -offscreenOffset : el.offsetWidth) +
            offset.horizontal!
          ).toString() + 'px';
        setPosition((prevState) => ({ ...prevState, left: leftEnd, right: 'initial' }));
        break;
    }
  };

  const calculateHorizontalRightPlacement = () => {
    const offscreenOffset =
      popoverWidth && el.getBoundingClientRect().right < popoverWidth
        ? popoverWidth - el.getBoundingClientRect().right
        : 0;
    switch (placement?.horizontal) {
      case 'end':
        const rightEnd =
          (
            window.innerWidth -
            (el.getBoundingClientRect().right + offscreenOffset) +
            offset.horizontal!
          ).toString() + 'px';
        setPosition((prevState) => ({ ...prevState, right: rightEnd, left: 'initial' }));
        break;
      case 'center':
        const rightCenter =
          (
            window.innerWidth -
            (el.getBoundingClientRect().right +
              (offscreenOffset !== 0 ? offscreenOffset : -el.offsetWidth / 2)) +
            offset.horizontal!
          ).toString() + 'px';
        setPosition((prevState) => ({ ...prevState, right: rightCenter, left: 'initial' }));
        break;
      case 'start':
        const rightStart =
          (
            window.innerWidth -
            (el.getBoundingClientRect().right +
              (offscreenOffset !== 0 ? offscreenOffset : -el.offsetWidth)) +
            offset.horizontal!
          ).toString() + 'px';
        setPosition((prevState) => ({ ...prevState, right: rightStart, left: 'initial' }));
    }

    console.log(position);
  };

  useEffect(() => {
    if (show && anchorEl && popoverEl.current) {
      if (placement?.vertical) {
        console.log('calculating vertical placement...');
        calculateVerticalPlacement();
      }

      if (placement?.horizontal && transformOrigin === 'left') {
        console.log('calculating left placement....');
        calculateHorizontalLeftPlacement();
      }

      if (placement?.horizontal && transformOrigin === 'right') {
        console.log('calculating right placement....');
        calculateHorizontalRightPlacement();
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
