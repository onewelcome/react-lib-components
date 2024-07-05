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

import React, { ComponentPropsWithRef, ReactElement, Ref, useEffect, useState } from "react";
import { Props as ButtonProps } from "../Button/Button";
import classes from "./DataGrid.module.scss";
import { DataGridHeader } from "./DataGridHeader/DataGridHeader";
import { DataGridActions } from "./DataGridActions/DataGridActions";
import { DataGridBody } from "./DataGridBody/DataGridBody";
import { HeaderCell, OnSortFunction, Sort } from "./datagrid.interfaces";
import { Pagination, Props as PaginationProps } from "../Pagination/Pagination";
import { Spacing, useSpacing } from "../../hooks/useSpacing";
import { DataGridToolbar, DataGridToolbarProps } from "./DataGridFilters/DataGridToolbar";

export interface Props<T> extends Omit<ComponentPropsWithRef<"div">, "children"> {
  children: ({ item, index }: { item: T; index: number }) => ReactElement;
  data?: T[];
  initialSort?: Sort;
  onSort?: OnSortFunction;
  headers: HeaderCell[];
  actions?: {
    enableAddBtn?: boolean;
    enableColumnsBtn?: boolean;
    enableSearchBtn?: boolean;
    addBtnProps?: ButtonProps;
    columnsBtnProps?: ButtonProps;
    searchBtnProps?: ButtonProps;
    searchIconBtnProps?: ButtonProps;
  };
  emptyLabel?: string;
  paginationProps?: PaginationProps;
  disableContextMenuColumn?: boolean;
  enableExpandableRow?: boolean;
  filters?: {
    enable: boolean;
    filtersProps: DataGridToolbarProps;
  };
  isLoading?: boolean;
  enableMultiSorting?: boolean;
  spacing?: Spacing;
}

const DataGridInner = <T extends {}>(
  {
    children,
    data,
    initialSort,
    onSort,
    headers,
    actions = {},
    paginationProps,
    disableContextMenuColumn,
    enableExpandableRow,
    filters,
    isLoading,
    enableMultiSorting,
    emptyLabel,
    spacing,
    style,
    ...rest
  }: Props<T>,
  ref: Ref<HTMLDivElement>
) => {
  if (!headers) {
    throw new Error("Headers definition has to be provided");
  }
  if (!children) {
    throw new Error("DataGridBody should be provided with a template how to render rows");
  }

  const [internalHeaders, setInternalHeaders] = useState(headers);
  const styleWithSpacing = useSpacing(spacing, style);

  useEffect(() => setInternalHeaders(headers), [headers]);

  const onColumnToggled = (colName: string) => {
    setInternalHeaders(
      internalHeaders.map(item =>
        item.name !== colName ? item : { ...item, hidden: !item.hidden }
      )
    );
  };

  if (styleWithSpacing?.padding) {
    const splitPaddings = styleWithSpacing.padding.toString().split(" ");

    let paddingLeftIndex: number = 0;

    if (splitPaddings.length >= 2) {
      paddingLeftIndex = 1;
    }
    if (splitPaddings.length === 4) {
      paddingLeftIndex = 3;
    }

    Object.defineProperties(styleWithSpacing, {
      paddingTop: {
        value: splitPaddings[0]
      },
      paddingRight: {
        value: splitPaddings[splitPaddings.length - 1 > 0 ? 1 : 0]
      },
      paddingBottom: {
        value: splitPaddings[splitPaddings.length / 3 >= 1 ? 2 : 0]
      },
      paddingLeft: {
        value: splitPaddings[paddingLeftIndex]
      }
    });
  }

  return (
    <div
      {...rest}
      className={classes["grid-wrapper"]}
      ref={ref}
      style={{
        paddingTop: styleWithSpacing?.paddingTop,
        paddingBottom: styleWithSpacing?.paddingBottom
      }}
    >
      {filters?.enable ? (
        <DataGridToolbar {...filters.filtersProps} />
      ) : (
        <DataGridActions
          {...actions}
          style={{
            paddingLeft: styleWithSpacing?.paddingLeft,
            paddingRight: styleWithSpacing?.paddingRight
          }}
          headers={internalHeaders}
          onColumnToggled={onColumnToggled}
        />
      )}

      <div className={classes["table-wrapper"]}>
        <table className={classes["table"]}>
          <DataGridHeader
            headers={internalHeaders}
            initialSort={initialSort}
            onSort={onSort}
            disableContextMenuColumn={disableContextMenuColumn}
            enableExpandableRow={enableExpandableRow}
            enableMultiSorting={enableMultiSorting}
            spacing={styleWithSpacing}
          />
          <DataGridBody
            data={data}
            headers={internalHeaders}
            isLoading={isLoading}
            disableContextMenuColumn={disableContextMenuColumn}
            emptyLabel={emptyLabel}
            spacing={styleWithSpacing}
          >
            {children}
          </DataGridBody>
        </table>
      </div>
      {paginationProps && !isLoading && (
        <Pagination
          {...paginationProps}
          style={{
            ...paginationProps.style,
            paddingLeft: styleWithSpacing?.paddingLeft,
            paddingRight: styleWithSpacing?.paddingRight
          }}
          className={`${classes["pagination"]} ${paginationProps.className ?? ""}`}
        />
      )}
    </div>
  );
};

export const DataGrid = React.forwardRef(DataGridInner) as <T extends {}>(
  p: Props<T> & { ref?: Ref<HTMLDivElement> }
) => ReactElement;
