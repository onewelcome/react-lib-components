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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef, Fragment } from "react";
import { Icon, Icons } from "../../Icon/Icon";
import { Direction } from "../datagrid.interfaces";
import classes from "./DataGridHeaderCell.module.scss";

export interface Props extends ComponentPropsWithRef<"th"> {
  headline: string;
  name: string;
  disableSorting?: boolean;
  activeSortDirection?: Direction;
  onSort?: (name: string) => void;
}

const ariaSortMapping = {
  ASC: "ascending",
  DESC: "descending"
} as const;

const DataGridHeaderCellComponent: ForwardRefRenderFunction<HTMLTableCellElement, Props> = (
  { headline, name, disableSorting, activeSortDirection, onSort, ...rest }: Props,
  ref
) => {
  const onCellClick = () => {
    onSort?.(name);
  };

  const sortingIndicator = () => {
    const getSortingIndicatorClasses = () => {
      const sortingIndicatorClasses = [classes["indicator"]];
      activeSortDirection &&
        sortingIndicatorClasses.push(
          activeSortDirection === "ASC" ? classes["ascending"] : classes["descending"]
        );
      return sortingIndicatorClasses;
    };

    return <Icon className={getSortingIndicatorClasses().join(" ")} icon={Icons.ArrowUp} />;
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
};

export const DataGridHeaderCell = React.forwardRef(DataGridHeaderCellComponent);
