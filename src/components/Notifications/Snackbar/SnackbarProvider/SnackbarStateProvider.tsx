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
import { DeprecatedEnqueueSnackbarType } from "../interfaces";
import { Item } from "./SnackbarProvider";

interface SnackbarContextProps {
  enqueueSnackbar: DeprecatedEnqueueSnackbarType;
  enqueueSuccessSnackbar: DeprecatedEnqueueSnackbarType;
  enqueueWarningSnackbar: DeprecatedEnqueueSnackbarType;
  enqueueErrorSnackbar: DeprecatedEnqueueSnackbarType;
  setSnackbarHeight: (id: string, height: number) => void;
  snackbars: Item[];
}

const SnackbarContext = createContext<SnackbarContextProps>({
  enqueueSnackbar: () => null,
  enqueueSuccessSnackbar: () => null,
  enqueueErrorSnackbar: () => null,
  enqueueWarningSnackbar: () => null,
  setSnackbarHeight: () => null,
  snackbars: []
});

interface Props {
  initialState: SnackbarContextProps;
  children?: React.ReactNode;
}

const SnackbarContextProvider = ({ children, initialState }: Props) => {
  return <SnackbarContext.Provider value={initialState}>{children}</SnackbarContext.Provider>;
};

export { SnackbarContextProvider, SnackbarContext, SnackbarContextProps };
