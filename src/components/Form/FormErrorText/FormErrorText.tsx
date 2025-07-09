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
import { Icon, Icons } from "../../Icon/Icon";
import classes from "./FormErrorText.module.scss";
import { KeyValuePair } from "../../../interfaces";

export interface FormErrorTextProps {
  error?: boolean;
  errorMessage?: string;
  errorMessageProps?: React.ComponentPropsWithRef<"span"> & KeyValuePair;
  errorMessageIcon?: Icons;
  errorMessageIconPosition?: "before" | "after";
  errorId?: string;
}

export const FormErrorText = ({
  error,
  errorMessage,
  errorMessageProps,
  errorMessageIcon,
  errorMessageIconPosition = "before",
  errorId
}: FormErrorTextProps) => {
  if (!error) {
    return null;
  }

  return (
    <span
      {...errorMessageProps}
      className={`${classes["error-message"]} ${errorMessageProps?.className ?? ""}`}
    >
      <span id={errorId} className={classes["message"]}>
        {errorMessageIcon && errorMessageIconPosition === "before" && (
          <Icon
            className={`${classes["error-icon"]} ${classes["error-icon-before"]}`}
            icon={errorMessageIcon}
          />
        )}
        {errorMessageProps?.children || errorMessage}
        {errorMessageIcon && errorMessageIconPosition === "after" && (
          <Icon
            className={`${classes["error-icon"]} ${classes["error-icon-after"]}`}
            icon={errorMessageIcon}
          />
        )}
      </span>
    </span>
  );
};
