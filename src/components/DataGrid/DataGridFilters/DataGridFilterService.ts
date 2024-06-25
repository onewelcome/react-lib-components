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

import { useState } from "react";
import {
  DataGridColumnMetadata,
  DefaultOperators,
  Filter,
  FilterEditorMode
} from "./DataGridFilters.interfaces";

//user can extend the list of picked values with custom ones. We need to make sure that the default list includes the user created values.
export const mergeValues = (values: string[], pickedValues: string[]) => {
  return Array.from(new Set([...values, ...pickedValues]));
};

export const useDataGridFilter = (
  mode: FilterEditorMode,
  columnsMetadata: DataGridColumnMetadata[]
) => {
  const [column, setColumn] = useState("");
  const [operator, setOperator] = useState("");
  const [operators, setOperators] = useState<string[]>(Object.values(DefaultOperators));
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
      const firstColumnMetadata = columnsMetadata[0];

      if (!firstColumnMetadata) {
        return;
      }

      setColumn(firstColumnMetadata.name);
      setOperator(
        firstColumnMetadata.operators
          ? firstColumnMetadata.operators[0]
          : Object.values(DefaultOperators)[0]
      );
      firstColumnMetadata.operators && setOperators(firstColumnMetadata.operators);
      firstColumnMetadata.defaultValues && setValues(firstColumnMetadata.defaultValues);
    }

    if (mode === "EDIT" && filter) {
      const { column, operator, value } = filter;
      const columnMetadata = columnsMetadata.find(({ name }) => name === column);

      if (!columnMetadata) {
        return;
      }

      const { defaultValues, operators } = columnMetadata;

      setColumn(column);
      setOperator(operator);
      operators && setOperators(operators);
      setPickedValues(value);
      setValues(mergeValues(defaultValues || [], value));
    }
  };

  return {
    resetFields,
    initialiseFilterValues,
    operator,
    setOperator,
    operators,
    setOperators,
    column,
    setColumn,
    values,
    setValues,
    pickedValues,
    setPickedValues
  };
};
