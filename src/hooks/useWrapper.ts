import { useEffect, useState } from "react";
import { generateID } from "../util/helper";
import { Type as InputTypes } from "../Form/Input/Input";

export const useWrapper = (value?: string, placeholder?: string, type?: InputTypes) => {
  const [helperId] = useState(generateID(20));
  const [errorId] = useState(generateID(20));
  const [labelId] = useState(generateID(20));
  const [floatingLabelActive, setFloatingLabelActive] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    if (
      (value?.length && value.length > 0) ||
      placeholder ||
      type === "datetime-local" ||
      type === "time" ||
      type === "date"
    ) {
      setFloatingLabelActive(true);
    }
  }, []);

  useEffect(() => {
    if ((value?.length && value.length > 0) || hasFocus) {
      setFloatingLabelActive(true);
    } else if (
      !placeholder &&
      !hasFocus &&
      type !== "datetime-local" &&
      type !== "time" &&
      type !== "date"
    ) {
      setFloatingLabelActive(false);
    }
  }, [value, placeholder, type, hasFocus]);

  return {
    helperId,
    errorId,
    labelId,
    floatingLabelActive,
    setFloatingLabelActive,
    hasFocus,
    setHasFocus
  };
};
