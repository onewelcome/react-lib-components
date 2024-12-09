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

import React, { Fragment } from "react";
import { InputWrapper } from "../../../Form/Wrapper/InputWrapper/InputWrapper";
import classes from "./DateTimePicker.module.scss";
import { parse } from "date-fns";
import { DateRange } from "react-day-picker";

export type Props = {
  from: string;
  to: string;
  dateInputPlaceholder: string;
  dateFormatError: string;
  fromDateText: string;
  toDateText: string;
  fromDateError: string;
  toDateError: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  setFromDateText: React.Dispatch<React.SetStateAction<string>>;
  setToDateText: React.Dispatch<React.SetStateAction<string>>;
  setFromDateError: React.Dispatch<React.SetStateAction<string>>;
  setToDateError: React.Dispatch<React.SetStateAction<string>>;
};

export const DateTimePickerInputSection = ({
  from,
  to,
  dateInputPlaceholder,
  dateFormatError,
  toDateText,
  fromDateText,
  fromDateError,
  toDateError,
  setSelectedDate,
  setFromDateText,
  setToDateText,
  setFromDateError,
  setToDateError
}: Props) => {
  const dateParseTemplate = "yyyy-MM-dd HH:mm:ss";
  const parseDate = (date: string) => {
    const dateText = parse(date, dateParseTemplate, new Date());
    return dateText;
  };

  const validationRegex =
    /(\d{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) ([0-1][0-9]|[2][0-3]):([0-5][0-9]):([0-5][0-9])/;
  const validateInput = (text: string) => validationRegex.test(text);

  const onInputBlur =
    (setError: (value: React.SetStateAction<string>) => void, setDate: (value: string) => void) =>
    (e: React.FocusEvent<HTMLInputElement, Element>) => {
      if (!validateInput(e.target.value)) {
        setError(dateFormatError);
        return;
      }

      setDate(e.target.value);
      setError("");
    };

  const setFromDate = (value: string) =>
    setSelectedDate(prev => ({ ...prev, from: parseDate(value) }));

  const setToDate = (value: string) =>
    setSelectedDate(prev => ({ from: prev?.from, to: parseDate(value) }));

  const onFromInputBlur = onInputBlur(setFromDateError, setFromDate);
  const onToInputBlur = onInputBlur(setToDateError, setToDate);

  return (
    <Fragment>
      <InputWrapper
        style={{ marginTop: 0, maxWidth: "224px" }}
        label={from}
        name={"fromDate"}
        error={!!fromDateError}
        errorMessage={fromDateError}
        errorMessageProps={{ className: classes["error-message"] }}
        helperProps={{
          style: { fontSize: "0.625rem" }
        }}
        type={"text"}
        value={fromDateText}
        onBlur={onFromInputBlur}
        onChange={e => setFromDateText(e.target.value)}
        inputProps={{ style: { height: "2rem" }, placeholder: dateInputPlaceholder }}
        className={classes["input"]}
      />
      <InputWrapper
        style={{ marginTop: 0, maxWidth: "224px" }}
        className={classes["input"]}
        inputProps={{ style: { height: "2rem" }, placeholder: dateInputPlaceholder }}
        label={to}
        value={toDateText}
        error={!!toDateError}
        errorMessage={toDateError}
        errorMessageProps={{ className: classes["error-message"] }}
        helperProps={{
          style: { fontSize: "0.625rem" }
        }}
        onChange={e => setToDateText(e.target.value)}
        onBlur={onToInputBlur}
        name={"toDate"}
        type={"text"}
      />
    </Fragment>
  );
};
