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
import classes from "./BaseModalHeader.module.scss";
import { IconButton } from "../../../Button/IconButton";
import { Icon, Icons } from "../../../Icon/Icon";
import { Typography } from "../../../Typography/Typography";

export interface Props extends ComponentPropsWithRef<"div"> {
  id: string;
  title: string;
  children?: React.ReactNode;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const BaseModalHeaderComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { id, title, children, onClose, ...rest }: Props,
  ref
) => {
  return (
    <div {...rest} ref={ref} className={classes["header"]}>
      <div className={classes["headline"]}>
        <div className={classes["title-wrapper"]}>
          <Typography
            id={id}
            className={classes["title"]}
            tag="h1"
            spacing={{ marginBottom: 0 }}
            variant="h4"
          >
            {title}
          </Typography>
        </div>
        <IconButton onClick={onClose} className={classes["closeBtn"]} title="close modal">
          <Icon icon={Icons.Times} />
        </IconButton>
      </div>
      {children}
    </div>
  );
};

export const BaseModalHeader = React.forwardRef(BaseModalHeaderComponent);
