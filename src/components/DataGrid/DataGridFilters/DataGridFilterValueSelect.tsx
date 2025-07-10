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

import React from "react";
import { Option } from "../../Form/Select/SingleSelect/Option";
import { MultiOption } from "../../Form/Select/MultiSelect/MultiOption";
import { MultiSelectWrapper } from "../../Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper";
import { SelectWrapper } from "../../Form/Wrapper/SelectWrapper/SelectWrapper";
import {
  DataGridColumnMetadata,
  PopoverTranslations,
  ValueSelectType
} from "./DataGridFilters.interfaces";

export type Props = {
  column: string;
  columnsMetadata: DataGridColumnMetadata[];
  values: string[];
  pickedValues: string[];
  setValues: (values: React.SetStateAction<string[]>) => void;
  setPickedValues: (pickedValues: React.SetStateAction<string[]>) => void;
  translations?: PopoverTranslations;
};

export const DataGridFilterValueSelect = ({
  column,
  columnsMetadata,
  values,
  pickedValues,
  setValues,
  setPickedValues,
  translations
}: Props) => {
  const {
    valueSelectLabel = "Value",
    addNewValueLabel = "Create new",
    addNewValueButtonTitle = "Add new select value"
  } = translations || {};

  const columnMetadata = columnsMetadata.find(({ name }) => name === column);
  const disableAddNew = columnMetadata?.disableAddNew;
  const valueSelectType = columnMetadata?.valueSelectType;

  const addNewBtnProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
    title: addNewValueButtonTitle,
    type: "button"
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPickedValues(
      [...Array.from(e.target.options)]
        .filter(option => option.selected)
        .map(option => option.value)
    );
  };

  const selectProps = {
    addNew: disableAddNew
      ? undefined
      : {
          label: addNewValueLabel,
          onAddNew: (value: string) => {
            if (value) {
              setValues(prev => [...prev, value]);
              setPickedValues(prev => [...prev, value]);
            }
          },
          btnProps: addNewBtnProps
        },
    search: {
      enabled: true,
      renderThreshold: 0
    }
  };

  return ValueSelectType.single === valueSelectType ? (
    <SelectWrapper
      label={valueSelectLabel}
      name={"value"}
      value={pickedValues[0]}
      onChange={onChangeHandler}
      selectProps={selectProps}
    >
      {values.map(value => (
        <Option key={value} value={value}>
          {value}
        </Option>
      ))}
    </SelectWrapper>
  ) : (
    <MultiSelectWrapper
      label={valueSelectLabel}
      name={"value"}
      value={pickedValues}
      onChange={onChangeHandler}
      selectProps={selectProps}
    >
      {values.map(value => (
        <MultiOption key={value} value={value}>
          {value}
        </MultiOption>
      ))}
    </MultiSelectWrapper>
  );
};
