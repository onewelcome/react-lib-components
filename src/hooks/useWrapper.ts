import { useEffect, useState } from 'react';
import { generateID } from '../util/helper';

export const useWrapper = (value?: string, placeholder?: string) => {
  const [helperId] = useState(generateID(20));
  const [errorId] = useState(generateID(20));
  const [labelId] = useState(generateID(20));
  const [floatingLabelActive, setFloatingLabelActive] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    if (value?.length || placeholder) {
      setFloatingLabelActive(true);
    }
  }, []);

  useEffect(() => {
    if (value?.length) {
      setFloatingLabelActive(true);
    } else if (!placeholder && !hasFocus) {
      setFloatingLabelActive(false);
    }
  }, [value, placeholder]);

  return {
    helperId,
    errorId,
    labelId,
    floatingLabelActive,
    setFloatingLabelActive,
    setHasFocus,
  };
};
