import React from 'react';
import classes from './DialogTitle.module.scss';

export interface Props {
  title: string;
}

export const DialogTitle = ({ title }: Props) => {
  return (
    <div className={classes['header']}>
      <h4
        style={{
          margin: 0,
          fontSize: 20,
          lineHeight: '30px',
          padding: 0,
        }}
      >
        {title}
      </h4>
    </div>
  );
};
