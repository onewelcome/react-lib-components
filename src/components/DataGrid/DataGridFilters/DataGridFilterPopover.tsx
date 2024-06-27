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

import React, { createRef, useEffect } from "react";
import classes from "./DataGridFilter.module.scss";
import { Button } from "../../Button/Button";
import { Option } from "../../Form/Select/SingleSelect/Option";
import { MultiOption } from "../../Form/Select/MultiSelect/MultiOption";
import { MultiSelectWrapper } from "../../Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper";
import { SelectWrapper } from "../../Form/Wrapper/SelectWrapper/SelectWrapper";
import { Popover } from "../../Popover/Popover";
import { DataGridColumnMetadata, DefaultOperators } from "./DataGridFilters.interfaces";
import { useRepeatFocus } from "../../../hooks/useRepeatFocus";

export type Props = {
  anchorRef?: React.RefObject<HTMLOrSVGElement>;
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
};

export const DataGridFilterPopover = ({
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
  setPickedValues
}: Props) => {
  const popoverRef = createRef<HTMLDivElement>();

  useRepeatFocus(popoverRef);

  useEffect(() => {
    if (isOpen) {
      popoverRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <Popover
      anchorEl={anchorRef}
      show={isOpen}
      placement={{ horizontal: "left", vertical: "bottom" }}
      transformOrigin={{ horizontal: "left", vertical: "top" }}
    >
      <div tabIndex={-1} ref={popoverRef} className={classes["popover"]}>
        <div className={classes["controls"]}>
          <SelectWrapper
            label="Filter by"
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
            label="Operator"
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
            label="Value"
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
                label: "Create new",
                onAddNew: value => {
                  if (value) {
                    setValues(prev => [...prev, value]);
                    setPickedValues(prev => [...prev, value]);
                  }
                },
                btnProps: { title: "Add new select option", type: "button" }
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
          <Button onClick={onFilterSubmit}>Apply</Button>
          <Button
            variant="text"
            onClick={() => {
              resetFields();
              setFilterOpen(false);
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Popover>
  );
};
