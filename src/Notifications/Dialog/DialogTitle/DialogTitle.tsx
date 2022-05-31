import React from 'react';
import { Typography } from '../../../Typography/Typography';
import classes from './DialogTitle.module.scss';

export interface Props {
  id: string;
  title: string;
}

export const DialogTitle = ({ id, title }: Props) => {
  return (
    <div className={classes['header']}>
      <Typography id={id} className={classes['title']} tag="h1" variant="h4">
        {title}
      </Typography>
    </div>
  );
};
