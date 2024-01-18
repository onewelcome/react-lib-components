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

export type Position = {
  top: number | `${number}rem` | "initial";
  bottom: number | `${number}rem` | "initial";
};

export interface UseArrowNavigationParams {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  setFocusedSelectItem: React.Dispatch<React.SetStateAction<number>>;
  childrenCount: number;
  setShouldClick: React.Dispatch<React.SetStateAction<boolean>>;
  onOptionChangeHandler: (optionElement: HTMLElement | null) => void;
  searchInputRef: React.RefObject<HTMLInputElement>;
  addBtnRef?: React.RefObject<HTMLButtonElement>;
  renderThreshold: number;
}

export interface UseSelectPositionListParams {
  expanded: boolean;
  optionListReference: React.RefObject<HTMLDivElement>;
  containerReference: React.RefObject<HTMLDivElement>;
}
