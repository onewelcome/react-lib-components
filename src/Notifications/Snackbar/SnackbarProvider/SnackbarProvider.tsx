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

import React, { ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import { SnackbarContextProvider } from "./SnackbarStateProvider";
import { Actions, SnackbarOptionsProps, Variant } from "../interfaces";
import { Placement, SnackbarContainer } from "../SnackbarContainer/SnackbarContainer";
import { generateID } from "../../../util/helper";
import { SnackbarItem } from "../SnackbarItem/SnackbarItem";

/** Short msg is when only title is provided. Long one when content or/and actions are provided (or type is error). */
interface Duration {
  long: number;
  short: number;
}

export interface Props {
  closeButtonTitle: string;
  children?: ReactNode;
  placement?: Placement;
  stackSize?: number;
  domRoot?: HTMLElement;
  autoHideDuration?: Duration;
  className?: string;
}

export interface Item {
  id: string;
  title: string;
  duration: number;
  height: number;
  variant: Variant;
  content?: string;
  actions?: Actions;
  onClose?: () => void;
}

export const SnackbarProvider = (
  {
    closeButtonTitle,
    placement = { vertical: "bottom", horizontal: "center" },
    autoHideDuration = { long: 8000, short: 4000 },
    stackSize = 3,
    domRoot = document.body,
    children,
    className
  }: Props = { closeButtonTitle: "" }
) => {
  const [snackbars, setSnackbars] = useState<Item[]>([]);

  const addSnackbar = (item: Item) => {
    setSnackbars(items => [...items, item]);
  };

  const setSnackbarHeight = (id: string, height: number) => {
    const newSnackbarsState = snackbars.map(snackbar => {
      if (snackbar.id !== id) {
        return snackbar;
      }

      return { ...snackbar, height };
    });

    setSnackbars(newSnackbarsState);
  };

  const getDuration = (variant: Variant, actions?: Actions, content?: string) => {
    const hasError = variant === "error";
    const hasContentOrActions = content || actions;
    if (hasError || hasContentOrActions) {
      return autoHideDuration.long;
    }
    return autoHideDuration.short;
  };

  const enqueueSnackbar = (
    title: string,
    content?: string,
    options: SnackbarOptionsProps = {}
  ): void => {
    const {
      variant = "info",
      actions,
      duration = getDuration(variant, actions, content),
      onClose
    } = options;
    const item: Item = {
      title,
      content,
      variant,
      actions,
      duration,
      height: 0,
      id: generateID(15, title),
      onClose
    };
    addSnackbar(item);
  };

  const enqueueSuccessSnackbar = (
    title: string,
    content?: string,
    options?: SnackbarOptionsProps
  ): void => {
    enqueueSnackbar(title, content, { ...options, variant: "success" });
  };

  const enqueueErrorSnackbar = (
    title: string,
    content?: string,
    options?: SnackbarOptionsProps
  ): void => {
    enqueueSnackbar(title, content, { ...options, variant: "error" });
  };

  const onItemClosed = (id: string) => {
    setSnackbars(items => [...items].filter(item => item.id !== id));
  };

  const snackbarList = snackbars.map((item, index) =>
    index < stackSize ? (
      <SnackbarItem
        {...item}
        key={item.id}
        onClose={() => {
          onItemClosed(item.id);
          item.onClose && item.onClose();
        }}
        closeButtonTitle={closeButtonTitle}
      />
    ) : null
  );

  const snackbarPortal = createPortal(
    <SnackbarContainer placement={placement} className={className}>
      {snackbarList}
    </SnackbarContainer>,
    domRoot
  );

  return (
    <SnackbarContextProvider
      initialState={{
        enqueueSnackbar,
        enqueueSuccessSnackbar,
        enqueueErrorSnackbar,
        setSnackbarHeight,
        snackbars
      }}
    >
      {children}
      {snackbarPortal}
    </SnackbarContextProvider>
  );
};
