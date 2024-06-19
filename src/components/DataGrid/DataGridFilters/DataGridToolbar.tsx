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

import React, { useEffect, useReducer } from "react";
import { DataGridFilter } from "./DataGridFilter";
import classes from "./DataGridToolbar.module.scss";
import {
  DataGridColumnMetadata,
  Filter,
  FiltersAction,
  FiltersState
} from "./DataGridFilters.interfaces";
import { generateID } from "../../../util/helper";
import { Typography } from "../../Typography/Typography";

export type Props = {
  columnsMetadata: DataGridColumnMetadata[];
  filterValues?: Filter[];
  onFilterAdd?: (filter: Filter) => void;
  onFilterEdit?: (filter: Filter) => void;
  onFilterDelete?: (id: string) => void;
  onFiltersClear?: () => void;
};

const filtersReducer = (state: FiltersState, action: FiltersAction): FiltersState => {
  switch (action.type) {
    case "add":
      return { ...state, filters: [...state.filters, { ...action.payload }] };
    case "edit":
      return {
        ...state,
        filters: [
          ...state.filters.map(value => {
            if (value.id === action.payload.id) {
              return action.payload;
            }
            return value;
          })
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
export const DataGridToolbar = ({
  columnsMetadata,
  filterValues,
  onFilterAdd,
  onFilterEdit,
  onFilterDelete,
  onFiltersClear
}: Props) => {
  const [state, dispatch] = useReducer(filtersReducer, { filters: filterValues || [] });

  return (
    <div className={classes["toolbar"]}>
      {state.filters.map(filter => (
        <DataGridFilter
          key={filter.id}
          filter={filter}
          columnsMetadata={columnsMetadata}
          dispatch={dispatch}
          onFilterEdit={onFilterEdit}
          onFilterDelete={onFilterDelete}
        />
      ))}
      <div className={classes["actions-wrapper"]}>
        <DataGridFilter
          columnsMetadata={columnsMetadata}
          dispatch={dispatch}
          addFilter
          onFilterAdd={onFilterAdd}
        />
        {state.filters.length > 1 && (
          <Typography
            variant="body"
            className={classes["clear-button"]}
            onClick={() => {
              dispatch({ type: "clear" });
              onFiltersClear && onFiltersClear();
            }}
          >
            Clear all filters
          </Typography>
        )}
      </div>
    </div>
  );
};
