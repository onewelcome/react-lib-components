/*
 * Copyright 2022 OneWelcome B.V.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import { useEffect, useState } from "react";
import { generateID } from "../util/helper";
import { Type as InputTypes } from "../Form/Input/Input";

export const useWrapper = (value?: string, placeholder?: string, type?: InputTypes) => {
  const [helperId] = useState(generateID(20));
  const [errorId] = useState(generateID(20));
  const [labelId] = useState(generateID(20));
  const [isInputActive, setIsInputActive] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    if (
      (value?.length && value.length > 0) ||
      placeholder ||
      type === "datetime-local" ||
      type === "time" ||
      type === "date"
    ) {
      setIsInputActive(true);
    }
  }, []);

  useEffect(() => {
    if ((value?.length && value.length > 0) || hasFocus) {
      setIsInputActive(true);
    } else if (
      !placeholder &&
      !hasFocus &&
      type !== "datetime-local" &&
      type !== "time" &&
      type !== "date"
    ) {
      setIsInputActive(false);
    }
  }, [value, placeholder, type, hasFocus]);

  return {
    helperId,
    errorId,
    labelId,
    isInputActive,
    hasFocus,
    setHasFocus
  };
};
