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

import React, { Fragment, useRef } from "react";
import { DataGridFilterTag } from "./DataGridFilterTag";
import { createPortal } from "react-dom";
import { DateTimePicker } from "./DateTimePicker/DateTimePicker";
import { useGetDomRoot } from "../../../hooks/useGetDomRoot";

type Props = {
  domRoot?: HTMLElement;
};

export const DataGridDateFilter = ({ domRoot }: Props) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const wrappingDivRef = useRef<HTMLDivElement>(null);
  const { root } = useGetDomRoot(domRoot, wrappingDivRef);

  return (
    <Fragment>
      <DataGridFilterTag
        triggerRef={triggerRef}
        ref={wrappingDivRef}
        mode={"ADD_DATE"}
        onFilterRemove={function (): void {
          throw new Error("Function not implemented.");
        }}
        onFilterOpen={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      {createPortal(
        <DateTimePicker popoverRef={popoverRef} anchorRef={wrappingDivRef} isOpen={true} />,
        root
      )}
    </Fragment>
  );
};
