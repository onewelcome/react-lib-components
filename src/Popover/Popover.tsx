import React, { forwardRef, HTMLProps, ReactNode, RefObject, useEffect, useRef } from 'react';
import { usePosition, Offset, Placement } from '../hooks/usePosition';
import classes from './Popover.module.scss';

export interface Props extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  show?: boolean;
  anchorEl?: RefObject<HTMLOrSVGElement>;
  placement?: Placement;
  offset?: Offset;
  transformOrigin?: Placement;
}

export const Popover = forwardRef<HTMLDivElement, Props>(
  ({ children, className, show, placement, offset, transformOrigin, anchorEl, ...rest }, ref) => {
    const elToBePositioned = useRef<HTMLDivElement>(null);

    if (show === undefined) {
      throw new Error('Please make sure to define the "show" property on your Popover component');
    }

    const { top, left, right, bottom, calculatePosition } = usePosition({
      elementToBePositioned: elToBePositioned,
      relativeElement: anchorEl,
      offset: offset,
      placement: placement,
      transformOrigin: transformOrigin,
    });

    useEffect(() => {
      calculatePosition();
    }, [show]);

    return (
      <div ref={ref} role="tooltip" {...rest}>
        <div
          ref={elToBePositioned}
          className={`${classes.popover} ${className ?? ''} ${show ? classes.show : ''}`}
          style={{ top: top, left: left, right: right, bottom: bottom }}
        >
          {children}
        </div>
      </div>
    );
  }
);
