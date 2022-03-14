import { useEffect } from 'react';

export const useBodyClick = (
  checkFunction: (event: MouseEvent) => boolean,
  callbackFunction: (...args: unknown[]) => unknown,
  dependingStateVariable: React.ComponentState
) => {
  /** We need to name the function because we want to remove it later in the return callback of useEffect so it won't be called exponentially */
  function bodyClickListener(event: MouseEvent) {
    if (checkFunction(event)) {
      callbackFunction();
    }
  }
  useEffect(() => {
    window.addEventListener('click', bodyClickListener);

    return () => {
      window.removeEventListener('click', bodyClickListener);
    };
  }, [dependingStateVariable]);
};
