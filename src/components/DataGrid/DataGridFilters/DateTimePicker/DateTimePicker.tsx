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
import { parse } from "date-fns";

type Props = {
  popoverRef: React.RefObject<HTMLDivElement>;
  anchorRef?: React.RefObject<HTMLDivElement>;
  isOpen: boolean;
};

export const DateTimePicker = ({ anchorRef, popoverRef, isOpen }: Props) => {
  const [selectedDate, setSelectedDate] = useState<DateRange>();
  const [fromDateText, setFromDateText] = useState("");
  const [toDateText, setToDateText] = useState("");

  const parseDate = (date: string) => {
    const dateText = parse(date, "yyyy-MM-dd HH:mm:ss", new Date());

    return dateText;
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
            <SideMenu />
          </div>
          <div className={classes["controls"]}>
            <div className={classes["controls-panel"]}>
              <InputWrapper
                style={{ marginTop: 0 }}
                label={"From"}
                name={""}
                type={"text"}
                value={fromDateText}
                onBlur={e => {
                  setSelectedDate(prev => ({ ...prev, from: parseDate(e.target.value) }));
                }}
                onChange={e => setFromDateText(e.target.value)}
                inputProps={{ style: { height: "2rem" }, placeholder: "yyyy-mm-dd hh:mm:ss" }}
                className={classes["input"]}
              />
              <InputWrapper
                style={{ marginTop: 0 }}
                className={classes["input"]}
                inputProps={{ style: { height: "2rem" }, placeholder: "yyyy-mm-dd hh:mm:ss" }}
                label={"To"}
                value={toDateText}
                onChange={e => setToDateText(e.target.value)}
                onBlur={e =>
                  setSelectedDate(prev => ({ from: prev?.from, to: parseDate(e.target.value) }))
                }
                name={""}
                type={"text"}
              />
            </div>
            <div className={classes["controls-panel"]}>
              <DatePicker
                onSelect={(date: Date | DateRange | undefined): void => {
                  setSelectedDate(date as DateRange);
                }}
                value={selectedDate}
                mode={"range"}
                components={{
                  Nav: ({ onNextClick, onPreviousClick }) => (
                    <div className={classes["nav"]}>
                      <IconButton onClick={onPreviousClick} className={classes["prev-button"]}>
                        <Icon size="0.75rem" icon={Icons.ChevronLeft} />
                      </IconButton>
                      <IconButton onClick={onNextClick} className={classes["next-button"]}>
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
          <Button variant="text">Cancel</Button>
          <Button>Apply</Button>
        </div>
      </div>
    </Popover>
  );
};
