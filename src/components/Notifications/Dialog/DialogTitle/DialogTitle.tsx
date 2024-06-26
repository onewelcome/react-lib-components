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
import { Typography } from "../../../Typography/Typography";
import classes from "./DialogTitle.module.scss";
import { Icon, Icons } from "../../../Icon/Icon";
import { IconButton } from "../../../Button/IconButton";

export interface Props extends ComponentPropsWithRef<"div"> {
  id: string;
  title: string;
  titleIcon?: React.ReactNode;
  caption?: string;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DialogTitleComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { id, title, titleIcon, caption, onClose, ...rest }: Props,
  ref
) => {
  return (
    <div {...rest} ref={ref} className={classes["header"]}>
      <div
        className={`${classes["headline"]} ${caption ? classes["with-caption"] : classes["no-caption"]}`}
      >
        {titleIcon && (
          <div className={classes["title-icon"]}>
            {typeof titleIcon === "boolean" ? <Icon icon={Icons.InfoCircle} /> : titleIcon}
          </div>
        )}
        <div className={classes["title-wrapper"]}>
          <Typography
            id={id}
            className={classes["title"]}
            spacing={titleIcon && { marginLeft: 2 }}
            tag="h1"
            variant="h4"
          >
            {title}
          </Typography>
          {caption && (
            <Typography
              className={classes["caption"]}
              spacing={{ marginLeft: 2 }}
              variant="sub-text"
            >
              {caption}
            </Typography>
          )}
        </div>
      </div>
      {onClose && (
        <IconButton onClick={onClose} className={classes["close-button"]} title="close modal">
          <Icon icon={Icons.Times} />
        </IconButton>
      )}
    </div>
  );
};

export const DialogTitle = React.forwardRef(DialogTitleComponent);
