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
import { createPortal } from "react-dom";
import { useGetDomRoot } from "../../../hooks/useGetDomRoot";
import {
  DataGridColumnMetadata,
  Filter,
  FilterEditorMode,
  FiltersState,
  PopoverTranslations,
  TagTranslations
} from "./DataGridFilters.interfaces";
import { generateID } from "../../../util/helper";
import { DataGridFilterTag } from "./DataGridFilterTag";
import { DataGridFilterPopover } from "./DataGridFilterPopover";
import { useDataGridFilter } from "./DataGridFilterService";

export type Props = {
  mode: FilterEditorMode;
  domRoot?: HTMLElement;
  filter?: Filter;
  columnsMetadata: DataGridColumnMetadata[];
  onFilterAdd?: (filter: Filter) => void;
  onFilterEdit?: (filter: Filter) => void;
  onFilterDelete?: (id: string) => void;
  tagTranslations?: TagTranslations;
  popoverTranslations?: PopoverTranslations;
  customEditTagContent?: React.ReactElement;
  filterState: FiltersState;
};

export const DataGridFilter = ({
  mode,
  filter,
  domRoot,
  columnsMetadata,
  onFilterAdd,
  onFilterEdit,
  onFilterDelete,
  tagTranslations,
  popoverTranslations,
  customEditTagContent,
  filterState
}: Props) => {
  const wrappingDivRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const [filterOpen, setFilterOpen] = useState(false);
  const { root } = useGetDomRoot(domRoot, wrappingDivRef);
  const {
    resetFields,
    operator,
    setOperator,
    operators,
    setOperators,
    column,
    setColumn,
    values,
    setValues,
    pickedValues,
    setPickedValues,
    initialiseFilterValues,
    allowedColumnsMetaData
  } = useDataGridFilter(mode, columnsMetadata, filterState);

  const onFilterSubmit = () => {
    if (mode === "ADD") {
      const id = generateID();
      onFilterAdd && onFilterAdd({ id, column, operator, value: pickedValues });
    } else if (mode === "EDIT" && filter) {
      const { id } = filter;
      onFilterEdit && onFilterEdit({ id, column, operator, value: pickedValues });
    }

    resetFields();
    setFilterOpen(false);
  };

  const onFilterRemove = () => {
    if (!filter) {
      return;
    }

    const { id } = filter;
    onFilterDelete && onFilterDelete(id);

    resetFields();
    setFilterOpen(false);
  };
  const onFilterOpen = () => {
    setFilterOpen(!filterOpen);
    if (!filterOpen) {
      initialiseFilterValues(filter);
    }
  };

  return (
    <Fragment>
      <DataGridFilterTag
        mode={mode}
        onFilterOpen={onFilterOpen}
        onFilterRemove={onFilterRemove}
        triggerRef={triggerRef}
        ref={wrappingDivRef}
        filter={filter}
        translations={tagTranslations}
        customEditTagContent={customEditTagContent}
      />
      {createPortal(
        <DataGridFilterPopover
          popoverRef={popoverRef}
          anchorRef={wrappingDivRef}
          isOpen={filterOpen}
          translations={popoverTranslations}
          column={column}
          columnsMetadata={allowedColumnsMetaData}
          values={values}
          pickedValues={pickedValues}
          operator={operator}
          operators={operators}
          onFilterSubmit={onFilterSubmit}
          resetFields={resetFields}
          setFilterOpen={setFilterOpen}
          setColumn={setColumn}
          setOperator={setOperator}
          setOperators={setOperators}
          setValues={setValues}
          setPickedValues={setPickedValues}
        />,
        root
      )}
    </Fragment>
  );
};
