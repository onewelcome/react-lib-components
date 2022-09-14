import React, { useState } from "react";
import {
  render,
  getByTestId,
  getAllByText,
  waitFor,
  getAllByRole,
  getByText,
  findByText,
  findAllByText,
  queryByText
} from "@testing-library/react";
import { SnackbarProvider, Props } from "./SnackbarProvider";
import { useSnackbar } from "../useSnackbar";
import userEvent from "@testing-library/user-event";

const successProps = {
  title: "success title",
  options: {
    duration: 0,
    onClose: jest.fn()
  }
};

const errorProps = {
  title: "error title",
  options: {
    duration: 0,
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

  it("should stack 3 snackbars at one time", () => {
    const { showSuccessSnackbarBtn } = renderSnackbarProvider();

    userEvent.click(showSuccessSnackbarBtn);
    userEvent.click(showSuccessSnackbarBtn);
    userEvent.click(showSuccessSnackbarBtn);
    userEvent.click(showSuccessSnackbarBtn);

    expect(getAllByText(document.body, new RegExp(successProps.title))).toHaveLength(3);
  });

  it("should render 3 variants of snackbars", () => {
    const { showSuccessSnackbarBtn, showErrorSnackbarBtn, showInfoSnackbarBtn } =
      renderSnackbarProvider();

    userEvent.click(showSuccessSnackbarBtn);
    userEvent.click(showErrorSnackbarBtn);
    userEvent.click(showInfoSnackbarBtn);

    expect(getByText(document.body, new RegExp(successProps.title))).toBeDefined();
    expect(getByText(document.body, new RegExp(errorProps.title))).toBeDefined();
    expect(getByText(document.body, new RegExp(infoProps.title))).toBeDefined();
    expect(getByText(document.body, infoProps.content)).toBeDefined();
    const infoSnackbarActions = getAllByRole(document.body, "button", { name: /Contact/i });
    expect(infoSnackbarActions).toHaveLength(2);

    userEvent.click(infoSnackbarActions[0]);
    userEvent.click(infoSnackbarActions[1]);

    expect(infoProps.options.actions[0].onClick).toBeCalledTimes(1);
    waitFor(() => expect(infoProps.options.actions[1].onClick).toBeCalledTimes(1));
  });

  it("should stack 3 snackbars at one time and then after 3 disapear show the fourth one", () => {
    const { showSuccessSnackbarBtn } = renderSnackbarProvider({
      autoHideDuration: { long: 1, short: 1 }
    });

    userEvent.click(showSuccessSnackbarBtn);
    userEvent.click(showSuccessSnackbarBtn);
    userEvent.click(showSuccessSnackbarBtn);
    userEvent.click(showSuccessSnackbarBtn);

    expect(getAllByText(document.body, new RegExp(successProps.title))).toHaveLength(3);

    /** Looking for fourth one to be shown */
    waitFor(() => expect(getAllByText(document.body, successProps.title + "3")).toHaveLength(1));

    /** There shouldn't be any other snackbars */
    waitFor(() =>
      expect(getAllByText(document.body, new RegExp(successProps.title))).not.toBeDefined()
    );
  });

  it("should close snackbar after clicking X button", async () => {
    const { showSuccessSnackbarBtn } = renderSnackbarProvider({
      autoHideDuration: { long: 1_000_000, short: 1_000_000 }
    });

    userEvent.click(showSuccessSnackbarBtn);
    userEvent.click(showSuccessSnackbarBtn);
    userEvent.click(showSuccessSnackbarBtn);
    userEvent.click(showSuccessSnackbarBtn);

    const closeButtons = getAllByRole(document.body, "button", { name: "close" });

    expect(closeButtons).toHaveLength(3);
    expect(getAllByText(document.body, new RegExp(successProps.title))).toHaveLength(3);

    userEvent.click(closeButtons[0]);
    expect(
      await findAllByText(document.body, new RegExp(successProps.title + "[12]+"))
    ).toHaveLength(2);

    userEvent.click(closeButtons[1]);
    expect(await findByText(document.body, successProps.title + "2")).toBeDefined();

    userEvent.click(closeButtons[2]);
    waitFor(() => expect(queryByText(document.body, new RegExp(successProps.title))).toBeNull());
  });

  it("should fire onClose", async () => {
    const { showSuccessSnackbarBtn, showErrorSnackbarBtn } = renderSnackbarProvider();

    expect(successProps.options.onClose).not.toHaveBeenCalled();
    expect(errorProps.options.onClose).not.toHaveBeenCalled();

    await userEvent.click(showSuccessSnackbarBtn);
    await userEvent.click(showErrorSnackbarBtn);

    waitFor(() => expect(successProps.options.onClose).toHaveBeenCalledTimes(1));
    waitFor(() => expect(errorProps.options.onClose).toHaveBeenCalledTimes(1));
  });
});
