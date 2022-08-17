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

interface Item {
  id: string;
  title: string;
  duration: number;
  variant: Variant;
  content?: string;
  actions?: Actions;
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
      duration = getDuration(variant, actions, content)
    } = options;
    const item: Item = {
      title,
      content,
      variant,
      actions,
      duration,
      id: generateID(15, title)
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
        onClose={onItemClosed}
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
      initialState={{ enqueueSnackbar, enqueueSuccessSnackbar, enqueueErrorSnackbar }}
    >
      {children}
      {snackbarPortal}
    </SnackbarContextProvider>
  );
};
