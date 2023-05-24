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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef, ReactNode } from "react";
import { Typography, Props as TypographyProps } from "../Typography/Typography";
import classes from "./StatusIndicator.module.scss";

export interface Props extends ComponentPropsWithRef<"div"> {
  children?: ReactNode;
  status: "active" | "error" | "neutral" | "warning";
  badgeProps?: ComponentPropsWithRef<"div">;
  typographyProps?: TypographyProps;
}

const StatusIndicatorComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { children, status, badgeProps, typographyProps, ...rest }: Props,
  ref
) => {
  return (
    <div {...rest} className={classes["status-indicator"]} ref={ref}>
      <div
        className={`${classes["status-badge"]} ${classes[status]} ${badgeProps?.className ?? ""}`}
      />
      <Typography {...typographyProps} spacing={{ margin: "0" }} variant="body" tag="div">
        {typographyProps?.children ?? children}
      </Typography>
    </div>
  );
};

export const StatusIndicator = React.forwardRef(StatusIndicatorComponent);
