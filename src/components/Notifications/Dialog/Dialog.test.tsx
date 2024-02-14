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
  title: "Example dialog",
  primaryAction: {
    label: "Save",
    onClick: jest.fn()
  },
  cancelAction: {
    label: "Cancel"
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
    const { getByText, debug } = render(<Dialog {...initParams} />);
    const [_closeButton, _cancelButton, secondaryButton, primaryButton] = getButtons(document.body);

    expect(getByText(initParams.title)).toBeDefined();
    expect(getByText(initParams.children as string)).toBeDefined();
    const actionsDiv = primaryButton.closest("div");
    expect(actionsDiv?.children[1]).toEqual(primaryButton);
    expect(actionsDiv?.children[0]).toEqual(secondaryButton);
    expect(primaryButton).toHaveClass("fill");
    expect(secondaryButton).toHaveClass("outline");
  });

  it("renders only one primary button", () => {
    render(<Dialog {...initParams} secondaryAction={undefined} />);
    const buttons = getButtons(document.body);

    expect(buttons).toHaveLength(3);
    expect(buttons[2]).toHaveClass("fill");
  });

  it("should handle clicking on buttons and ENTER press", async () => {
    render(<Dialog {...initParams} />);
    const [_closeButton, _cancelButton, secondaryButton, primaryButton] = getButtons(document.body);
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
