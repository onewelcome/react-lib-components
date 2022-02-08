import { useEffect } from 'react';

const SCROLL_PROPERTY_NAME = 'overflow';
const SCROLL_PROPERTY_VALUE = 'hidden';

const hideBodyScroll = () => {
  document.body.style[SCROLL_PROPERTY_NAME] = SCROLL_PROPERTY_VALUE;
};

const showBodyScroll = () => {
  const allModalsClosed =
    document.querySelectorAll('[role=dialog][data-hidden=false]').length === 0;
  if (allModalsClosed) {
    document.body.style.removeProperty(SCROLL_PROPERTY_NAME);
  }
};

export const useSetBodyScroll = (open: boolean) => {
  useEffect(() => {
    if (open) {
      hideBodyScroll();
    } else {
      showBodyScroll();
    }
  }, [open]);
};
