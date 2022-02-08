import { useEffect, useRef } from 'react';

export const useBackdropOnCloseClick = (
  disableBackdrop: boolean,
  onClose?: (event?: React.MouseEvent<HTMLElement>) => unknown
) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const onBackdropClick = () => onClose && onClose();

  useEffect(() => {
    !disableBackdrop && backdropRef.current?.addEventListener('click', onBackdropClick);
    return () => {
      !disableBackdrop && backdropRef.current?.removeEventListener('click', onBackdropClick);
    };
  }, []);

  return {
    backdropRef,
  };
};
