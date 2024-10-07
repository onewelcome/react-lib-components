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
  ForwardRefRenderFunction,
  ComponentPropsWithRef,
  ReactElement,
  Fragment
} from "react";
import { Typography } from "../../../Typography/Typography";
import classes from "./DataGridCell.module.scss";

export interface Props extends ComponentPropsWithRef<"td"> {
  children?: ReactElement | string | number;
  prefixElement?: ReactElement;
  isLoading?: boolean;
  spacing?: React.CSSProperties;
  searchValue?: string;
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
    prefixElement,
    searchValue,
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

  //NOTE: we might want to migrate to Highlight API once it's supported by Firefox
  const renderContent = () => {
    if (typeof children === "string" && searchValue) {
      if (!children.toLowerCase().includes(searchValue.toLowerCase())) {
        return children;
      }

      const matchingSequence = new RegExp(searchValue, "i").exec(children);

      const parts = children.split(matchingSequence?.[0] ?? "");
      return parts.map((part, i) => {
        if (i === parts.length - 1) return <Fragment key={`${part}-${i}`}>{part}</Fragment>;

        return (
          <Fragment key={`${part}-${i}`}>
            {part}
            <mark data-testid={`${matchingSequence}-mark`}>{matchingSequence}</mark>
          </Fragment>
        );
      });
    }

    return children;
  };

  return (
    <td
      {...rest}
      ref={ref}
      style={{ ...rest.style, ...cellStyle }}
      className={`${classes["cell"]} ${className ?? ""}`}
    >
      {prefixElement ? (
        <div className={classes["content-wrapper"]}>
          {prefixElement}
          {isLoading && (
            <div className={classes["loading"]} aria-busy="true" aria-live="polite"></div>
          )}
          {!isLoading && (
            <Typography
              className={classes["text"]}
              variant="body"
              tag="span"
              spacing={{ marginBottom: 0 }}
            >
              {renderContent()}
            </Typography>
          )}
        </div>
      ) : (
        <>
          {isLoading && (
            <div className={classes["loading"]} aria-busy="true" aria-live="polite"></div>
          )}
          {!isLoading && (
            <Typography className={classes["text"]} variant="body" tag="span">
              {renderContent()}
            </Typography>
          )}
        </>
      )}
    </td>
  );
};

export const DataGridCell = React.forwardRef(DataGridCellComponent);
