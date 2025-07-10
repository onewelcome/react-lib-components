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

import React, { useEffect, useState } from "react";
import { Popover } from "../../../Popover/Popover";
import classes from "./DateTimePicker.module.scss";
import { Button } from "../../../Button/Button";
import { DateRange } from "react-day-picker";
import {
  CUSTOM_DATE_RANGE,
  FIVE_MINUTES,
  ONE_HOUR,
  ONE_MINUTE,
  THIRTY_SECONDS,
  TWENTY_FOUR_HOURS,
  formatInputDate
} from "./DateTimeService";
import { SideMenu } from "./SideMenu";
import { addSeconds } from "date-fns";
import { DateTimePickerInputSection } from "./DateTimePickerInputSection";
import { DateTimePickerCalendarSection } from "./DateTimePickerCalendarSection";
import { DateTimeFilter, DateTimeFilterType } from "../DataGridFilters.interfaces";
import { useRepeatFocus } from "../../../../hooks/useRepeatFocus";

export type DateTimePickerTranslations = {
  errors: {
    dateFormatError: string;
  };
  previousMonth: string;
  nextMonth: string;
  from: string;
  to: string;
  cancel: string;
  apply: string;
  dateInputPlaceholder: string;
};

export type Props = {
  popoverRef: React.RefObject<HTMLDivElement>;
  anchorRef?: React.RefObject<HTMLDivElement>;
  isOpen: boolean;
  onTagCaptionChange: (value: string) => void;
  setPickerOpen: (open: boolean) => void;
  translations?: DateTimePickerTranslations;
  dateFilterValue?: DateTimeFilter;
  onDateFilterValueChange?: (dateTimeFilter: DateTimeFilter) => void;
};

export type SideMenuItem = {
  id: DateTimeFilterType;
  name: string;
  rangeSeconds?: number;
};

export const dateFormat = "yyyy-mm-dd hh:mm:ss";

const sideMenuItems: SideMenuItem[] = [
  { id: THIRTY_SECONDS, name: "Last 30 seconds", rangeSeconds: 30 },
  { id: ONE_MINUTE, name: "Last 1 minute", rangeSeconds: 60 },
  { id: FIVE_MINUTES, name: "Last 5 minutes", rangeSeconds: 300 },
  { id: ONE_HOUR, name: "Last 1 hour", rangeSeconds: 3600 },
  { id: TWENTY_FOUR_HOURS, name: "Last 24 hours", rangeSeconds: 86400 },
  { id: CUSTOM_DATE_RANGE, name: "Custom" }
];

