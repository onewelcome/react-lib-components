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

import React, { HTMLAttributes, ReactElement } from "react";
import classes from "./FormHeader.module.scss";
import { Button, ButtonProps, Typography } from "../../..";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  buttons: ReactElement<ButtonProps, typeof Button> | ReactElement<ButtonProps, typeof Button>[];
}

export const FormHeader = ({ title, children, buttons, ...rest }: Props) => {
  return (
    <div className={`${classes["header"]} ${rest.className}`} {...rest}>
      <div>
        <Typography className={classes["header-text"]} variant={"h3"}>
          {title}
        </Typography>
        <Typography variant={"body"} spacing={{ margin: 0 }}>
          {children}
        </Typography>
      </div>
      <div className={classes["buttons-wrapper"]}>{buttons}</div>
    </div>
  );
};
