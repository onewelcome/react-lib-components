import { useContext } from "react";
import { SnackbarContext } from "./SnackbarProvider/SnackbarStateProvider";

export const useSnackbar = () => useContext(SnackbarContext);
