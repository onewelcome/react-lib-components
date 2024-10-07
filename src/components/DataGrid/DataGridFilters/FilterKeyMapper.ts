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

export class FilterKeyMapper {
  filterKvPairs = new Map<string, { key: string; value: string }[]>();

  getKeysForValues(filterName: string, values: string[]): string[] {
    const kvPairs = this.filterKvPairs.get(filterName);
    return values.map(v => kvPairs?.find(kv => kv.value === v)?.key).filter(k => k !== undefined);
  }

  getValues(filterName: string): string[] {
    const kvPairs = this.filterKvPairs.get(filterName);
    return kvPairs?.map(kv => kv.value) || [];
  }

  setFilterKvPairs(filterName: string, kvPairs: { key: string; value: string }[]) {
    this.filterKvPairs.set(filterName, kvPairs);
  }
}
