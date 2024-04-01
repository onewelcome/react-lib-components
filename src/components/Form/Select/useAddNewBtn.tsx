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

import classes from "./useAddNewBtn.module.scss";

import React, { useRef } from "react";
import { AddNewProps } from "./Select.interfaces";

interface Props {
  addNew?: AddNewProps;
  filter: string;
}

export const useAddNewBtn = ({ addNew, filter }: Props) => {
  const addBtnRef = useRef<HTMLButtonElement>(null);

  const addNewLabel = addNew?.label ?? "Create new";

  const renderAddNew = () =>
    addNew && (
      <button
        data-testid={"select-action-button"}
        className={classes["action-button"]}
        onClick={() => addNew.onAddNew(filter)}
        ref={addBtnRef}
        type="button"
        {...addNew.btnProps}
      >
        {!filter && addNewLabel}
        {filter && <span style={{ fontWeight: "700" }}>{`"${filter}"`}</span>}
        {filter && ` (${addNewLabel.toLowerCase()})`}
      </button>
    );

  const addNewBtnOptionsContainerClassName = addNew ? classes["has-sibling"] : "";

  return {
    addNewBtnOptionsContainerClassName,
    renderAddNew,
    addBtnRef
  };
};
