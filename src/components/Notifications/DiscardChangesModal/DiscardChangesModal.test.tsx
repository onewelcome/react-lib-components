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
import { DiscardChangesModal, Props } from "./DiscardChangesModal";
import { findByTestId, getAllByRole, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultParams: Props = {
  id: "modal",
  open: true,
  hasUnsavedChanges: jest.fn(),
  onClose: jest.fn(),
  headerProps: {
    title: "Header"
  },
  discardChangedDialogProps: {
    "data-testid": "discardChangesDialog",
    discardChangesButtonLabel: "Discard",
    keepEditingButtonLabel: "Keep editing",
    contentLabel: "Unsaved changes",
    titleLabel: "Dialog"
  },
  children: <span>children</span>
};

const createDiscardChangesModal = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<DiscardChangesModal {...parameters} data-testid="discardChangesModal" />);
  const discardChangesModal = queries.getByTestId("discardChangesModal");
  const closeBtn = queries.getByRole("button", { name: "close modal" });

  return {
    ...queries,
    discardChangesModal,
    closeBtn
  };
};

const getDiscardChangesButtons = (container: HTMLElement) =>
  getAllByRole(container, "button", {
    name: new RegExp(
      `(${defaultParams.discardChangedDialogProps.discardChangesButtonLabel}|${defaultParams.discardChangedDialogProps.keepEditingButtonLabel})`
    )
  });

const findDiscardChangesDialog = (container: HTMLElement) =>
  findByTestId(container, "discardChangesDialog");

describe("DiscardChangesModal should render", () => {
  it("renders without crashing", () => {
    const { discardChangesModal, container } = createDiscardChangesModal();

    expect(discardChangesModal).toBeDefined();
    expect(discardChangesModal).toHaveTextContent("children");
    expect(discardChangesModal).toHaveTextContent(defaultParams.headerProps.title);
    expect(container).not.toHaveTextContent(defaultParams.discardChangedDialogProps.titleLabel);
  });

  it("clicking on close button without making any changes close the modal", () => {
    (
      defaultParams.hasUnsavedChanges as jest.MockedFunction<typeof defaultParams.hasUnsavedChanges>
    ).mockReturnValue(false);
    const { closeBtn } = createDiscardChangesModal();

    userEvent.click(closeBtn);
    expect(defaultParams.onClose).toBeCalledTimes(1);
  });
});

describe("DiscardChangesModal should show DiscardChangesDialog", () => {
  it("showing DiscardChangesDialog and clicking on `keep editing` button", async () => {
    (
      defaultParams.hasUnsavedChanges as jest.MockedFunction<typeof defaultParams.hasUnsavedChanges>
    ).mockReturnValue(true);
    const { closeBtn } = createDiscardChangesModal();
    const container = document.body;
    expect(defaultParams.onClose).not.toBeCalled();

    userEvent.click(closeBtn);

    expect(defaultParams.onClose).not.toBeCalled();
    await findDiscardChangesDialog(container);
    const [_, keepEditingBtn] = getDiscardChangesButtons(container);
    expect(container).toHaveTextContent(defaultParams.discardChangedDialogProps.titleLabel);
    expect(container).toHaveTextContent(defaultParams.discardChangedDialogProps.contentLabel);

    userEvent.click(keepEditingBtn);
    expect(defaultParams.onClose).not.toBeCalled();
    await waitFor(() =>
      expect(container).not.toHaveTextContent(defaultParams.discardChangedDialogProps.titleLabel)
    );
  });

  it("showing DiscardChangesDialog and clicking on `discard` button", async () => {
    (
      defaultParams.hasUnsavedChanges as jest.MockedFunction<typeof defaultParams.hasUnsavedChanges>
    ).mockReturnValue(true);
    const { closeBtn } = createDiscardChangesModal();
    const container = document.body;

    userEvent.click(closeBtn);

    await findDiscardChangesDialog(container);
    const [discardBtn] = getDiscardChangesButtons(container);
    expect(container).toHaveTextContent(defaultParams.discardChangedDialogProps.titleLabel);

    userEvent.click(discardBtn);
    expect(defaultParams.onClose).toBeCalled();
  });
});

describe("ref should work", () => {
  it("should give back the proper data prop, this also checks if the component propagates ...rest properly", () => {
    const ExampleComponent = ({
      propagateRef
    }: {
      propagateRef?: (
        ref1: React.RefObject<HTMLElement>,
        ref2: React.RefObject<HTMLElement>
      ) => void;
    }) => {
      const modalRef = useRef(null);
      const dialogRef = useRef(null);

      useEffect(() => {
        if (dialogRef.current && modalRef.current) {
          propagateRef && propagateRef(modalRef, dialogRef);
        }
      }, [modalRef, dialogRef]);

      return (
        <DiscardChangesModal
          modalRef={modalRef}
          dialogRef={dialogRef}
          data-ref="testing"
          hasUnsavedChanges={jest.fn()}
          onClose={jest.fn()}
          headerProps={{ title: "test" }}
          open={false}
          children="test"
          discardChangedDialogProps={{
            contentLabel: "test",
            discardChangesButtonLabel: "test",
            keepEditingButtonLabel: "test",
            titleLabel: "test",
            "data-ref": "testing"
          }}
          title="test"
          id="test"
        />
      );
    };

    const refCheck = (ref1: React.RefObject<HTMLElement>, ref2: React.RefObject<HTMLElement>) => {
      expect(ref1.current).toHaveAttribute("data-ref", "testing");
      expect(ref2.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
