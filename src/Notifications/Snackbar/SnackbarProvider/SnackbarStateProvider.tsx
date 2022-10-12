import React, { createContext } from "react";
import { SnackbarOptionsProps } from "../interfaces";
import { Item } from "./SnackbarProvider";

interface SnackbarContextProps {
  enqueueSnackbar: (title: string, content?: string, options?: SnackbarOptionsProps) => void;
  enqueueSuccessSnackbar: (title: string, content?: string, options?: SnackbarOptionsProps) => void;
  enqueueErrorSnackbar: (title: string, content?: string, options?: SnackbarOptionsProps) => void;
  setSnackbarHeight: (id: string, height: number) => void;
  snackbars: Item[];
}

const SnackbarContext = createContext<SnackbarContextProps>({
  enqueueSnackbar: () => null,
  enqueueSuccessSnackbar: () => null,
  enqueueErrorSnackbar: () => null,
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
