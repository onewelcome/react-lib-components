import React, { useEffect, useState } from "react";
import {
  render,
  getByTestId,
  getAllByText,
  getAllByRole,
  getByText,
  fireEvent,
  waitFor
} from "@testing-library/react";
import { SnackbarProvider, Props } from "./SnackbarProvider";
import { useSnackbar } from "../useSnackbar";
import userEvent from "@testing-library/user-event";

const successProps = {
  title: "success title",
  options: {
    duration: 10,
    onClose: jest.fn()
  }
};

const errorProps = {
  title: "error title",
  options: {
    duration: 10,
    onClose: jest.fn()
  }
};

const infoProps = {
  title: "info title",
  content: "test content",
  options: {
    actions: [
      { label: "Contact support", onClick: jest.fn() },
      { label: "Contact Onewelcome", onClick: jest.fn() }
    ]
  }
};

const renderSnackbarProvider = (props?: Partial<Props>) => {
  const AppComponent = () => {
    const { enqueueSuccessSnackbar, enqueueErrorSnackbar, enqueueSnackbar } = useSnackbar();
    const [index, setIndex] = useState(0);
    return (
      <div>
        content
        <button
          data-testid="show-success"
          onClick={() => {
            enqueueSuccessSnackbar(successProps.title + index, undefined, successProps.options);
            setIndex(index + 1);
          }}
        >
          Success
        </button>
        <button
          data-testid="show-error"
          onClick={() => {
            enqueueErrorSnackbar(errorProps.title + index);
            setIndex(index + 1);
          }}
        >
          Error
        </button>
        <button
          data-testid="show-info"
          onClick={() => {
            enqueueSnackbar(infoProps.title + index, infoProps.content, infoProps.options);
            setIndex(index + 1);
          }}
        >
          Info
        </button>
      </div>
    );
  };

  const queries = render(
    <SnackbarProvider {...props} closeButtonTitle="close">
      <AppComponent />
    </SnackbarProvider>
  );

  const showSuccessSnackbarBtn = getByTestId(queries.container, "show-success");
  const showErrorSnackbarBtn = getByTestId(queries.container, "show-error");
  const showInfoSnackbarBtn = getByTestId(queries.container, "show-info");

  return {
    ...queries,
    showSuccessSnackbarBtn,
    showErrorSnackbarBtn,
    showInfoSnackbarBtn
  };
};

describe("SnackbarProvider", () => {
  it("renders without crashing", () => {
    const { container } = renderSnackbarProvider();

    expect(container).toHaveTextContent("content");
  });

  it("should stack 3 snackbars at one time", async () => {
    const { showSuccessSnackbarBtn } = renderSnackbarProvider();

    await userEvent.click(showSuccessSnackbarBtn);
    await userEvent.click(showSuccessSnackbarBtn);
    await userEvent.click(showSuccessSnackbarBtn);
    await userEvent.click(showSuccessSnackbarBtn);

    expect(getAllByText(document.body, new RegExp(successProps.title))).toHaveLength(3);
  });

  it("should render 3 variants of snackbars", async () => {
    const { showSuccessSnackbarBtn, showErrorSnackbarBtn, showInfoSnackbarBtn } =
      renderSnackbarProvider();

    await userEvent.click(showSuccessSnackbarBtn);
    await userEvent.click(showErrorSnackbarBtn);
    await userEvent.click(showInfoSnackbarBtn);

    expect(getByText(document.body, new RegExp(successProps.title))).toBeDefined();
    expect(getByText(document.body, new RegExp(errorProps.title))).toBeDefined();
    expect(getByText(document.body, new RegExp(infoProps.title))).toBeDefined();
    expect(getByText(document.body, infoProps.content)).toBeDefined();
    const infoSnackbarActions = getAllByRole(document.body, "button", { name: /Contact/i });
    expect(infoSnackbarActions).toHaveLength(2);

    await userEvent.click(infoSnackbarActions[0]);
    await userEvent.click(infoSnackbarActions[1]);

    expect(infoProps.options.actions[0].onClick).toBeCalledTimes(1);
  });
});

describe("handlers", () => {
  it("should fire onClose", async () => {
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

    fireEvent.animationEnd(parentErrorSnackbar);
    fireEvent.animationEnd(parentSuccessSnackbar);

    waitFor(() => expect(onCloseHandler).toHaveBeenCalledTimes(2));
  });
});
