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

import React, { ComponentPropsWithRef, ForwardRefRenderFunction, Fragment } from "react";
import { Icon, Icons } from "../../Icon/Icon";
import { RemoveButton } from "../../Tag/RemoveButton";
import { Typography } from "../../Typography/Typography";
import classes from "./DataGridFilter.module.scss";
import { Filter, FilterEditorMode } from "./DataGridFilters.interfaces";

export interface DataGridFilterTagProps extends ComponentPropsWithRef<"div"> {
  triggerRef: React.Ref<HTMLButtonElement>;
  filter?: Filter;
  mode: FilterEditorMode;
  onFilterRemove: () => void;
  onFilterOpen: () => void;
  addButtonCaption?: string;
}

const EditTagContent = ({ filter }: { filter: Filter }) => {
  const { column, operator, value } = filter;

  return (
    <Fragment>
      {column} {operator} {value.length > 0 && <b>{value[0]}</b>}
      {value.length >= 2 && (
        <>
          {" "}
          or <b> {value.length - 1} other</b>
        </>
      )}
    </Fragment>
  );
};

export const DataGridFilterTagComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  DataGridFilterTagProps
> = (
  {
    triggerRef,
    filter,
    mode,
    onFilterRemove,
    onFilterOpen,
    addButtonCaption = "Add filter",
    ...rest
  }: DataGridFilterTagProps,
  ref
) => {
  const shouldRenderAddTag = mode === "ADD";
  const shouldRenderEditTag = mode === "EDIT" && filter;

  return (
    <div {...rest} ref={ref} className={classes["filter-wrapper"]}>
      <button
        ref={triggerRef}
        type="button"
        className={classes["filter-button"]}
        onClick={onFilterOpen}
      >
        {shouldRenderAddTag && (
          <Fragment>
            <Icon icon={Icons.AddCircle} />
            <Typography variant="body" className={classes["caption"]}>
              {addButtonCaption}
            </Typography>
          </Fragment>
        )}
        {shouldRenderEditTag && (
          <Typography variant="body" className={classes["caption"]}>
            <EditTagContent filter={filter} />
          </Typography>
        )}
      </button>
      {shouldRenderEditTag && <RemoveButton onRemove={onFilterRemove} />}
    </div>
  );
};

export const DataGridFilterTag = React.forwardRef(DataGridFilterTagComponent);
