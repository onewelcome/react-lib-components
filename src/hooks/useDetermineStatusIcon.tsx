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

import { FormElement } from "../Form/form.interfaces";
import React, { ReactElement, useRef } from "react";
import { Icon, Icons } from "../Icon/Icon";
export const useDetermineStatusIcon = (
  params: FormElement,
  errorIconClassNames: string[],
  successIconClassName: string[]
): ReactElement | null => {
  const { success, error } = params;

  let icon = null;
  const errorRef = useRef(null);
  const successRef = useRef(null);

  if (error) {
    icon = <Icon ref={errorRef} className={errorIconClassNames.join(" ")} icon={Icons.Error} />;
  } else if (success) {
    icon = (
      <Icon
        ref={successRef}
        className={successIconClassName.join(" ")}
        icon={Icons.CheckmarkCircleBreakout}
      />
    );
  }

  return icon;
};
