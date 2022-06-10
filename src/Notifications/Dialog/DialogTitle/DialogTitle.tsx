import React, { ComponentPropsWithRef } from 'react';
import { Typography } from '../../../Typography/Typography';
import classes from './DialogTitle.module.scss';

export interface Props extends ComponentPropsWithRef<'div'> {
  id: string;
  title: string;
}

export const DialogTitle = React.forwardRef<HTMLDivElement, Props>(
  ({ id, title, ...rest }: Props, ref) => {
    return (
      <div {...rest} ref={ref} className={classes['header']}>
        <Typography id={id} className={classes['title']} tag="h1" variant="h4">
          {title}
        </Typography>
      </div>
    );
  }
);
