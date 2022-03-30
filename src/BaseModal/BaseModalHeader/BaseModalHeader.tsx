import React, { HTMLAttributes } from 'react';
import classes from './BaseModalHeader.module.scss';
import { IconButton } from '../../Button/IconButton';
import { Icon, Icons } from '../../Icon/Icon';
import { Typography } from '../../Typography/Typography';

export interface Props extends HTMLAttributes<HTMLElement> {
  id: string;
  title: string;
  children?: React.ReactNode;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const BaseModalHeader = ({ id, title, children, onClose, ...restProps }: Props) => {
  return (
    <header {...restProps} className={classes['header']}>
      <div className={classes['headline']}>
        <Typography id={id} className={classes['title']} tag="h1" variant="h4">
          {title}
        </Typography>
        <IconButton onClick={onClose} className={classes['closeBtn']} title="close modal">
          <Icon icon={Icons.Times} />
        </IconButton>
      </div>
      {children}
    </header>
  );
};
