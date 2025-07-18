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
import { render, screen } from "@testing-library/react";
import { FormStatusIndicator, FormStatusIndicatorProps } from "./FormStatusIndicator";
import { InlineEditingProvider } from "../../../context/InlineEditingContext";
import userEvent from "@testing-library/user-event";

const defaultParams: FormStatusIndicatorProps = {
  children: <span>Fallback</span>
};

const createFormStatusIndicator = (
  params?: Partial<FormStatusIndicatorProps>,
  inlineEditing = false
) => {
  const props = { ...defaultParams, ...params };
  return render(
    <InlineEditingProvider value={inlineEditing}>
      <FormStatusIndicator {...props} />
    </InlineEditingProvider>
  );
};

describe("FormStatusIndicator", () => {
  it("renders fallback children when no status is provided", () => {
    createFormStatusIndicator();
    expect(screen.getByText("Fallback")).toBeInTheDocument();
  });

  it("renders success icon when success is true", () => {
    const { container } = createFormStatusIndicator({ success: true });
    expect(container.querySelector(".icon-checkmark-circle-alt")).toBeInTheDocument();
    expect(screen.queryByText("Fallback")).not.toBeInTheDocument();
  });

  it("renders error icon when error is true", () => {
    const { container } = createFormStatusIndicator({ error: true });
    expect(container.querySelector(".icon-error-circle")).toBeInTheDocument();
    expect(screen.queryByText("Fallback")).not.toBeInTheDocument();
  });

  it("renders tooltip in inline editing mode with tooltipText", async () => {
    const { container } = createFormStatusIndicator({ tooltipText: "This is a tooltip" }, true);
    expect(container.querySelector("[data-testid='tooltip-icon']")).toBeInTheDocument();
    await userEvent.hover(container.querySelector("[data-testid='tooltip-icon']")!);
    expect(await screen.findByText("This is a tooltip")).toBeInTheDocument();
  });

  it("does not render tooltip in inline editing mode if readOnlyView is true", () => {
    const { container } = createFormStatusIndicator(
      { tooltipText: "This is a tooltip", isReadOnlyView: true },
      true
    );
    expect(container.querySelector("[data-testid='tooltip-icon']")).not.toBeInTheDocument();
    expect(screen.getByText("Fallback")).toBeInTheDocument();
  });

  it("renders fallback when in inline editing mode but no tooltipText is provided", () => {
    createFormStatusIndicator({}, true);
    expect(screen.getByText("Fallback")).toBeInTheDocument();
  });
});
