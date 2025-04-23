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

import { InputType } from "../../../index";

export interface KeyValue {
  key: string;
  value: string;
}

export interface Validation {
  type: "min" | "max" | "matches" | "email" | "required"; // more supported validation type needs to be added here
  value: unknown;
  message: string;
}

export type ControlType =
  | "textbox"
  | "select"
  | "checkbox"
  | "radio"
  | "label"
  | "button"
  | "submit";

export interface DynamicFormField {
  isRequired?: boolean;
  id: string;
  label: string; // Control label text
  validations?: Validation[];
  controlType: ControlType;
  defaultValue?: string | string[] | boolean;
  possibleValues?: string | string[] | KeyValue[];
  inputType?: InputType;
  isEditable?: boolean;
  isArray?: boolean;
  isComplex?: boolean;
  subAttributes?: DynamicFormField[];
}

export interface FormAlias {
  touched?: Record<string, unknown> | undefined;
  values?: Record<string, unknown> | undefined;
  errors?: Record<string, unknown> | undefined;
  setFieldTouched: (
    field: string,
    isTouched?: boolean,
    shouldValidate?: boolean
  ) => Promise<void | Record<string, unknown>>;
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean
  ) => Promise<void | Record<string, unknown>>;
  handleChange?: (event: ChangeEvent) => void;
  handleBlur?: (event: FocusEvent) => void;
}

export type ChangeEvent = React.ChangeEvent<HTMLSelectElement | HTMLDivElement | HTMLInputElement>;

export type FocusEvent = React.FocusEvent<HTMLSelectElement | HTMLDivElement | HTMLInputElement>;
