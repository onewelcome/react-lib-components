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

import React, { Fragment, useRef, useState } from "react";
import { DataGridFilterTag } from "./DataGridFilterTag";
import { createPortal } from "react-dom";
import { DateTimePicker } from "./DateTimePicker/DateTimePicker";
import { useGetDomRoot } from "../../../hooks/useGetDomRoot";
import { DateTimeFilter } from "./DataGridFilters.interfaces";

type Props = {
  domRoot?: HTMLElement;
  dateFilterValue?: DateTimeFilter;
  onDateFilterValueChange?: (dateTimeFilter: DateTimeFilter) => void;
};

export const DataGridDateFilter = ({
  domRoot,
  dateFilterValue,
  onDateFilterValueChange
}: Props) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const wrappingDivRef = useRef<HTMLDivElement>(null);
  const { root } = useGetDomRoot(domRoot, wrappingDivRef);
  const [isOpen, setIsOpen] = useState(false);
  const [tagCaption, setTagCaption] = useState("Last 30 seconds");

  return (
    <Fragment>
      <DataGridFilterTag
        triggerRef={triggerRef}
        ref={wrappingDivRef}
        dateTagCaption={tagCaption}
        mode={"ADD_DATE"}
        onFilterOpen={() => setIsOpen(true)}
      />
      {createPortal(
        <DateTimePicker
          popoverRef={popoverRef}
          onTagCaptionChange={setTagCaption}
          anchorRef={wrappingDivRef}
          isOpen={isOpen}
          setPickerOpen={setIsOpen}
          dateFilterValue={dateFilterValue}
          onDateFilterValueChange={onDateFilterValueChange}
        />,
        root
      )}
    </Fragment>
  );
};
