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
import { InputWrapper } from "../../../Form/Wrapper/InputWrapper/InputWrapper";
import { DatePicker } from "../../../DatePicker/DatePicker";
import { DateRange } from "react-day-picker";
import { IconButton } from "../../../Button/IconButton";
import { Icon, Icons } from "../../../Icon/Icon";
import { Typography } from "../../../Typography/Typography";
import { formatInputDate, getMonthName, getYearFromDate } from "./DateTimeService";
import { SideMenu } from "./SideMenu";
import { addSeconds, parse } from "date-fns";
import { generateID } from "../../../../util/helper";
import { useRepeatFocus } from "../../../../hooks/useRepeatFocus";

type Props = {
  popoverRef: React.RefObject<HTMLDivElement>;
  anchorRef?: React.RefObject<HTMLDivElement>;
  isOpen: boolean;
  setPickerOpen: (open: boolean) => void;
};

export type SideMenuItem = {
  id: string;
  name: string;
  rangeSeconds?: number;
};

const CUSTOM_ID = "CUSTOM";

const sideMenuItems: SideMenuItem[] = [
  { id: generateID(), name: "Last 30 seconds", rangeSeconds: 30 },
  { id: generateID(), name: "Last 1 minute", rangeSeconds: 60 },
  { id: generateID(), name: "Last 5 minutes", rangeSeconds: 300 },
  { id: generateID(), name: "Last 1 hour", rangeSeconds: 3600 },
  { id: generateID(), name: "Last 24 hours", rangeSeconds: 86400 },
  { id: CUSTOM_ID, name: "Custom" }
];

export const DateTimePicker = ({ anchorRef, popoverRef, isOpen, setPickerOpen }: Props) => {
  const [selectedDate, setSelectedDate] = useState<DateRange>();
  const [fromDateText, setFromDateText] = useState("");
  const [toDateText, setToDateText] = useState("");
  const [selectedSideMenuItem, setSelectedSideMenuItem] = useState(sideMenuItems[0].id);
  const [fromDateError, setFromDateError] = useState("");
  const [toDateError, setToDateError] = useState("");
  const validationRegex =
    /(\d{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) ([0-1][0-9]|[2][0-3]):([0-5][0-9]):([0-5][0-9])/;

  const dateFormatError = "The format must be yyyy-mm-dd hh:mm:ss";
  const validateInput = (text: string) => validationRegex.test(text);

  useEffect(() => {
    if (isOpen) {
      popoverRef.current?.focus();
    }
  }, [isOpen]);

  const parseDate = (date: string) => {
    const dateText = parse(date, "yyyy-MM-dd HH:mm:ss", new Date());
    return dateText;
  };

  useEffect(() => {
    isOpen && onSideMenuItemSelect(selectedSideMenuItem);
  }, [isOpen]);

  const onSideMenuItemSelect = (itemId: string) => {
    setSelectedSideMenuItem(itemId);

    if (itemId !== CUSTOM_ID) {
      const foundItem = sideMenuItems.find(item => item.id === itemId);

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

  const disableInputs = selectedSideMenuItem !== CUSTOM_ID;

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
              selectedItemId={selectedSideMenuItem}
              onItemSelect={onSideMenuItemSelect}
            />
          </div>
          <div className={classes["controls"]}>
            <div className={classes["controls-panel"]}>
              <InputWrapper
                style={{ marginTop: 0, maxWidth: "224px" }}
                label={"From"}
                name={""}
                error={!!fromDateError}
                errorMessage={fromDateError}
                type={"text"}
                value={fromDateText}
                onBlur={e => {
                  if (!validateInput(e.target.value)) {
                    setFromDateError(dateFormatError);
                    return;
                  }

                  setSelectedDate(prev => ({ ...prev, from: parseDate(e.target.value) }));
                  setFromDateError("");
                }}
                onChange={e => setFromDateText(e.target.value)}
                inputProps={{ style: { height: "2rem" }, placeholder: "yyyy-mm-dd hh:mm:ss" }}
                className={classes["input"]}
              />
              <InputWrapper
                style={{ marginTop: 0, maxWidth: "224px" }}
                className={classes["input"]}
                inputProps={{ style: { height: "2rem" }, placeholder: "yyyy-mm-dd hh:mm:ss" }}
                label={"To"}
                value={toDateText}
                error={!!toDateError}
                errorMessage={toDateError}
                onChange={e => setToDateText(e.target.value)}
                onBlur={e => {
                  if (!validateInput(e.target.value)) {
                    setToDateError(dateFormatError);
                    return;
                  }

                  setSelectedDate(prev => ({ from: prev?.from, to: parseDate(e.target.value) }));
                  setToDateError("");
                }}
                name={""}
                type={"text"}
              />
            </div>
            <div className={classes["controls-panel"]}>
              <DatePicker
                onSelect={(date: Date | DateRange | undefined): void => {
                  if (date) {
                    setSelectedDate(date as DateRange);
                    const fromDate = (date as DateRange).from;
                    const toDate = (date as DateRange).to;

                    fromDate && setFromDateText(formatInputDate(fromDate));
                    toDate && setToDateText(formatInputDate(toDate));
                  }
                }}
                value={selectedDate}
                disabled={disableInputs}
                mode={"range"}
                components={{
                  Nav: ({ onNextClick, onPreviousClick }) => (
                    <div className={classes["nav"]}>
                      <IconButton
                        onClick={onPreviousClick}
                        className={classes["prev-button"]}
                        disabled={disableInputs}
                      >
                        <Icon size="0.75rem" icon={Icons.ChevronLeft} />
                      </IconButton>
                      <IconButton
                        onClick={onNextClick}
                        className={classes["next-button"]}
                        disabled={disableInputs}
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
            </div>
          </div>
        </div>
        <div className={classes["actions"]}>
          <Button
            variant="text"
            onClick={() => {
              setPickerOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button>Apply</Button>
        </div>
      </div>
    </Popover>
  );
};
