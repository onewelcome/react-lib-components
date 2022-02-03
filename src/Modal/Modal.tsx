import React from 'react';
import { BaseModal } from '../BaseModal/BaseModal';
import { BaseModalHeader } from '../BaseModal/BaseModalHeader/BaseModalHeader';
import { BaseModalContent } from '../BaseModal/BaseModalContent/BaseModalContent';
import { BaseModalActions } from '../BaseModal/BaseModalActions/BaseModalActions';

export interface Props {
  id: string;
  open: boolean;
  onClose: () => void;
}

export const Modal = ({ id, open, onClose }: Props) => {
  return (
    <BaseModal id={id} onClose={onClose} open={open}>
      <BaseModalHeader
        id={`${id}-label`}
        title="Title modal heading"
        onClose={onClose}
      />
      <BaseModalContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eget lectus bibendum, rutrum risus non, fermentum nibh. Curabitur
          efficitur est nec dui auctor blandit a in magna. Nam non diam rutrum,
          ultrices est eu, dignissim magna. Phasellus orci tortor, venenatis sed
          velit sit amet, posuere aliquet eros. Nulla facilisi.{' '}
        </p>
        <p>
          Integer tempor iaculis est, quis lacinia ipsum tincidunt eget. Sed
          quis velit quis erat efficitur dapibus. Proin vitae justo quis tellus
          sagittis cursus. Duis tempus eu nibh eu pretium.
        </p>
      </BaseModalContent>
      <BaseModalActions>
        <button type="button" className="">
          Cancel
        </button>
        <button type="button" className="">
          Accept
        </button>
      </BaseModalActions>
    </BaseModal>
  );
};
