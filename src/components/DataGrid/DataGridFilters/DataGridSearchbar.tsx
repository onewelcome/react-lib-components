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

import React, { useState } from "react";
import { InputWrapper } from "../../Form/Wrapper/InputWrapper/InputWrapper";
import { Icon, Icons } from "../../Icon/Icon";
import classes from "./DataGridToolbar.module.scss";
import { InputWrapperProps, useDebouncedCallback } from "../../..";

export interface DataGridSearchbarProps extends InputWrapperProps {
  onSearch: (value: string) => void;
  searchValue?: string;
  debounceTime?: number;
}

export const DataGridSearchbar = ({
  onSearch,
  searchValue,
  debounceTime
}: DataGridSearchbarProps) => {
  const [search, setSearch] = useState(searchValue ?? "");
  const debouncedCallback = useDebouncedCallback(onSearch, debounceTime ?? 500);
  const onSearchCallback = debounceTime ? debouncedCallback : onSearch;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchCallback(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <InputWrapper
      className={classes["searchbar"]}
      label={""}
      onChange={onChange}
      type={"search"}
      name={"searchbar"}
      value={search}
      inputProps={{
        type: "search",
        prefix: <Icon icon={Icons.Search} />,
        placeholder: "Search items"
      }}
    ></InputWrapper>
  );
};
