import { useContext } from "react";
import { SnackbarContext } from "./SnackbarProvider/SnackbarStateProvider";

export const useSnackbar = () => {
  const ctx = useContext(SnackbarContext);

  return {
    enqueueErrorSnackbar: ctx.enqueueErrorSnackbar,
    enqueueSuccessSnackbar: ctx.enqueueSuccessSnackbar,
    enqueueSnackbar: ctx.enqueueSnackbar
  };
};
