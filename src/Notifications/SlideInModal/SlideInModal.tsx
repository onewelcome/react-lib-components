import React, { TransitionEventHandler, useState, useRef } from 'react';
import { Props as ModalProps, Modal } from '../Modal/Modal';
import classes from './SlideInModal.module.scss';

export const SlideInModal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ children, id, open, ...rest }: ModalProps, ref) => {
    const [classHideOnTransition, setClassHideOnTransition] = useState<string>('hidden');
    const containerRef = useRef(null);

    const onTransitionEnd: TransitionEventHandler<HTMLDivElement> = (e) => {
      if (e.target === containerRef.current) {
        setClassHideOnTransition((prev) => (prev ? '' : 'hidden'));
      }
    };

    return (
      <Modal
        {...rest}
        id={id}
        open={open}
        className={`${classes['slide-in-modal']} ${open ? classes['visible'] : ''} ${
          !open ? classes[classHideOnTransition] : ''
        }`}
        containerProps={{ className: classes['container'] }}
        backdropProps={{ className: classes['backdrop-slide'] }}
        forceContainerOpen
        onTransitionEnd={onTransitionEnd}
        ref={ref || containerRef}
      >
        {children}
      </Modal>
    );
  }
);

export { Props } from '../Modal/Modal';