export const DateTimePicker = ({
  anchorRef,
  popoverRef,
  isOpen,
  setPickerOpen,
  onTagCaptionChange,
  translations = {
    errors: {
      dateFormatError: `The format must be ${dateFormat}`
    },
    previousMonth: "Previous month",
    nextMonth: "Next month",
    from: "From",
    to: "To",
    cancel: "Cancel",
    apply: "Apply",
    dateInputPlaceholder: dateFormat
  },
  dateFilterValue,
  onDateFilterValueChange
}: Props) => {
  const {
    errors: { dateFormatError },
    previousMonth,
    nextMonth,
    cancel,
    from,
    to,
    apply,
    dateInputPlaceholder
  } = translations;
  const [selectedDate, setSelectedDate] = useState<DateRange>({
    from: dateFilterValue?.fromDate ? new Date(dateFilterValue?.fromDate) : undefined,
    to: dateFilterValue?.toDate ? new Date(dateFilterValue?.toDate) : undefined
  });
  const [selectedPredefinedRange, setSelectedPredefinedRange] = useState<DateTimeFilterType>(
    sideMenuItems[0].id
  );
  const [fromDateText, setFromDateText] = useState("");
  const [toDateText, setToDateText] = useState("");
  const [fromDateError, setFromDateError] = useState("");
  const [toDateError, setToDateError] = useState("");
  useRepeatFocus(popoverRef);

  const disableDateRangePickers = selectedPredefinedRange !== CUSTOM_DATE_RANGE;

  useEffect(() => {
    if (isOpen) {
      popoverRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (dateFilterValue) {
      const foundItem = sideMenuItems.find(item => item.id === dateFilterValue.type);

      foundItem && onTagCaptionChange(foundItem.name);

      setSelectedPredefinedRange(dateFilterValue.type);

      if (foundItem?.rangeSeconds && dateFilterValue.type !== CUSTOM_DATE_RANGE) {
        const fromDate = addSeconds(new Date(), -foundItem.rangeSeconds);
        const toDate = new Date();

        setFromDateText(formatInputDate(fromDate));
        setToDateText(formatInputDate(toDate));
        setSelectedDate({ from: fromDate, to: toDate });

        return;
      }

      dateFilterValue.fromDate &&
        setFromDateText(formatInputDate(new Date(dateFilterValue.fromDate)));

      dateFilterValue.toDate && setToDateText(formatInputDate(new Date(dateFilterValue.toDate)));

      setSelectedDate({
        from: dateFilterValue?.fromDate ? new Date(dateFilterValue?.fromDate) : undefined,
        to: dateFilterValue?.toDate ? new Date(dateFilterValue?.toDate) : undefined
      });
    }
  }, [dateFilterValue]);

  useEffect(() => {
    if (!dateFilterValue) {
      isOpen && onSideMenuItemSelect(selectedPredefinedRange);
    }
  }, [isOpen, dateFilterValue]);

  const onSideMenuItemSelect = (itemId: DateTimeFilterType) => {
    setSelectedPredefinedRange(itemId);
    const foundItem = sideMenuItems.find(item => item.id === itemId);
    foundItem && onTagCaptionChange(foundItem.name);

    if (itemId !== CUSTOM_DATE_RANGE) {
      if (!foundItem) {
        return;
      }

      if (foundItem.rangeSeconds) {
        const fromDate = addSeconds(new Date(), -foundItem.rangeSeconds);
        const toDate = new Date();

        setSelectedDate({ from: fromDate, to: toDate });
        setFromDateText(formatInputDate(fromDate));
        setToDateText(formatInputDate(toDate));
      }
    }
  };

  const closeDateTimePicker = () => {
    setPickerOpen(false);
  };

  const saveDateTimePicker = () => {
    onDateFilterValueChange &&
      onDateFilterValueChange({
        toDate: selectedDate.to?.toISOString() ?? "",
        fromDate: selectedDate.from?.toISOString() ?? "",
        type: selectedPredefinedRange
      });
    setPickerOpen(false);
  };

  return (
    <Popover
      tabIndex={-1}
      anchorEl={anchorRef}
      ref={popoverRef}
      show={isOpen}
      placement={{ horizontal: "left", vertical: "bottom" }}
      transformOrigin={{ horizontal: "left", vertical: "top" }}
    >
      {isOpen && (
        <div className={classes["popover"]}>
          <div className={classes["content-wrapper"]}>
            <div className={classes["aside"]}>
              <SideMenu
                sideMenuItems={sideMenuItems}
                selectedItemId={selectedPredefinedRange}
                onItemSelect={onSideMenuItemSelect}
              />
            </div>
            <div
              className={`${classes["controls"]} ${toDateError || fromDateError ? classes["has-error"] : ""}`}
            >
              <div className={classes["controls-panel"]}>
                <DateTimePickerInputSection
                  from={from}
                  to={to}
                  dateInputPlaceholder={dateInputPlaceholder}
                  dateFormatError={dateFormatError}
                  fromDateText={fromDateText}
                  toDateText={toDateText}
                  fromDateError={fromDateError}
                  toDateError={toDateError}
                  setSelectedDate={setSelectedDate}
                  setFromDateText={setFromDateText}
                  setToDateText={setToDateText}
                  setFromDateError={setFromDateError}
                  setToDateError={setToDateError}
                />
              </div>
              <div className={`${classes["controls-panel"]} ${classes["set-height"]}`}>
                <DateTimePickerCalendarSection
                  previousMonth={previousMonth}
                  nextMonth={nextMonth}
                  selectedDate={selectedDate}
                  disableDateRangePickers={disableDateRangePickers}
                  setSelectedDate={setSelectedDate}
                  setFromDateText={setFromDateText}
                  setFromDateError={setFromDateError}
                  setToDateText={setToDateText}
                  setToDateError={setToDateError}
                />
              </div>
            </div>
          </div>
          <div className={classes["actions"]}>
            <Button variant="text" onClick={closeDateTimePicker}>
              {cancel}
            </Button>
            <Button onClick={saveDateTimePicker}>{apply}</Button>
          </div>
        </div>
      )}
    </Popover>
  );
};
