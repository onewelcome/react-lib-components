import React, { HTMLAttributes, useState } from 'react';
import { BaseModal } from '../BaseModal/BaseModal';
import { BaseModalContent } from '../BaseModal/BaseModalContent/BaseModalContent';
import { DialogActions } from './DialogActions/DialogActions';
import classes from './Dialog.module.scss';
import { DialogTitle } from './DialogTitle/DialogTitle';
import { Button, Props as ButtonProps } from '../../Button/Button';
import { labelId, descriptionId } from '../BaseModal/BaseModalContext';
import { generateID } from '../../util/helper';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  id?: string;
  open: boolean;
  children: React.ReactNode;
  alignActions: 'left' | 'right';
  onClose: () => void;
  title: string;
  primaryAction: Action;
  secondaryAction?: Action;
  zIndex?: number;
}

export interface Action extends Omit<ButtonProps, 'variant' | 'ref'> {
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
  zIndex,
  ...restProps
}: Props) => {
  const [dialogId] = useState(id ?? generateID(20));
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
      {...restProps}
      id={dialogId}
      className={classes['dialog']}
      containerClassName={classes['container']}
      open={open}
      disableBackdrop
      onClose={onClose}
      zIndex={zIndex}
    >
      <DialogTitle id={labelId(dialogId)} title={title} />
      <BaseModalContent
        id={descriptionId(dialogId)}
        className={classes['content']}
        disableAutoFocus
      >
        {children}
      </BaseModalContent>
      <DialogActions align={alignActions}>
        {alignActions === 'left'
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
        tabIndex={-1}
        onKeyPress={onHiddenInputKeyPress}
      />
    </BaseModal>
  );
};
