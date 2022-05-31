import React, { HTMLProps, ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Icon, Icons } from '../Icon/Icon';
import classes from './Tooltip.module.scss';
import { generateID } from '../util/helper';
import { Offset, Placement, usePosition } from '../hooks/usePosition';
import { createPortal } from 'react-dom';

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'label'> {
  label: string | ReactNode;
  children: string;
  placement?: Placement;
  offset?: Offset;
  transformOrigin?: Placement;
  domRoot?: HTMLElement;
}

interface DefaultPosition {
  placement: Placement;
  offset: Offset;
  transformOrigin: Placement;
}

const defaultPosition: DefaultPosition = {
  placement: { horizontal: 'right', vertical: 'center' },
  offset: { left: 16, right: 0, top: 0, bottom: 0 },
  transformOrigin: { horizontal: 'left', vertical: 'center' },
};

export const Tooltip = ({
  children,
  className,
  placement = defaultPosition.placement,
  offset = defaultPosition.offset,
  transformOrigin = defaultPosition.transformOrigin,
  domRoot = document.body,
  label,
  ...rest
}: Props) => {
  const [identifier] = useState(generateID());
  const [visible, setVisible] = useState(false);

  const relativeElement = useRef<HTMLOrSVGElement>(null);
  const elementToBePositioned = useRef<HTMLDivElement>(null);

  const { top, bottom, right, left, calculatePosition } = usePosition({
    relativeElement: relativeElement,
    elementToBePositioned: elementToBePositioned,
    placement: placement,
    offset: offset,
    transformOrigin: transformOrigin,
  });

  useEffect(() => {
    if (!visible) return;

    function escapePressHandler(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setVisible(false);
      }
    }

    document.addEventListener('keyup', escapePressHandler);

    return () => {
      document.removeEventListener('keyup', escapePressHandler);
    };
  }, [visible]);

  useLayoutEffect(() => {
    calculatePosition();
  }, [visible]);

  const renderChildren = () => {
    if (React.isValidElement(label)) {
      return React.cloneElement(label, {
        onFocus: () => setVisible(true),
        onBlur: () => setVisible(false),
        'aria-describedby': identifier,
        tabIndex: 0,
        className: classes['label'],
      });
    }

    return (
      <span
        className={classes['label']}
        tabIndex={0}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        aria-describedby={identifier}
      >
        {label}
      </span>
    );
  };

  return (
    <div {...rest} className={`${classes.wrapper} ${className ?? ''}`}>
      {renderChildren()}
      <div className={`${classes['tooltip-wrapper']}`}>
        <Icon
          ref={relativeElement}
          tag="div"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          icon={Icons.InfoCircle}
          className={classes.icon}
        />
        {createPortal(
          <div
            ref={elementToBePositioned}
            style={{
              ...rest.style,
              top: top,
              left: left,
              right: right,
              bottom: bottom,
            }}
            aria-hidden={!visible}
            id={identifier}
            className={`${classes.tooltip} ${visible ? classes.visible : ''}`}
          >
            {children}
          </div>,
          domRoot
        )}
      </div>
    </div>
  );
};
