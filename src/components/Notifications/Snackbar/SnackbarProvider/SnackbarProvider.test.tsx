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

import React, { useEffect, useState } from "react";
import {
  render,
  getByTestId,
  getAllByText,
  waitFor,
  getAllByRole,
  getByText,
  fireEvent
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

const warningProps = {
  title: "warning title",
  options: {
    duration: 10,
    onClose: jest.fn()
  }
};

const renderSnackbarProvider = (props?: Partial<Props>) => {
  const AppComponent = () => {
    const {
      enqueueSuccessSnackbar,
      enqueueErrorSnackbar,
      enqueueSnackbar,
      enqueueWarningSnackbar
    } = useSnackbar();
    const [index, setIndex] = useState(0);
    return (
      <div>
        content
        <button
          data-testid="show-success"
          onClick={() => {
            enqueueSuccessSnackbar({ title: successProps.title + index, ...successProps.options });
            setIndex(index + 1);
          }}
        >
          Success
        </button>
        <button
          data-testid="show-error"
          onClick={() => {
            enqueueErrorSnackbar({ title: errorProps.title + index });
            setIndex(index + 1);
          }}
        >
          Error
        </button>
        <button
          data-testid="show-info"
          onClick={() => {
            enqueueSnackbar({
              title: infoProps.title + index,
              content: infoProps.content,
              ...infoProps.options
            });
            setIndex(index + 1);
          }}
        >
          Info
        </button>
        <button
          data-testid="show-warning"
          onClick={() => {
            enqueueWarningSnackbar({ title: warningProps.title + index, ...warningProps.options });
            setIndex(index + 1);
          }}
        >
          Warning
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
  const showWarningSnackbarBtn = getByTestId(queries.container, "show-warning");

  return {
    ...queries,
    showSuccessSnackbarBtn,
    showErrorSnackbarBtn,
    showInfoSnackbarBtn,
    showWarningSnackbarBtn
  };
};

describe("<SnackbarProvider />", () => {
  it("should render without crashing", () => {
    const { container } = renderSnackbarProvider();

    expect(container).toHaveTextContent("content");
  });

  it("should stack 3 snackbars at one time", async () => {
    const { showSuccessSnackbarBtn, showWarningSnackbarBtn } = renderSnackbarProvider();

    await userEvent.click(showSuccessSnackbarBtn);
    await userEvent.click(showWarningSnackbarBtn);
    await userEvent.click(showSuccessSnackbarBtn);
    await userEvent.click(showSuccessSnackbarBtn);

    await waitFor(() => {
      expect(getAllByText(document.body, new RegExp(successProps.title))).toHaveLength(2);
      expect(getAllByText(document.body, new RegExp(warningProps.title))).toHaveLength(1);
    });
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

      await waitFor(() => expect(onCloseHandler).toHaveBeenCalledTimes(2));
    });
  });
});
