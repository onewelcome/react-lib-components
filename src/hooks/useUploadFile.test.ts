import { useUploadFile } from "./useUploadFile";
import { renderHook } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import { FileType } from "../Form/FileUpload/FileUpload";

const DONE = 4;

const mockXhrRequest = (status: number, readyState?: number, response?: Object) => {
  return {
    open: jest.fn(),
    send: jest.fn(),
    addEventListener: jest.fn(),
    onprogress: jest.fn(),
    responseText: response,
    onreadystatechange: jest.fn(),
    getResponseHeader: jest.fn(),
    upload: {
      addEventListener: jest.fn()
    },
    DONE,
    setRequestHeader: jest.fn(),
    readyState: readyState || 4,
    status
  };
};

type mockRequestParams = Parameters<typeof mockXhrRequest>;

const progressData = {
  loaded: 12,
  total: 100
};

const requestInfo = { url: "https://www.test.io", withCredentials: true };

const file = {
  name: "test.txt",
  data: new File([""], "test.txt"),
  size: 5,
  type: ""
};

const setupXhrEnvironment = (mockParams: mockRequestParams) => {
  const mock = mockXhrRequest(...mockParams);
  const mockClass = () => mock;

  // @ts-ignore
  window.XMLHttpRequest = jest.fn().mockImplementation(mockClass);

  return mock;
};

const expectReadyStateInfo = async (
  files: FileType[],
  mock: ReturnType<typeof mockXhrRequest>,
  response: { code: number; body: { message: string } }
) => {
  const { result } = renderHook(() =>
    useUploadFile(files, { ...requestInfo, responseErrorPath: "body.message" })
  );

  expect(mock.addEventListener).toHaveBeenCalled();
  const [[, readystatechange]] = mock.addEventListener.mock.calls;
  await waitFor(() => readystatechange());
  const currentFile = result.current.updatedFiles[0];
  expect(currentFile.status).toEqual("error");
  expect(currentFile.error).toEqual(response.body.message);
};

describe("it should perform upload", () => {
  it("should register the correct progress", async () => {
    const mock = setupXhrEnvironment([200]);
    const { result } = renderHook(() => useUploadFile([file], requestInfo));
    expect(result.current).toBeDefined();
    expect(mock.upload.addEventListener).toHaveBeenCalled();
    const [[, progress]] = mock.upload.addEventListener.mock.calls;
    await waitFor(() => progress(progressData));

    const targetFile = result.current.updatedFiles[0];
    expect(targetFile.name).toEqual(file.name);
    expect(targetFile.progress).toEqual(12);
  });

  it("should contain a file with status of retry", async () => {
    const mock = setupXhrEnvironment([0, DONE]);
    const files2 = [
      {
        name: "test2.txt",
        data: new File([""], "test2.txt"),
        size: 5,
        type: ""
      }
    ];
    const { result } = renderHook(() => useUploadFile(files2, requestInfo));
    expect(result.current).toBeDefined();
    expect(mock.addEventListener).toHaveBeenCalled();
    const [[, readystatechange]] = mock.addEventListener.mock.calls;
    await waitFor(() => readystatechange());
    expect(result.current.updatedFiles[0].status).toEqual("retry");
  });

  it("should contain a file with status of error", async () => {
    const response = { code: 404, body: { message: "Error test" } };
    const mock = setupXhrEnvironment([404, DONE, JSON.stringify(response)]);
    const files3 = [
      {
        name: "test3.txt",
        data: new File([""], "test3.txt"),
        size: 5,
        type: ""
      }
    ];
    await expectReadyStateInfo(files3, mock, response);
  });

  it("should contain a file with status of server error", async () => {
    const response = { code: 500, body: { message: "Error test" } };
    const mock = setupXhrEnvironment([500, DONE, JSON.stringify(response)]);
    const files6 = [
      {
        name: "test6.txt",
        data: new File([""], "test3.txt"),
        size: 5,
        type: ""
      }
    ];
    await expectReadyStateInfo(files6, mock, response);
  });

  it("should contain a file with status of success", async () => {
    const mock = setupXhrEnvironment([200, DONE]);
    const files3 = [
      {
        name: "test3.txt",
        data: new File([""], "test3.txt"),
        size: 5,
        type: ""
      }
    ];
    const { result } = renderHook(() => useUploadFile(files3, requestInfo));
    expect(result.current).toBeDefined();
    expect(mock.addEventListener).toHaveBeenCalled();
    const [[, readystatechange]] = mock.addEventListener.mock.calls;
    await waitFor(() => readystatechange());
    const currentFile = result.current.updatedFiles[0];
    expect(currentFile.status).toEqual("completed");
  });
});

describe("should return data according to the parameters", () => {
  it("should call custom callbacks", async () => {
    const onComplete = jest.fn();
    const onProgress = jest.fn();
    const mock = setupXhrEnvironment([200, DONE]);
    const files4 = [
      {
        name: "test4.txt",
        data: new File([""], "test3.txt"),
        size: 5,
        type: ""
      }
    ];
    renderHook(() => useUploadFile(files4, requestInfo, { onProgress, onComplete }));

    const [[, progress]] = mock.upload.addEventListener.mock.calls;
    await waitFor(() => progress(progressData));

    const [[, readystatechange]] = mock.addEventListener.mock.calls;
    await waitFor(() => readystatechange());

    expect(mock.addEventListener).toHaveBeenCalled();
    expect(onComplete).toHaveBeenCalled();
    expect(onComplete).toHaveBeenCalled();
  });

  it("should add the correct error message", async () => {
    const mock = setupXhrEnvironment([0, DONE]);
    const files5 = [
      {
        name: "test5.txt",
        data: new File([""], "test5.txt"),
        size: 5,
        type: ""
      }
    ];
    const error = "Network error";
    const { result } = renderHook(() =>
      useUploadFile(files5, { ...requestInfo, networkErrorText: error })
    );
    const [[, readystatechange]] = mock.addEventListener.mock.calls;
    await waitFor(() => readystatechange());

    expect(mock.addEventListener).toHaveBeenCalled();
    const file = result.current.updatedFiles[0];
    expect(file.error).toEqual(error);
  });
});

describe("useFileUpload hook should not fire when url and array of files is not present", () => {
  it("should return an empty array if url is empty", () => {
    const { result } = renderHook(() => useUploadFile([], { url: "https://yoohoo.co" }));

    expect(result.current.uploadingFiles.length).toBe(0);
  });

  it("should return an empty array if url is empty", () => {
    const { result } = renderHook(() => useUploadFile([file], { url: "" }));

    expect(result.current.uploadingFiles.length).toBe(0);
  });
});
