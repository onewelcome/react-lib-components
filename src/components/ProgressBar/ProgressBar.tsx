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
  label?: string;
  caption?: string;
  completed?: number;
  percentage?: number;
  accessibilityTitle?: string;
}

const ProgressBarComponent: ForwardRefRenderFunction<HTMLSpanElement, Props> = (
  { label, caption, completed, percentage, accessibilityTitle = "Progress bar", ...rest }: Props,
  ref
) => {
  return (
    <span
      {...rest}
      ref={ref}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percentage}
      title={accessibilityTitle}
    >
      <div className={classes["header"]}>
        {label && (
          <Typography className={classes["label"]} spacing={{ marginBottom: 2 }} variant="body">
            {label}
          </Typography>
        )}
        {percentage !== undefined && (
          <Typography
            className={classes["percentage"]}
            spacing={{ marginBottom: 2 }}
            variant="body"
          >
            {percentage}%
          </Typography>
        )}
      </div>
      <span className={classes["progress-bar"]}>
        <span
          className={`${classes["bar"]} ${completed ? "" : classes["loading-state"]}`}
          style={{ width: `${completed}%` }}
        />
        <span className={`${classes["bar2"]} ${completed ? "" : classes["loading-state"]}`} />
      </span>
      {caption && (
        <Typography className={classes["caption"]} spacing={{ marginBottom: 2 }} variant="sub-text">
          {caption}
        </Typography>
      )}
    </span>
  );
};

export const ProgressBar = React.forwardRef(ProgressBarComponent);
