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

import React, { ForwardRefRenderFunction, RefObject, createRef, useEffect } from "react";
import { Props as SelectOptionProps, Option as SelectOption } from "../SingleSelect/Option";

import classes from "./MultiSelect.module.scss";

export interface Props extends SelectOptionProps {
  fixed?: boolean;
}

const MultiOptionComponent: ForwardRefRenderFunction<HTMLLIElement, Props> = (
  { fixed: _fixed, hasFocus, className, ...rest }: Props,
  ref
) => {
  let innerOptionRef = (ref as RefObject<HTMLLIElement>) || createRef<HTMLLIElement>();

  const additionalClasses = [];
  className && additionalClasses.push(className);
  hasFocus && additionalClasses.push(classes["focus"]);

  const scrollToSelectedElement = (element: HTMLLIElement) => {
    const listbox = element.parentElement;
    const listboxWrapper = element.parentElement?.parentElement;
    (window as any).listboxWrapper = listboxWrapper;
    const isListboxWrapperScrollable = !!listboxWrapper?.style.maxHeight;
    if (isListboxWrapperScrollable) {
      listboxWrapper?.scrollTo(0, element.offsetTop - (listboxWrapper?.offsetHeight ?? 1) / 2);
    } else {
      listbox?.scrollTo(0, element.offsetTop - (listboxWrapper?.offsetHeight ?? 1) / 2);
    }
  };

  useEffect(() => {
    if (innerOptionRef.current && hasFocus) {
      scrollToSelectedElement(innerOptionRef.current);
    }
  }, [hasFocus, innerOptionRef]);

  return (
    <SelectOption
      ref={innerOptionRef}
      isSelected={hasFocus}
      disableDefaultSelectedStyle
      className={additionalClasses.join(" ")}
      aria-disabled={false}
      {...rest}
    />
  );
};

export const MultiOption = React.forwardRef(MultiOptionComponent);
