import React, { useEffect, useRef } from 'react';
import classes from './BaseModal.module.scss';

export interface Props {
  id: string;
  children: React.ReactNode;
  open: boolean;
  onClose?: (event?: React.MouseEvent<HTMLElement>) => unknown;
  className?: string;
  containerClassName?: string;
  labelledby?: string;
  describedby?: string;
}

export const labelId = (id: string) => `${id}-label`;
export const descriptionId = (id: string) => `${id}-description`;

const useBackdropOnCloseClick = (
  onClose?: (event?: React.MouseEvent<HTMLElement>) => unknown
) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const onBackdropClick = () => onClose && onClose();

  useEffect(() => {
    onClose && backdropRef.current?.addEventListener('click', onBackdropClick);
    return () => {
      onClose &&
        backdropRef.current?.removeEventListener('click', onBackdropClick);
    };
  }, []);

  return {
    backdropRef,
  };
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
}: Props) => {
  const { backdropRef } = useBackdropOnCloseClick(onClose);

  return (
    <div
      id={id}
      className={`${classes['modal']} ${
        open && classes['visible']
      } ${className}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledby || labelId(id)}
      aria-describedby={describedby || descriptionId(id)}
      tabIndex={-1}
    >
      <div ref={backdropRef} className={classes['backdrop']}></div>
      {open && (
        <div className={`${classes['container']} ${containerClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
};
