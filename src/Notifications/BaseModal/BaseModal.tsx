import React, { ComponentPropsWithRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import classes from './BaseModal.module.scss';
import { labelId, descriptionId } from './BaseModalContext';

const SCROLL_PROPERTY_NAME = 'overflow';
const SCROLL_PROPERTY_VALUE = 'hidden';

export interface Props extends ComponentPropsWithRef<'div'> {
  id: string;
  children: React.ReactNode;
  open: boolean;
  onClose?: (event?: React.MouseEvent<HTMLElement>) => unknown;
  className?: string;
  containerProps?: ComponentPropsWithRef<'div'>;
  backdropProps?: ComponentPropsWithRef<'div'>;
  labelledby?: string;
  describedby?: string;
  disableEscapeKeyDown?: boolean;
  disableBackdrop?: boolean;
  forceContainerOpen?: boolean;
  zIndex?: number;
  domRoot?: HTMLElement;
}

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

export const BaseModal = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      id,
      children,
      open,
      onClose,
      className = '',
      containerProps,
      backdropProps,
      labelledby,
      describedby,
      disableEscapeKeyDown = false,
      disableBackdrop = false,
      forceContainerOpen = false,
      zIndex,
      domRoot = document.body,
      ...rest
    }: Props,
    ref
  ) => {
    useSetBodyScroll(open);

    const handleEscKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!disableEscapeKeyDown && event.key === 'Escape') {
        event.stopPropagation();
        onClose && onClose();
      }
    };

    const handleBackdropClick = () => !disableBackdrop && onClose && onClose();

    return createPortal(
      <div
        {...rest}
        ref={ref}
        id={id}
        className={`${classes['modal']} ${open ? classes['visible'] : ''} ${className}`}
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
        <div
          {...backdropProps}
          className={`${classes['backdrop']} ${backdropProps?.className ?? ''}`}
          onClick={handleBackdropClick}
        ></div>
        {forceContainerOpen ? (
          <div
            {...containerProps}
            aria-hidden={!open}
            hidden={!open}
            style={{ zIndex: zIndex && zIndex + 1 }}
            className={`${classes['container']} ${containerProps?.className ?? ''}`}
          >
            {children}
          </div>
        ) : (
          open && (
            <div
              {...containerProps}
              style={{ zIndex: zIndex && zIndex + 1 }}
              className={`${classes['container']} ${containerProps?.className ?? ''}`}
            >
              {children}
            </div>
          )
        )}
      </div>,
      domRoot
    );
  }
);
