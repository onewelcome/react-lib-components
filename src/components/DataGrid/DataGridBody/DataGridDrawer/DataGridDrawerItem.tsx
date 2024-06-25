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

import React, { ComponentPropsWithRef, ForwardRefRenderFunction } from "react";
import classes from "./DataGridDrawerItem.module.scss";
import { Typography } from "../../../Typography/Typography";

export interface Props extends ComponentPropsWithRef<"div"> {
  title?: string;
  description?: string;
}

const DataGridDrawerItemComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { children, title, description, ...rest }: Props,
  ref
) => {
  return (
    <div {...rest} ref={ref} className={classes["item-wrapper"]}>
      {title && (
        <Typography className={classes["item-title"]} variant="body" tag="span">
          {title}
        </Typography>
      )}
      {description && (
        <Typography className={classes["item-description"]} variant="body" tag="span">
          {description}
        </Typography>
      )}
      {children && <div className={classes["children-wrapper"]}> {children}</div>}
    </div>
  );
};

export const DataGridDrawerItem = React.forwardRef(DataGridDrawerItemComponent);
