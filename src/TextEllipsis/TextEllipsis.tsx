import React, { useRef, MouseEventHandler, useState, ComponentPropsWithRef } from 'react';
import { Popover } from '../Popover/Popover';
import classes from './TextEllipsis.module.scss';

export interface Props extends ComponentPropsWithRef<'div'> {
  children?: string;
  popoverClassName?: string;
}

export const TextEllipsis = React.forwardRef<HTMLDivElement, Props>(
  ({ children, popoverClassName, ...rest }: Props, ref) => {
    const [showPopover, setShowPopover] = useState(false);
    const textContainer = useRef<HTMLDivElement>(null);

    const ellipsisVisible = () => {
      if (
        !textContainer ||
        !textContainer.current?.offsetWidth ||
        !textContainer.current?.scrollWidth
      )
        return false;

      if (textContainer.current.offsetWidth < textContainer.current.scrollWidth) {
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
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={classes['text-ellipsis']}
        ref={ref || textContainer}
        {...rest}
      >
        {children}
        <Popover
          aria-hidden={!showPopover}
          show={showPopover}
          anchorEl={textContainer}
          className={`${classes.popover} ${popoverClassName ? popoverClassName : ''}`}
        >
          {children}
        </Popover>
      </div>
    );
  }
);
