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
import { FileType, FileUpload, Props } from "./FileUpload";
import { createEvent, fireEvent, render, waitFor } from "@testing-library/react";

import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

const defaultParams: Props = {
  accept: ".pdf, .jpg, .txt",
  title: "File Upload test",
  multiple: false,
  fileList: []
};

const createComponent = (params?: (defaultParams: Props) => Props, dataTesId?: string) => {
  let parameters: Props = defaultParams;
  const id = dataTesId || "file-upload";
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<FileUpload {...parameters} data-testid={id} />);
  const component = queries.getByTestId(id);
  const container = queries.container;

  return {
    ...queries,
    container,
    component
  };
};

describe("component should render", () => {
  it("renders without crashing", () => {
    const { component } = createComponent();

    expect(component).toBeDefined();
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

      return <FileUpload {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe("File upload properties", () => {
  it("is disabled", () => {
    const { container } = createComponent(
      defaultParams => ({
        ...defaultParams,
        disabled: true
      }),
      "file-upload-1"
    );
    const dropZone = container.querySelector(".upload-button-wrapper");
    expect(dropZone).toHaveClass("disabled");
  });

  it("shows success", () => {
    const { container } = createComponent(
      defaultParams => ({
        ...defaultParams,
        success: true
      }),
      "file-upload-2"
    );

    const dropZone = container.querySelector(".file-dropzone");
    expect(dropZone).toHaveClass("success");
    const icon = container.querySelector("[data-icon-status='success']");
    expect(icon).toBeDefined();
  });

  it("shows error", () => {
    const { container } = createComponent(
      defaultParams => ({
        ...defaultParams,
        error: true
      }),
      "file-upload-3"
    );

    const dropZone = container.querySelector(".file-dropzone");
    expect(dropZone).toHaveClass("error");
    const icon = container.querySelector("[data-icon-status='error']");
    expect(icon).toBeDefined();
  });

  it("has multiple attribute setup on the input", () => {
    const { component } = createComponent(
      defaultParams => ({
        ...defaultParams,
        multiple: true
      }),
      "file-upload-4"
    );

    expect(component).toHaveAttribute("multiple");
  });

  it("has the correct drag and drop label", () => {
    const text = "test drag and drop text";
    const { container } = createComponent(
      defaultParams => ({
        ...defaultParams,
        dragAndDropText: text
      }),
      "file-upload-5"
    );

    expect(container.querySelector(".drag-and-drop-text")).toHaveTextContent(text);
  });

  it("has the correct button label", () => {
    const text = "Test";
    const { container } = createComponent(
      defaultParams => ({
        ...defaultParams,
        selectButtonText: text
      }),
      "file-upload-6"
    );

    expect(container.querySelector("button")).toHaveTextContent(text);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

describe("File Upload should display items based on file list", () => {
  it("should display the file list with each status", () => {
    const file: FileType = {
      name: "test",
      size: 2,
      type: "text",
      status: "completed"
    };
    const { container } = createComponent(
      defaultParams => ({
        ...defaultParams,
        fileList: [file]
      }),
      "file-upload-10"
    );

    const fileEl = container.querySelector(`#${file.name}`);
    expect(fileEl).toBeDefined();
    expect(fileEl).toHaveClass(file.status as string);
  });
});

describe("file drag and drop properties", () => {
  it("should call all the drag and drop callback provided", async () => {
    const onDrop = jest.fn();
    const onDragOver = jest.fn();
    const onDragLeave = jest.fn();
    const { container } = createComponent(
      defaultParams => ({
        ...defaultParams,
        accept: ".png",
        onDrop,
        onDragOver,
        onDragLeave,
        fileList: []
      }),
      "file-upload-6"
    );

    const file = new File([""], "test.png", {
      type: "image/png"
    });

    const eventData = {
      dataTransfer: {
        files: [file]
      }
    };

    const dropZone = container.querySelector(".upload-button-wrapper") as Element;
    const dragEnterEvent = createEvent.dragEnter(dropZone, eventData);
    const dragOverEvent = createEvent.dragOver(dropZone, eventData);
    const dropEvent = createEvent.drop(dropZone, eventData);
    const dragLeaveEvent = createEvent.dragLeave(dropZone, eventData);

    await waitFor(() => {
      fireEvent(dropZone, dragEnterEvent);
    });

    await waitFor(() => {
      fireEvent(dropZone, dragLeaveEvent);
    });

    expect(onDragLeave).toHaveBeenCalled();

    await waitFor(() => {
      fireEvent(dropZone, dragOverEvent);
    });

    expect(dropZone).toHaveClass("drag-active");

    expect(onDragOver).toHaveBeenCalled();

    await waitFor(() => {
      fireEvent(dropZone, dropEvent);
    });

    expect(onDrop).toHaveBeenCalled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

describe("upload action", () => {
  it("shows accepts only files that follow the type rules", async () => {
    const onChange = jest.fn();
    const { component } = createComponent(
      defaultParams => ({
        ...defaultParams,
        onChange,
        fileList: [],
        accept: ".pdf"
      }),
      "file-upload-7"
    );
    const str = "test";
    const blob = new Blob([str]);
    const file = new File([blob], "test.pdf", {
      type: "application/pdf"
    });
    File.prototype.text = jest.fn().mockResolvedValueOnce(str);
    await act(async () => {
      await waitFor(() => {
        user.upload(component, file);
      });
    });

    const file2 = new File([blob], "test.jpg", {
      type: "application/jpg"
    });

    await act(async () => {
      await waitFor(() => {
        user.upload(component, file2);
      });
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("shows error when only single file upload enabled", async () => {
    const onDrop = jest.fn();
    const { container } = createComponent(
      defaultParams => ({
        ...defaultParams,
        onDrop,
        fileList: []
      }),
      "file-upload-6"
    );

    const file = new File([""], "test.jpg", {
      type: "image/jpg"
    });
    const file2 = new File([""], "test2.jpg", {
      type: "image/jpg"
    });

    const eventData = {
      dataTransfer: {
        files: [file, file2]
      }
    };

    const dropZone = container.querySelector(".upload-button-wrapper") as Element;
    const dropEvent = createEvent.drop(dropZone, eventData);

    await waitFor(() => {
      fireEvent(dropZone, dropEvent);
    });

    const dragDropWrapper = container.querySelector(".file-dropzone") as Element;
    const errorMessage = container.querySelector(".file-selector-sub-text") as Element;

    expect(dragDropWrapper.classList.contains("error")).toBeTruthy();
    expect(errorMessage.classList.contains("error")).toBeTruthy();
    expect(errorMessage.innerHTML).toStrictEqual("You can upload only a single file.");
  });

  it("doesn't upload a file two times", async () => {
    const onChange = jest.fn();
    const { component } = createComponent(
      defaultParams => ({
        ...defaultParams,
        maxFileSize: 1024 * 1024,
        onChange,
        fileList: []
      }),
      "file-upload-9"
    );
    const value = "test";
    const blob = new Blob([value]);
    const file = new File([blob], "test.pdf", {
      type: "application/pdf"
    });
    Object.defineProperty(file, "size", { value: 1024 * 1024 * 2 });
    File.prototype.text = jest.fn().mockResolvedValueOnce(value);
    await act(async () => {
      await waitFor(() => {
        user.upload(component, file);
      });
    });
    await act(async () => {
      await waitFor(() => {
        user.upload(component, file);
      });
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("doesn't allows files to be dropped according to the accepted file types", async () => {
    const onDrop = jest.fn();
    const { container } = createComponent(
      defaultParams => ({
        ...defaultParams,
        accept: ".jpg",
        onDrop,
        fileList: []
      }),
      "file-upload-10"
    );

    const file = new File([""], "test.png", {
      type: "image/png"
    });

    const eventData = {
      dataTransfer: {
        files: [file]
      }
    };
    const dropZone = container.querySelector(".file-dropzone") as Element;
    const dropEvent = createEvent.drop(dropZone, eventData);
    await waitFor(() => {
      fireEvent(dropZone, dropEvent);
    });

    expect(onDrop).toHaveBeenCalledTimes(0);
  });

  it("show error state and error message on drop of invalid extension file", async () => {
    const onDrop = jest.fn();
    const { container } = createComponent(
      defaultParams => ({
        ...defaultParams,
        onDrop,
        fileList: []
      }),
      "file-upload-6"
    );

    const file = new File([""], "test.png", {
      type: "image/png"
    });

    const eventData = {
      dataTransfer: {
        files: [file]
      }
    };

    const dropZone = container.querySelector(".upload-button-wrapper") as Element;
    const dropEvent = createEvent.drop(dropZone, eventData);

    await waitFor(() => {
      fireEvent(dropZone, dropEvent);
    });

    const dragDropWrapper = container.querySelector(".file-dropzone") as Element;
    const errorMessage = container.querySelector(".file-selector-sub-text") as Element;

    expect(dragDropWrapper.classList.contains("error")).toBeTruthy();
    expect(errorMessage.classList.contains("error")).toBeTruthy();
    expect(errorMessage.innerHTML).toStrictEqual(
      `Invalid file format. Supported formats are: ${defaultParams.accept}.`
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

describe("FileUpload should validate files on first render", () => {
  const onChange = jest.fn();
  const { component } = createComponent(
    defaultParams => ({
      ...defaultParams,
      onChange,
      fileList: [
        {
          name: "test",
          type: "text/txt",
          size: 1024 * 1024
        }
      ]
    }),
    "file-upload-8"
  );

  expect(component).toBeDefined();
  expect(onChange).toHaveBeenCalled();
});
