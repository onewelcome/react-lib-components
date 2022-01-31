/**
 * This hook is used to make validation of a form element easier. It accepts two parameters
 *
 * @param {Array | function} validationFnArray either a function or an array of functions that all either return "true" if the validation passed or a string (error message) if the validation failed
 * @param {String} startingValue if you want the validation to run the very first time a component loads. Most likely only used for testing purposes.
 *
 * @returns {{
 * 	hasError: boolean,
 * 	isTouched: boolean,
 * 	errorMessage: string
 *  onBlurHandler: function
 * 	onChangeHandler: function
 * 	onFocusHandler: function
 * }}
 *
 * @description automatically executions the validation functions passed and keeps track of whether this generates an error or not. The blur, change and focus handlers can be put on an element (inputs, textareas, radios, selects, checkboxes, etc).
 *
 * @example validation function:
 *
 *  const required = (value: string): true | string => {
 *		if (value.length === 0) {
 *    	return 'This value is required';
 *    }
 *
 *		return true;
 *	};
 */

import { useEffect, useState } from 'react';

export const useValidation = (
  validationFnArray: Array<(value: string) => true | string> = [],
  startingValue?: string
) => {
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  /** Internal method that executes all of the functions passed in validationFnArray with the value passed as a parameter */
  const _executeValidation = (value: string) => {
    for (let validationFn of validationFnArray) {
      const returnValidity = validationFn.apply(null, [value]);

      if (typeof returnValidity === 'string') {
        setHasError(true);
        setErrorMessage(returnValidity);
        return;
      }
    }

    setHasError(false);
    setErrorMessage('');
  };

  useEffect(() => {
    if (validationFnArray && startingValue) {
      _executeValidation(startingValue);
    }
  }, []);

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsTouched(true);

    if (!validationFnArray || !event.currentTarget.value) return;
    _executeValidation(event.currentTarget.value);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isTouched || !validationFnArray || !event.currentTarget.value) return;

    if (isTouched && !event.currentTarget.value)
      _executeValidation(event.currentTarget.value);
  };

  const onFocusHandler = () => {
    setHasError(false);
    setErrorMessage('');
  };

  return {
    hasError,
    isTouched,
    errorMessage,
    onBlurHandler,
    onChangeHandler,
    onFocusHandler,
  };
};
