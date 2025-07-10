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
import { Tooltip, Props } from "./Tooltip";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultParams: Props = {
  children: "This is a test message",
  label: "Label",
  title: "Title",
  position: "start",
  location: "left"
};

const createTooltip = async (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }

  const queries = render(<Tooltip {...parameters} data-testid="tooltip" />);
  const tooltip = queries.getByTestId("tooltip");
  const icon = tooltip.querySelector(".icon")!;
  const tooltipHoverDiv = document.querySelector(".tooltip");

  if (tooltip) {
    icon.getBoundingClientRect = () => ({
      x: 500,
      y: 500,
      width: 10,
      height: 10,
      top: 500,
      left: 500,
      right: 510,
      bottom: 510,
      toJSON: () => jest.fn()
    });
  }

  Object.defineProperty(tooltipHoverDiv, "offsetHeight", { configurable: true, value: 50 });
  Object.defineProperty(tooltipHoverDiv, "offsetWidth", { configurable: true, value: 200 });

  const hoverIcon = async () => {
    await userEvent.hover(icon);
  };

  return {
    ...queries,
    tooltip,
    tooltipHoverDiv,
    hoverIcon
  };
};

describe("Tooltip", () => {
  describe("Rendering", () => {
    beforeEach(() => {
      Object.defineProperty(window, "innerHeight", {
        configurable: true,
        value: 1000
      });
      Object.defineProperty(window, "innerWidth", {
        configurable: true,
        value: 1000
      });
    });

    it("should render the tooltip with the default parameters", async () => {
      const { tooltip, tooltipHoverDiv, hoverIcon } = await createTooltip(defaultParams => ({
        ...defaultParams,
        location: undefined,
        position: undefined
      }));

      await hoverIcon();

      expect(tooltip).toBeInTheDocument();
      await waitFor(() =>
        expect(tooltipHoverDiv).toHaveStyle({
          left: "522px",
          top: "480px"
        })
      );
    });

    it("should render the tooltip with a custom location to the right and position end", async () => {
      const { tooltip, tooltipHoverDiv, hoverIcon } = await createTooltip(p => ({
        ...p,
        location: "right",
        position: "end"
      }));

      await hoverIcon();

      expect(tooltip).toBeInTheDocument();
      await waitFor(() =>
        expect(tooltipHoverDiv).toHaveStyle({
          top: "488px",
          left: "522px"
        })
      );
    });

    it("should render the tooltip with a custom location to the right and position start", async () => {
      const { tooltip, tooltipHoverDiv, hoverIcon } = await createTooltip(p => ({
        ...p,
        location: "right",
        position: "start"
      }));

      await hoverIcon();

      expect(tooltip).toBeInTheDocument();
      await waitFor(() =>
        expect(tooltipHoverDiv).toHaveStyle({
          left: "522px",
          bottom: "478px"
        })
      );
    });

    it("should render the tooltip with a custom location to the right and position center", async () => {
      const { tooltip, tooltipHoverDiv, hoverIcon } = await createTooltip(p => ({
        ...p,
        location: "right",
        position: "center"
      }));

      await hoverIcon();

      expect(tooltip).toBeInTheDocument();
      await waitFor(() =>
        expect(tooltipHoverDiv).toHaveStyle({
          left: "522px",
          top: "480px"
        })
      );
    });

    it("should render the tooltip with a custom location to the left and position end", async () => {
      const { tooltip, tooltipHoverDiv, hoverIcon } = await createTooltip(p => ({
        ...p,
        location: "left",
        position: "end"
      }));

      await hoverIcon();

      expect(tooltip).toBeInTheDocument();
      await waitFor(() =>
        expect(tooltipHoverDiv).toHaveStyle({
          right: "512px",
          top: "488px"
        })
      );
    });

    it("should render the tooltip with a custom location to the left and position start", async () => {
      const { tooltip, tooltipHoverDiv, hoverIcon } = await createTooltip(p => ({
        ...p,
        location: "left",
        position: "start"
      }));

      await hoverIcon();

      expect(tooltip).toBeInTheDocument();
      await waitFor(() =>
        expect(tooltipHoverDiv).toHaveStyle({
          right: "512px",
          bottom: "478px"
        })
      );
    });

    it("should render the tooltip with a custom location to the left and position center", async () => {
      const { tooltip, tooltipHoverDiv, hoverIcon } = await createTooltip(p => ({
        ...p,
        location: "left",
        position: "center"
      }));

      await hoverIcon();

      expect(tooltip).toBeInTheDocument();
      await waitFor(() =>
        expect(tooltipHoverDiv).toHaveStyle({
          right: "512px",
          top: "480px"
        })
      );
    });

    it("should render the tooltip with a custom location to the top and position end", async () => {
      const { tooltip, tooltipHoverDiv, hoverIcon } = await createTooltip(p => ({
        ...p,
        location: "top",
        position: "end"
      }));

      await hoverIcon();

      expect(tooltip).toBeInTheDocument();
      await waitFor(() =>
        expect(tooltipHoverDiv).toHaveStyle({
          left: "488px",
          bottom: "512px"
        })
      );
    });

    it("should render the tooltip with a custom location to the top and position start", async () => {
      const { tooltip, tooltipHoverDiv, hoverIcon } = await createTooltip(p => ({
        ...p,
        location: "top",
        position: "start"
      }));

      await hoverIcon();

      expect(tooltip).toBeInTheDocument();
      await waitFor(() =>
        expect(tooltipHoverDiv).toHaveStyle({
          right: "478px",
          bottom: "512px"
        })
      );
    });

    it("should render the tooltip with a custom location to the top and position center", async () => {
      const { tooltip, tooltipHoverDiv, hoverIcon } = await createTooltip(p => ({
        ...p,
        location: "top",
        position: "center"
      }));

      await hoverIcon();

      expect(tooltip).toBeInTheDocument();
      await waitFor(() =>
        expect(tooltipHoverDiv).toHaveStyle({
          left: "405px",
          bottom: "512px"
        })
      );
    });

    it("should render the tooltip with a custom location to the bottom and position end", async () => {
      const { tooltip, tooltipHoverDiv, hoverIcon } = await createTooltip(p => ({
        ...p,
        location: "bottom",
        position: "end"
      }));

      await hoverIcon();

      expect(tooltip).toBeInTheDocument();
      await waitFor(() =>
        expect(tooltipHoverDiv).toHaveStyle({
          left: "488px",
          top: "522px"
        })
      );
    });

    it("should render the tooltip with a custom location to the bottom and position start", async () => {
      const { tooltip, tooltipHoverDiv, hoverIcon } = await createTooltip(p => ({
        ...p,
        location: "bottom",
        position: "start"
      }));

      await hoverIcon();

      expect(tooltip).toBeInTheDocument();
      await waitFor(() =>
        expect(tooltipHoverDiv).toHaveStyle({
          right: "478px",
          top: "522px"
        })
      );
    });

    it("should render the tooltip with a custom location to the bottom and position center", async () => {
      const { tooltip, tooltipHoverDiv, hoverIcon } = await createTooltip(p => ({
        ...p,
        location: "bottom",
        position: "center"
      }));

      await hoverIcon();

      expect(tooltip).toBeInTheDocument();
      await waitFor(() =>
        expect(tooltipHoverDiv).toHaveStyle({
          left: "405px",
          top: "522px"
        })
      );
    });
  });

  describe("Colors", () => {
    it("renders black color by default", async () => {
      const { tooltipHoverDiv } = await createTooltip();
      expect(tooltipHoverDiv).toHaveClass("black");
    });

    it("renders blue color", async () => {
      const { tooltipHoverDiv } = await createTooltip(p => ({
        ...p,
        color: "blue"
      }));

      expect(tooltipHoverDiv).toHaveClass("blue");
    });
  });

  describe("Label", () => {
    it("can also be an element", async () => {
      const { tooltip } = await createTooltip(p => ({ ...p, label: <span>Label</span> }));

      expect(tooltip).toBeInTheDocument();

      const label = tooltip.querySelector(".label");
      expect(label).toBeInTheDocument();
      expect(label).toHaveTextContent("Label");
      expect((label as HTMLElement).tagName.toLowerCase()).toBe("span");
    });
  });

  it("Triggers visibility of the tooltip on focus and blur using keyboard", async () => {
    const { tooltip, tooltipHoverDiv } = await createTooltip();

    if (!tooltipHoverDiv) {
      throw new Error("Tooltip hover div not found");
    }

    const label = tooltip.querySelector(".label");

    expect(label).toBeInTheDocument();

    await userEvent.tab();

    (label as HTMLElement).focus();

    expect(tooltipHoverDiv).toHaveClass("visible");

    await userEvent.tab();

    expect(tooltipHoverDiv).not.toHaveClass("visible");
  });

  it("Sets visible to false on escape", async () => {
    const { tooltip, tooltipHoverDiv } = await createTooltip();

    if (!tooltipHoverDiv) {
      throw new Error("Tooltip hover div not found");
    }

    const label = tooltip.querySelector(".label");

    expect(label).toBeInTheDocument();

    await userEvent.tab();

    (label as HTMLElement).focus();

    expect(tooltipHoverDiv).toHaveClass("visible");

    await userEvent.keyboard("{Escape}");

    expect(tooltipHoverDiv).not.toHaveClass("visible");
  });
});
