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

import React, { ComponentPropsWithoutRef, Fragment, useEffect, useState } from "react";
import {
  ClassNames,
  DateRange,
  DayPicker,
  Locale,
  PropsBase,
  CustomComponents
} from "react-day-picker";
import classes from "./DatePicker.module.scss";
import * as locales from "date-fns/locale";

export interface Props extends ComponentPropsWithoutRef<any> {
  onSelect: (date: Date | DateRange | undefined) => void;
  mode: "single" | "range";
  value: Date | DateRange | undefined;
  required?: boolean;
  locale?: keyof typeof locales;
  numberOfMonths?: number;
  components?: Partial<CustomComponents>;
  disabled?: boolean;
}

export const DatePicker = ({ onSelect, value, required, mode, locale, ...rest }: Props) => {
  const [dayPickerLocale, setDayPickerLocale] = useState<Locale>(locales.enGB);

  useEffect(() => {
    try {
      const selectedLocale = locales[locale!];
      setDayPickerLocale(selectedLocale);
    } catch (e) {
      setDayPickerLocale(locales.enGB);
    }
  }, [locale]);

  const getCustomClassNamesMapping = (): Partial<ClassNames> => {
    const CLASSNAME_PREFIX = "rdp-";
    const dayPickerClassNames: Partial<ClassNames> = {};

    Object.keys(classes).forEach(key => {
      const classKey = key.replace(CLASSNAME_PREFIX, "") as keyof ClassNames;
      dayPickerClassNames[classKey] = classes[key];
    });

    return dayPickerClassNames;
  };

  const commonProps: PropsBase = {
    showOutsideDays: true,
    captionLayout: "dropdown-years",
    required: required,
    classNames: getCustomClassNamesMapping(),
    locale: dayPickerLocale
  };

  return (
    <Fragment>
      {mode === "single" ? (
        <DayPicker
          {...rest}
          {...commonProps}
          mode={mode}
          endMonth={new Date(3000, 12)}
          onSelect={onSelect}
          selected={value as Date | undefined}
        ></DayPicker>
      ) : (
        <DayPicker
          {...rest}
          {...commonProps}
          mode={mode}
          endMonth={new Date(3000, 12)}
          onSelect={onSelect}
          selected={value as DateRange | undefined}
        />
      )}
    </Fragment>
  );
};
