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

import React, {
  DragEvent,
  DragEventHandler,
  ForwardRefRenderFunction,
  useEffect,
  useRef,
  useState
} from "react";
import { Button } from "../../Button/Button";
import { FILE_ACTION, FileItem, Props as FileConfig } from "./FileItem/FileItem";
import { Props as InputProps } from "../Input/Input";
import { Typography } from "../../Typography/Typography";
import classes from "./FileUpload.module.scss";
import { Icon, Icons } from "../../Icon/Icon";
import { useDetermineStatusIcon } from "../../../hooks/useDetermineStatusIcon";

type FileUploadType = Omit<InputProps, "onDrop" | "type" | "onChange" | "suffix" | "prefix">;
export type FileType = Omit<FileConfig, "onRequestedFileAction"> &
  Pick<File, "size" | "type"> & { data?: any };

export interface Props extends FileUploadType {
  accept: string;
  title: string;
  multiple: boolean;
  fileList: FileType[];
  exceedingMaxSizeErrorText?: string;
  maxFileSize?: number;
  selectButtonText?: string;
  dragAndDropText?: string;
  subText?: string;
  onDragOver?: DragEventHandler;
  onDragEnter?: DragEventHandler;
  onDragLeave?: DragEventHandler;
  onDrop?: (e: FileType[]) => void;
  onChange?: (e: FileType[]) => void;
  onRequestedFileAction?: (action: FILE_ACTION, name: FileType["name"]) => void;
}

const FileUploadComponent: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  {
    name,
    accept,
    error,
    success,
    maxFileSize,
    multiple,
    id,
    title,
    labeledBy,
    disabled = false,
    onChange,
    dragAndDropText = "Drop file here or",
    selectButtonText = "Select file",
    onDragOver,
    onDragLeave,
    wrapperProps,
    onDrop,
    subText,
    onRequestedFileAction,
    exceedingMaxSizeErrorText,
    fileList,
    ...rest
  }: Props,
  ref
) => {
  const labelRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [inputError, setInputError] = useState(false);
  const icon = useDetermineStatusIcon({ success, error });
  let dropzoneClassNames = [classes["file-dropzone"]];
  let subTextClass = [classes["file-selector-sub-text"]];
  dragActive && dropzoneClassNames.push(classes["drag-active"]);
  inputError ||
    (error && dropzoneClassNames.push(classes["error"]) && subTextClass.push(classes["error"]));
  disabled && dropzoneClassNames.push(classes["disabled"]);
  success && !error && dropzoneClassNames.push(classes["success"]);

  const getFileList = (files: FileList | null): FileType[] => {
    let savedFiles = fileList ? [...fileList] : [];
    const fileNames = fileList.map(el => el.name);
    files?.length &&
      Array.from(files as ArrayLike<File>).forEach(el => {
        if (!fileNames.includes(el.name)) {
          savedFiles = multiple
            ? [
                ...savedFiles,
                {
                  ...validateUpload(el),
                  data: el
                }
              ]
            : [
                {
                  ...validateUpload(el),
                  data: el
                }
              ];
        }
      });
    return savedFiles;
  };
  const onInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    let files = getFileList(e.target.files);
    files.length && verifyExtensionValidity(files[files.length - 1]) && onChange && onChange(files);
  };

  const verifyExtensionValidity = (file: FileType) => {
    const extension = file.name.split(".").pop();
    return extension && accept.includes(extension);
  };

  const validateUpload = (file: FileType) => {
    const result: FileType = {
      name: file.name,
      size: file.size,
      type: file.type
    };

    let err = false;
    if (maxFileSize && file.size && file.size >= maxFileSize) {
      const mb = (maxFileSize / (1024 * 1024)).toFixed(2);
      result.error =
        exceedingMaxSizeErrorText ||
        `The maximum allowed file size is ${mb}MB. Upload a smaller file.`;
      result.status = "error";
      err = true;
    }
    setInputError(err);
    return result;
  };

  useEffect(() => {
    if (fileList.length) {
      const validatedFiles = fileList.map(file => validateUpload(file));
      onChange && onChange(validatedFiles);
    }
  }, []);

  const handleOnDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!dragActive) {
      setDragActive(true);
    }
    onDragOver && onDragOver(e);
  };

  const handleOnDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.target as HTMLElement;
    if (target?.classList.contains(classes["file-dropzone"])) {
      setDragActive(false);
    }
    onDragLeave && onDragLeave(e);
  };

  const handleOnDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e?.dataTransfer?.files && e.dataTransfer.files.length) {
      const extension = e?.dataTransfer?.files[0].name.split(".").pop();
      if (extension && accept && !accept.includes(extension)) {
        setDragActive(false);
        return;
      }
      const validatedFiles = getFileList(e.dataTransfer.files);
      onDrop && onDrop(validatedFiles);
    }
    setDragActive(false);
  };

  return (
    <div className={classes["file-upload-wrapper"]} {...wrapperProps}>
      <div className={classes["dropzone-wrapper"]}>
        <div
          className={dropzoneClassNames.join(" ")}
          onDragOver={e => !disabled && handleOnDragOver(e)}
          onDragLeave={e => !disabled && handleOnDragLeave(e)}
          onDrop={e => !disabled && handleOnDrop(e)}
        >
          <Typography variant="body-bold" className={classes["file-upload-title"]} ref={labelRef}>
            {title}
          </Typography>
          <div className={classes["file-select"]}>
            <Icon className={"drop-file-icon"} icon={Icons.FileUpload} />
            <Typography variant="body" className={"drag-and-drop-text"}>
              {dragAndDropText}
            </Typography>
            <div className={classes["file-upload-btn"]}>
              <Button variant="outline" disabled={disabled}>
                {selectButtonText}
                <input
                  className={classes["upload-input"]}
                  {...rest}
                  ref={ref}
                  aria-labelledby={labeledBy}
                  type="file"
                  name={name}
                  {...(multiple && { multiple: true })}
                  disabled={disabled}
                  accept={accept}
                  onChange={onInputChange}
                  spellCheck={rest.spellCheck || false}
                />
              </Button>
            </div>
            {!disabled && icon}
            <span className={classes["outline"]}></span>
          </div>
        </div>
        {subText && (
          <Typography variant={"sub-text"} className={subTextClass.join(" ")}>
            {subText}
          </Typography>
        )}
      </div>
      {fileList?.length > 0 && (
        <ul className={classes["file-list"]}>
          {fileList.map(({ name, status, progress, error }) => (
            <li key={name} className={status} id={name}>
              <FileItem
                name={name}
                status={status}
                progress={progress}
                error={error}
                onRequestedFileAction={onRequestedFileAction}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const FileUpload = React.forwardRef(FileUploadComponent);
