import React from 'react';
import classes from './BaseModal.module.scss';

export interface Props {
  id: string;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  className?: string;
  containerClassName?: string;
  labeledby?: string;
  description?: string;
}

export const BaseModal = ({
  id,
  children,
  open,
  className = '',
  containerClassName = '',
}: // labeledby,
// description,
Props) => {
  return (
    <div
      id={id}
      className={`${classes['modal']} ${
        open && classes['visible']
      } ${className}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${id}-label`}
      aria-describedby={`${id}-description`}
      tabIndex={-1}
    >
      {open && (
        <div className={`${classes['container']} ${containerClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
};
