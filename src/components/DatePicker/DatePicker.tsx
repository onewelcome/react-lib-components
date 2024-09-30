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

import React, { ForwardRefRenderFunction } from "react";
import { ClassNames, DayPicker, OnSelectHandler } from "react-day-picker";
import classes from "./DatePicker.module.scss";

export interface Props {
  onSelectHandler: OnSelectHandler<Date>;
  selected?: Date;
}

export const DatePicker: ForwardRefRenderFunction<HTMLDivElement, Props> = ({
  onSelectHandler,
  selected,
  ...rest
}: Props) => {
  const getCustomClassNamesMapping = (
    customClasses: Record<string, string>
  ): Partial<ClassNames> => {
    const CLASSNAME_PREFIX = "rdp-";
    const dayPickerClassNames: Partial<ClassNames> = {};

    Object.keys(customClasses).forEach(key => {
      const classKey = key.replace(CLASSNAME_PREFIX, "") as keyof ClassNames;
      dayPickerClassNames[classKey] = customClasses[key];
    });

    return dayPickerClassNames;
  };

  return (
    <DayPicker
      showOutsideDays={true}
      mode="single"
      captionLayout="dropdown-years"
      weekStartsOn={1}
      onSelect={onSelectHandler}
      selected={selected}
      required={true}
      classNames={getCustomClassNamesMapping(classes)}
      {...rest}
    ></DayPicker>
  );
};
