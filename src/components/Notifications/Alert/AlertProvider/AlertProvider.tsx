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

import React, { ReactNode, useRef, useState, createContext } from "react";
import { createPortal } from "react-dom";
import { Placement, AlertContainer } from "../AlertContainer/AlertContainer";
import { generateID } from "../../../../util/helper";
import { AlertItem, Props as AlertComponentProps } from "../AlertItem/AlertItem";
import { useGetDomRoot } from "../../../../hooks/useGetDomRoot";
import AlertContext, { AlertContextValue } from "./AlertContext";

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

type AlertEntry = AlertComponentProps & { height?: number };

export const AlertProvider = ({
  closeButtonTitle,
  placement = { vertical: "bottom", horizontal: "center" },
  autoHideDuration = { long: 8000, short: 4000 },
  stackSize = 3,
  domRoot,
  children,
  className
}: Props) => {
  const [alertEnties, setAlertEnties] = useState<AlertEntry[]>([]);

  const getDuration = (entry: Omit<AlertEntry, "id">) => {
    if (entry.variant === "error") {
      return autoHideDuration.long;
    }
    if (entry.actions?.length) {
      return autoHideDuration.long;
    }
    return autoHideDuration.short;
  };

  const enqueueAlert = (arg: string | Omit<AlertEntry, "id">) => {
    if (typeof arg === "string") {
      const newEntry: AlertEntry = {
        id: generateID(15, arg),
        content: arg,
        duration: autoHideDuration.short,
        closeButtonTitle
      };
      setAlertEnties(entries => [...entries, newEntry]);
      return;
    }

    arg = arg as AlertEntry;
    const newEntry: AlertEntry = {
      ...arg,
      id: generateID(15, arg.content || arg.title),
      duration: arg.duration ?? getDuration(arg),
      closeButtonTitle: arg.closeButtonTitle || closeButtonTitle
    };
    setAlertEnties(entries => [...entries, newEntry]);
  };

  const enqueueInfoAlert: AlertContextValue["enqueueInfoAlert"] = arg => {
    if (typeof arg === "string") {
      const newEntry: AlertEntry = {
        id: generateID(15, arg),
        content: arg,
        duration: autoHideDuration.short,
        closeButtonTitle,
        variant: "informative"
      };
      setAlertEnties(entries => [...entries, newEntry]);
      return;
    }

    const newEntry: AlertEntry = {
      ...arg,
      id: generateID(15, arg.content || arg.title),
      duration: arg.duration ?? getDuration(arg),
      closeButtonTitle: arg.closeButtonTitle || closeButtonTitle,
      variant: "informative"
    };
    setAlertEnties(entries => [...entries, newEntry]);
  };

  const enqueueSuccessAlert: AlertContextValue["enqueueSuccessAlert"] = arg => {
    if (typeof arg === "string") {
      const newEntry: AlertEntry = {
        id: generateID(15, arg),
        content: arg,
        duration: autoHideDuration.short,
        closeButtonTitle,
        variant: "success"
      };
      setAlertEnties(entries => [...entries, newEntry]);
      return;
    }

    const newEntry: AlertEntry = {
      ...arg,
      id: generateID(15, arg.content || arg.title),
      duration: arg.duration ?? getDuration(arg),
      closeButtonTitle: arg.closeButtonTitle || closeButtonTitle,
      variant: "success"
    };
    setAlertEnties(entries => [...entries, newEntry]);
  };

  const enqueueWarningAlert: AlertContextValue["enqueueWarningAlert"] = arg => {
    if (typeof arg === "string") {
      const newEntry: AlertEntry = {
        id: generateID(15, arg),
        content: arg,
        duration: autoHideDuration.short,
        closeButtonTitle,
        variant: "warning"
      };
      setAlertEnties(entries => [...entries, newEntry]);
      return;
    }

    const newEntry: AlertEntry = {
      ...arg,
      id: generateID(15, arg.content || arg.title),
      duration: arg.duration ?? getDuration(arg),
      closeButtonTitle: arg.closeButtonTitle || closeButtonTitle,
      variant: "warning"
    };
    setAlertEnties(entries => [...entries, newEntry]);
  };

  const enqueueErrorAlert: AlertContextValue["enqueueErrorAlert"] = arg => {
    if (typeof arg === "string") {
      const newEntry: AlertEntry = {
        id: generateID(15, arg),
        content: arg,
        duration: autoHideDuration.short,
        closeButtonTitle: closeButtonTitle,
        variant: "error"
      };
      setAlertEnties(entries => [...entries, newEntry]);
      return;
    }

    if (arg instanceof Error) {
      if (!arg.message) {
        return;
      }
      const newEntry: AlertEntry = {
        id: generateID(15, arg.message),
        content: arg.message,
        duration: autoHideDuration.short,
        closeButtonTitle,
        variant: "error"
      };
      setAlertEnties(entries => [...entries, newEntry]);
      return;
    }

    const newEntry: AlertEntry = {
      ...arg,
      id: generateID(15, arg.content || arg.title),
      duration: arg.duration ?? getDuration(arg),
      closeButtonTitle: arg.closeButtonTitle || closeButtonTitle,
      variant: "error"
    };
    setAlertEnties(entries => [...entries, newEntry]);
  };

  const setAlertHeight = (id: string, height: number) => {
    const newAlertsState = alertEnties.map(alertEntry => {
      if (alertEntry.id !== id) {
        return alertEntry;
      }
      return { ...alertEntry, height };
    });
    setAlertEnties(newAlertsState);
  };

  const removeEntry = (entryId: string) => {
    setAlertEnties(entries =>
      entries.filter((entry, idx) => {
        if (idx < stackSize) {
          entry.wasShown = true;
        }
        return entry.id !== entryId;
      })
    );
  };

  const renderAlertList = (): ReactNode => {
    return alertEnties.slice(0, stackSize).map((entry, index) => (
      <AlertItem
        {...entry}
        key={`${entry.id}-${index.toString()}`}
        onClose={() => {
          removeEntry(entry.id);
          entry.onClose?.();
        }}
      />
    ));
  };

  const wrappingDivRef = useRef(null);
  const { root } = useGetDomRoot(domRoot, wrappingDivRef);
  return (
    <AlertContext.Provider
      value={{
        enqueueAlert,
        enqueueInfoAlert,
        enqueueSuccessAlert,
        enqueueErrorAlert,
        enqueueWarningAlert,
        setAlertHeight,
        alerts: alertEnties
      }}
    >
      {children}
      <div ref={wrappingDivRef} className={className}>
        {createPortal(
          <AlertContainer placement={placement}>{renderAlertList()}</AlertContainer>,
          root
        )}
      </div>
    </AlertContext.Provider>
  );
};
