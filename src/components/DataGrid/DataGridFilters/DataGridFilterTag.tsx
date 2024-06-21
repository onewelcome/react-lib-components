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

import React, { Fragment } from "react";
import { Icon, Icons } from "../../Icon/Icon";
import { RemoveButton } from "../../Tag/RemoveButton";
import { Typography } from "../../Typography/Typography";
import classes from "./DataGridFilter.module.scss";
import { Filter, FilterEditorMode } from "./DataGridFilters.interfaces";

export type DataGridFilterTagProps = {
  mode: FilterEditorMode;
  onFilterRemove: () => void;
  filter?: Filter;
  triggerRef: React.Ref<HTMLDivElement>;
  setFilterOpen: (value: React.SetStateAction<boolean>) => void;
  filterOpen: boolean;
  initialiseFilterValues: (filter?: Filter) => void;
  addButtonCaption?: string;
  onFilterOpen: () => void;
};

export const DataGridFilterTag = ({
  triggerRef,
  filter,
  mode,
  onFilterRemove,
  onFilterOpen,
  addButtonCaption = "Add filter"
}: DataGridFilterTagProps) => {
  const shouldRenderAddTag = mode === "ADD";
  const shouldRenderEditTag = mode === "EDIT" && filter;

  const getEditTagContent = (filter: Filter) => {
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

  return (
    <div ref={triggerRef} className={classes["filter-wrapper"]}>
      <Fragment>
        <button className={classes["filter-button"]} onClick={onFilterOpen}>
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
              {getEditTagContent(filter)}
            </Typography>
          )}
        </button>
        {shouldRenderEditTag && <RemoveButton onRemove={onFilterRemove} />}
      </Fragment>
    </div>
  );
};
