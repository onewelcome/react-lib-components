import React from 'react';
import { BaseModal } from '../BaseModal/BaseModal';
import { BaseModalContent } from '../BaseModal/BaseModalContent/BaseModalContent';
import { DialogActions } from './DialogActions/DialogActions';
import classes from './Dialog.module.scss';
import { DialogTitle } from './DialogTitle/DialogTitle';

export interface Props {
  open: boolean;
  onClose: () => void;
}

export const Dialog = ({ open, onClose }: Props) => {
  return (
    <>
      <BaseModal
        id="id"
        containerClassName={classes['container']}
        onClose={onClose}
        open={open}
      >
        <DialogTitle title="Unsaved changes" />
        <BaseModalContent classname={classes['content']}>
          <p style={{ margin: 0 }}>
            You have unsaved changes that will be lost.
            <br /> Do you want to discard them?
          </p>
        </BaseModalContent>
        <DialogActions>
          <button type="button" className="">
            Cancel
          </button>
          <button type="button" className="">
            Accept
          </button>
        </DialogActions>
      </BaseModal>
    </>
  );
};
