import React, { useState } from 'react';
import { Props as ModalProps, Modal } from '../Modal/Modal';
import classes from './SlideInModal.module.scss';

export const SlideInModal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ children, id, open, ...rest }: ModalProps, ref) => {
    const [classHideOnTransition, setClassHideOnTransition] = useState<'hidden' | ''>('hidden');

    const onTransitionEnd = () => setClassHideOnTransition((prev) => (prev ? '' : 'hidden'));

    return (
      <Modal
        {...rest}
        id={id}
        open={open}
        className={`${classes.slideInModal} ${open ? classes.visible : ''} ${
          !open ? classes[classHideOnTransition] : ''
        }`}
        containerClassName={`${classes.container}`}
        backdropClassName={classes['backdrop-slide']}
        forceContainerOpen
        onTransitionEnd={onTransitionEnd}
        ref={ref}
      >
        {children}
      </Modal>
    );
  }
);

export { Props } from '../Modal/Modal';
