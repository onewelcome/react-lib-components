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
  const errorIcon = component.querySelector(".icon-error-circle");
  const actionIcons = component.querySelectorAll(".action-icon");
  const errorSubtitle = component.querySelector(".file-subtitle");
  const progressBar = component.querySelector(".progress-bar");

  return {
    ...queries,
    component,
    title,
    fileIcon,
    actionIcons,
    errorSubtitle,
    progressBar,
    errorIcon
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
    const { actionIcons, title } = createFileItem(defaultParams => ({
      ...defaultParams,
      status: "completed"
    }));
    expect(title).toHaveClass("completed");
    expect(actionIcons[0]).toHaveAttribute("title", FILE_ACTION.DELETE);
  });

  it("should show the correct details for uploading", () => {
    const { actionIcons, title, progressBar } = createFileItem(defaultParams => ({
      ...defaultParams,
      status: "uploading"
    }));
    expect(actionIcons[0]).toHaveAttribute("title", FILE_ACTION.ABORT);
    expect(progressBar).toBeDefined();
  });

  it("should show the correct details for readonly", () => {
    const { actionIcons, title } = createFileItem(defaultParams => ({
      ...defaultParams,
      status: "readonly"
    }));

    expect(title).toHaveClass("readonly");
    expect(actionIcons).toHaveLength(0);
  });

  it("should show the correct details for error", () => {
    const { actionIcons, title, errorSubtitle } = createFileItem(defaultParams => ({
      ...defaultParams,
      status: "error"
    }));

    expect(title).toHaveClass("error");
    expect(actionIcons[0]).toHaveAttribute("title", FILE_ACTION.REMOVE);
    expect(errorSubtitle).toBeDefined();
  });

  it("should show the correct details for retry", () => {
    const { actionIcons, title, errorIcon } = createFileItem(defaultParams => ({
      ...defaultParams,
      status: "retry"
    }));
    expect(title).toHaveClass("retry");
    expect(errorIcon).not.toBeNull();
    expect(actionIcons[0]).toHaveClass("icon-refresh");
    expect(actionIcons[0]).toHaveAttribute("title", FILE_ACTION.RETRY);
    expect(actionIcons[1]).toHaveClass("icon-trash");
    expect(actionIcons[1]).toHaveAttribute("title", FILE_ACTION.REMOVE);
  });

  it("should show Delete & Download option for successfully uploaded file", () => {
    const { actionIcons, title } = createFileItem(defaultParams => ({
      ...defaultParams,
      status: "completed",
      downloadFileLink: "https://test.com/download"
    }));

    expect(title).toHaveClass("completed");
    expect(actionIcons[0]).toHaveClass("icon-trash");
    expect(actionIcons[0]).toHaveAttribute("title", FILE_ACTION.DELETE);
    expect(actionIcons[1]).toHaveClass("icon-download-file-outline");
    expect(actionIcons[1]).toHaveAttribute("title", FILE_ACTION.DOWNLOAD);
  });

  it("should not display Download action for successfully uploaded file when download link not available", () => {
    const { actionIcons, title, queryByTestId } = createFileItem(defaultParams => ({
      ...defaultParams,
      status: "completed"
    }));

    expect(title).toHaveClass("completed");
    expect(actionIcons).toHaveLength(1);
    expect(actionIcons[0].parentElement?.tagName).not.toEqual("a");
    expect(actionIcons[0]).not.toHaveAttribute("title", FILE_ACTION.DOWNLOAD);
    expect(actionIcons[0]).toHaveAttribute("title", FILE_ACTION.DELETE);
  });

  it("should show Abort option for uploading file", () => {
    const { actionIcons, title } = createFileItem(defaultParams => ({
      ...defaultParams,
      status: "uploading"
    }));
    expect(title).toBeNull();
    expect(actionIcons[0]).toHaveClass("icon-cancel");
    expect(actionIcons[0]).toHaveAttribute("title", FILE_ACTION.ABORT);
  });

  it("should show Remove option for error file", () => {
    const { actionIcons, title } = createFileItem(defaultParams => ({
      ...defaultParams,
      status: "error"
    }));
    expect(title).toHaveClass("error");
    expect(actionIcons[0]).toHaveClass("icon-times");
    expect(actionIcons[0]).toHaveAttribute("title", FILE_ACTION.REMOVE);
  });
});

describe("component should transmit the correct message upwards when a file action icon is clicked", () => {
  it("should call Remove action for error", async () => {
    const onRequestedFileAction = jest.fn();
    const { actionIcons } = createFileItem(defaultParams => ({
      ...defaultParams,
      status: "error",
      onRequestedFileAction
    }));

    await user.click(actionIcons[0] as Element);
    expect(actionIcons).toHaveLength(1);
    expect(onRequestedFileAction).toHaveBeenNthCalledWith(
      1,
      FILE_ACTION.REMOVE,
      defaultParams.name
    );
  });

  it("should call Abort action for uploading file", async () => {
    const onRequestedFileAction = jest.fn();
    const { actionIcons } = createFileItem(defaultParams => ({
      ...defaultParams,
      status: "uploading",
      onRequestedFileAction
    }));

    await user.click(actionIcons[0] as Element);
    expect(actionIcons).toHaveLength(1);
    expect(onRequestedFileAction).toHaveBeenNthCalledWith(1, FILE_ACTION.ABORT, defaultParams.name);
  });

  it("should call Delete & Download action for completed", async () => {
    const onRequestedFileAction = jest.fn();
    const { actionIcons } = createFileItem(defaultParams => ({
      ...defaultParams,
      status: "completed",
      downloadFileLink: "https://test.com/download",
      onRequestedFileAction
    }));

    expect(actionIcons).toHaveLength(2);

    await user.click(actionIcons[0] as Element);
    expect(onRequestedFileAction).toHaveBeenNthCalledWith(
      1,
      FILE_ACTION.DELETE,
      defaultParams.name
    );
  });

  it("should call Retry & Remove action for failed", async () => {
    const onRequestedFileAction = jest.fn();
    const { actionIcons } = createFileItem(defaultParams => ({
      ...defaultParams,
      status: "retry",
      onRequestedFileAction
    }));

    expect(actionIcons).toHaveLength(2);

    await user.click(actionIcons[0] as Element);
    expect(onRequestedFileAction).toHaveBeenNthCalledWith(1, FILE_ACTION.RETRY, defaultParams.name);
  });
});
