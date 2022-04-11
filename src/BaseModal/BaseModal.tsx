import React, { useEffect, useRef } from 'react';
import { HTMLAttributes } from '../interfaces';
import classes from './BaseModal.module.scss';
import { labelId, descriptionId } from './BaseModalContext';

const SCROLL_PROPERTY_NAME = 'overflow';
const SCROLL_PROPERTY_VALUE = 'hidden';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  id: string;
  children: React.ReactNode;
  open: boolean;
  onClose?: (event?: React.MouseEvent<HTMLElement>) => unknown;
  className?: string;
  containerClassName?: string;
  labelledby?: string;
  describedby?: string;
  disableEscapeKeyDown?: boolean;
  disableBackdrop?: boolean;
  zIndex?: number;
}

const useBackdropOnCloseClick = (
  disableBackdrop: boolean,
  onClose?: (event?: React.MouseEvent<HTMLElement>) => unknown
) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const onBackdropClick = () => onClose && onClose();

  useEffect(() => {
    !disableBackdrop && backdropRef.current?.addEventListener('click', onBackdropClick);
    return () => {
      !disableBackdrop && backdropRef.current?.removeEventListener('click', onBackdropClick);
    };
  }, []);

  return {
    backdropRef,
  };
};

export const useSetBodyScroll = (open: boolean) => {
  const hideBodyScroll = () => {
    document.body.style[SCROLL_PROPERTY_NAME] = SCROLL_PROPERTY_VALUE;
  };

  const showBodyScroll = () => {
    const allModalsClosed =
      document.querySelectorAll('[role=dialog][data-hidden=false]').length === 0;
    if (allModalsClosed) {
      document.body.style.removeProperty(SCROLL_PROPERTY_NAME);
    }
  };

  useEffect(() => {
    if (open) {
      hideBodyScroll();
    } else {
      showBodyScroll();
    }
  }, [open]);
};

export const BaseModal = ({
  id,
  children,
  open,
  onClose,
  className = '',
  containerClassName = '',
  labelledby,
  describedby,
  disableEscapeKeyDown = false,
  disableBackdrop = false,
  zIndex,
  ...restProps
}: Props) => {
  const { backdropRef } = useBackdropOnCloseClick(disableBackdrop, onClose);
  useSetBodyScroll(open);

  const handleEscKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!disableEscapeKeyDown && event.key === 'Escape') {
      event.stopPropagation();
      onClose && onClose();
    }
  };

  return (
    <div
      {...restProps}
      id={id}
      className={`${classes['modal']} ${open && classes['visible']} ${className}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledby || labelId(id)}
      aria-describedby={describedby || descriptionId(id)}
      aria-hidden={!open}
      tabIndex={-1}
      data-hidden={!open}
      onKeyDown={handleEscKeyPress}
      style={{ zIndex }}
    >
      <div ref={backdropRef} className={classes['backdrop']}></div>
      {open && (
        <div
          style={{ zIndex: zIndex && zIndex + 1 }}
          className={`${classes['container']} ${containerClassName}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};
