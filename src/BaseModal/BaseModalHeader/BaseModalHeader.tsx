import React from 'react';
import classes from './BaseModalHeader.module.scss';

export interface Props {
  children?: React.ReactNode;
  onClose: () => void;
}

export const BaseModalHeader = ({
  children,
  onClose,
}: // labeledby,
// description,
Props) => {
  return (
    <div className={classes['header']}>
      <div className={classes['headline']}>
        <h1
          className={classes['title']}
          style={{
            margin: 0,
            marginLeft: 20,
            fontSize: 20,
            lineHeight: '30px',
            padding: 0,
          }}
        >
          Title modal heading
        </h1>
        <button
          onClick={onClose}
          type="button"
          className={classes['closeBtn']}
          aria-label="close modal"
        >
          X
        </button>
      </div>
      {children}
    </div>
  );
};
