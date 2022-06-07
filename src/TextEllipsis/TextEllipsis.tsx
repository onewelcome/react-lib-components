import React, { useRef, MouseEventHandler, useState } from 'react';
import { HTMLProps } from '../interfaces';
import { Popover } from '../Popover/Popover';
import classes from './TextEllipsis.module.scss';

export interface Props extends HTMLProps<HTMLDivElement> {
  children?: string;
}

export const TextEllipsis = ({ children, ...rest }: Props) => {
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
      ref={textContainer}
      {...rest}
    >
      {children}
      <Popover
        aria-hidden={!showPopover}
        show={showPopover}
        anchorEl={textContainer}
        className={classes.popover}
      >
        {children}
      </Popover>
    </div>
  );
};
