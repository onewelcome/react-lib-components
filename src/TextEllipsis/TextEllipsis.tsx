import React, { useRef, MouseEventHandler, useState, ComponentPropsWithRef } from 'react';
import { Popover } from '../Popover/Popover';
import classes from './TextEllipsis.module.scss';

export interface Props extends ComponentPropsWithRef<'div'> {
  children?: string;
  popoverClassName?: string;
}

export const TextEllipsis = React.forwardRef<HTMLDivElement, Props>(
  ({ children, popoverClassName, className, ...rest }: Props, ref) => {
    const [showPopover, setShowPopover] = useState(false);
    const textContainer = useRef<HTMLDivElement>(null);

    const ellipsisVisible = () => {
      if (
        textContainer.current &&
        textContainer.current.offsetWidth < textContainer.current.scrollWidth
      ) {
        return true;
      }
      return false;
    };

    const onMouseEnter: MouseEventHandler<HTMLDivElement> = () => {
      ellipsisVisible() && setShowPopover(true);
    };

    const onMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
      ellipsisVisible() && setShowPopover(false);
    };

    return (
      <div
        {...rest}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`${classes['text-ellipsis']} ${className ?? ''}`}
        ref={ref || textContainer}
      >
        {children}
        <Popover
          aria-hidden={true}
          data-hidden={!showPopover}
          show={showPopover}
          role="tooltip"
          anchorEl={textContainer}
          className={`${classes.popover} ${popoverClassName ?? ''}`}
        >
          {children}
        </Popover>
      </div>
    );
  }
);
