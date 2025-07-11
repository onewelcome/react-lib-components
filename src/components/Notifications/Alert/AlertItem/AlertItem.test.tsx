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

import React from "react";
import { render, getByRole, waitFor } from "@testing-library/react";
import { AlertItem, Props } from "./AlertItem";
import userEvent from "@testing-library/user-event";

const initParams: Props = {
  id: "id",
  title: "title",
  content: "content",
  duration: 1,
  variant: "success",
  emphasis: undefined,
  closeButtonTitle: "close",
  onClose: jest.fn()
};

describe("AlertItem", () => {
  it("should render without crashing displaying both content and title", () => {
    const { container, queryByTestId } = render(<AlertItem {...initParams} />);

    const titleDiv = queryByTestId("alert-title");
    typeof initParams.title === "string" && expect(titleDiv).toHaveTextContent(initParams.title);

    const contentDiv = queryByTestId("alert-content");
    typeof initParams.content === "string" &&
      expect(contentDiv).toHaveTextContent(initParams.content);

    const actionsContainer = queryByTestId("alert-actions");
    expect(actionsContainer).toBeNull();

    expect(getByRole(container, "button")).toBeDefined();
  });

  it("should render only content when only title is provided", async () => {
    const { container, queryByTestId } = render(<AlertItem {...initParams} content={undefined} />);
    const titleDiv = queryByTestId("alert-title");
    expect(titleDiv).toBeNull();
    const contentDiv = queryByTestId("alert-content");
    typeof initParams.title === "string" && expect(contentDiv).toHaveTextContent(initParams.title);
  });

  it("should render content if content is provided", async () => {
    const { container, queryByTestId } = render(<AlertItem {...initParams} title={undefined} />);
    const titleDiv = queryByTestId("alert-title");
    expect(titleDiv).toBeNull();
    const contentDiv = queryByTestId("alert-content");
    typeof initParams.content === "string" &&
      expect(contentDiv).toHaveTextContent(initParams.content);
  });

  it("should clicking close button call callback function", async () => {
    const { container } = render(<AlertItem {...initParams} duration={10000000} />);
    expect(initParams.onClose).not.toHaveBeenCalled();
    await userEvent.click(getByRole(container, "button"));
    waitFor(() => {
      expect(initParams.onClose).toHaveBeenCalledTimes(1);
      expect(initParams.onClose).toHaveBeenCalledWith(initParams.id);
    });
  });

  it("should call close callback after provided duration", () => {
    render(<AlertItem {...initParams} />);

    expect(initParams.onClose).not.toHaveBeenCalled();
    waitFor(() => {
      expect(initParams.onClose).toHaveBeenCalledTimes(1);
      expect(initParams.onClose).toHaveBeenCalledWith(initParams.id);
    });
  });

  it("should have aira-live=polite when variant is error and emphasis low", () => {
    const { queryByTestId } = render(<AlertItem {...initParams} variant="error" emphasis="low" />);
    const container = queryByTestId("alert-container");
    expect(container).toHaveAttribute("aria-live", "polite");
  });

  it("should have aria-live=assertive when variant is error and emphasis medium", () => {
    const { queryByTestId } = render(
      <AlertItem {...initParams} variant="error" emphasis="medium" />
    );
    const container = queryByTestId("alert-container");
    expect(container).toHaveAttribute("aria-live", "assertive");
  });

  it("should have aria-live=assertive when variant is error and emphasis high", () => {
    const { queryByTestId } = render(<AlertItem {...initParams} variant="error" emphasis="high" />);
    const container = queryByTestId("alert-container");
    expect(container).toHaveAttribute("aria-live", "assertive");
  });

  it("should render without crashing displaying both string content and composable title", () => {
    const titleText = "Test Composable Title";
    const params = {
      ...initParams,
      title: <div data-testid="alert-composable-title">{titleText}</div>
    };
    const { container, queryByTestId } = render(<AlertItem {...params} />);

    const titleDiv = queryByTestId("alert-composable-title");
    expect(titleDiv).toHaveTextContent(titleText);

    const contentDiv = queryByTestId("alert-content");
    typeof initParams.content === "string" &&
      expect(contentDiv).toHaveTextContent(initParams.content);

    const actionsContainer = queryByTestId("alert-actions");
    expect(actionsContainer).toBeNull();

    expect(getByRole(container, "button")).toBeDefined();
  });

  it("should render without crashing displaying both composable content and string title", () => {
    const contentText = "Test Composable Content";
    const params = {
      ...initParams,
      content: <div data-testid="alert-composable-content">{contentText}</div>
    };
    const { container, queryByTestId } = render(<AlertItem {...params} />);

    const titleDiv = queryByTestId("alert-title");
    typeof initParams.title === "string" && expect(titleDiv).toHaveTextContent(initParams.title);

    const contentDiv = queryByTestId("alert-composable-content");
    expect(contentDiv).toHaveTextContent(contentText);

    const actionsContainer = queryByTestId("alert-actions");
    expect(actionsContainer).toBeNull();

    expect(getByRole(container, "button")).toBeDefined();
  });

  it("should render without crashing displaying both composable content and composable title", () => {
    const titleText = "Test Composable Title";
    const contentText = "Test Composable Content";
    const params = {
      ...initParams,
      title: <div data-testid="alert-composable-title">{titleText}</div>,
      content: <div data-testid="alert-composable-content">{contentText}</div>
    };
    const { container, queryByTestId } = render(<AlertItem {...params} />);

    const titleDiv = queryByTestId("alert-composable-title");
    expect(titleDiv).toHaveTextContent(titleText);

    const contentDiv = queryByTestId("alert-composable-content");
    expect(contentDiv).toHaveTextContent(contentText);

    const actionsContainer = queryByTestId("alert-actions");
    expect(actionsContainer).toBeNull();

    expect(getByRole(container, "button")).toBeDefined();
  });
});
