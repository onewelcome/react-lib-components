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

import React from "react";
import { SingleSelectProps } from "../Form/Select/Select.interfaces";
import { Select } from "../Form/Select/SingleSelect/Select";
import { inlineEditingContext, InlineEditingProvider } from "../../context/InlineEditingContext";
import selectClasses from "../Form/Select/SingleSelect/Select.module.scss";

export const InlineSelect = (props: SingleSelectProps) => {
  const { className, error, success, tooltipText, required, ...rest } = props;
  const finalClassName = [className, selectClasses.inlineEditing].filter(Boolean).join(" ");
  const inlineEditingValues: inlineEditingContext = {
    enabled: true,
    error: error,
    success: success,
    required: required,
    tooltipText: tooltipText
  };

  return (
    <InlineEditingProvider value={inlineEditingValues}>
      <Select {...rest} className={finalClassName} />
    </InlineEditingProvider>
  );
};
