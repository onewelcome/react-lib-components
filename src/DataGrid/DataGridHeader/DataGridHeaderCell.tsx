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

import React, { ComponentPropsWithRef, Fragment } from "react";
import { Icon, Icons } from "../../Icon/Icon";
import { ColumnName, Direction } from "../datagrid.interfaces";
import classes from "./DataGridHeaderCell.module.scss";

export interface Props extends ComponentPropsWithRef<"th"> {
  headline: string;
  name: ColumnName;
  disableSorting?: boolean;
  activeSortDirection?: Direction;
  onSort?: (name: ColumnName) => void;
}

const ariaSortMapping = {
  ASC: "ascending",
  DESC: "descending"
} as const;

export const DataGridHeaderCell = React.forwardRef<HTMLTableCellElement, Props>(
  ({ headline, name, disableSorting, activeSortDirection, onSort, ...rest }: Props, ref) => {
    const onCellClick = () => {
      onSort && onSort(name);
    };

    const sortingIndicator = () => {
      const getSortingIndicatorClasses = (direction: Direction) => {
        const sortingIndicatorClasses = [classes["indicator"]];
        activeSortDirection &&
          sortingIndicatorClasses.push(
            activeSortDirection === direction ? classes["active"] : classes["hidden"]
          );
        return sortingIndicatorClasses;
      };

      return (
        <Fragment>
          <Icon className={getSortingIndicatorClasses("ASC").join(" ")} icon={Icons.TriangleUp} />
          <Icon
            className={getSortingIndicatorClasses("DESC").join(" ")}
            icon={Icons.TriangleDown}
          />
        </Fragment>
      );
    };

    const innerContent = (
      <Fragment>
        <span className={classes["headline"]}>{headline}</span>
        {!disableSorting && (
          <div className={classes["sorting-indicator-container"]}>{sortingIndicator()}</div>
        )}
      </Fragment>
    );

    return (
      <th
        {...rest}
        ref={ref}
        className={classes["header-cell"]}
        aria-sort={activeSortDirection && ariaSortMapping[activeSortDirection]}
      >
        {disableSorting ? (
          <div key={name}>{innerContent}</div>
        ) : (
          <button key={name} onClick={onCellClick}>
            {innerContent}
          </button>
        )}
      </th>
    );
  }
);
