import React from 'react';
import { BaseModal } from '../BaseModal/BaseModal';

export interface Props {
  id: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ id, open, onClose, children }: Props) => {
  return (
    <BaseModal id={id} onClose={onClose} open={open}>
      {children}
    </BaseModal>
  );
};
