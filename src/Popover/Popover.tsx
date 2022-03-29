import React, { HTMLProps, ReactNode, useEffect, useRef, useState } from 'react';
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
  children?: ReactNode;
  placement?: Placement;
  offset?: Offset;
  show?: boolean;
  anchorEl?: ReactNode;
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
  const [popoverWidth, setPopoverWidth] = useState<number | undefined>(undefined);
  const [popoverHeight, setPopoverHeight] = useState<number | undefined>(undefined);
  const el = anchorEl as HTMLElement;

  const calculatePopoverDimensions = () => {
    setPopoverWidth(popoverEl?.current?.querySelector('div')?.offsetWidth);
    setPopoverHeight(popoverEl?.current?.querySelector('div')?.offsetHeight);
  };

  if (show === undefined)
    throw new Error('Please make sure to define the "show" property on your Popover component');

  const calculateVerticalPlacement = () => {
    const offscreenOffset =
      popoverHeight && window.innerHeight - el.getBoundingClientRect().top < popoverHeight
        ? popoverHeight - (window.innerHeight - el.getBoundingClientRect().top)
        : 0;

    switch (placement?.vertical) {
      case 'top':
        const topTop = el.getBoundingClientRect().top - offscreenOffset + offset.vertical! + 'px';
        setPosition((prevState) => ({ ...prevState, top: topTop }));
        break;
      case 'center':
        const topCenter =
          el.getBoundingClientRect().top -
          offscreenOffset +
          el.offsetHeight / 2 +
          offset.vertical! +
          'px';
        setPosition((prevState) => ({ ...prevState, top: topCenter }));

        break;
      case 'bottom':
        const topBottom =
          el.getBoundingClientRect().top +
          (offscreenOffset !== 0 ? -offscreenOffset : el.offsetHeight) +
          offset.vertical! +
          'px';
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
          el.getBoundingClientRect().left - offscreenOffset + offset.horizontal! + 'px';
        setPosition((prevState) => ({ ...prevState, left: leftStart, right: 'initial' }));
        break;
      case 'center':
        const leftCenter =
          el.getBoundingClientRect().left -
          (offscreenOffset !== 0 ? offscreenOffset : -el.offsetWidth / 2) +
          offset.horizontal! +
          'px';

        setPosition((prevState) => ({ ...prevState, left: leftCenter, right: 'initial' }));

        break;
      case 'end':
        const leftEnd =
          el.getBoundingClientRect().left +
          (offscreenOffset !== 0 ? -offscreenOffset : el.offsetWidth) +
          offset.horizontal! +
          'px';
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
          window.innerWidth -
          (el.getBoundingClientRect().right + offscreenOffset) +
          offset.horizontal! +
          'px';
        setPosition((prevState) => ({ ...prevState, right: rightEnd, left: 'initial' }));
        break;
      case 'center':
        const rightCenter =
          window.innerWidth -
          (el.getBoundingClientRect().right +
            (offscreenOffset !== 0 ? offscreenOffset : -el.offsetWidth / 2)) +
          offset.horizontal! +
          'px';
        setPosition((prevState) => ({ ...prevState, right: rightCenter, left: 'initial' }));
        break;
      case 'start':
        const rightStart =
          window.innerWidth -
          (el.getBoundingClientRect().right +
            (offscreenOffset !== 0 ? offscreenOffset : -el.offsetWidth)) +
          offset.horizontal! +
          'px';
        setPosition((prevState) => ({ ...prevState, right: rightStart, left: 'initial' }));
    }
  };

  useEffect(() => {
    calculatePopoverDimensions();

    if (show && anchorEl && popoverWidth !== undefined && popoverHeight !== undefined) {
      if (placement?.vertical) {
        calculateVerticalPlacement();
      }

      if (placement?.horizontal && transformOrigin === 'left') {
        calculateHorizontalLeftPlacement();
      }

      if (placement?.horizontal && transformOrigin === 'right') {
        calculateHorizontalRightPlacement();
      }

      setPositionCalculationFinished(true);
    } else if (!show) {
      setPositionCalculationFinished(false);
    }
  }, [show, popoverWidth, popoverHeight]);

  return (
    <div {...rest} ref={popoverEl}>
      {show && (
        <div
          className={`${classes.popover} ${className ?? ''} ${
            positionCalculationFinished ? classes.show : ''
          }`}
          style={{ top: position.top, left: position.left, right: position.right }}
        >
          {children}
        </div>
      )}
    </div>
  );
};
