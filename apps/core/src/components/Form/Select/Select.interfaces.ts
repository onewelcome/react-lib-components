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

import { ComponentPropsWithRef, ReactElement } from "react";
import { Props as InputProps } from "../Input/Input";
import { FormElement } from "../form.interfaces";

export type PartialInputProps = Partial<InputProps>;

export interface SearchProps {
  enabled?: boolean;
  renderThreshold?: number;
  searchPlaceholder?: string;
  searchInputProps?: PartialInputProps & { reset?: boolean };
}

export interface AddNewProps {
  label: string;
  onAddNew: (value: string) => void;
  btnProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  alwaysEnabled?: boolean;
}

export interface SelectProps<V extends string | readonly string[] | undefined>
  extends ComponentPropsWithRef<"select">,
    FormElement {
  children: ReactElement[];
  name?: string;
  labeledBy?: string;
  describedBy?: string;
  placeholder?: string;
  selectButtonProps?: ComponentPropsWithRef<"button"> & FormElement;
  search?: SearchProps;
  className?: string;
  value: V;
  clearLabel?: string;
  noResultsLabel?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>, child?: ReactElement) => void;
  addNew?: AddNewProps;
  isReadOnlyView?: boolean;
}

export type SingleSelectProps = SelectProps<string>;
export type MultiSelectProps = SelectProps<string[]>;

export enum Position {
  Above = "Above",
  Below = "Below"
}

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
  isReadOnlyView?: boolean;
}

export interface UseSelectPositionListParams {
  expanded: boolean;
  optionListReference: React.RefObject<HTMLDivElement>;
  containerReference: React.RefObject<HTMLDivElement>;
  addBtnRef: React.RefObject<HTMLButtonElement>;
}
