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

import React, { Fragment, useReducer } from "react";
import { DataGridFilter } from "./DataGridFilter";
import classes from "./DataGridToolbar.module.scss";
import {
  DataGridColumnMetadata,
  Filter,
  FiltersAction,
  FiltersState,
  FiltersTranslations
} from "./DataGridFilters.interfaces";
import { Typography } from "../../Typography/Typography";

export interface DataGridToolbarProps {
  columnsMetadata: DataGridColumnMetadata[];
  filterValues?: Filter[];
  translations?: FiltersTranslations;
  onFilterAdd?: (filter: Filter) => void;
  onFilterEdit?: (filter: Filter) => void;
  onFilterDelete?: (id: string) => void;
  onFiltersClear?: () => void;
}

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

export const DataGridToolbar = ({
  columnsMetadata,
  filterValues,
  translations,
  onFilterAdd,
  onFilterEdit,
  onFilterDelete,
  onFiltersClear
}: DataGridToolbarProps) => {
  const [state, dispatch] = useReducer(filtersReducer, { filters: filterValues || [] });
  const { clearButtonCaption = "Clear all filters" } = translations?.toolbar || {};
  return (
    <Fragment>
      {state.filters.map(filter => (
        <DataGridFilter
          mode="EDIT"
          key={filter.id}
          filter={filter}
          columnsMetadata={columnsMetadata}
          dispatch={dispatch}
          onFilterEdit={onFilterEdit}
          onFilterDelete={onFilterDelete}
          tagTranslations={translations?.tag}
          popoverTranslations={translations?.popover}
        />
      ))}
      <div className={classes["actions-wrapper"]}>
        <DataGridFilter
          mode="ADD"
          columnsMetadata={columnsMetadata}
          dispatch={dispatch}
          onFilterAdd={onFilterAdd}
          tagTranslations={translations?.tag}
          popoverTranslations={translations?.popover}
        />
        {state.filters.length >= 1 && (
          <button
            type="button"
            className={classes["clear-button"]}
            onClick={() => {
              dispatch({ type: "clear" });
              onFiltersClear && onFiltersClear();
            }}
          >
            <Typography variant="body" className={classes["caption"]}>
              {clearButtonCaption}
            </Typography>
          </button>
        )}
      </div>
    </Fragment>
  );
};
