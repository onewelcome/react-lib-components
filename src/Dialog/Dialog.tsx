import React from 'react';
import { BaseModal, descriptionId, labelId } from '../BaseModal/BaseModal';
import { BaseModalContent } from '../BaseModal/BaseModalContent/BaseModalContent';
import { DialogActions } from './DialogActions/DialogActions';
import classes from './Dialog.module.scss';
import { DialogTitle } from './DialogTitle/DialogTitle';
import { Button } from '../Button/Button';

export interface Props {
  id: string;
  open: boolean;
  children: React.ReactNode;
  type: 'non-destructive' | 'destructive';
  title: string;
  primaryAction: Action;
  secondaryAction?: Action;
}

export interface Action {
  label: string;
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => unknown;
}

export const Dialog = ({
  id,
  open,
  children,
  type,
  title,
  primaryAction,
  secondaryAction,
}: Props) => {
  const PrimaryButton = (
    <Button key="primary" onClick={primaryAction.onClick}>
      {primaryAction.label}
    </Button>
  );
  const TertiaryButton = secondaryAction && (
    <Button key="tertiary" onClick={secondaryAction.onClick} variant="text">
      {secondaryAction.label}
    </Button>
  );

  const onHiddenInputKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      primaryAction.onClick();
    }
  };

  return (
    <BaseModal
      id={id}
      className={classes['dialog']}
      containerClassName={classes['container']}
      open={open}
    >
      <DialogTitle id={labelId(id)} title={title} />
      <BaseModalContent id={descriptionId(id)} classname={classes['content']}>
        {children}
      </BaseModalContent>
      <DialogActions alignment={type === 'destructive' ? 'left' : 'right'}>
        {type === 'destructive'
          ? [PrimaryButton, TertiaryButton]
          : [TertiaryButton, PrimaryButton]}
      </DialogActions>
      <input
        autoFocus
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          opacity: 0,
        }}
        onKeyPress={onHiddenInputKeyPress}
      />
    </BaseModal>
  );
};
