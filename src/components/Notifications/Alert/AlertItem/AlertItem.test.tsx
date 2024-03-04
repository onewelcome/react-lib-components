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

describe("<AlertItem />", () => {
  it("should render without crashing", () => {
    const { container } = render(<AlertItem {...initParams} />);

    const titleDiv = container.querySelector(".title");
    expect(titleDiv).toHaveTextContent(initParams.title!);
    const contentDiv = container.querySelector(".content");
    expect(contentDiv).toHaveTextContent(initParams.content!);
    const actionsDiv = container.querySelector(".actions");
    expect(actionsDiv).toBeNull();
    expect(getByRole(container, "button")).toBeDefined();
  });

  it("should clicking close button call callback function", async () => {
    const { container } = render(<AlertItem {...initParams} duration={10000000} />);

    expect(initParams.onClose).not.toBeCalled();
    await userEvent.click(getByRole(container, "button"));
    waitFor(() => {
      expect(initParams.onClose).toBeCalledTimes(1);
      expect(initParams.onClose).toHaveBeenCalledWith(initParams.id);
    });
  });

  it("should call close callback after provided duration", () => {
    render(<AlertItem {...initParams} />);

    expect(initParams.onClose).not.toBeCalled();
    waitFor(() => {
      expect(initParams.onClose).toBeCalledTimes(1);
      expect(initParams.onClose).toHaveBeenCalledWith(initParams.id);
    });
  });

  it("should render only content when only title is provided", () => {
    const { container } = render(<AlertItem {...initParams} content={undefined} />);

    const titleDiv = container.querySelector(".title");
    expect(titleDiv).toBeNull();
    const contentDiv = container.querySelector(".content");
    expect(contentDiv).toHaveTextContent(initParams.title!);
    const actionsDiv = container.querySelector(".actions");
    expect(actionsDiv).toBeNull();
    expect(getByRole(container, "button")).toBeDefined();
  });

  it("should render with default emphasis medium", () => {
    const { container } = render(<AlertItem {...initParams} emphasis="" />);
    const containerDiv = container.querySelector(".emph-medium");
    expect(containerDiv).toBeDefined();
  });

  it("should render with emphasis low", () => {
    const { container } = render(<AlertItem {...initParams} emphasis="low" />);
    const containerDiv = container.querySelector(".emph-low");
    expect(containerDiv).toBeDefined();
  });

  it("should render with emphasis medium", () => {
    const { container } = render(<AlertItem {...initParams} emphasis="medium" />);
    const containerDiv = container.querySelector(".emph-medium");
    expect(containerDiv).toBeDefined();
  });

  it("should render with emphasis high", () => {
    const { container } = render(<AlertItem {...initParams} emphasis="high" />);
    const containerDiv = container.querySelector(".emph-high");
    expect(containerDiv).toBeDefined();
  });

  it("error variant emphasis low should be polite", () => {
    const { container } = render(<AlertItem {...initParams} variant="error" emphasis="low" />);
    const ariaLive = container.ariaLive;
    expect(ariaLive).toBe("polite");
  });

  it("error variant emphasis medium should be assertive", () => {
    const { container } = render(<AlertItem {...initParams} variant="error" emphasis="medium" />);
    const ariaLive = container.ariaLive;
    expect(ariaLive).toBe("assertive");
  });

  it("error variant emphasis high should be assertive", () => {
    const { container } = render(<AlertItem {...initParams} variant="error" emphasis="high" />);
    const ariaLive = container.ariaLive;
    expect(ariaLive).toBe("assertive");
  });
});
