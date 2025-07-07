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

export interface Filter {
  id: string;
  column: string;
  operator: string;
  value: string[];
}

export type FiltersAction =
  | {
      type: "add";
      payload: Filter;
    }
  | {
      type: "edit";
      payload: Filter;
    }
  | {
      type: "remove";
      payload: { id: string };
    }
  | {
      type: "clear";
    };

export type FiltersState = {
  filters: Filter[];
};

export type FilterEditorMode = "ADD" | "EDIT" | "ADD_DATE";

export enum DefaultOperators {
  is = "is",
  isNot = "is not",
  contains = "contains",
  doesNotContain = "does not contain",
  isEmpty = "is empty"
}

export interface DataGridColumnMetadata {
  name: string;
  headline: string;
  operators?: string[];
  defaultValues?: string[];
  disableAddNew?: boolean;
  allowSingleFilterOnly?: boolean;
  valueSelectType?: ValueSelectType;
}

export interface PopoverTranslations {
  columnSelectLabel?: string;
  operatorSelectLabel?: string;
  valueSelectLabel?: string;
  addNewValueLabel?: string;
  addNewValueButtonTitle?: string;
  submitButtonTitle?: string;
  cancelButtonTitle?: string;
}

export interface TagTranslations {
  addButtonCaption?: string;
  or?: string;
  other?: string;
  dateIs?: string;
}

export interface ToolbarTranslations {
  clearButtonCaption?: string;
}

export interface FiltersTranslations {
  toolbar?: ToolbarTranslations;
  tag?: TagTranslations;
  popover?: PopoverTranslations;
}

export interface KeyValuePair<TKey = string, TValue = string> {
  key: TKey;
  value: TValue;
}

export type DateTimeFilterType =
  | "THIRTY_SECONDS"
  | "ONE_MINUTE"
  | "FIVE_MINUTES"
  | "ONE_HOUR"
  | "TWENTY_FOUR_HOURS"
  | "CUSTOM";

export interface DateTimeFilter {
  fromDate: string;
  toDate: string;
  type: DateTimeFilterType;
}

export enum ValueSelectType {
  single = "single",
  multi = "multi"
}
