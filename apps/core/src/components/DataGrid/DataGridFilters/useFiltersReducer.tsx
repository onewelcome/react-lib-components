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

import { useReducer } from "react";
import { Filter, FiltersAction, FiltersState } from "./DataGridFilters.interfaces";

export const useFiltersReducer = (filterValues: Filter[] | undefined) => {
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

  const [state, dispatch] = useReducer(filtersReducer, { filters: filterValues || [] });

  const addFilter = (filter: Filter) =>
    dispatch({
      type: "add",
      payload: filter
    });

  const editFilter = (filter: Filter) =>
    dispatch({
      type: "edit",
      payload: filter
    });

  const deleteFilter = (id: string) => dispatch({ type: "remove", payload: { id } });

  const clearFilters = () => dispatch({ type: "clear" });

  return { state, addFilter, deleteFilter, editFilter, clearFilters };
};
