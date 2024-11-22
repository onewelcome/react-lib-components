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

import React from "react";
import classes from "./DateTimePicker.module.scss";
import contextMenuItemClasses from "../../../ContextMenu/ContextMenuItem.module.scss";

type Props = {};

const contextMenuItems = [
  { name: "Last 30 seconds" },
  { name: "Last 1 minute" },
  { name: "Last 5 minutes" },
  { name: "Last 1 hour" },
  { name: "Last 24 hours" },
  { name: "Custom" }
];

export const SideMenu = (props: Props) => {
  return (
    <ul className={classes["aside-menu"]}>
      {contextMenuItems.map(item => (
        <li
          key={item.name}
          role="none"
          className={`${contextMenuItemClasses["context-menu-item"]} ${classes["aside-menu-item"]}`}
        >
          <button
            role="menuitem"
            style={{ height: "2rem" }}
            // className={false ? contextMenuItemClasses["active"] : undefined}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
};
