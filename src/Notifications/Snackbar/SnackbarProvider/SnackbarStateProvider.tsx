import React, { createContext } from "react";
import { SnackbarOptionsProps } from "../interfaces";

interface SnackbarContextProps {
  enqueueSnackbar: (title: string, content?: string, options?: SnackbarOptionsProps) => void;
  enqueueSuccessSnackbar: (title: string, content?: string, options?: SnackbarOptionsProps) => void;
  enqueueErrorSnackbar: (title: string, content?: string, options?: SnackbarOptionsProps) => void;
}

const SnackbarContext = createContext<SnackbarContextProps>({
  enqueueSnackbar: () => null,
  enqueueSuccessSnackbar: () => null,
  enqueueErrorSnackbar: () => null
});

interface Props {
  initialState: SnackbarContextProps;
  children?: React.ReactNode;
}

const SnackbarContextProvider = ({ children, initialState }: Props) => {
  return <SnackbarContext.Provider value={initialState}>{children}</SnackbarContext.Provider>;
};

export { SnackbarContextProvider, SnackbarContext, SnackbarContextProps };
