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

import React, { useEffect, useRef } from "react";
import { Dialog, Props } from "./Dialog";
import { render, getAllByRole } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const initParams: Props = {
  id: "modal",
  open: true,
  onClose: jest.fn(),
  alignActions: "left",
  title: "Example dialog",
  primaryAction: {
    label: "Save",
    onClick: jest.fn()
  },
  secondaryAction: {
    label: "Cancel",
    onClick: jest.fn()
  },
  children: "This is example dialog content."
};

const getButtons = (container: HTMLElement) => getAllByRole(container, "button");

describe("Dialog", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Dialog {...initParams} />);
    const [primaryButton, secondaryButton] = getButtons(document.body);

    expect(getByText(initParams.title)).toBeDefined();
    expect(getByText(initParams.children as string)).toBeDefined();
    const actionsDiv = primaryButton.closest("div");
    expect(actionsDiv).toHaveClass("left");
    expect(actionsDiv?.children[0]).toEqual(primaryButton);
    expect(actionsDiv?.children[1]).toEqual(secondaryButton);
    expect(primaryButton).toHaveClass("fill");
    expect(secondaryButton).toHaveClass("text");
  });

  it("renders action aligned to right", () => {
    render(<Dialog {...initParams} alignActions="right" />);
    const [secondaryButton, primaryButton] = getButtons(document.body);

    const actionsDiv = primaryButton.closest("div");
    expect(actionsDiv).not.toHaveClass("left");
    expect(actionsDiv?.children[0]).toEqual(secondaryButton);
    expect(actionsDiv?.children[1]).toEqual(primaryButton);
    expect(primaryButton).toHaveClass("fill");
    expect(secondaryButton).toHaveClass("text");
  });

  it("renders only one button", () => {
    render(<Dialog {...initParams} secondaryAction={undefined} />);
    const buttons = getButtons(document.body);

    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveClass("fill");
  });

  it("should handle clicking on buttons and ENTER press", async () => {
    render(<Dialog {...initParams} />);
    const [primaryButton, secondaryButton] = getButtons(document.body);
    expect(initParams.primaryAction.onClick).toHaveBeenCalledTimes(0);
    expect(initParams.secondaryAction?.onClick).toHaveBeenCalledTimes(0);
    expect(initParams.onClose).toHaveBeenCalledTimes(0);

    const autoSummissionInput = document.body.querySelector("input") as HTMLElement;
    await userEvent.type(autoSummissionInput, "{enter}");
    expect(initParams.primaryAction.onClick).toHaveBeenCalledTimes(1);

    await userEvent.click(primaryButton);
    expect(initParams.primaryAction.onClick).toHaveBeenCalledTimes(2);
    await userEvent.click(secondaryButton);
    expect(initParams.secondaryAction?.onClick).toHaveBeenCalledTimes(1);
  });
});

describe("ref should work", () => {
  it("should give back the proper data prop, this also checks if the component propagates ...rest properly", () => {
    const ExampleComponent = ({
      propagateRef
    }: {
      propagateRef?: (ref: React.RefObject<HTMLElement>) => void;
    }) => {
      const ref = useRef(null);

      useEffect(() => {
        if (ref.current) {
          propagateRef && propagateRef(ref);
        }
      }, [ref]);

      return (
        <Dialog
          children="test"
          open={false}
          alignActions={"left"}
          onClose={jest.fn()}
          primaryAction={{ label: "test", onClick: jest.fn() }}
          title="test"
          id="test"
          data-ref="testing"
          ref={ref}
        />
      );
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
