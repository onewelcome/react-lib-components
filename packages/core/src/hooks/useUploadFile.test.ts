import { OnErrorMessageMapperType, useUploadFile } from "./useUploadFile";
import { renderHook } from "@testing-library/react";
import { waitFor } from "@testing-library/react";

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

describe("it should perform upload", () => {
  it("should register the correct progress", async () => {
    const mock = setupXhrEnvironment([200]);

    const { result } = renderHook(() => useUploadFile([{ ...file }], requestInfo));

    expect(result.current).toBeDefined();
    expect(mock.upload.addEventListener).toHaveBeenCalled();
    const [[, progress]] = mock.upload.addEventListener.mock.calls;
    await waitFor(() => progress(progressData));
    const targetFile = result.current.updatedFiles[0];
    expect(targetFile.name).toEqual(file.name);
    expect(targetFile.progress).toEqual(12);
  });

  it("should handle uploading with headers", async () => {
    const mock = setupXhrEnvironment([200]);
    const headers = new Headers({ Authorization: "Auth1234" });

    const { result } = renderHook(() => useUploadFile([{ ...file }], { ...requestInfo, headers }));

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
    const mock = setupXhrEnvironment([404, DONE]);
    const files3 = [
      {
        name: "test3.txt",
        data: new File([""], "test3.txt"),
        size: 5,
        type: ""
      }
    ];

    const { result } = renderHook(() => useUploadFile(files3, { ...requestInfo }));

    expect(mock.addEventListener).toHaveBeenCalled();
    const [[, readystatechange]] = mock.addEventListener.mock.calls;
    await waitFor(() => readystatechange());
    const currentFile = result.current.updatedFiles[0];
    expect(currentFile.status).toEqual("error");
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

    const { result } = renderHook(() => useUploadFile(files6, { ...requestInfo }));

    expect(mock.addEventListener).toHaveBeenCalled();
    const [[, readystatechange]] = mock.addEventListener.mock.calls;
    await waitFor(() => readystatechange());
    const currentFile = result.current.updatedFiles[0];
    expect(currentFile.status).toEqual("error");
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
    const status = 200;
    const response = { id: "bada55e5-f00d-babe-b00b-cafe5eedf00d" };
    const mock = setupXhrEnvironment([status, DONE, JSON.stringify(response)]);
    const files4 = [
      {
        name: "test4.txt",
        data: new File([""], "test3.txt"),
        size: 5,
        type: ""
      }
    ];
    const { result } = renderHook(() =>
      useUploadFile(files4, requestInfo, { onProgress, onComplete })
    );

    const [[, progress]] = mock.upload.addEventListener.mock.calls;
    await waitFor(() => progress(progressData));

    const [[, readystatechange]] = mock.addEventListener.mock.calls;
    await waitFor(() => readystatechange());

    expect(mock.addEventListener).toHaveBeenCalled();
    expect(onComplete).toHaveBeenCalledWith({
      fileList: result.current.updatedFiles,
      status,
      responseJson: response
    });
    expect(onProgress).toHaveBeenCalledWith(files4[0].name, 12);
  });

  it.each`
    responseStatus | responseJson                                      | expectedErrorMessage                                                       | useCustomMapper
    ${400}         | ${{ message: "Invalid file" }}                    | ${"Custom bad request message"}                                            | ${true}
    ${500}         | ${{ message: "Server failed" }}                   | ${"Custom server error message"}                                           | ${true}
    ${501}         | ${{ message: "Take error from the response" }}    | ${"Custom error based on response"}                                        | ${true}
    ${0}           | ${{}}                                             | ${"Network error. Check internet connection and retry uploading the file"} | ${false}
    ${400}         | ${{}}                                             | ${"Bad request"}                                                           | ${false}
    ${404}         | ${{}}                                             | ${"Bad request"}                                                           | ${false}
    ${500}         | ${{}}                                             | ${"Server Error"}                                                          | ${false}
    ${200}         | ${{ id: "bada55e5-f00d-4d00-babe-b00bf00dface" }} | ${""}                                                                      | ${false}
  `(
    "should handle error message for status $responseStatus with/without onErrorMessageMapper callback",
    async ({ responseStatus, responseJson, expectedErrorMessage, useCustomMapper }) => {
      const mock = setupXhrEnvironment([responseStatus, DONE]);
      mock.responseText = JSON.stringify(responseJson);
      const errorMessageMapper = ({
        responseStatus,
        responseJson
      }: OnErrorMessageMapperType): string | undefined => {
        if (responseStatus === 400) {
          return "Custom bad request message";
        } else if (responseStatus === 500) {
          return "Custom server error message";
        } else if (responseJson.message === "Take error from the response") {
          return "Custom error based on response";
        }
      };
      const onErrorMessageMapper = useCustomMapper ? errorMessageMapper : undefined;
      const files5 = [
        {
          name: "test5.txt",
          data: new File([""], "test5.txt"),
          size: 5,
          type: ""
        }
      ];

      const { result } = renderHook(() =>
        useUploadFile(files5, { ...requestInfo }, { onErrorMessageMapper })
      );
      const [[, readystatechange]] = mock.addEventListener.mock.calls;
      await waitFor(() => readystatechange());

      expect(mock.addEventListener).toHaveBeenCalled();
      const file = result.current.updatedFiles[0];
      expect(file.error).toEqual(expectedErrorMessage);
    }
  );
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
