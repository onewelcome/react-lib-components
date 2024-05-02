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
import { AlertProvider, Props } from "./AlertProvider";
import { useAlert } from "../useAlert";
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

const renderAlertProvider = (props?: Partial<Props>) => {
  const AppComponent = () => {
    const { enqueueSuccessAlert, enqueueErrorAlert, enqueueAlert, enqueueWarningAlert } =
      useAlert();
    const [index, setIndex] = useState(0);
    return (
      <div>
        content
        <button
          data-testid="show-success"
          onClick={() => {
            enqueueSuccessAlert({ title: successProps.title + index, ...successProps.options });
            setIndex(index + 1);
          }}
        >
          Success
        </button>
        <button
          data-testid="show-error"
          onClick={() => {
            enqueueErrorAlert({ title: errorProps.title + index });
            setIndex(index + 1);
          }}
        >
          Error
        </button>
        <button
          data-testid="show-info"
          onClick={() => {
            enqueueAlert({
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
            enqueueWarningAlert({ title: warningProps.title + index, ...warningProps.options });
            setIndex(index + 1);
          }}
        >
          Warning
        </button>
        <button
          data-testid="show-neutral-alerts"
          onClick={() => {
            enqueueAlert({
              title: "neutral-low",
              emphasis: "low",
              elementProps: { container: { "data-testid": "neutral-low" } }
            });
            enqueueAlert({
              title: "neutral-medium",
              elementProps: { container: { "data-testid": "neutral-medium" } }
            });
            enqueueAlert({
              title: "neutral-high",
              emphasis: "high",
              elementProps: { container: { "data-testid": "neutral-high" } }
            });
          }}
        >
          3 neutral alerts
        </button>
      </div>
    );
  };

  const queries = render(
    <AlertProvider {...props} closeButtonTitle="close">
      <AppComponent />
    </AlertProvider>
  );

  const showSuccessAlertBtn = getByTestId(queries.container, "show-success");
  const showErrorAlertBtn = getByTestId(queries.container, "show-error");
  const showInfoAlertBtn = getByTestId(queries.container, "show-info");
  const showWarningAlertBtn = getByTestId(queries.container, "show-warning");
  const showNeutralAlertsBtn = getByTestId(queries.container, "show-neutral-alerts");

  return {
    ...queries,
    showSuccessAlertBtn,
    showErrorAlertBtn,
    showInfoAlertBtn,
    showWarningAlertBtn,
    showNeutralAlertsBtn
  };
};

describe("<AlertProvider />", () => {
  it("should render without crashing", () => {
    const { container } = renderAlertProvider();

    expect(container).toHaveTextContent("content");
  });

  it("should stack 3 alerts at one time", async () => {
    const { showSuccessAlertBtn, showWarningAlertBtn } = renderAlertProvider();

    await userEvent.click(showSuccessAlertBtn);
    await userEvent.click(showWarningAlertBtn);
    await userEvent.click(showSuccessAlertBtn);
    await userEvent.click(showSuccessAlertBtn);

    await waitFor(() => {
      expect(getAllByText(document.body, new RegExp(successProps.title))).toHaveLength(2);
      expect(getAllByText(document.body, new RegExp(warningProps.title))).toHaveLength(1);
    });
  });

  it("should render all 3 emphasys with the corect colors", async () => {
    const content = renderAlertProvider();
    const showNeutralAlertsBtn = content.showNeutralAlertsBtn;
    const body = content.baseElement;
    await userEvent.click(showNeutralAlertsBtn);

    const lowEmpAlert = getByTestId(body, "neutral-low");
    const mediumEmpAlert = getByTestId(body, "neutral-medium");
    const highEmpAlert = getByTestId(body, "neutral-high");

    expect(lowEmpAlert).toHaveClass("emph-low");
    expect(mediumEmpAlert).toHaveClass("emph-medium");
    expect(highEmpAlert).toHaveClass("emph-high");
  });

  it("should render 3 variants of alerts", async () => {
    const { showSuccessAlertBtn, showErrorAlertBtn, showInfoAlertBtn } = renderAlertProvider();

    await userEvent.click(showSuccessAlertBtn);
    await userEvent.click(showErrorAlertBtn);
    await userEvent.click(showInfoAlertBtn);

    expect(getByText(document.body, new RegExp(successProps.title))).toBeDefined();
    expect(getByText(document.body, new RegExp(errorProps.title))).toBeDefined();
    expect(getByText(document.body, new RegExp(infoProps.title))).toBeDefined();
    expect(getByText(document.body, infoProps.content)).toBeDefined();
    const infoAlertActions = getAllByRole(document.body, "button", { name: /Contact/i });
    expect(infoAlertActions).toHaveLength(2);

    await userEvent.click(infoAlertActions[0]);
    await userEvent.click(infoAlertActions[1]);

    expect(infoProps.options.actions[0].onClick).toBeCalledTimes(1);
  });

  describe("handlers", () => {
    it("should fire onClose", async () => {
      const onCloseHandler = jest.fn();
      const ExampleComponent = () => {
        const { enqueueErrorAlert, enqueueSuccessAlert } = useAlert();

        useEffect(() => {
          enqueueErrorAlert({ content: "error", onClose: onCloseHandler, duration: 1 });
          enqueueSuccessAlert({ content: "success", onClose: onCloseHandler, duration: 1 });
        }, []);

        return <div></div>;
      };

      const queries = render(
        <AlertProvider closeButtonTitle="close">
          <ExampleComponent />
        </AlertProvider>
      );

      const errorAlert = await queries.findByText(/error/i);
      const successAlert = await queries.findByText(/success/i);

      expect(errorAlert).toBeTruthy();
      expect(successAlert).toBeTruthy();

      const parentErrorAlert = errorAlert.closest(".alert")!;
      const parentSuccessAlert = successAlert.closest(".alert")!;

      fireEvent.animationEnd(parentErrorAlert);
      fireEvent.animationEnd(parentSuccessAlert);

      await waitFor(() => expect(onCloseHandler).toHaveBeenCalledTimes(2));
    });
  });
});
