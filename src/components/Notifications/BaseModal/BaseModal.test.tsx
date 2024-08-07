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

import React, { useEffect, useRef, act } from "react";
import { BaseModal, Props } from "./BaseModal";
import { render, getByText, queryByText, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const classNames = ["class11", "class12"];
const containerClassNames = ["class21", "class22"];

const defaultParams: Props = {
  id: "modal",
  open: true,
  onClose: jest.fn(),
  className: classNames.join(" "),
  containerProps: { className: containerClassNames.join(" ") },
  children: "This is example dialog content."
};

const createBaseModal = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <BaseModal {...parameters} data-testid="BaseModal">
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
      <span>{defaultParams.children}</span>
      <button>Button 4</button>
      <button>Button 5</button>
      <button>Button 6</button>
    </BaseModal>
  );
  const slideInModal = queries.getByTestId("BaseModal");

  return {
    ...queries,
    slideInModal
  };
};

describe("BaseModal", () => {
  it("renders without crashing", () => {
    const { getByRole } = createBaseModal();
    const dialog = getByRole("dialog");

    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAttribute("aria-labelledby", "modal-label");
    expect(dialog).toHaveAttribute("aria-describedby", "modal-description");
    expect(dialog).toHaveAttribute("data-hidden", "false");
    expect(dialog).toHaveAttribute("aria-hidden", "false");
    expect(getByText(dialog, defaultParams.children as string)).toBeDefined();
    expect(document.body).toHaveStyle("overflow: hidden");
  });

  it("should render closed modal without content", () => {
    const { queryByRole } = createBaseModal(params => ({ ...params, open: false }));

    const dialogByRole = queryByRole("dialog");
    const dialog = document.body.children[1] as HTMLElement;

    expect(dialogByRole).toBeNull();
    expect(dialog).toHaveAttribute("aria-hidden", "true");
    expect(queryByText(dialog, defaultParams.children as string)).toBeNull();
  });

  it("should render closed modal with content when forceContainerOpen is provided", () => {
    const { getByRole } = createBaseModal(params => ({
      ...params,
      open: false,
      forceContainerOpen: true
    }));

    const modal = getByRole("dialog", { hidden: true });
    const container = modal.querySelector(".container") as HTMLElement;

    expect(container).toBeInTheDocument();
    expect(container).toHaveAttribute("aria-hidden", "true");
  });

  it("propagates containerProps to container element", () => {
    const { getByRole } = createBaseModal(params => ({
      ...params,
      open: true,
      containerProps: {
        id: "container"
      }
    }));

    const modal = getByRole("dialog");
    const container = modal.querySelector(".container") as HTMLElement;

    expect(container).toBeInTheDocument();
    expect(container).toHaveAttribute("id", "container");
  });

  it("propagates backdropProps to backdrop element", () => {
    const { getByRole } = createBaseModal(params => ({
      ...params,
      open: true,
      backdropProps: {
        id: "backdrop"
      }
    }));

    const modal = getByRole("dialog");
    const backdrop = modal.querySelector(".backdrop") as HTMLElement;

    expect(backdrop).toBeInTheDocument();
    expect(backdrop).toHaveAttribute("id", "backdrop");
  });

  it("should handle clicking on backdrop & ESC key", async () => {
    const { getByRole } = createBaseModal();

    const modal = getByRole("dialog");

    const backdrop = modal.querySelector(".backdrop")!;
    expect(defaultParams.onClose).toHaveBeenCalledTimes(0);

    await userEvent.click(backdrop);
    expect(defaultParams.onClose).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(modal, { key: "Escape" });
    expect(defaultParams.onClose).toHaveBeenCalledTimes(2);
  });

  it("should repeat focus back to the first button when tabbing through the modal", async () => {
    const { getByText } = createBaseModal();

    const firstButton = getByText("Button 1");
    const lastButton = getByText("Button 6");

    await act(() => {
      firstButton.focus();
    });

    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();

    expect(firstButton).toHaveFocus();

    await userEvent.tab({ shift: true });

    expect(lastButton).toHaveFocus();
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

      return <BaseModal id="test" children="test" open={true} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
