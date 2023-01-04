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
  ComponentPropsWithRef,
  ForwardRefRenderFunction,
  Fragment,
  useRef,
  useState
} from "react";
import { Button, Props as ButtonProps } from "../../Button/Button";
import { IconButton } from "../../Button/IconButton";
import { Icon, Icons } from "../../Icon/Icon";
import { HeaderCell, ColumnName } from "../datagrid.interfaces";
import classes from "./DataGridActions.module.scss";
import { DataGridColumnsToggle } from "./DataGridColumnsToggle";

export interface Props extends ComponentPropsWithRef<"div"> {
  enableAddBtn?: boolean;
  enableColumnsBtn?: boolean;
  enableSearchBtn?: boolean;
  addBtnProps?: ButtonProps;
  columnsBtnProps?: ButtonProps;
  searchBtnProps?: ButtonProps;
  searchIconBtnProps?: ButtonProps;
  headers: HeaderCell[];
  onColumnToggled: (colName: ColumnName) => void;
}

const DataGridActionsComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    className,
    enableAddBtn,
    enableColumnsBtn,
    enableSearchBtn,
    addBtnProps = {},
    columnsBtnProps = {},
    searchBtnProps = {},
    searchIconBtnProps = {},
    headers,
    onColumnToggled,
    children,
    ...rest
  }: Props,
  ref
) => {
  const isHidden = !(enableAddBtn || enableColumnsBtn || enableSearchBtn);
  const [showColsPopover, setShowColsPopover] = useState(false);
  const showColumnBtn = useRef<HTMLButtonElement>(null);

  return isHidden ? null : (
    <div {...rest} ref={ref} className={`${classes["actions"]} ${className ?? ""}`}>
      <div className={classes["left-actions"]}>
        {enableAddBtn && (
          <Button
            color="primary"
            startIcon={<Icon icon={Icons.Plus} />}
            title="Add item"
            type="button"
            variant="outline"
            {...addBtnProps}
          >
            {addBtnProps.children ??  "Add item"}
          </Button>
        )}
      </div>
      <div className={classes["right-actions"]}>
        {enableColumnsBtn && (
          <Fragment>
            <Button
              startIcon={<Icon icon={Icons.Change} />}
              title="Show/hide columns"
              variant="text"
              {...columnsBtnProps}
              className={`${classes["desktop"]} ${columnsBtnProps?.className ?? ""}`}
              ref={showColumnBtn}
              onClick={() => setShowColsPopover(true)}
            >
              {columnsBtnProps.children ? columnsBtnProps.children : "Columns"}
            </Button>
            <IconButton
              title="Show/hide columns"
              {...columnsBtnProps}
              onClick={() => setShowColsPopover(true)}
              className={`${classes["mobile"]} ${columnsBtnProps?.className ?? ""}`}
            >
              <Icon icon={Icons.Change} />
            </IconButton>
            <DataGridColumnsToggle
              aria-hidden={!showColsPopover}
              open={showColsPopover}
              headers={headers}
              onClose={() => setShowColsPopover(false)}
              onToggleClicked={onColumnToggled}
              anchorEl={showColumnBtn}
            />
          </Fragment>
        )}
        {enableSearchBtn && (
          <Fragment>
            <Button
              startIcon={<Icon icon={Icons.TableSearch} />}
              title="Search"
              variant="text"
              {...searchBtnProps}
              className={`${classes["desktop"]} ${searchBtnProps?.className ?? ""}`}
            >
              {searchBtnProps.children ? searchBtnProps.children : "Search"}
            </Button>
            <IconButton
              title="Search"
              {...searchIconBtnProps}
              className={`${classes["mobile"]} ${columnsBtnProps?.className ?? ""}`}
            >
              <Icon icon={Icons.TableSearch} />
            </IconButton>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export const DataGridActions = React.forwardRef(DataGridActionsComponent);
