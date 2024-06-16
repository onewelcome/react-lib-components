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

import React, { useReducer } from "react";
import { DataGridFilter } from "./DataGridFilter";
import classes from "./DataGridToolbar.module.scss";
import {
  DataGridColumnMetadata,
  Filter,
  FiltersAction,
  FiltersState
} from "./DataGridFilters.interfaces";
import { generateID } from "../../../util/helper";

type Props = {
  columnsMetadata: DataGridColumnMetadata[];
};

const filtersReducer = (state: FiltersState, action: FiltersAction): FiltersState => {
  switch (action.type) {
    case "add":
      return { ...state, filters: [...state.filters, { ...action.payload, id: generateID() }] };
    case "edit":
      return {
        ...state,
        //todo it should be recreated in place so that the filters don't get reshuffled...
        filters: [
          ...state.filters.filter(value => value.id !== action.payload.id),
          { ...action.payload }
        ]
      };
    case "remove":
      return {
        ...state,
        filters: [...state.filters.filter(value => value.id !== action.payload.id)]
      };
    case "clear":
      return { ...state, filters: [] };
  }
};

//todo export in the index.ts
export const DataGridToolbar = ({ columnsMetadata }: Props) => {
  const [state, dispatch] = useReducer(filtersReducer, { filters: [] });

  return (
    <div className={classes["toolbar"]}>
      {state.filters.map(filter => (
        <DataGridFilter
          key={filter.id}
          filter={filter}
          columnsMetadata={columnsMetadata}
          dispatch={dispatch}
        />
      ))}
      <DataGridFilter columnsMetadata={columnsMetadata} dispatch={dispatch} addFilter />
    </div>
  );
};
