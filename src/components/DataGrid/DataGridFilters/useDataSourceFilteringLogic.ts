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

import { useState, useEffect } from "react";
import { DataSource, Filter, FilterWithKeys, KeyedColumnDefs } from "./DataGridFilters.interfaces";
import { useFiltersReducer } from "./useFiltersReducer";

/**
 * @scope .
 * @scopeException stories/DataGrid/DataGrid.stories.tsx
 */

export const useDataSourceFilteringLogic = <T extends { [k: string]: string }>(
  dataSource: DataSource<T>,
  filterValues?: Filter[],
  keyedColumnDefs?: KeyedColumnDefs
) => {
  const keyedColumnDefs_: KeyedColumnDefs = keyedColumnDefs || {};
  const { state, addFilter, editFilter, deleteFilter, clearFilters } =
    useFiltersReducer(filterValues);

  const data: T[] = [];
  const [gridData, setGridData] = useState(data);

  useEffect(() => {
    void (async () => {
      const filters = convertFilters(state.filters);
      const d = await dataSource.loadData(filters);
      setGridData(d);
    })();
  }, [state.filters, keyedColumnDefs]);

  return {
    onFilterAdd: addFilter,
    onFilterEdit: editFilter,
    onFilterDelete: deleteFilter,
    onFiltersClear: clearFilters,
    gridData,
    setGridData,
    filters: state.filters
  };

  function convertFilters(filters: Filter[]): (Filter | FilterWithKeys)[] {
    return filters.map(filter => {
      const columnDef = keyedColumnDefs_[filter.column];
      if (columnDef != undefined) {
        return {
          ...filter,
          keys: filter.value.map(v => columnDef.find(kv => kv.value === v)!.key)
        };
      } else {
        return filter;
      }
    });
  }
};
