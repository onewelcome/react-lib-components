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

import React, { ForwardRefRenderFunction, Fragment, useState } from "react";
import { IconButton } from "../../Button/IconButton";
import { Toggle } from "../../Form/Toggle/Toggle";
import { Icon, Icons } from "../../Icon/Icon";
import { Popover, Props as PopoverProps } from "../../Popover/Popover";
import { Typography } from "../../Typography/Typography";
import { generateID } from "../../../util/helper";
import { HeaderCell } from "../datagrid.interfaces";
import classes from "./DataGridColumnsToggle.module.scss";
import { createPortal } from "react-dom";

export interface Props extends PopoverProps {
  open: boolean;
  headers: HeaderCell[];
  titleLabel?: string;
  closeButtonTitle?: string;
  onClose: () => void;
  onToggleClicked: (colName: string) => void;
  domRoot?: HTMLElement;
}

const DataGridColumnsToggleComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    open,
    headers,
    titleLabel = "Show columns",
    closeButtonTitle = "Close show columns dialog",
    onClose,
    onToggleClicked,
    className,
    domRoot = document.body,
    ...rest
  }: Props,
  ref
) => {
  const [id] = useState(generateID());
  const labelledId = id + "_header";

  const toggles = headers.map(item => (
    <Toggle
      key={item.name}
      name={item.name}
      checked={!item.hidden}
      onChange={() => onToggleClicked(item.name)}
      label={item.headline}
    />
  ));

  const handleBackdropClick = () => onClose();

  return (
    <Popover
      {...rest}
      ref={ref}
      className={`${classes["popover"]} ${className}`}
      show={open}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledId}
    >
      {open &&
        createPortal(
          <div
            aria-hidden="true"
            className={classes["backdrop"]}
            onClick={handleBackdropClick}
          ></div>,
          domRoot
        )}
      {open && (
        <Fragment>
          <div className={classes["header"]}>
            <Typography id={labelledId} className={classes["title"]} tag="span" variant="h4">
              {titleLabel}
            </Typography>
            <IconButton
              onClick={onClose}
              className={`${classes["close-btn"]}`}
              title={closeButtonTitle}
            >
              <Icon icon={Icons.Times} />
            </IconButton>
          </div>
          <div className={classes["content"]}>{toggles}</div>
        </Fragment>
      )}
    </Popover>
  );
};

export const DataGridColumnsToggle = React.forwardRef(DataGridColumnsToggleComponent);
