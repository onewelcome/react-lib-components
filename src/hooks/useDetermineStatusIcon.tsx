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

import { FormElement } from "../components/Form/form.interfaces";
import React, { ReactElement, useRef } from "react";
import { Icon, Icons } from "../components/Icon/Icon";
export const useDetermineStatusIcon = (params: Partial<FormElement>): ReactElement | null => {
  const { error, success } = params || false;
  let icon = null;
  const errorRef = useRef(null);
  const successRef = useRef(null);

  if (error) {
    icon = <Icon ref={errorRef} data-icon-status="error" icon={Icons.Error} />;
  } else if (success) {
    icon = (
      <Icon ref={successRef} data-icon-status="success" icon={Icons.CheckmarkCircleBreakout} />
    );
  }

  return icon;
};
