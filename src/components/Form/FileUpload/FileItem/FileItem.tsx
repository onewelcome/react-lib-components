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
import { Button } from "../../../Button/Button";
import { Link } from "../../../Link/Link";
export type UploadProgress = "uploading" | "completed" | "error" | "readonly" | "retry";

export interface Props extends ComponentPropsWithRef<"div"> {
  name: string;
  status?: UploadProgress;
  progress?: number;
  error?: string;
  downloadFileLink?: string;
  totalPercentage?: number;
  onRequestedFileAction?: (action: FILE_ACTION, name: FileType["name"]) => void;
}
interface FileItemIcons {
  fileIcon: Icons;
  actionIcons?: { type: Icons; action: FILE_ACTION }[];
}

export enum FILE_ACTION {
  DELETE = "delete",
  DOWNLOAD = "download",
  REMOVE = "remove",
  ABORT = "abort",
  RETRY = "retry"
}

export enum ACTION_STATUS {
  COMPLETED = "completed",
  UPLOADING = "uploading",
  ERROR = "error",
  RETRY = "retry",
  READONLY = "readonly"
}

const FileItemComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {
    name,
    status,
    error,
    progress,
    downloadFileLink,
    totalPercentage,
    onRequestedFileAction
  }: Props,
  ref
) => {
  const determineIcons = (status?: UploadProgress): FileItemIcons => {
    switch (status) {
      case ACTION_STATUS.COMPLETED:
        return {
          fileIcon: Icons.FileAltIcon,
          actionIcons: [
            {
              type: Icons.Trash,
              action: FILE_ACTION.DELETE
            },
            {
              type: Icons.DownloadFile,
              action: FILE_ACTION.DOWNLOAD
            }
          ]
        };
      case ACTION_STATUS.ERROR:
        return {
          fileIcon: Icons.InfoCircle,
          actionIcons: [
            {
              type: Icons.Times,
              action: FILE_ACTION.REMOVE
            }
          ]
        };
      case ACTION_STATUS.UPLOADING:
        return {
          fileIcon: Icons.FileAltIcon,
          actionIcons: [
            {
              type: Icons.AbortFile,
              action: FILE_ACTION.ABORT
            }
          ]
        };
      case ACTION_STATUS.RETRY:
        return {
          fileIcon: Icons.FileAltIcon,
          actionIcons: [
            {
              type: Icons.Refresh,
              action: FILE_ACTION.RETRY
            },
            {
              type: Icons.Trash,
              action: FILE_ACTION.REMOVE
            }
          ]
        };
      case ACTION_STATUS.READONLY:
      default:
        return { fileIcon: Icons.FileAltIcon };
    }
  };

  const icons = determineIcons(status);

  const getFriendlyNameAndExtension = (name: string) => {
    const index = name.indexOf(".");
    return { friendlyName: name.slice(0, index), extension: name.slice(index + 1) };
  };

  const { friendlyName, extension } = getFriendlyNameAndExtension(name);

  const getStartIcon = (icon: { type: Icons; action: FILE_ACTION }) => (
    <Icon
      key={icon.action}
      title={icon.action}
      icon={icon.type}
      className={classes["action-icon"]}
    ></Icon>
  );

  const renderActionIcons = (
    actionIcons: { type: Icons; action: FILE_ACTION }[],
    status: UploadProgress = ACTION_STATUS.UPLOADING
  ) => {
    return actionIcons.map(icon => (
      <>
        {icon.action !== FILE_ACTION.DOWNLOAD && (
          <Button
            color="primary"
            startIcon={getStartIcon(icon)}
            title={icon.action !== FILE_ACTION.ABORT ? icon.action : ""}
            type="button"
            variant="text"
            onClick={() =>
              icon && onRequestedFileAction && onRequestedFileAction(icon.action, name)
            }
          >
            {icon.action !== FILE_ACTION.ABORT ? icon.action : ""}
          </Button>
        )}

        {icon.action === FILE_ACTION.DOWNLOAD && downloadFileLink && (
          <Link
            color="primary"
            display="link"
            to={downloadFileLink}
            type="download"
            target="_blank"
            prefixIcon={
              <Icon
                key={icon.action}
                className={classes["action-icon"]}
                title={icon.action}
                icon={icon.type}
              ></Icon>
            }
          >
            {icon.action}
          </Link>
        )}
      </>
    ));
  };

  const getUploadedFileInfo = () => {
    return (
      <Typography
        variant={"body"}
        title={name}
        className={`${classes["file-name"]} ${status ? classes[status] : ""}`}
      >
        {status === "retry" && (
          <Icon
            icon={Icons.Error}
            className={`${classes["file-icon"]} ${status ? classes[status] : ""}`}
          />
        )}
        <Icon icon={icons.fileIcon} className={classes["file-icon"]} />
        <span className={classes["friendly-name"]}>{friendlyName}</span>.<span>{extension}</span>
      </Typography>
    );
  };

  const getProgressBar = () => {
    return (
      <ProgressBar
        className={classes["progress-bar"]}
        completed={progress}
        label={`${friendlyName}.${extension}`}
        percentage={totalPercentage}
      />
    );
  };

  return (
    <div ref={ref} className={classes["file-item-wrapper"]} aria-label={`${name}-wrapper`}>
      <div className={classes["file-list-container"]}>
        {status !== ACTION_STATUS.UPLOADING && getUploadedFileInfo()}

        <div
          className={`${status === ACTION_STATUS.UPLOADING ? classes["progress-with-action"] : ""}`}
        >
          {status === ACTION_STATUS.UPLOADING && getProgressBar()}

          <div className={classes["action-button-wrapper"]}>
            {icons.actionIcons && renderActionIcons(icons.actionIcons, status)}
          </div>
        </div>
      </div>
      {error && (
        <Typography
          variant={"sub-text"}
          className={`${classes["file-subtitle"]} ${status ? classes[status] : ""}`}
        >
          {error}
        </Typography>
      )}
    </div>
  );
};

export const FileItem = React.forwardRef(FileItemComponent);
