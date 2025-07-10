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

import React from "react";
import classes from "./DateTimePicker.module.scss";
import { DatePicker } from "../../../DatePicker/DatePicker";
import { IconButton } from "../../../Button/IconButton";
import { DateRange } from "react-day-picker";
import { formatInputDate, getMonthName, getYearFromDate } from "./DateTimeService";
import { Icon, Icons } from "../../../Icon/Icon";
import { Typography } from "../../../Typography/Typography";

type Props = {
  previousMonth: string;
  nextMonth: string;
  selectedDate: DateRange | undefined;
  disableDateRangePickers: boolean;
  setSelectedDate: React.Dispatch<React.SetStateAction<DateRange>>;
  setFromDateText: React.Dispatch<React.SetStateAction<string>>;
  setToDateText: React.Dispatch<React.SetStateAction<string>>;
  setFromDateError: React.Dispatch<React.SetStateAction<string>>;
  setToDateError: React.Dispatch<React.SetStateAction<string>>;
};

export const DateTimePickerCalendarSection = ({
  previousMonth,
  nextMonth,
  selectedDate,
  disableDateRangePickers,
  setSelectedDate,
  setFromDateText,
  setFromDateError,
  setToDateError,
  setToDateText
}: Props) => {
  const onDatePickerSelect = (date: Date | DateRange | undefined): void => {
    if (date) {
      setSelectedDate(date as DateRange);

      const fromDate = (date as DateRange).from;
      const toDate = (date as DateRange).to;

      if (fromDate) {
        setFromDateText(formatInputDate(fromDate));
        setFromDateError("");
      }

      if (toDate) {
        setToDateText(formatInputDate(toDate));
        setToDateError("");
      }
    }
  };
  return (
    <DatePicker
      onSelect={onDatePickerSelect}
      value={selectedDate}
      disabled={disableDateRangePickers}
      mode={"range"}
      components={{
        Nav: ({ onNextClick, onPreviousClick }) => (
          <div className={classes["nav"]}>
            <IconButton
              title={previousMonth}
              onClick={onPreviousClick}
              className={classes["prev-button"]}
              disabled={disableDateRangePickers}
            >
              <Icon size="0.75rem" icon={Icons.ChevronLeft} />
            </IconButton>
            <IconButton
              title={nextMonth}
              onClick={onNextClick}
              className={classes["next-button"]}
              disabled={disableDateRangePickers}
            >
              <Icon size="0.75rem" icon={Icons.ChevronRight} />
            </IconButton>
          </div>
        ),
        MonthCaption: ({ calendarMonth }) => (
          <Typography className={classes["month-caption"]} variant="body">
            {getMonthName(calendarMonth.date)} {getYearFromDate(calendarMonth.date)}
          </Typography>
        )
      }}
      numberOfMonths={2}
    />
  );
};
