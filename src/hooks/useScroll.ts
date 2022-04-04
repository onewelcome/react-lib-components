import React, { useLayoutEffect } from 'react';

export const useScroll = (
  callbackFunction: (event: Event) => unknown,
  dependingStateVariable: React.ComponentState[] = []
) => {
  const scrollListener = (event: Event) => callbackFunction(event);

  useLayoutEffect(() => {
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [...dependingStateVariable]);
};
