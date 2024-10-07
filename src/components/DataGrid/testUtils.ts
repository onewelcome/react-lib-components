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

import { useEffect, useState } from "react";
import { Filter } from "./DataGridFilters/DataGridFilters.interfaces";
import { useFiltersReducer } from "./DataGridFilters/useFiltersReducer";

type OperatorPredicateMap<TOperator extends string> = {
  [op in TOperator]: (v1: string, v2: string) => boolean;
};

const operatorPredicateMap: OperatorPredicateMap<string> = {
  is: (v1, v2) => v1 === v2,
  "is not": (v1, v2) => v1 !== v2
};

function reduceConjunction<T>(arr: T[], fn: (v: T) => boolean) {
  return arr.reduce((acc, val) => fn(val) && acc, true);
}
function reduceDisjunction<T>(arr: T[], fn: (v: T) => boolean) {
  return arr.reduce((acc, val) => fn(val) || acc, false);
}

/**
 * @scope .
 * @scopeException stories/DataGrid/DataGrid.stories.tsx
 */
export const useMockFilteringLogic = <T extends { [k: string]: string }>(
  data: T[],
  filterValues: Filter[] | undefined
) => {
  const { state, addFilter, editFilter, deleteFilter, clearFilters } =
    useFiltersReducer(filterValues);

  const [gridData, setGridData] = useState(data);

  useEffect(() => {
    const filteredData = data
      .map((row: T) => {
        let shouldBeDiscarded: boolean[] = [];
        state.filters.forEach(filter => {
          const reduce = filter.operator == "is" ? reduceDisjunction : reduceConjunction;
          const operatorPredicate = operatorPredicateMap[filter.operator];
          shouldBeDiscarded = [
            ...shouldBeDiscarded,
            !reduce(filter.value, val => operatorPredicate(row[filter.column], val))
          ];
        });

        return shouldBeDiscarded.length > 0 &&
          shouldBeDiscarded.reduce((acc, val) => acc || val, false)
          ? undefined
          : row;
      })
      .filter(val => {
        return val !== undefined;
      }) as T[];
    setGridData(filteredData);
  }, [state.filters]);

  return {
    onFilterAdd: addFilter,
    onFilterEdit: editFilter,
    onFilterDelete: deleteFilter,
    onFiltersClear: clearFilters,
    gridData,
    setGridData,
    filters: state.filters
  };
};

export interface KeyValuePair<TKey = string, TValue = string> {
  key: TKey;
  value: TValue;
}

export interface FilterWithKeys {
  id: string;
  column: string;
  operator: string;
  keys: string[];
}

class MockDataSource<T extends { [k: string]: string }> {
  constructor(
    public data: T[],
    public keyedColumnDefinitons?: { [columnName: string]: KeyValuePair[] }
  ) {
    this._keyedColumnDefinitons = keyedColumnDefinitons || {};
  }

  private _keyedColumnDefinitons: { [columnName: string]: KeyValuePair[] };

  async loadData(filters?: (Filter | FilterWithKeys)[]): Promise<T[]> {
    if (filters == undefined) {
      return this.data;
    }

    return this.data
      .map((row: T) => {
        let shouldBeDiscarded: boolean[] = [];
        filters.forEach(filter => {
          const reduce = filter.operator == "is" ? reduceDisjunction : reduceConjunction;
          const operatorPredicate = operatorPredicateMap[filter.operator];

          const keyedColumnDefinition = this._keyedColumnDefinitons[filter.column];
          if (!keyedColumnDefinition) {
            const filterWithValues = filter as Filter;
            shouldBeDiscarded = [
              ...shouldBeDiscarded,
              !reduce(filterWithValues.value, val => operatorPredicate(row[filter.column], val))
            ];
          } else {
            const filterWithKeys = filter as FilterWithKeys;
            shouldBeDiscarded = [
              ...shouldBeDiscarded,
              !reduce(filterWithKeys.keys, val => operatorPredicate(row[filter.column], val))
            ];
          }
        });

        return shouldBeDiscarded.length > 0 &&
          shouldBeDiscarded.reduce((acc, val) => acc || val, false)
          ? undefined
          : row;
      })
      .filter(val => {
        return val !== undefined;
      }) as T[];
  }
}

/**
 * @scope .
 * @scopeException stories/DataGrid/DataGrid.stories.tsx
 */
export const useMockFilteringLogic2 = <T extends { [k: string]: string }>(
  data: T[],
  filterValues: Filter[] | undefined
) => {
  const { state, addFilter, editFilter, deleteFilter, clearFilters } =
    useFiltersReducer(filterValues);

  const [gridData, setGridData] = useState(data);

  const dataSource = new MockDataSource(data);

  useEffect(() => {
    void (async () => {
      const d = await dataSource.loadData(state.filters);
      setGridData(d);
    })();
  }, [state.filters]);

  return {
    onFilterAdd: addFilter,
    onFilterEdit: editFilter,
    onFilterDelete: deleteFilter,
    onFiltersClear: clearFilters,
    gridData,
    setGridData,
    filters: state.filters
  };
};
