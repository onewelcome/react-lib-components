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

import { useEffect, useState } from "react";
import { generateID } from "../util/helper";

export interface ConfigObject {
  name: string | undefined;
  errorMessage?: string;
  error?: boolean;
  parentErrorId?: string;
  helperText?: string;
  parentHelperId?: string;
}

export const useFormSelector = (configObject: ConfigObject) => {
  const [identifier] = useState(generateID(15, configObject.name));
  const [describedBy, setDescribedBy] = useState("");
  const [errorId] = useState(generateID(15, configObject.errorMessage));

  useEffect(() => {
    if (configObject.error && configObject.parentErrorId) {
      setDescribedBy(configObject.parentErrorId);
    }

    if (
      (!configObject.error && configObject.helperText) ||
      (!configObject.parentErrorId && !configObject.errorMessage && configObject.helperText)
    ) {
      setDescribedBy(`${identifier}`);
    }

    if (
      (!configObject.error && !configObject.helperText && configObject.parentHelperId) ||
      (!configObject.parentErrorId && !configObject.errorMessage && configObject.parentHelperId)
    ) {
      setDescribedBy(`${configObject.parentHelperId}`);
    }

    if (configObject.errorMessage && !configObject.parentErrorId && configObject.error) {
      setDescribedBy(errorId);
    }
  }, [identifier, configObject.error, configObject.parentErrorId]);

  return {
    describedBy,
    errorId,
    identifier
  };
};
