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

import React, { ComponentPropsWithRef, ReactElement, Ref } from "react";
import { HeaderCell } from "../datagrid.interfaces";
import { DataGridCell } from "./DataGridCell/DataGridCell";
import { DataGridRow } from "./DataGridRow/DataGridRow";
import classes from "./DataGridBody.module.scss";
import { Typography } from "../../Typography/Typography";

export interface Props<T> extends Omit<ComponentPropsWithRef<"tbody">, "children"> {
  children: ({ item, index }: { item: T; index: number }) => ReactElement;
  data?: T[];
  nestedRowConfig?: {
    nestedItemsKey?: keyof T;
  };
  headers: HeaderCell[];
  isLoading?: boolean;
  disableContextMenuColumn?: boolean;
  searchValue?: string;
  emptyLabel?: string;
  spacing?: React.CSSProperties;
}

const skeletonLoadingRows = 9;

const DataGridBodyInner = <T extends {}>(
  {
    children,
    data,
    headers,
    nestedRowConfig,
    isLoading,
    disableContextMenuColumn,
    emptyLabel,
    spacing,
    searchValue,
    ...rest
  }: Props<T>,
  ref: Ref<HTMLTableSectionElement>
) => {
  const renderContent = () => {
    const visibleColumns = headers.filter(header => !header.hidden).length;
    if (isLoading) {
      return Array.from(Array(skeletonLoadingRows)).map((_, rowIdx) => (
        <DataGridRow key={rowIdx} isLoading>
          {Array.from(Array(visibleColumns)).map((__, colIdx) => (
            <DataGridCell key={colIdx} isLoading></DataGridCell>
          ))}
          {!disableContextMenuColumn && <DataGridCell></DataGridCell>}
        </DataGridRow>
      ));
    }

    const emptyData = !data || data.length === 0;
    if (emptyData) {
      return (
        <tr>
          <td
            className={classes["empty"]}
            colSpan={visibleColumns + (disableContextMenuColumn ? 0 : 1)}
          >
            <Typography variant="body" spacing={{ margin: 0 }}>
              {emptyLabel}
            </Typography>
          </td>
        </tr>
      );
    }

    return data?.map((item, index) => {
      return React.cloneElement(children({ item, index }), {
        searchValue: searchValue,
        headers,
        spacing,
        item,
        disableContextMenuColumn,
        enableNestedRow: !!nestedRowConfig,
        nestedItemsKey: nestedRowConfig?.nestedItemsKey,
        rowTemplate: children,
        isLastChild: index + 1 === data.length
      });
    });
  };

  return (
    <tbody {...rest} ref={ref}>
      {renderContent()}
    </tbody>
  );
};

export const DataGridBody = React.forwardRef(DataGridBodyInner) as <T extends {}>(
  p: Props<T> & { ref?: Ref<HTMLTableSectionElement> }
) => ReactElement;
