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
import classes from "./Skeleton.module.scss";

export interface Props extends Omit<ComponentPropsWithRef<"div">, "children"> {
  variant?: "circular" | "rectangle" | "text";
  height?: number | string;
  width?: number | string;
}

const SkeletonComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { variant = "text", height, width, className, style, ...rest }: Props,
  ref
) => {
  const classNames = [classes["skeleton"]];
  !height && classNames.push(classes["no-height"]);
  variant === "text" && classNames.push(classes["text"]);
  variant === "circular" && classNames.push(classes["circular"]);
  className && classNames.push(className);

  return (
    <span
      {...rest}
      aria-busy="true"
      aria-hidden="true"
      ref={ref}
      style={{ ...style, width, height }}
      className={classNames.join(" ")}
    ></span>
  );
};

export const Skeleton = React.forwardRef(SkeletonComponent);
