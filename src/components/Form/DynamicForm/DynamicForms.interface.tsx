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

import { InputType } from "../../..";

export interface KeyValue {
  key: string;
  value: string;
}

export interface Validation {
  type: "min" | "max" | "matches" | "email" | "required"; // more supported validation type needs to be added here
  value: unknown;
  message: string;
}

export type DynamicValue = Record<string, unknown> | undefined;

export type ControlType =
  | "textbox"
  | "select"
  | "checkbox"
  | "radio"
  | "label"
  | "button"
  | "submit";

export interface Field {
  isRequired?: boolean; // To show * on the label
  id: string; // Map into the Formik
  label: string; // Control label text
  validations?: Validation[];
  controlType: ControlType;
  defaultValue?: string | string[] | boolean;
  possibleValues?: string | string[] | KeyValue[];
  inputType?: InputType; // "text" | "email" | "file" | "number" | "password" | "search" | "tel" | "url" | "hidden" | (typeof dateTypes)[number];
  isEditable?: boolean;
  isArray?: boolean;
  isComplex?: boolean;
  subAttributes?: Field[];
}
