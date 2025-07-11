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

import React, { ReactNode, useRef, useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { Placement, AlertContainer } from "../AlertContainer/AlertContainer";
import { generateID } from "../../../../util/helper";
import { AlertItem, Props as AlertComponentProps, Variant } from "../AlertItem/AlertItem";
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

export type AlertEntry = AlertComponentProps & { height?: number };

export const AlertProvider = ({
  closeButtonTitle,
  placement = { vertical: "bottom", horizontal: "center" },
  autoHideDuration = { long: 8000, short: 4000 },
  stackSize = 3,
  domRoot,
  children,
  className
}: Props) => {
  const [alertEntries, setAlertEntries] = useState<AlertEntry[]>([]);
  const wrappingDivRef = useRef(null);
  const { root } = useGetDomRoot(domRoot, wrappingDivRef);

  const getDuration = (entry: Omit<AlertEntry, "id">) => {
    if (entry.variant === "error") {
      return autoHideDuration.long;
    }
    if (entry.actions?.length) {
      return autoHideDuration.long;
    }
    return autoHideDuration.short;
  };

  const buildEntryWithVariant = (arg: Omit<AlertEntry, "id">, variant?: Variant): AlertEntry => {
    let closeTitle = closeButtonTitle;
    if (arg.closeButtonTitle) {
      closeTitle = arg.closeButtonTitle;
    }
    return {
      ...arg,
      variant: variant ?? arg.variant,
      id: generateID(),
      duration: arg.duration ?? getDuration(arg),
      closeButtonTitle: closeTitle
    };
  };

  const enqueueAlert = (arg: Omit<AlertEntry, "id">) => {
    const newEntry = buildEntryWithVariant(arg);
    setAlertEntries(entries => [...entries, newEntry]);
  };

  const enqueueInfoAlert: AlertContextValue["enqueueInfoAlert"] = arg => {
    const newEntry: AlertEntry = buildEntryWithVariant(arg, "informative");
    setAlertEntries(entries => [...entries, newEntry]);
  };

  const enqueueSuccessAlert: AlertContextValue["enqueueSuccessAlert"] = arg => {
    const newEntry: AlertEntry = buildEntryWithVariant(arg, "success");
    setAlertEntries(entries => [...entries, newEntry]);
  };

  const enqueueWarningAlert: AlertContextValue["enqueueWarningAlert"] = arg => {
    const newEntry: AlertEntry = buildEntryWithVariant(arg, "warning");
    setAlertEntries(entries => [...entries, newEntry]);
  };

  const enqueueErrorAlert: AlertContextValue["enqueueErrorAlert"] = arg => {
    const newEntry: AlertEntry = buildEntryWithVariant(arg, "error");
    setAlertEntries(entries => [...entries, newEntry]);
  };

  const setAlertHeight = (id: string, height: number) => {
    const newAlertsState = alertEntries.map(alertEntry => {
      if (alertEntry.id !== id) {
        return alertEntry;
      }
      return { ...alertEntry, height };
    });
    setAlertEntries(newAlertsState);
  };

  const removeEntry = (entryId: string) => {
    setAlertEntries(entries => {
      return entries.filter((entry, idx) => {
        if (idx < stackSize) {
          entries[idx] = { ...entries[idx], wasShown: true };
        }
        return entry.id !== entryId;
      });
    });
  };

  const renderAlertList = (): ReactNode => {
    return alertEntries.slice(0, stackSize).map(entry => (
      <AlertItem
        {...entry}
        key={`${entry.id}`}
        onClose={() => {
          removeEntry(entry.id);
          entry.onClose?.();
        }}
      />
    ));
  };

  const contextValue = useMemo(
    () => ({
      enqueueAlert,
      enqueueInfoAlert,
      enqueueSuccessAlert,
      enqueueErrorAlert,
      enqueueWarningAlert,
      setAlertHeight,
      alerts: alertEntries
    }),
    [
      enqueueAlert,
      enqueueInfoAlert,
      enqueueSuccessAlert,
      enqueueErrorAlert,
      enqueueWarningAlert,
      setAlertHeight,
      alertEntries
    ]
  );

  return (
    <AlertContext.Provider value={contextValue}>
      {children}
      <div ref={wrappingDivRef}>
        {createPortal(
          <AlertContainer placement={placement} className={className}>
            {renderAlertList()}
          </AlertContainer>,
          root
        )}
      </div>
    </AlertContext.Provider>
  );
};
