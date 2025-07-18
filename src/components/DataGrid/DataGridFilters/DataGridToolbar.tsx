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

import React, { Fragment, useEffect, useRef } from "react";
import { DataGridFilter } from "./DataGridFilter";
import classes from "./DataGridToolbar.module.scss";
import {
  DataGridColumnMetadata,
  DateTimeFilter,
  Filter,
  FiltersTranslations
} from "./DataGridFilters.interfaces";
import { Typography } from "../../Typography/Typography";
import { useFiltersReducer } from "./useFiltersReducer";
import { DataGridDateFilter } from "./DataGridDateFilter";

export interface DataGridToolbarProps {
  columnsMetadata?: DataGridColumnMetadata[];
  customEditTagContent?: React.ReactElement;
  dateFilterValue?: DateTimeFilter;
  onDateFilterValueChange?: (dateTimeFilter: DateTimeFilter) => void;
  filterValues?: Filter[];
  translations?: FiltersTranslations;
  onFilterAdd?: (filter: Filter) => void;
  onFilterEdit?: (filter: Filter) => void;
  onFilterDelete?: (id: string) => void;
  onFiltersClear?: () => void;
}

export const DataGridToolbar = ({
  columnsMetadata,
  filterValues,
  translations,
  onFilterAdd,
  onFilterEdit,
  onFilterDelete,
  dateFilterValue,
  onDateFilterValueChange,
  onFiltersClear,
  customEditTagContent
}: DataGridToolbarProps) => {
  const { state, addFilter, editFilter, deleteFilter, resetFilters, clearFilters } =
    useFiltersReducer(filterValues);

  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    if (!isFirstRenderRef.current && filterValues) {
      resetFilters(filterValues);
    }
  }, [filterValues]);

  useEffect(() => {
    isFirstRenderRef.current = false;
  }, []);

  const { clearButtonCaption = "Clear all filters" } = translations?.toolbar || {};
  return (
    <Fragment>
      {columnsMetadata &&
        state.filters.map(filter => (
          <DataGridFilter
            mode="EDIT"
            key={filter.id}
            filter={filter}
            columnsMetadata={columnsMetadata}
            filterState={state}
            onFilterEdit={filter => {
              editFilter(filter);
              onFilterEdit && onFilterEdit(filter);
            }}
            onFilterDelete={id => {
              deleteFilter(id);
              onFilterDelete && onFilterDelete(id);
            }}
            tagTranslations={translations?.tag}
            popoverTranslations={translations?.popover}
            customEditTagContent={customEditTagContent}
          />
        ))}
      <div className={classes["actions-wrapper"]}>
        {columnsMetadata && (
          <DataGridFilter
            mode="ADD"
            customEditTagContent={customEditTagContent}
            columnsMetadata={columnsMetadata}
            filterState={state}
            onFilterAdd={filter => {
              addFilter(filter);
              onFilterAdd && onFilterAdd(filter);
            }}
            tagTranslations={translations?.tag}
            popoverTranslations={translations?.popover}
          />
        )}
        {columnsMetadata && state.filters.length >= 1 && (
          <button
            type="button"
            className={classes["clear-button"]}
            onClick={() => {
              clearFilters();
              onFiltersClear && onFiltersClear();
            }}
          >
            <Typography variant="body" className={classes["caption"]}>
              {clearButtonCaption}
            </Typography>
          </button>
        )}

        {dateFilterValue && (
          <DataGridDateFilter
            dateFilterValue={dateFilterValue}
            onDateFilterValueChange={onDateFilterValueChange}
          />
        )}
      </div>
    </Fragment>
  );
};
