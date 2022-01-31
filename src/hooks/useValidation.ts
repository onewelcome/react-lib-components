import { useState } from 'react';

const useValidation = (validationFn?: (value: string) => boolean) => {
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsTouched(true);

    if (!validationFn || !event.currentTarget.value) return;
    const isValid = validationFn(event.currentTarget.value);
    setHasError(isValid);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isTouched || !validationFn || !event.currentTarget.value) return;

    const isValid = validationFn(event.currentTarget.value);
    setHasError(isValid);
  };

  const onFocusHandler = () => {
    setHasError(false);
  };

  return {
    hasError,
    isTouched,
    onBlurHandler,
    onChangeHandler,
    onFocusHandler,
  };
};

export default useValidation;
