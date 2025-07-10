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

import { FileType } from "../components/Form/FileUpload/FileUpload";
import { useEffect, useState } from "react";
import { isJsonString } from "../util/helper";

export type UploadResponseStatus = XMLHttpRequest["status"];
export type UploadResponseJson = Record<string, unknown>;
export interface UploadResponseType {
  fileList: FileType[];
  status: UploadResponseStatus;
  responseJson: UploadResponseJson;
}
export interface OnErrorMessageMapperType {
  responseStatus: UploadResponseStatus;
  responseJson: UploadResponseJson;
}
export interface UseUploadFileCallback {
  onComplete?: (response: UploadResponseType) => void;
  onProgress?: (fileName: string, progress: number) => void;
  onErrorMessageMapper?: (args: OnErrorMessageMapperType) => string | undefined;
}
export interface UploadFileRequestParams {
  url: string;
  headers?: Headers;
  withCredentials?: boolean;
}

export const useUploadFile = (
  files: FileType[],
  request: UploadFileRequestParams,
  callbacks?: UseUploadFileCallback
) => {
  const { url, headers, withCredentials } = request;

  const { onComplete, onProgress, onErrorMessageMapper } = callbacks ?? {};

  const [uploadingFiles, setUploadingFiles] = useState<FileType[]>([]);
  const [updatedFiles, setUpdatedFiles] = useState<FileType[]>([...files]);

  const getUpdatedList = (
    fileName: string,
    fileStatus: FileType["status"],
    progress?: number,
    error?: string
  ) => {
    return files.map(file => {
      if (file.name === fileName) {
        file.progress = progress;
        file.error = error;
        file.status = fileStatus;
      }
      return { ...file };
    });
  };

  const recordProgress = (e: ProgressEvent<XMLHttpRequestEventTarget>, fileName: string) => {
    const progress = (e.loaded / e.total) * 100;
    const updatedData = getUpdatedList(fileName, "uploading", progress);
    setUpdatedFiles(updatedData);
    onProgress?.(fileName, progress);
  };

  const getFileStatus = (
    responseStatus: UploadResponseStatus,
    responseJson: UploadResponseJson
  ) => {
    let fileStatus: FileType["status"] = undefined;
    let error = "";
    if (responseStatus >= 200 && responseStatus < 400) {
      fileStatus = "completed";
    } else if (responseStatus === 0) {
      fileStatus = "retry";
      error =
        onErrorMessageMapper?.({ responseStatus, responseJson }) ??
        "Network error. Check internet connection and retry uploading the file";
    } else if (responseStatus >= 400 && responseStatus < 500) {
      fileStatus = "error";
      error = onErrorMessageMapper?.({ responseStatus, responseJson }) ?? "Bad request";
    } else if (responseStatus >= 500) {
      fileStatus = "error";
      error = onErrorMessageMapper?.({ responseStatus, responseJson }) ?? "Server Error";
    }
    return { fileStatus, error };
  };

  const handleOnComplete = (xhr: XMLHttpRequest, fileName: string) => {
    const { status, readyState, responseText } = xhr;
    if (readyState === xhr.DONE) {
      const responseJson = responseText && isJsonString(responseText) && JSON.parse(responseText);
      const { fileStatus, error } = getFileStatus(status, responseJson);
      const updatedList = getUpdatedList(fileName, fileStatus, undefined, error);
      setUpdatedFiles(updatedList);
      const response = { fileList: updatedList, status, responseJson };
      setUploadingFiles(prevState => prevState.filter(selected => selected.name !== fileName));
      onComplete?.(response);
    }
  };

  const uploadFile = (file: FileType) => {
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", e => recordProgress(e, file.name));
    xhr.addEventListener("readystatechange", () => handleOnComplete(xhr, file.name));
    withCredentials && (xhr.withCredentials = true);
    xhr.open("POST", url, true);
    headers?.forEach((value, key) => xhr.setRequestHeader(key, value));
    const formData = new FormData();
    formData.append("file", file.data as File);
    formData.append("name", file.name);
    xhr.send(formData);
  };

  useEffect(() => {
    if (!url || !files.length) {
      return;
    }

    files.forEach(file => {
      if (!file.status && !uploadingFiles.find(selected => selected.name === file.name)) {
        setUploadingFiles(prevState => [...prevState, file]);
        uploadFile(file);
      }
    });
  }, [url, files]);

  return { updatedFiles, setUpdatedFiles, uploadingFiles };
};
