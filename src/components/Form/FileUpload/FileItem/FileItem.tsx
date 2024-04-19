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

import React, { ComponentPropsWithRef, ForwardRefRenderFunction } from "react";
import classes from "./FileItem.module.scss";
import { Typography } from "../../../Typography/Typography";
import { Icon, Icons } from "../../../Icon/Icon";
import { ProgressBar } from "../../../ProgressBar/ProgressBar";
import { FileType } from "../FileUpload";

export type UploadProgress = "uploading" | "completed" | "error" | "readonly" | "retry";

export interface Props extends ComponentPropsWithRef<"div"> {
  name: string;
  status?: UploadProgress;
  progress?: number;
  error?: string;
  onRequestedFileAction?: (action: FILE_ACTION, name: FileType["name"]) => void;
}
interface FileItemIcons {
  fileIcon: Icons;
  actionIcon?: { type: Icons; action: FILE_ACTION };
}

export enum FILE_ACTION {
  DELETE = "delete",
  REMOVE = "remove",
  ABORT = "abort",
  RETRY = "retry"
}

const FileItemComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { name, status, error, progress, onRequestedFileAction }: Props,
  ref
) => {
  const determineIcons = (status?: UploadProgress): FileItemIcons => {
    switch (status) {
      case "completed":
        return {
          fileIcon: Icons.FileOutline,
          actionIcon: {
            type: Icons.Trash,
            action: FILE_ACTION.DELETE
          }
        };
      case "error":
        return {
          fileIcon: Icons.InfoCircle,
          actionIcon: {
            type: Icons.Times,
            action: FILE_ACTION.REMOVE
          }
        };
      case "uploading":
        return {
          fileIcon: Icons.FileUpload,
          actionIcon: {
            type: Icons.Times,
            action: FILE_ACTION.ABORT
          }
        };
      case "retry":
        return {
          fileIcon: Icons.InfoCircle,
          actionIcon: {
            type: Icons.Refresh,
            action: FILE_ACTION.RETRY
          }
        };
      case "readonly":
      default:
        return { fileIcon: Icons.FileOutline };
    }
  };

  const icons = determineIcons(status);

  const getFriendlyNameAndExtension = (name: string) => {
    const index = name.indexOf(".");
    return { friendlyName: name.slice(0, index), extension: name.slice(index + 1) };
  };

  const { friendlyName, extension } = getFriendlyNameAndExtension(name);

  return (
    <div ref={ref} className={classes["file-item-wrapper"]} aria-label={`${name}-wrapper`}>
      <Typography
        variant={"body"}
        title={name}
        className={`${classes["file-name"]} ${status ? classes[status] : ""}`}
      >
        <Icon icon={icons.fileIcon} className={classes["file-icon"]} />
        <span className={classes["friendly-name"]}>{friendlyName}</span>.<span>{extension}</span>
        {icons.actionIcon && (
          <Icon
            title={icons.actionIcon.action}
            icon={icons.actionIcon.type}
            className={classes["action-icon"]}
            onClick={() =>
              icons.actionIcon &&
              onRequestedFileAction &&
              onRequestedFileAction(icons.actionIcon.action, name)
            }
          />
        )}
      </Typography>
      {error && (
        <Typography
          variant={"sub-text"}
          className={`${classes["file-subtitle"]} ${status ? classes[status] : ""}`}
        >
          {error}
        </Typography>
      )}
      {status === "uploading" ? (
        <ProgressBar className={classes["progress-bar"]} completed={progress} />
      ) : (
        ""
      )}
    </div>
  );
};

export const FileItem = React.forwardRef(FileItemComponent);
