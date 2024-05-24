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
import { PartialInputProps, SearchProps } from "../Select.interfaces";
import { Input } from "../../Input/Input";

interface Props {
  search?: SearchProps;
  optionsCount: number;
  /**
   * @deprecated
   */
  searchPlaceholder?: string;
  /**
   * @deprecated
   */
  searchInputProps?: PartialInputProps & { reset?: boolean };
  searchInputClassName: string;
  expanded: boolean;
  setFocusedSelectItem: (idx: number) => void;
}

/** @scope .*/
export const useSearch = ({
  search,
  optionsCount,
  searchPlaceholder,
  searchInputProps,
  searchInputClassName,
  expanded,
  setFocusedSelectItem
}: Props) => {
  const [filter, setFilter] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const DEFAULT_RENDER_THRESHOLD = 10;

  const searchInputRef = useRef<HTMLInputElement>(null);

  const threshold = search?.renderThreshold ?? DEFAULT_RENDER_THRESHOLD;
  const hasEnoughChildren = optionsCount >= threshold;

  const filterResults = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.currentTarget.value);
  };

  const shouldRenderSearch = () => {
    if (search?.enabled) {
      return hasEnoughChildren;
    }

    if (search) {
      return search.enabled as boolean;
    }

    return optionsCount > DEFAULT_RENDER_THRESHOLD;
  };

  const renderSearch = () => (
    <Input
      {...(search?.searchInputProps ?? searchInputProps ?? {})}
      ref={searchInputRef}
      onFocus={() => setIsSearching(true)}
      onBlur={() => setIsSearching(false)}
      onChange={filterResults}
      className={searchInputClassName}
      wrapperProps={{
        className:
          search?.searchInputProps?.wrapperProps?.className ??
          searchInputProps?.wrapperProps?.className
      }}
      style={{
        display: expanded ? "block" : "none"
      }}
      type="text"
      name="search-option"
      placeholder={search?.searchPlaceholder ?? searchPlaceholder}
    />
  );

  const resetSearchState = () => {
    setFilter("");
    setIsSearching(false);
    setFocusedSelectItem(-1);
  };

  const visible = shouldRenderSearch();

  useEffect(() => {
    (search?.searchInputProps?.reset || searchInputProps?.reset) && resetSearchState();
  }, [searchInputProps?.reset, search?.searchInputProps?.reset]);

  useEffect(() => {
    const searchDeactivated =
      !visible &&
      !isSearching; /*solves issue in MultiSelect when we filtered result and selected result causes list to be shorter than threshold so still we have a filter applied but can't change it due to `visible` variable has false  */
    if (searchDeactivated) {
      resetSearchState();
    }
  }, [isSearching, visible]);

  return {
    renderSearch,
    setIsSearching,
    searchVisible: visible,
    searchThreshold: threshold,
    searchInputRef,
    filter,
    isSearching
  };
};
