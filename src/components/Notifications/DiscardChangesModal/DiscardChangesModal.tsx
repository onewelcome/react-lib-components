/*
 * Copyright 2022 OneWelcome B.V.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import React, { Fragment, useState } from "react";
import { Modal, Props as ModalProps } from "../Modal/Modal";
import { ModalHeader, Props as ModalHeaderProps } from "../Modal/ModalHeader/ModalHeader";
import {
  DiscardChangesDialog,
  Props as DiscardChangesDialogProps
} from "./DiscardChangesDialog/DiscardChangesDialog";

export interface Props extends Omit<ModalProps, "onClose"> {
  hasUnsavedChanges: () => boolean;
  onClose: (event?: React.MouseEvent<HTMLElement>) => unknown;
  headerProps: Omit<ModalHeaderProps, "onClose" | "id">;
  discardChangedDialogProps: Omit<
    DiscardChangesDialogProps,
    "open" | "onKeepEditing" | "onDiscardChanges"
  >;
  modalRef?: React.RefObject<HTMLDivElement>;
  dialogRef?: React.RefObject<HTMLDivElement>;
}

export const DiscardChangesModal = ({
  id,
  children,
  headerProps,
  discardChangedDialogProps,
  modalRef,
  dialogRef,
  onClose,
  hasUnsavedChanges,
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
      <Modal id={id} ref={modalRef} onClose={onCloseWrapper} {...rest}>
        <ModalHeader {...headerProps} id={`${id}-label`} onClose={onCloseWrapper} />
        {children}
      </Modal>
      <DiscardChangesDialog
        {...discardChangedDialogProps}
        ref={dialogRef}
        open={openDiscardChangesDialog}
        onKeepEditing={onDialogKeepEditing}
        onDiscardChanges={onDialogDiscardChanges}
      />
    </Fragment>
  );
};
