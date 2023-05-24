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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef } from "react";
import { Typography } from "../Typography/Typography";
import classes from "./ProgressBar.module.scss";

export interface Props extends Omit<ComponentPropsWithRef<"span">, "children"> {
  placeholderText: string;
  completed?: number;
}

const ProgressBarComponent: ForwardRefRenderFunction<HTMLSpanElement, Props> = (
  { placeholderText, completed, ...rest }: Props,
  ref
) => {
  return (
    <span {...rest} ref={ref} role="progressbar">
      <span className={classes["progress-bar"]}>
        <span
          className={`${classes["bar"]} ${
            completed ? classes[`w-${5 * Math.round(completed / 5)}`] : classes["loading-state"]
          }`}
        />
      </span>
      <Typography className={classes["placeholder"]} spacing={{ marginBottom: 0 }} variant="body">
        {placeholderText}
      </Typography>
    </span>
  );
};

export const ProgressBar = React.forwardRef(ProgressBarComponent);
