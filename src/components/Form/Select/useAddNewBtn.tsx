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
  id?: string;
  addNew?: AddNewProps;
  filter: string;
  focusedSelectItem: number;
  optionsCount: number;
}

export const useAddNewBtn = ({ id, addNew, filter, focusedSelectItem, optionsCount }: Props) => {
  const addBtnRef = useRef<HTMLButtonElement>(null);
  const addNewLabel = addNew?.label ?? "Create new";
  const isProgrammaticallyFocused = focusedSelectItem === optionsCount;

  const additionalClasses = [classes["action-button"]];
  addNew?.btnProps?.className && additionalClasses.push(addNew?.btnProps?.className);
  isProgrammaticallyFocused && additionalClasses.push(classes["focus"]);

  const renderAddNew = () =>
    addNew && (
      // (!!filter || addNew.alwaysEnabled) && ( ///@TODO: odblokowac
      <button
        data-testid="select-action-button"
        {...addNew.btnProps}
        ref={addBtnRef}
        type="button"
        className={additionalClasses.join(" ")}
        onClick={() => addNew.onAddNew(filter)}
        id={id}
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
    isProgrammaticallyFocused,
    addBtnRef
  };
};
