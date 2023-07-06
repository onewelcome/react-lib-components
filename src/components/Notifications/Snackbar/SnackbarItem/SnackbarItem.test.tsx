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
import { SnackbarItem, Props } from "./SnackbarItem";
import userEvent from "@testing-library/user-event";

const initParams: Props = {
  id: "id",
  title: "title",
  duration: 1,
  variant: "success",
  closeButtonTitle: "close",
  onClose: jest.fn()
};

describe("SnackbarItem", () => {
  it("renders without crashing", () => {
    const { container } = render(<SnackbarItem {...initParams} />);

    expect(container).toHaveTextContent(initParams.title!);
    const contentDiv = container.querySelector(".content");
    expect(contentDiv).toBeNull();
    const actionsDiv = container.querySelector(".actions");
    expect(actionsDiv).toBeNull();
    expect(getByRole(container, "button")).toBeDefined();
  });

  it("clicking close button call callback function", async () => {
    const { container } = render(<SnackbarItem {...initParams} duration={10000000} />);

    expect(initParams.onClose).not.toBeCalled();
    await userEvent.click(getByRole(container, "button"));
    waitFor(() => {
      expect(initParams.onClose).toBeCalledTimes(1);
      expect(initParams.onClose).toHaveBeenCalledWith(initParams.id);
    });
  });

  it("call close callback after provided duration", () => {
    render(<SnackbarItem {...initParams} />);

    expect(initParams.onClose).not.toBeCalled();
    waitFor(() => {
      expect(initParams.onClose).toBeCalledTimes(1);
      expect(initParams.onClose).toHaveBeenCalledWith(initParams.id);
    });
  });
});
