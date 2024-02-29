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
import { AlertContextProvider } from "./AlertStateProvider";
import {
  Actions,
  EnqueueAlertProps,
  AlertOptionsProps,
  Variant,
  isNewEnqueueAlertInterface
} from "../interfaces";
import { Placement, AlertContainer } from "../AlertContainer/AlertContainer";
import { generateID } from "../../../../util/helper";
import { AlertItem } from "../AlertItem/AlertItem";
import { useGetDomRoot } from "../../../../hooks/useGetDomRoot";

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
  title?: string;
  duration: number;
  className?: string;
  height: number;
  variant: Variant;
  content?: string;
  actions?: Actions;
  onClose?: () => void;
}

export const AlertProvider = (
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
  const [alerts, setAlerts] = useState<Item[]>([]);
  const wrappingDivRef = useRef(null);
  const { root } = useGetDomRoot(domRoot, wrappingDivRef);

  const addAlert = (item: Item) => {
    setAlerts(items => [...items, item]);
  };

  const setAlertHeight = (id: string, height: number) => {
    const newAlertsState = alerts.map(alert => {
      if (alert.id !== id) {
        return alert;
      }

      return { ...alert, height };
    });

    setAlerts(newAlertsState);
  };

  const getDuration = (variant: Variant, actions?: Actions, content?: string) => {
    const hasError = variant === "error";
    const hasContentOrActions = content ?? actions;
    if (hasError || hasContentOrActions) {
      return autoHideDuration.long;
    }
    return autoHideDuration.short;
  };

  const enqueueAlert = (
    propsOrTitle: EnqueueAlertProps | string | undefined,
    content?: string,
    options: AlertOptionsProps = {}
  ): void => {
    const newInterface = isNewEnqueueAlertInterface(propsOrTitle);
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
    addAlert(item);
  };

  const mapToNewInterface = (
    title?: string,
    content?: string,
    options: AlertOptionsProps = {}
  ): EnqueueAlertProps => {
    return {
      title,
      content,
      ...options
    };
  };

  const enqueueSuccessAlert = (
    propsOrTitle: EnqueueAlertProps | string | undefined,
    content?: string,
    options: AlertOptionsProps = {}
  ): void => {
    const newInterface = isNewEnqueueAlertInterface(propsOrTitle);
    const props = newInterface ? propsOrTitle : mapToNewInterface(propsOrTitle, content, options);
    enqueueAlert({ ...props, variant: "success" });
  };

  const enqueueErrorAlert = (
    propsOrTitle: EnqueueAlertProps | string | undefined,
    content?: string,
    options: AlertOptionsProps = {}
  ): void => {
    const newInterface = isNewEnqueueAlertInterface(propsOrTitle);
    const props = newInterface ? propsOrTitle : mapToNewInterface(propsOrTitle, content, options);
    enqueueAlert({ ...props, variant: "error" });
  };

  const enqueueWarningAlert = (
    propsOrTitle: EnqueueAlertProps | string | undefined,
    content?: string,
    options: AlertOptionsProps = {}
  ): void => {
    const newInterface = isNewEnqueueAlertInterface(propsOrTitle);
    const props = newInterface ? propsOrTitle : mapToNewInterface(propsOrTitle, content, options);
    enqueueAlert({ ...props, variant: "warning" });
  };

  const onItemClosed = (id: string) => {
    setAlerts(items => [...items].filter(item => item.id !== id));
  };

  const alertList = alerts.map((item, index) =>
    index < stackSize ? (
      <AlertItem
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

  const alertPortal = createPortal(
    <AlertContainer placement={placement} className={className}>
      {alertList}
    </AlertContainer>,
    root
  );

  return (
    <AlertContextProvider
      initialState={{
        enqueueAlert,
        enqueueSuccessAlert,
        enqueueErrorAlert,
        enqueueWarningAlert,
        setAlertHeight,
        alerts
      }}
    >
      {children}
      <div ref={wrappingDivRef}>{alertPortal}</div>
    </AlertContextProvider>
  );
};
