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

import React, { ReactNode, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { SnackbarContextProvider } from "./SnackbarStateProvider";
import {
  Actions,
  EnqueueSnackbarProps,
  SnackbarOptionsProps,
  Variant,
  isNewEnqueueSnackbarInterface
} from "../interfaces";
import { Placement, SnackbarContainer } from "../SnackbarContainer/SnackbarContainer";
import { generateID } from "../../../../util/helper";
import { SnackbarItem } from "../SnackbarItem/SnackbarItem";
import { useGetDomRoot } from "../../../../hooks/useGetDomRoot";

/** Short msg is when only title is provided. Long one when content or/and actions are provided (or type is error). */
interface Duration {
  long: number;
  short: number;
}

/**
 * @deprecated
 */
export interface Props {
  closeButtonTitle: string;
  children?: ReactNode;
  placement?: Placement;
  stackSize?: number;
  domRoot?: HTMLElement;
  autoHideDuration?: Duration;
  className?: string;
}

/**
 * @deprecated
 */
export interface Item {
  id: string;
  title?: string;
  duration: number;
  className?: string;
  height: number;
  variant: Variant;
  content?: string;
  actions?: Actions;
  onClose?: () => void;
}

/**
 * @deprecated
 */
export const SnackbarProvider = (
  {
    closeButtonTitle,
    placement = { vertical: "bottom", horizontal: "center" },
    autoHideDuration = { long: 8000, short: 4000 },
    stackSize = 3,
    domRoot,
    children,
    className
  }: Props = { closeButtonTitle: "" }
) => {
  const [snackbars, setSnackbars] = useState<Item[]>([]);
  const wrappingDivRef = useRef(null);
  const { root } = useGetDomRoot(domRoot, wrappingDivRef);

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
    const hasContentOrActions = content ?? actions;
    if (hasError || hasContentOrActions) {
      return autoHideDuration.long;
    }
    return autoHideDuration.short;
  };

  const enqueueSnackbar = (
    propsOrTitle: EnqueueSnackbarProps | string | undefined,
    content?: string,
    options: SnackbarOptionsProps = {}
  ): void => {
    const newInterface = isNewEnqueueSnackbarInterface(propsOrTitle);
    const props = newInterface ? propsOrTitle : mapToNewInterface(propsOrTitle, content, options);
    const {
      variant = "info",
      actions,
      duration = getDuration(variant, actions, props.content),
      onClose
    } = props;
    const item: Item = {
      title: props.title,
      content: props.content,
      variant,
      className: props.className,
      actions,
      duration,
      height: 0,
      id: generateID(15, props.title),
      onClose
    };
    addSnackbar(item);
  };

  const mapToNewInterface = (
    title?: string,
    content?: string,
    options: SnackbarOptionsProps = {}
  ): EnqueueSnackbarProps => {
    return {
      title,
      content,
      ...options
    };
  };

  const enqueueSuccessSnackbar = (
    propsOrTitle: EnqueueSnackbarProps | string | undefined,
    content?: string,
    options: SnackbarOptionsProps = {}
  ): void => {
    const newInterface = isNewEnqueueSnackbarInterface(propsOrTitle);
    const props = newInterface ? propsOrTitle : mapToNewInterface(propsOrTitle, content, options);
    enqueueSnackbar({ ...props, variant: "success" });
  };

  const enqueueErrorSnackbar = (
    propsOrTitle: EnqueueSnackbarProps | string | undefined,
    content?: string,
    options: SnackbarOptionsProps = {}
  ): void => {
    const newInterface = isNewEnqueueSnackbarInterface(propsOrTitle);
    const props = newInterface ? propsOrTitle : mapToNewInterface(propsOrTitle, content, options);
    enqueueSnackbar({ ...props, variant: "error" });
  };

  const enqueueWarningSnackbar = (
    propsOrTitle: EnqueueSnackbarProps | string | undefined,
    content?: string,
    options: SnackbarOptionsProps = {}
  ): void => {
    const newInterface = isNewEnqueueSnackbarInterface(propsOrTitle);
    const props = newInterface ? propsOrTitle : mapToNewInterface(propsOrTitle, content, options);
    enqueueSnackbar({ ...props, variant: "warning" });
  };

  const onItemClosed = (id: string) => {
    setSnackbars(items => [...items].filter(item => item.id !== id));
  };

  const snackbarList = snackbars.map((item, index) =>
    index < stackSize ? (
      <SnackbarItem
        {...item}
        key={item.id}
        className={item.className}
        onClose={() => {
          onItemClosed(item.id);
          item.onClose?.();
        }}
        closeButtonTitle={closeButtonTitle}
      />
    ) : null
  );

  const snackbarPortal = createPortal(
    <SnackbarContainer placement={placement} className={className}>
      {snackbarList}
    </SnackbarContainer>,
    root
  );

  return (
    <SnackbarContextProvider
      initialState={{
        enqueueSnackbar,
        enqueueSuccessSnackbar,
        enqueueErrorSnackbar,
        enqueueWarningSnackbar,
        setSnackbarHeight,
        snackbars
      }}
    >
      {children}
      <div ref={wrappingDivRef}>{snackbarPortal}</div>
    </SnackbarContextProvider>
  );
};
