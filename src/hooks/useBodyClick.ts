import { useEffect } from 'react';

export const useBodyClick = (
  checkFunction: (event: MouseEvent) => boolean,
  callbackFunction: (...args: unknown[]) => unknown,
  dependingStateVariable: React.ComponentState | React.ComponentState[]
) => {
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
