import React from 'react';
import classes from './BaseModalHeader.module.scss';
import { IconButton } from '../../Button/IconButton';
import { Close } from '@material-ui/icons';

export interface Props {
  id: string;
  title: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export const BaseModalHeader = ({
  id,
  title,
  children,
  onClose,
}: // labeledby,
// description,
Props) => {
  return (
    <div className={classes['header']}>
      <div className={classes['headline']}>
        <h4
          id={id}
          className={classes['title']}
          style={{
            margin: 0,
            marginLeft: 20,
            fontSize: 20,
            lineHeight: '30px',
            padding: 0,
          }}
        >
          {title}
        </h4>
        <IconButton
          onClick={onClose}
          className={classes['closeBtn']}
          aria-label="close modal"
        >
          <Close />
        </IconButton>
      </div>
      {children}
    </div>
  );
};
