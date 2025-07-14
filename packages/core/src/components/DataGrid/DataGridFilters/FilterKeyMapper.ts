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

import { KeyValuePair } from "./DataGridFilters.interfaces";

export class FilterKeyMapper {
  columnKvPairs = new Map<string, { key: string; value: string }[]>();

  setColumnKvPairs(columnName: string, kvPairs: { key: string; value: string }[]) {
    this.columnKvPairs.set(columnName, kvPairs);
  }

  getValues(columnName: string): string[] {
    return this.getKvPairs(columnName).map(kv => kv.value);
  }

  getKeysForValues(columnName: string, values: string[]): string[] {
    const kvPairs = this.getKvPairs(columnName);
    return values.map(v => {
      const kv = kvPairs?.find(kv => kv.value === v);
      if (kv == undefined) {
        throw new Error(`Column '${columnName}' in FilterKeyMapper does not contain value '${v}'`);
      }
      return kv.key;
    });
  }

  getKvPairs(columnName: string): KeyValuePair[] {
    const kvPairs = this.columnKvPairs.get(columnName);
    if (kvPairs == undefined) {
      throw new Error(`Column '${columnName}' not found in ${FilterKeyMapper.name}`);
    }
    return kvPairs;
  }
}
