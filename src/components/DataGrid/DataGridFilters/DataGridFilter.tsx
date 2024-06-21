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

import React, { Fragment, createRef, useState } from "react";
import { createPortal } from "react-dom";
import { useGetDomRoot } from "../../../hooks/useGetDomRoot";
import {
  DataGridColumnMetadata,
  DefaultOperators,
  Filter,
  FilterEditorMode,
  FiltersAction
} from "./DataGridFilters.interfaces";
import { generateID } from "../../../util/helper";
import { DataGridFilterTag } from "./DataGridFilterTag";
import { DataGridFilterPopover } from "./DataGridFilterPopover";
import { mergeValues } from "./DataGridFilterService";

export type Props = {
  mode: FilterEditorMode;
  domRoot?: HTMLElement;
  filter?: Filter;
  columnsMetadata: DataGridColumnMetadata[];
  dispatch: React.Dispatch<FiltersAction>;
  onFilterAdd?: (filter: Filter) => void;
  onFilterEdit?: (filter: Filter) => void;
  onFilterDelete?: (id: string) => void;
};

export const DataGridFilter = ({
  mode,
  filter,
  domRoot,
  columnsMetadata,
  dispatch,
  onFilterAdd,
  onFilterEdit,
  onFilterDelete
}: Props) => {
  const wrappingDivRef = createRef<HTMLDivElement>();
  const [filterOpen, setFilterOpen] = useState(false);
  const { root } = useGetDomRoot(domRoot, wrappingDivRef);
  const [operators, setOperators] = useState<string[]>(Object.values(DefaultOperators));
  const [column, setColumn] = useState("");
  const [operator, setOperator] = useState("");
  const [values, setValues] = useState<string[]>([]);
  const [pickedValues, setPickedValues] = useState<string[]>([]);

  const resetFields = () => {
    setColumn("");
    setOperator("");
    setValues([]);
    setPickedValues([]);
  };

  const initialiseFilterValues = (filter?: Filter) => {
    if (mode === "ADD") {
      setColumn(columnsMetadata[0].name);
      setOperator(
        columnsMetadata[0].operators
          ? columnsMetadata[0].operators[0]
          : Object.values(DefaultOperators)[0]
      );

      columnsMetadata[0].defaultValues && setValues(columnsMetadata[0].defaultValues);
    }

    if (mode === "EDIT" && filter) {
      const { column, operator, value } = filter;
      const columnMetadata = columnsMetadata.find(({ name }) => name === column);
      if (!columnMetadata) return;

      const { defaultValues, operators } = columnMetadata;

      setColumn(column);

      setOperator(operator);
      operators && setOperators(operators);

      setPickedValues(value);
      setValues(mergeValues(defaultValues || [], value));
    }
  };

  const onFilterSubmit = () => {
    //todo add error handling
    if (mode === "ADD") {
      dispatch({
        type: "add",
        payload: { id: generateID(), column, operator, value: pickedValues }
      });
      onFilterAdd && onFilterAdd({ id: generateID(), column, operator, value: pickedValues });
    }

    if (mode === "EDIT" && filter) {
      dispatch({
        type: "edit",
        payload: { id: filter?.id, column, operator, value: pickedValues }
      });
      onFilterEdit && onFilterEdit({ id: filter?.id, column, operator, value: pickedValues });
    }

    resetFields();
    setFilterOpen(false);
  };

  const onFilterRemove = () => {
    if (!filter) return;

    dispatch({ type: "remove", payload: { id: filter.id } });
    onFilterDelete && onFilterDelete(filter?.id);
    resetFields();
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
        triggerRef={wrappingDivRef}
        setFilterOpen={setFilterOpen}
        filterOpen={filterOpen}
        initialiseFilterValues={initialiseFilterValues}
        filter={filter}
      />
      {createPortal(
        <DataGridFilterPopover
          anchorRef={wrappingDivRef}
          isOpen={filterOpen}
          column={column}
          columnsMetadata={columnsMetadata}
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
