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

import React, { useEffect, useRef, useState } from "react";
import { SearchProps } from "../Select.interfaces";

interface Props {
  selectId: string;
  search?: SearchProps;
  optionsCount: number;
  searchInputClassName: string;
  expanded: boolean;
  setFocusedSelectItem: (idx: number) => void;
  focusedSelectItem: number;
  describedBy?: string;
  getOptionId: (multiSelectId: string, optionIndex: number) => string;
  getListboxId: (multiSelectId: string) => string;
}

/** @scope .*/
export const useSearch = ({
  selectId,
  search,
  optionsCount,
  searchInputClassName,
  expanded,
  setFocusedSelectItem,
  focusedSelectItem,
  describedBy,
  getOptionId,
  getListboxId
}: Props) => {
  const [filter, setFilter] = useState("");

  const DEFAULT_RENDER_THRESHOLD = 0;

  const searchInputRef = useRef<HTMLInputElement>(null);

  const threshold = search?.renderThreshold ?? DEFAULT_RENDER_THRESHOLD;
  const hasEnoughChildren = optionsCount >= threshold;

  const shouldRenderSearch = () => {
    if (search?.enabled) {
      return hasEnoughChildren;
    }

    if (search) {
      return search.enabled as boolean;
    }

    return optionsCount > DEFAULT_RENDER_THRESHOLD;
  };

  const renderSearch = () => {
    return (
      <input
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        {...((search?.searchInputProps as any) ?? {})}
        ref={searchInputRef}
        value={filter}
        onChange={event => setFilter(event.currentTarget.value)}
        className={[searchInputClassName, search?.searchInputProps?.className].join(" ")}
        style={{
          display: expanded ? "block" : "none"
        }}
        type="text"
        name="search-option"
        placeholder={search?.searchPlaceholder}
        role="combobox"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        aria-controls={getListboxId(selectId)}
        aria-describedby={describedBy}
        aria-autocomplete="none"
        aria-expanded={expanded}
        aria-activedescendant={getOptionId(selectId, focusedSelectItem)}
        aria-haspopup={true}
      />
    );
  };

  const resetSearchState = () => {
    setFilter("");
    setFocusedSelectItem(0);
  };

  const visible = shouldRenderSearch();

  useEffect(() => {
    if (search?.searchInputProps?.reset) {
      resetSearchState();
    }
  }, [search?.searchInputProps?.reset]);

  return {
    renderSearch,
    resetSearchState,
    searchVisible: visible,
    searchThreshold: threshold,
    searchInputRef,
    filter
  };
};
