import React, { ComponentPropsWithRef } from 'react';
import classes from './BaseModalHeader.module.scss';
import { IconButton } from '../../../Button/IconButton';
import { Icon, Icons } from '../../../Icon/Icon';
import { Typography } from '../../../Typography/Typography';

export interface Props extends ComponentPropsWithRef<'div'> {
  id: string;
  title: string;
  children?: React.ReactNode;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const BaseModalHeader = React.forwardRef<HTMLDivElement, Props>(
  ({ id, title, children, onClose, ...rest }: Props, ref) => {
    return (
      <div {...rest} ref={ref} className={classes['header']}>
        <div className={classes['headline']}>
          <Typography id={id} className={classes['title']} tag="h1" variant="h4">
            {title}
          </Typography>
          <IconButton onClick={onClose} className={classes['closeBtn']} title="close modal">
            <Icon icon={Icons.Times} />
          </IconButton>
        </div>
        {children}
      </div>
    );
  }
);
