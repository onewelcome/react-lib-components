import React, { useEffect } from 'react';
import { IconButton } from '../../Button/IconButton';
import { Icon, Icons } from '../../Icon/Icon';
import { Variant, Actions } from '../interfaces';
import classes from './SnackbarItem.module.scss';

const textColor = 'var(--snackbar-text-color)';

interface SnackbarItemProps {
  id: string;
  title: string;
  duration: number;
  variant: Variant;
  content?: string;
  actions?: Actions;
  onClose: (key: string) => void;
}

export const SnackbarItem = ({
  id,
  title,
  duration,
  variant,
  content,
  actions = [],
  onClose,
}: SnackbarItemProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration * 100);
    return () => clearTimeout(timer);
  }, []);

  const variantIcon =
    variant === 'error'
      ? Icons.TimesCircleAlt
      : variant === 'success'
      ? Icons.CheckmarkCircleBreakout
      : Icons.InfoCircle;

  const actionButtons = actions.map((actionProp, index) => (
    <button
      key={index}
      {...actionProp}
      onClick={(e) => {
        onClose(id);
        actionProp.onClick && actionProp.onClick(e);
      }}
    ></button>
  ));

  return (
    <div className={`${classes['snackbar']} ${classes[variant]}`}>
      <div className={classes['headline']}>
        <Icon icon={variantIcon} className={classes['icon']} />
        {/* @TODO: change it */}
        <h4 className={classes['title']} style={{ fontSize: 20, lineHeight: '24px' }}>
          {title}
        </h4>
        <IconButton
          onClick={() => onClose(id)}
          className={classes['close-btn']}
          title="close modal"
        >
          <Icon icon={Icons.Times} color={textColor} />
        </IconButton>
      </div>
      {/* @TODO: change it */}
      {!!content && <p className={classes['content']}>{content}</p>}
      {actionButtons}
    </div>
  );
};
