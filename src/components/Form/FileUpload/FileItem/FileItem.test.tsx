import React from "react";
import { FILE_ACTION, FileItem, Props } from "./FileItem";
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";

const defaultParams: Props = {
  name: "Test.txt"
};

const createFileItem = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<FileItem {...parameters} />);
  const component = queries.getByLabelText(`${parameters.name}-wrapper`);
  const title = component.querySelector(".file-name");
  const fileIcon = component.querySelector(".file-icon");
  const actionIcon = component.querySelector(".action-icon");
  const errorSubtitle = component.querySelector(".file-subtitle");
  const progressBar = component.querySelector(".progress-bar");

  return {
    ...queries,
    component,
    title,
    fileIcon,
    actionIcon,
    errorSubtitle,
    progressBar
  };
};

describe("component should render", () => {
  it("renders without crashing", () => {
    const { component } = createFileItem();

    expect(component).toBeDefined();
  });
});

describe("component should change display the correct style and elements according to the status", () => {
  it("should show the correct details for completed", () => {
    const { actionIcon, title } = createFileItem(defaultParams => ({
      ...defaultParams,
      status: "completed"
    }));
    expect(title).toHaveClass("completed");
    expect(actionIcon).toHaveAttribute("title", FILE_ACTION.DELETE);
  });

  it("should show the correct details for uploading", () => {
    const { actionIcon, title, progressBar } = createFileItem(defaultParams => ({
      ...defaultParams,
      status: "uploading"
    }));
    expect(title).toHaveClass("uploading");
    expect(actionIcon).toHaveAttribute("title", FILE_ACTION.ABORT);
    expect(progressBar).toBeDefined();
  });

  it("should show the correct details for readonly", () => {
    const { actionIcon, title } = createFileItem(defaultParams => ({
      ...defaultParams,
      status: "readonly"
    }));
    expect(title).toHaveClass("readonly");
    expect(actionIcon).toBeNull();
  });

  it("should show the correct details for error", () => {
    const { actionIcon, title, errorSubtitle } = createFileItem(defaultParams => ({
      ...defaultParams,
      status: "error"
    }));
    expect(title).toHaveClass("error");
    expect(actionIcon).toHaveAttribute("title", FILE_ACTION.REMOVE);
    expect(errorSubtitle).toBeDefined();
  });

  it("should show the correct details for retry", () => {
    const { actionIcon, title } = createFileItem(defaultParams => ({
      ...defaultParams,
      status: "retry"
    }));
    expect(title).toHaveClass("retry");
    expect(actionIcon).toHaveAttribute("title", FILE_ACTION.RETRY);
  });
});

describe("component should transmit the correct message upwards when a file action icon is clicked", () => {
  it("should call retry action", async () => {
    const onRequestedFileAction = jest.fn();
    const { actionIcon } = createFileItem(defaultParams => ({
      ...defaultParams,
      status: "retry",
      onRequestedFileAction
    }));

    await user.click(actionIcon as Element);
    expect(onRequestedFileAction).toHaveBeenNthCalledWith(1, FILE_ACTION.RETRY, defaultParams.name);
  });
});
