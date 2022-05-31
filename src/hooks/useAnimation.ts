import { useEffect, useRef, useState } from 'react';

export const useAnimation = <RefElement extends HTMLElement>(callback: () => void) => {
  const animatedObjectRef = useRef<RefElement>(null);
  /** We need to store flag that says us when to call the callback */
  const [animationStarted, setAnimationStarted] = useState(false);

  const onAnimationEnd = () => animationStarted && callback();

  useEffect(() => {
    animatedObjectRef.current?.addEventListener('animationend', onAnimationEnd);
    return () => animatedObjectRef.current?.removeEventListener('animationend', onAnimationEnd);
  }, [animationStarted]);

  return {
    ref: animatedObjectRef,
    animationStarted,
    startAnimation: () => setAnimationStarted(true),
  };
};
