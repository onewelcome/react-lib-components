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
import { Typography } from "../Typography/Typography";
import { RemoveButton, Props as RemoveButtonProps } from "./RemoveButton";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: "enabled" | "disabled";
  icon?: Icons;
  backgroundColor?: string;
  color?: string;
  children?: string;
  shape?: "rounded" | "sharp";
  removeButton?: RemoveButtonProps;
}

const TagComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    children,
    variant,
    icon,
    backgroundColor,
    color,
    shape = "rounded",
    removeButton = {},
    ...rest
  }: Props,
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

  const tagClasses = [classes["tag"]];
  variant === "enabled" && tagClasses.push(classes["tag-enabled"]);
  variant === "disabled" && tagClasses.push(classes["tag-disabled"]);
  shape === "sharp" && tagClasses.push(classes["sharp"]);

  return (
    <div
      {...rest}
      ref={ref as any}
      className={`${tagClasses.join(" ")} ${rest.className ?? ""}`}
      style={{ backgroundColor, color }}
    >
      {determineIcon()}
      <Typography spacing={{ marginBottom: 0 }} variant="body" className={classes["label"]}>
        {children}
      </Typography>
      <RemoveButton {...removeButton} label={children} />
    </div>
  );
};

export const Tag = forwardRef(TagComponent);
