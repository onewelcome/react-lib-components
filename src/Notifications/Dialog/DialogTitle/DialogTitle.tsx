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

import React, { ComponentPropsWithRef } from "react";
import { Typography } from "../../../Typography/Typography";
import classes from "./DialogTitle.module.scss";

export interface Props extends ComponentPropsWithRef<"div"> {
  id: string;
  title: string;
}

export const DialogTitle = React.forwardRef<HTMLDivElement, Props>(
  ({ id, title, ...rest }: Props, ref) => {
    return (
      <div {...rest} ref={ref} className={classes["header"]}>
        <Typography id={id} className={classes["title"]} tag="h1" variant="h4">
          {title}
        </Typography>
      </div>
    );
  }
);
