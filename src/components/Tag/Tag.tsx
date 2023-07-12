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
import classes from "./Tag.module.scss";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: "enabled" | "disabled";
  icon?: Icons;
  backgroundColor?: string;
  color?: string;
  children?: string;
}

const TagComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { children, variant, icon, backgroundColor, color, ...rest }: Props,
  ref
) => {
  const determineIcon = () => {
    if (icon) {
      return <Icon size="inherit" icon={icon} />;
    }

    if (variant === "enabled") {
      return <Icon size="inherit" icon={Icons.CheckmarkCircleAlt} />;
    } else if (variant === "disabled") {
      return <Icon size="inherit" icon={Icons.Forbidden} />;
    }
  };

  const determineClassName = () => {
    if (variant === "enabled") {
      return classes["tag-enabled"];
    } else if (variant === "disabled") {
      return classes["tag-disabled"];
    }
  };

  return (
    <div
      ref={ref}
      className={`${determineClassName()} ${classes["tag"]} ${rest.className ?? ""}`}
      style={{ backgroundColor, color }}
      {...rest}
    >
      {determineIcon()}
      <span className={classes["label"]}>{children}</span>
    </div>
  );
};

export const Tag = forwardRef(TagComponent);
