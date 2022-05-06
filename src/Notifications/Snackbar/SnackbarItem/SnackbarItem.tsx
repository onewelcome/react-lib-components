import React, { useEffect, useRef } from 'react';
import { IconButton } from '../../../Button/IconButton';
import { Icon, Icons } from '../../../Icon/Icon';
import { Variant, Actions } from '../interfaces';
import classes from './SnackbarItem.module.scss';
import readyclasses from '../../../readyclasses.module.scss';
import { useAnimation } from '../../../hooks/useAnimation';
import { Typography } from '../../../Typography/Typography';

const textColor = 'var(--snackbar-text-color)';

export interface Props {
  id: string;
  title: string;
  duration: number;
  variant: Variant;
  onClose: (key: string) => void;
  closeButtonTitle: string;
  content?: string;
  actions?: Actions;
}

export const SnackbarItem = ({
  id,
  title,
  duration,
  variant,
  content,
  actions = [],
  onClose,
  closeButtonTitle,
}: Props) => {
  const timerHandler = useRef<ReturnType<typeof setTimeout>>();
  const onAnimationEnd = () => onClose(id);
  const { ref, animationStarted, startAnimation } = useAnimation<HTMLDivElement>(onAnimationEnd);

  useEffect(() => {
    timerHandler.current = setTimeout(() => startAnimation(), duration);
    return () => {
      timerHandler.current && clearTimeout(timerHandler.current);
    };
  }, []);

  const onMouseEnter = () => {
    timerHandler.current && clearTimeout(timerHandler.current);
  };

  const onMouseLeave = () => {
    timerHandler.current = setTimeout(() => startAnimation(), duration);
  };

  const getVariantIcon = () => {
    if (variant === 'error') {
      return Icons.TimesCircleAlt;
    }
    return variant === 'success' ? Icons.CheckmarkCircleBreakout : Icons.InfoCircle;
  };

  const actionButtons = actions.map((actionProp, index) => (
    <button
      key={index}
      {...actionProp}
      onClick={(e) => {
        onClose(id);
        actionProp.onClick && actionProp.onClick(e);
      }}
      children={actionProp.label}
      className={classes['action-button']}
    ></button>
  ));

  return (
    <div
      ref={ref}
      className={`${classes['snackbar']} ${classes[variant]} ${
        animationStarted ? readyclasses['slide-out'] : readyclasses['slide-in']
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Icon icon={getVariantIcon()} className={classes['icon']} />
      <div className={classes['container']}>
        <div className={classes['headline']}>
          <Typography className={classes['title']} variant="h4" tag="span">
            {title}
          </Typography>
          <IconButton
            onClick={() => startAnimation()}
            className={classes['close-btn']}
            title={closeButtonTitle}
          >
            <Icon icon={Icons.Times} color={textColor} />
          </IconButton>
        </div>
        {!!content && (
          <Typography className={classes['content']} variant="body">
            {content}
          </Typography>
        )}
        {actionButtons.length > 0 && <div className={classes['actions']}>{actionButtons}</div>}
      </div>
    </div>
  );
};
