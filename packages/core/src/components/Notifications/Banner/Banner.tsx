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

import React, {
  AriaAttributes,
  AriaRole,
  ComponentPropsWithRef,
  ForwardRefRenderFunction
} from "react";
import { Typography } from "../../Typography/Typography";
import { Icon, Icons } from "../../Icon/Icon";
import classes from "./Banner.module.scss";

export type BannerType = "error" | "warning" | "info";
export interface Props extends ComponentPropsWithRef<"section"> {
  children: string;
  ariaRole?: AriaRole;
  ariaLive?: AriaAttributes["aria-live"];
  ariaLabel?: AriaAttributes["aria-label"];
  type: BannerType;
  title: string;
}

const BannerComponent: ForwardRefRenderFunction<HTMLElement, Props> = (
  { children, ariaLabel, ariaRole, ariaLive, type, title, ...rest }: Props,
  ref
) => {
  const getIconVariant = (type: BannerType): Icons | null => {
    switch (type) {
      case "info":
        return Icons.InfoCircle;
      case "error":
        return Icons.Error;
      case "warning":
        return Icons.Warning;
      default:
        return null;
    }
  };

  const icon = getIconVariant(type);

  return (
    <section
      {...rest}
      ref={ref}
      aria-live={ariaLive}
      aria-label={ariaLabel}
      role={ariaRole}
      className={`${classes["banner"]} ${classes[type]}`}
    >
      {icon && <Icon icon={icon} className={classes["icon"]} />}
      <div className={classes["container"]}>
        <Typography variant={"h4"} className={classes["headline"]}>
          {title}
        </Typography>
        <Typography variant={"body"} className={classes["content"]} tag={"p"}>
          {children}
        </Typography>
      </div>
    </section>
  );
};

export const Banner = React.forwardRef(BannerComponent);
