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
import { formatInputDate } from "./DateTimeService";
import { SideMenu } from "./SideMenu";
import { addSeconds } from "date-fns";
import { generateID } from "../../../../util/helper";
import { DateTimePickerInputSection } from "./DateTimePickerInputSection";
import { DateTimePickerCalendarSection } from "./DateTimePickerCalendarSection";

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
};

export type SideMenuItem = {
  id: string;
  name: string;
  rangeSeconds?: number;
};

const CUSTOM_DATE_RANGE_ID = generateID();

const sideMenuItems: SideMenuItem[] = [
  { id: generateID(), name: "Last 30 seconds", rangeSeconds: 30 },
  { id: generateID(), name: "Last 1 minute", rangeSeconds: 60 },
  { id: generateID(), name: "Last 5 minutes", rangeSeconds: 300 },
  { id: generateID(), name: "Last 1 hour", rangeSeconds: 3600 },
  { id: generateID(), name: "Last 24 hours", rangeSeconds: 86400 },
  { id: CUSTOM_DATE_RANGE_ID, name: "Custom" }
];

export const DateTimePicker = ({
  anchorRef,
  popoverRef,
  isOpen,
  setPickerOpen,
  onTagCaptionChange,
  translations = {
    errors: {
      dateFormatError: "The format must be yyyy-mm-dd hh:mm:ss"
    },
    previousMonth: "Previous month",
    nextMonth: "Next month",
    from: "From",
    to: "To",
    cancel: "Cancel",
    apply: "Apply",
    dateInputPlaceholder: "yyyy-mm-dd hh:mm:ss"
  }
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
  const [selectedDate, setSelectedDate] = useState<DateRange>();
  const [selectedPredefinedRange, setSelectedPredefinedRange] = useState(sideMenuItems[0].id);
  const [fromDateText, setFromDateText] = useState("");
  const [toDateText, setToDateText] = useState("");
  const [fromDateError, setFromDateError] = useState("");
  const [toDateError, setToDateError] = useState("");

  const disableDateRangePickers = selectedPredefinedRange !== CUSTOM_DATE_RANGE_ID;

  const closeDateTimePicker = () => {
    setPickerOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      popoverRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    isOpen && onSideMenuItemSelect(selectedPredefinedRange);
  }, [isOpen]);

  const onSideMenuItemSelect = (itemId: string) => {
    setSelectedPredefinedRange(itemId);
    const foundItem = sideMenuItems.find(item => item.id === itemId);
    foundItem && onTagCaptionChange(foundItem.name);

    if (itemId !== CUSTOM_DATE_RANGE_ID) {
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

  return (
    <Popover
      tabIndex={-1}
      anchorEl={anchorRef}
      ref={popoverRef}
      show={isOpen}
      placement={{ horizontal: "left", vertical: "bottom" }}
      transformOrigin={{ horizontal: "left", vertical: "top" }}
    >
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
            <div className={classes["controls-panel"]}>
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
          <Button>{apply}</Button>
        </div>
      </div>
    </Popover>
  );
};
