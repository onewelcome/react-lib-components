import React from 'react';
import classes from './BaseModal.module.scss';
import { useBackdropOnCloseClick } from './useBackdropOnCloseClick';
import { useSetBodyScroll } from './useSetBodyScroll';

export interface Props {
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
}

export const labelId = (id: string) => `${id}-label`;
export const descriptionId = (id: string) => `${id}-description`;

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
      id={id}
      className={`${classes['modal']} ${open && classes['visible']} ${className}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledby || labelId(id)}
      aria-describedby={describedby || descriptionId(id)}
      tabIndex={-1}
      data-hidden={!open}
      onKeyDown={handleEscKeyPress}
    >
      <div data-testid="backdrop" ref={backdropRef} className={classes['backdrop']}></div>
      {open && <div className={`${classes['container']} ${containerClassName}`}>{children}</div>}
    </div>
  );
};
