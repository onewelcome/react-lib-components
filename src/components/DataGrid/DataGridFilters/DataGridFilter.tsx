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

import React, { Fragment, createRef, useState } from "react";
import classes from "./DataGridFilter.module.scss";
import { Icon, Icons } from "../../Icon/Icon";
import { Typography } from "../../Typography/Typography";
import { createPortal } from "react-dom";
import { useGetDomRoot } from "../../../hooks/useGetDomRoot";
import { Popover } from "../../Popover/Popover";
import { Button } from "../../Button/Button";
import { SelectWrapper } from "../../Form/Wrapper/SelectWrapper/SelectWrapper";
import { MultiSelectWrapper } from "../../Form/Wrapper/MultiSelectWrapper/MultiSelectWrapper";
import {
  DataGridColumnMetadata,
  DefaultOperators,
  Filter,
  FiltersAction
} from "./DataGridFilters.interfaces";
import { Option } from "../../Form/Select/SingleSelect/Option";
import { MultiOption } from "../../Form/Select/MultiSelect/MultiOption";
import { generateID } from "../../../util/helper";

export type Props = {
  //that aint it - split this component into filter, popover and add button
  addFilter?: boolean;
  domRoot?: HTMLElement;
  filter?: Filter;
  columnsMetadata: DataGridColumnMetadata[];
  dispatch: React.Dispatch<FiltersAction>;
  onFilterAdd?: (filter: Filter) => void;
  onFilterEdit?: (filter: Filter) => void;
  onFilterDelete?: (id: string) => void;
};

export const DataGridFilter = ({
  addFilter,
  filter,
  domRoot,
  columnsMetadata,
  dispatch,
  onFilterAdd,
  onFilterEdit,
  onFilterDelete
}: Props) => {
  //TODO this should be passed as a prop once we split this component
  const mode: "ADD" | "EDIT" = addFilter ? "ADD" : "EDIT";
  const wrappingDivRef = createRef<HTMLDivElement>();
  const [filterOpen, setFilterOpen] = useState(false);
  const { root } = useGetDomRoot(domRoot, wrappingDivRef);
  const [operators, setOperators] = useState<string[]>(Object.values(DefaultOperators));
  const [column, setColumn] = useState("");
  const [operator, setOperator] = useState("");
  const [values, setValues] = useState<string[]>([]);
  const [pickedValues, setPickedValues] = useState<string[]>([]);

  const resetFields = () => {
    setColumn("");
    setOperator("");
    setValues([]);
    setPickedValues([]);
  };

  //user can extend the list of picked values with custom ones. We need to make sure that the default list includes the user created values.
  const mergeValues = (values: string[], pickedValues: string[]) => {
    return Array.from(new Set([...values, ...pickedValues]));
  };

  const initialiseFilterValues = (filter: Filter) => {
    const { column, operator, value } = filter;
    const columnMetadata = columnsMetadata.find(({ name }) => name === column);
    if (!columnMetadata) return;

    const { defaultValues, operators } = columnMetadata;

    setColumn(column);

    setOperator(operator);
    operators && setOperators(operators);

    setPickedValues(value);
    setValues(mergeValues(defaultValues || [], value));
  };

  const onFilterSubmit = () => {
    //todo add error handling
    if (mode === "ADD") {
      dispatch({
        type: "add",
        payload: { id: generateID(), column, operator, value: pickedValues }
      });
      onFilterAdd && onFilterAdd({ id: generateID(), column, operator, value: pickedValues });
    }

    if (mode === "EDIT" && filter) {
      dispatch({
        type: "edit",
        payload: { id: filter?.id, column, operator, value: pickedValues }
      });
      onFilterEdit && onFilterEdit({ id: filter?.id, column, operator, value: pickedValues });
    }

    resetFields();
    setFilterOpen(false);
  };

  const onFilterRemove = () => {
    if (!filter) return;

    dispatch({ type: "remove", payload: { id: filter.id } });
    onFilterDelete && onFilterDelete(filter?.id);
    resetFields();
  };

  return (
    <Fragment>
      <div
        ref={wrappingDivRef}
        className={classes["filter-wrapper"]}
        onClick={() => {
          setFilterOpen(!filterOpen);
          if (!filterOpen && filter) {
            initialiseFilterValues(filter);
          }
        }}
      >
        {addFilter ? (
          <Fragment>
            <Icon icon={Icons.AddCircle} />
            <Typography variant="body" className={classes["caption"]}>
              Add filter
            </Typography>
          </Fragment>
        ) : (
          <Fragment>
            <Typography variant="body" className={classes["caption"]}>
              {filter?.column}
            </Typography>
            <Typography variant="body" className={classes["caption"]}>
              {" "}
              {filter?.operator}
            </Typography>
            <Typography variant="body" className={`${classes["caption"]} ${classes["bold"]}`}>
              {" "}
              <b> {filter?.value[0]}</b> {/*todo why does it bold the second part as well... */}
              {filter?.value?.length &&
                filter?.value?.length >= 2 &&
                ` or ${filter?.value.length - 1} other`}
            </Typography>{" "}
            <Icon onClick={onFilterRemove} className={classes["remove-icon"]} icon={Icons.Times} />
          </Fragment>
        )}
      </div>
      {createPortal(
        <Popover
          anchorEl={wrappingDivRef}
          show={filterOpen}
          placement={{ horizontal: "left", vertical: "bottom" }}
          transformOrigin={{ horizontal: "left", vertical: "top" }}
        >
          <div className={classes["popover"]}>
            <div className={classes["controls"]}>
              <SelectWrapper
                label="Filter by"
                value={column}
                name={""}
                onChange={e => {
                  setColumn(e.target.value);
                  const columnMetadata = columnsMetadata.find(
                    ({ name }) => name === e.target.value
                  );

                  //todo only reset the picked operators when changing to a column which has custom operators - check if prev had defaults
                  if (columnMetadata?.operators) {
                    setOperator("");
                    setOperators(columnMetadata.operators);
                  } else {
                    setOperator("");
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
                  <Option key={name} value={name}>
                    {headline}
                  </Option>
                ))}
              </SelectWrapper>
              <SelectWrapper
                label="Operator"
                value={operator}
                name={""}
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
                name={""}
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
                      value && setValues(prev => [...prev, value]);
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
        </Popover>,
        root
      )}
    </Fragment>
  );
};
