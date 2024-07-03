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

export const useMockFilteringLogic = <T>(data: T[], filterValues: Filter[] | undefined) => {
  const [filters, setFilters] = useState<Filter[]>(filterValues || []);

  const [gridData, setGridData] = useState(data);

  const onFilterAdd = (filter: Filter) => {
    setFilters(prev => [...prev, filter]);
  };

  const onFilterEdit = (filter: Filter) =>
    setFilters(prev => prev.map(f => (f.id === filter.id ? filter : f)));

  const onFilterDelete = (id: string) =>
    setFilters(prev => [...prev.filter(value => value.id !== id)]);

  const onFiltersClear = () => setFilters([]);

  const operatorPredicateMap = {
    is: (v1: string, v2: string) => v1 === v2,
    "is not": (v1: string, v2: string) => v1 !== v2
  };

  useEffect(() => {
    const filteredData = data
      .map((row: T) => {
        let shouldBeDiscarded: boolean[] = [];
        filters.forEach(filter => {
          shouldBeDiscarded = [
            ...shouldBeDiscarded,
            !filter.value.reduce((acc, val) => {
              return (
                // eslint-disable-next-line  @typescript-eslint/no-explicit-any
                (operatorPredicateMap[filter.operator as keyof typeof operatorPredicateMap] as any)(
                  row[filter.column as keyof typeof row],
                  val
                ) && acc
              );
            }, true)
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
  }, [filters]);

  return { onFilterAdd, onFilterEdit, onFilterDelete, onFiltersClear, gridData, filters };
};
