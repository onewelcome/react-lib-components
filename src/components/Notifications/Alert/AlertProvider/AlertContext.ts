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

import { AlertEntry } from "./AlertProvider";
import { createContext } from "react";

export type AlertQueue = Omit<AlertEntry, "id">;

export interface AlertContextValue {
  enqueueAlert: (entry: AlertQueue) => void;
  enqueueInfoAlert: (entry: AlertQueue) => void;
  enqueueSuccessAlert: (entry: AlertQueue) => void;
  enqueueWarningAlert: (entry: AlertQueue) => void;
  enqueueErrorAlert: (entry: AlertQueue) => void;
  setAlertHeight: (id: string, height: number) => void;
  alerts: AlertEntry[];
}

const AlertContext = createContext<AlertContextValue>({
  enqueueAlert: entry => null,
  enqueueInfoAlert: entry => null,
  enqueueSuccessAlert: entry => null,
  enqueueErrorAlert: entry => null,
  enqueueWarningAlert: entry => null,
  setAlertHeight: (id, height) => null,
  alerts: []
});

export default AlertContext;
