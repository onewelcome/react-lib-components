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

import React, { ForwardRefRenderFunction, HTMLAttributes, forwardRef } from "react";
import { Icon, Icons } from "../Icon/Icon";

import readyclasses from "../../readyclasses.module.scss";
import classes from "./RemoveButton.module.scss";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  removeLabel?: string;
  onRemove?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const RemoveButtonComponent: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  { children, removeLabel = "Remove", onRemove, ...rest }: Props,
  ref
) => {
  return (
    onRemove && (
      <button
        {...rest}
        ref={ref}
        className={`${classes["remove"]} ${rest.className ?? ""}`}
        title=""
        onClick={onRemove}
      >
        <Icon icon={Icons.Times} className={classes["icon"]} />
        <span className={readyclasses["sr-only"]}>{removeLabel}</span>
      </button>
    )
  );
};

export const RemoveButton = forwardRef(RemoveButtonComponent);
