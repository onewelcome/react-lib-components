import React from 'react';
import { BaseModal, descriptionId, labelId } from '../BaseModal/BaseModal';
import { BaseModalContent } from '../BaseModal/BaseModalContent/BaseModalContent';
import { DialogActions } from './DialogActions/DialogActions';
import classes from './Dialog.module.scss';
import { DialogTitle } from './DialogTitle/DialogTitle';
import { Button, Props as ButtonProps } from '../Button/Button';

export interface Props {
  id: string;
  open: boolean;
  children: React.ReactNode;
  alignActions: 'left' | 'right';
  onClose: () => void;
  title: string;
  primaryAction: Action;
  secondaryAction?: Action;
}

export interface Action extends Omit<ButtonProps, 'variant'> {
  label: string;
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => unknown;
}

export const Dialog = ({
  id,
  open,
  children,
  alignActions,
  onClose,
  title,
  primaryAction,
  secondaryAction,
}: Props) => {
  const { label: primaryLabel, ...restOfPrimaryAction } = primaryAction;
  const PrimaryButton = (
    <Button key="primary" {...restOfPrimaryAction}>
      {primaryLabel}
    </Button>
  );
  const TertiaryButton =
    secondaryAction &&
    (function () {
      const { label: secondaryLabel, ...restOfSecondaryAction } = secondaryAction;
      return (
        <Button key="tertiary" variant="text" {...restOfSecondaryAction}>
          {secondaryLabel}
        </Button>
      );
    })();

  const onHiddenInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    /** It has to be here because then we will need to check if user doesn't click tab to select action button and want to do another action then primary one? */
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
      disableBackdrop
      onClose={onClose}
    >
      <DialogTitle id={labelId(id)} title={title} />
      <BaseModalContent id={descriptionId(id)} classname={classes['content']} disableAutoFocus>
        {children}
      </BaseModalContent>
      <DialogActions align={alignActions}>
        {alignActions === 'left'
          ? [PrimaryButton, TertiaryButton]
          : [TertiaryButton, PrimaryButton]}
      </DialogActions>
      <input
        data-testid="auto-submission"
        autoFocus
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          opacity: 0,
        }}
        tabIndex={-1}
        onKeyPress={onHiddenInputKeyPress}
      />
    </BaseModal>
  );
};
