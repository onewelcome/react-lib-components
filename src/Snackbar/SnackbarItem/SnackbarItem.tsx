import React, { useEffect, useRef, useState } from 'react';
import { IconButton } from '../../Button/IconButton';
import { Icon, Icons } from '../../Icon/Icon';
import { Variant, Actions } from '../interfaces';
import classes from './SnackbarItem.module.scss';
import readyclasses from '../../readyclasses.module.scss';

const textColor = 'var(--snackbar-text-color)';

export interface Props {
  id: string;
  title: string;
  duration: number;
  variant: Variant;
  onClose: (key: string) => void;
  content?: string;
  actions?: Actions;
}

const useAnimation = <RefElement extends HTMLElement>(callback: () => void) => {
  const animatedObjectRef = useRef<RefElement>(null);
  /** We need to store flag that says us when to call the callback - there might be other animation already applied */
  const [animationStarted, setAnimationStarted] = useState(false);

  const onAnimationEnd = () => animationStarted && callback();

  useEffect(() => {
    animatedObjectRef.current?.addEventListener('animationend', onAnimationEnd);
    return () => animatedObjectRef.current?.removeEventListener('animationend', onAnimationEnd);
  }, [animationStarted]);

  return {
    ref: animatedObjectRef,
    animationStarted,
    startAnimation: () => setAnimationStarted(true),
  };
};

export const SnackbarItem = ({
  id,
  title,
  duration,
  variant,
  content,
  actions = [],
  onClose,
}: Props) => {
  const onAnimationEnd = () => onClose(id);
  const { ref, animationStarted, startAnimation } = useAnimation<HTMLDivElement>(onAnimationEnd);

  useEffect(() => {
    const timer = setTimeout(() => startAnimation(), duration);
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
    >
      <Icon icon={variantIcon} className={classes['icon']} />
      <div className={classes['container']}>
        <div className={classes['headline']}>
          {/* @TODO: change it to Typography*/}
          <h4 className={classes['title']} style={{ fontSize: 20, lineHeight: '24px' }}>
            {title}
          </h4>
          <IconButton
            onClick={() => startAnimation()}
            className={classes['close-btn']}
            title="close modal"
          >
            <Icon icon={Icons.Times} color={textColor} />
          </IconButton>
        </div>
        {/* @TODO: change it to Typography*/}
        {!!content && <p className={classes['content']}>{content}</p>}
        {actionButtons.length > 0 && <div className={classes['actions']}>{actionButtons}</div>}
      </div>
    </div>
  );
};
