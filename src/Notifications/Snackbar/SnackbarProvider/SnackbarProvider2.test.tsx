import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { useEffect } from "react";
import { useSnackbar } from "../useSnackbar";
import { SnackbarProvider } from "./SnackbarProvider";

describe("handlers", () => {
  xit("should fire onClose", async () => {
    const onCloseHandler = jest.fn();
    const ExampleComponent = () => {
      const { enqueueErrorSnackbar, enqueueSuccessSnackbar } = useSnackbar();

      useEffect(() => {
        enqueueErrorSnackbar("error", undefined, { onClose: onCloseHandler, duration: 1 });
        enqueueSuccessSnackbar("success", undefined, { onClose: onCloseHandler, duration: 1 });
      }, []);

      return <div></div>;
    };

    const queries = render(
      <SnackbarProvider closeButtonTitle="close">
        <ExampleComponent />
      </SnackbarProvider>
    );

    const errorSnackbar = await queries.findByText(/error/i);
    const successSnackbar = await queries.findByText(/success/i);

    expect(errorSnackbar).toBeTruthy();
    expect(successSnackbar).toBeTruthy();

    const parentErrorSnackbar = errorSnackbar.closest(".snackbar")!;
    const parentSuccessSnackbar = successSnackbar.closest(".snackbar")!;

    await fireEvent.animationEnd(parentErrorSnackbar);
    await fireEvent.animationEnd(parentSuccessSnackbar);

    await waitFor(() => expect(onCloseHandler).toHaveBeenCalledTimes(2));
  });
});
