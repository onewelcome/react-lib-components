import React from 'react';
import { Props as ModalProps, Modal } from '../Modal/Modal';

export const SlideInModal = ({ children, id, open, ...rest }: ModalProps) => {
  return (
    <Modal {...rest} id={id} open={open}>
      {children}
    </Modal>
  );
};

export { Props } from '../Modal/Modal';
