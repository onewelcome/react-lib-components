import React, { Fragment, useState } from 'react';
import { Modal, Props as ModalProps } from '../Modal/Modal';
import { ModalHeader, Props as ModalHeaderProps } from '../Modal/ModalHeader/ModalHeader';
import {
  DiscardChangesDialog,
  Props as DiscardChangesDialogProps,
} from './DiscardChangesDialog/DiscardChangesDialog';

export interface Props extends Omit<ModalProps, 'onClose'> {
  hasUnsavedChanges: () => boolean;
  onClose: (event?: React.MouseEvent<HTMLElement>) => unknown;
  headerProps: Omit<ModalHeaderProps, 'onClose' | 'id'>;
  discardChangedDialogProps: Omit<
    DiscardChangesDialogProps,
    'open' | 'onKeepEditing' | 'onDiscardChanges'
  >;
}

export const DiscardChangesModal = ({
  id,
  onClose,
  children,
  hasUnsavedChanges,
  headerProps,
  discardChangedDialogProps,
  ...rest
}: Props) => {
  const [openDiscardChangesDialog, setOpenDiscardChangesDialog] = useState(false);

  const onCloseWrapper = () =>
    hasUnsavedChanges() ? setOpenDiscardChangesDialog(true) : onClose();

  const onDialogKeepEditing = () => {
    setOpenDiscardChangesDialog(false);
  };

  const onDialogDiscardChanges = () => {
    setOpenDiscardChangesDialog(false);
    onClose();
  };

  return (
    <Fragment>
      <Modal id={id} onClose={onCloseWrapper} {...rest}>
        <ModalHeader {...headerProps} id={`${id}-label`} onClose={onCloseWrapper} />
        {children}
      </Modal>
      <DiscardChangesDialog
        {...discardChangedDialogProps}
        open={openDiscardChangesDialog}
        onKeepEditing={onDialogKeepEditing}
        onDiscardChanges={onDialogDiscardChanges}
      />
    </Fragment>
  );
};
