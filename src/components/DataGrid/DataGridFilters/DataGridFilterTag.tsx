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
import { Filter, FilterEditorMode, TagTranslations } from "./DataGridFilters.interfaces";

export interface DataGridFilterTagProps extends ComponentPropsWithRef<"div"> {
  customEditTagContent?: React.ReactElement;
  triggerRef: React.Ref<HTMLButtonElement>;
  filter?: Filter;
  mode: FilterEditorMode;
  onFilterRemove: () => void;
  onFilterOpen: () => void;
  translations?: TagTranslations;
}

const EditTagContent = ({ filter }: { filter: Filter }) => {
  const { column, operator, value } = filter;

  return (
    <Fragment>
      {column} {operator} {value.length > 0 && <b>{value[0]}</b>}
      {value.length >= 2 && (
        <>
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
    translations,
    customEditTagContent,
    ...rest
  }: DataGridFilterTagProps,
  ref
) => {
  const { addButtonCaption = "Add filter" } = translations || {};
  const shouldRenderAddTag = mode === "ADD";
  const shouldRenderEditTag = mode === "EDIT" && filter;
  const shouldRenderAddDateTag = mode === "ADD_DATE";

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
            {customEditTagContent ? (
              React.cloneElement(customEditTagContent, { filter })
            ) : (
              <EditTagContent filter={filter} />
            )}
          </Typography>
        )}
        {shouldRenderAddDateTag && (
          <Fragment>
            <Icon icon={Icons.Calendar} />
            <Typography variant="body" className={classes["caption"]}>
              Date is last 30 seconds
            </Typography>
          </Fragment>
        )}
      </button>
      {shouldRenderEditTag && (
        <RemoveButton className={classes["remove-button"]} onRemove={onFilterRemove} />
      )}
    </div>
  );
};

export const DataGridFilterTag = React.forwardRef(DataGridFilterTagComponent);
