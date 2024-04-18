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

import React, {
  ForwardRefRenderFunction,
  ComponentPropsWithRef,
  createRef,
  RefObject,
  useEffect,
  ReactNode,
  KeyboardEvent,
  MouseEvent,
  useRef
} from "react";
import classes from "./Select.module.scss";
import { generateID } from "../../../../util/helper";

export interface Props extends ComponentPropsWithRef<"li"> {
  children: ReactNode;
  value: string;
  disabled?: boolean;
  isSelected?: boolean;
  disableDefaultSelectedStyle?: boolean;
  selectOpened?: boolean;
  hasFocus?: boolean;
  shouldClick?: boolean;
  isSearching?: boolean;
  label?: string;
  childIndex?: number;
  onOptionSelect?: (
    ref: React.RefObject<HTMLLIElement>,
    event: KeyboardEvent<HTMLLIElement> | MouseEvent<HTMLLIElement>
  ) => void;
  onFocusChange?: (childIndex: number) => void;
  isAddBtnFocused?: boolean;
}

const OptionComponent: ForwardRefRenderFunction<HTMLLIElement, Props> = (
  {
    id,
    children,
    className,
    isSelected = false,
    disableDefaultSelectedStyle,
    shouldClick,
    hasFocus,
    selectOpened,
    isSearching,
    childIndex,
    onOptionSelect,
    onFocusChange,
    disabled,
    value,
    isAddBtnFocused,
    ...rest
  }: Props,
  ref
) => {
  const defaultOptionId = useRef(generateID(20));
  const optionId = id ?? defaultOptionId.current;
  let innerOptionRef = (ref as RefObject<HTMLLIElement>) || createRef<HTMLLIElement>();

  const additionalClasses = [];
  className && additionalClasses.push(className);
  isSelected && !disableDefaultSelectedStyle && additionalClasses.push(classes["selected-option"]);
  disabled && additionalClasses.push(classes["disabled"]);

  useEffect(() => {
    if (isSelected && innerOptionRef.current && shouldClick) {
      innerOptionRef.current.click();
    }
  }, [isSelected, shouldClick]);

  useEffect(() => {
    if (innerOptionRef.current && hasFocus && selectOpened && !isSearching && !isAddBtnFocused) {
      onFocusChange && childIndex && onFocusChange(childIndex);
      innerOptionRef.current.focus();
    }
  }, [hasFocus, innerOptionRef, selectOpened, isSearching]);

  const onSelectHandler = (
    event: KeyboardEvent<HTMLLIElement> | MouseEvent<HTMLLIElement> //TODO: remove added event
  ) => onOptionSelect?.(innerOptionRef, event);

  return (
    <li
      {...rest}
      id={optionId}
      ref={innerOptionRef}
      data-value={value}
      className={additionalClasses.join(" ")}
      onClick={onSelectHandler}
      onKeyDown={event => {
        if (event.code === "Enter") {
          event.stopPropagation();
          event.preventDefault();

          onSelectHandler(event);
        }
      }}
      aria-selected={isSelected}
      role="option"
      tabIndex={disabled ? -1 : 0}
    >
      {children}
    </li>
  );
};

export const Option = React.forwardRef(OptionComponent);
