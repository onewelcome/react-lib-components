import React, { ReactNode, useRef, useEffect, MouseEventHandler, useState } from 'react';
import { HTMLProps } from '../interfaces';
import { Popover } from '../Popover/Popover';
import { Typography, Variant } from '../Typography/Typography';
import classes from './TextEllipsis.module.scss';

export interface Props extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  variant: Variant;
}

export const TextEllipsis = ({ children, variant, ...rest }: Props) => {
  const [showPopover, setShowPopover] = useState(false);
  const textContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

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

  const wrapperOnMouseEnter: MouseEventHandler<HTMLDivElement> = () => {
    ellipsisVisible() && setShowPopover(true);
  };

  const wrapperOnMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    setShowPopover(false);
  };

  return (
    <div>
      <Typography
        {...rest}
        className={classes['text-ellipsis']}
        ref={textContainer}
        onMouseEnter={wrapperOnMouseEnter}
        onMouseLeave={wrapperOnMouseLeave}
        variant={variant}
      >
        {children}
      </Typography>
      <Popover show={showPopover} anchorEl={textContainer}>
        {children}
      </Popover>
    </div>
  );
};
