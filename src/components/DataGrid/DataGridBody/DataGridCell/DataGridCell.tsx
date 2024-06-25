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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef, ReactElement } from "react";
import { Typography } from "../../../Typography/Typography";
import classes from "./DataGridCell.module.scss";

export interface Props extends ComponentPropsWithRef<"td"> {
  children?: ReactElement | string | number;
  isLoading?: boolean;
  spacing?: React.CSSProperties;
  cellIndex?: number;
  columnLength?: number;
  disableContextMenuColumn?: boolean;
}

const DataGridCellComponent: ForwardRefRenderFunction<HTMLTableCellElement, Props> = (
  {
    children,
    className,
    isLoading,
    spacing,
    cellIndex,
    columnLength,
    disableContextMenuColumn,
    ...rest
  }: Props,
  ref
) => {
  let cellStyle: React.CSSProperties = {};

  if (cellIndex === 0) {
    cellStyle.paddingLeft = spacing?.paddingLeft;
  }
  if (
    (cellIndex === columnLength && !disableContextMenuColumn) ||
    (columnLength && cellIndex === columnLength - 1 && disableContextMenuColumn)
  ) {
    cellStyle.paddingRight = spacing?.paddingRight;
  }

  return (
    <td
      {...rest}
      ref={ref}
      style={{ ...rest.style, ...cellStyle }}
      className={`${classes["cell"]} ${className ?? ""}`}
    >
      {isLoading && <div className={classes["loading"]} aria-busy="true" aria-live="polite"></div>}
      {!isLoading && (
        <Typography className={classes["text"]} variant="body" tag="span">
          {children}
        </Typography>
      )}
    </td>
  );
};

export const DataGridCell = React.forwardRef(DataGridCellComponent);
