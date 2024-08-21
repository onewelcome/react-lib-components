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

import React, { useEffect } from "react";
import classes from "./DataGridFilter.module.scss";
import { Button } from "../../Button/Button";
import { Option } from "../../Form/Select/SingleSelect/Option";
import { MultiOption } from "../../Form/Select/MultiSelect/MultiOption";
import { MultiSelectWrapper } from "../../Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper";
import { SelectWrapper } from "../../Form/Wrapper/SelectWrapper/SelectWrapper";
import { Popover } from "../../Popover/Popover";
import {
  DataGridColumnMetadata,
  DefaultOperators,
  PopoverTranslations
} from "./DataGridFilters.interfaces";
import { useRepeatFocus } from "../../../hooks/useRepeatFocus";

export type Props = {
  popoverRef: React.RefObject<HTMLDivElement>;
  anchorRef?: React.RefObject<HTMLDivElement>;
  isOpen: boolean;
  column: string;
  columnsMetadata: DataGridColumnMetadata[];
  values: string[];
  pickedValues: string[];
  operator: string;
  operators: string[];
  onFilterSubmit: () => void;
  resetFields: () => void;
  setFilterOpen: (value: React.SetStateAction<boolean>) => void;
  setColumn: (column: React.SetStateAction<string>) => void;
  setOperator: (operator: React.SetStateAction<string>) => void;
  setOperators: (operators: React.SetStateAction<string[]>) => void;
  setValues: (values: React.SetStateAction<string[]>) => void;
  setPickedValues: (pickedValues: React.SetStateAction<string[]>) => void;
  translations?: PopoverTranslations;
};

export const DataGridFilterPopover = ({
  popoverRef,
  anchorRef,
  isOpen,
  column,
  columnsMetadata,
  values,
  pickedValues,
  operator,
  operators,
  onFilterSubmit,
  resetFields,
  setFilterOpen,
  setColumn,
  setOperator,
  setOperators,
  setValues,
  setPickedValues,
  translations
}: Props) => {
  const {
    columnSelectLabel = "Filter by",
    operatorSelectLabel = "Operator",
    valueSelectLabel = "Value",
    addNewValueLabel = "Create new",
    addNewValueButtonTitle = "Add new select value",
    submitButtonTitle = "Apply",
    cancelButtonTitle = "Cancel"
  } = translations || {};
  useRepeatFocus(popoverRef);

  useEffect(() => {
    if (isOpen) {
      popoverRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <Popover
      tabIndex={-1}
      anchorEl={anchorRef}
      ref={popoverRef}
      show={isOpen}
      placement={{ horizontal: "left", vertical: "bottom" }}
      transformOrigin={{ horizontal: "left", vertical: "top" }}
    >
      <div className={classes["popover"]}>
        <div className={classes["controls"]}>
          <SelectWrapper
            label={columnSelectLabel}
            value={column}
            name={"column"}
            onChange={e => {
              setColumn(e.target.value);
              const columnMetadata = columnsMetadata.find(({ name }) => name === e.target.value);

              if (columnMetadata?.operators) {
                setOperator(columnMetadata.operators[0]);
                setOperators(columnMetadata.operators);
              } else {
                setOperator(Object.values(DefaultOperators)[0]);
                setOperators(Object.values(DefaultOperators));
              }

              if (columnMetadata?.defaultValues) {
                setPickedValues([]);
                setValues(columnMetadata.defaultValues);
              } else {
                setPickedValues([]);
                setValues([]);
              }
            }}
          >
            {columnsMetadata.map(({ name, headline }) => (
              <Option className={classes["column-select-option"]} key={name} value={name}>
                {headline}
              </Option>
            ))}
          </SelectWrapper>
          <SelectWrapper
            label={operatorSelectLabel}
            value={operator}
            name={"operator"}
            onChange={e => setOperator(e.target.value)}
          >
            {operators.map(operator => (
              <Option key={operator} value={operator}>
                {operator}
              </Option>
            ))}
          </SelectWrapper>
          <MultiSelectWrapper
            label={valueSelectLabel}
            name={"value"}
            value={pickedValues}
            onChange={e =>
              setPickedValues(
                [...Array.from(e.target.options)]
                  .filter(option => option.selected)
                  .map(option => option.value)
              )
            }
            selectProps={{
              addNew: {
                label: addNewValueLabel,
                onAddNew: value => {
                  if (value) {
                    setValues(prev => [...prev, value]);
                    setPickedValues(prev => [...prev, value]);
                  }
                },
                btnProps: { title: addNewValueButtonTitle, type: "button" }
              },
              search: {
                enabled: true,
                renderThreshold: 0
              }
            }}
          >
            {values.map(value => (
              <MultiOption key={value} value={value}>
                {value}
              </MultiOption>
            ))}
          </MultiSelectWrapper>
        </div>
        <div className={classes["actions"]}>
          <Button onClick={onFilterSubmit}>{submitButtonTitle}</Button>
          <Button
            variant="text"
            onClick={() => {
              resetFields();
              setFilterOpen(false);
            }}
          >
            {cancelButtonTitle}
          </Button>
        </div>
      </div>
    </Popover>
  );
};
