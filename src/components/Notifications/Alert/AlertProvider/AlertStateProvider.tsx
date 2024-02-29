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

import React, { createContext } from "react";
import { DeprecatedEnqueueAlertType } from "../interfaces";
import { Item } from "./AlertProvider";

interface AlertContextProps {
  enqueueAlert: DeprecatedEnqueueAlertType;
  enqueueSuccessAlert: DeprecatedEnqueueAlertType;
  enqueueWarningAlert: DeprecatedEnqueueAlertType;
  enqueueErrorAlert: DeprecatedEnqueueAlertType;
  setAlertHeight: (id: string, height: number) => void;
  alerts: Item[];
}

const AlertContext = createContext<AlertContextProps>({
  enqueueAlert: () => null,
  enqueueSuccessAlert: () => null,
  enqueueErrorAlert: () => null,
  enqueueWarningAlert: () => null,
  setAlertHeight: () => null,
  alerts: []
});

interface Props {
  initialState: AlertContextProps;
  children?: React.ReactNode;
}

const AlertContextProvider = ({ children, initialState }: Props) => {
  return <AlertContext.Provider value={initialState}>{children}</AlertContext.Provider>;
};

export { AlertContextProvider, AlertContext, AlertContextProps };
