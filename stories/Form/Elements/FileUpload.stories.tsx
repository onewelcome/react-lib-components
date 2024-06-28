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

import React, { useEffect } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { FileType, FileUpload, Props } from "../../../src/components/Form/FileUpload/FileUpload";
import { Form } from "../../../src";
import { useUploadFile } from "../../../src/hooks/useUploadFile";
import { FILE_ACTION } from "../../../src/components/Form/FileUpload/FileItem/FileItem";
import { areArraysDifferent } from "../../../src/util/helper";
import FileUploadDocumentation from "./FileUpload.mdx";
import { useArgs } from "@storybook/preview-api";

const meta: Meta = {
  title: "components/Inputs/FileUpload",
  component: FileUpload,
  parameters: {
    docs: {
      page: FileUploadDocumentation
    }
  },
  argTypes: {
    multiple: {
      control: "boolean"
    },
    accept: {
      control: "text"
    },
    disabled: {
      control: "boolean"
    },
    dragAndDropText: {
      control: "text"
    },
    title: {
      control: "text"
    },
    fileList: {
      control: "object"
    },
    url: {
      control: "text"
    },
    exceedingMaxSizeErrorText: {
      control: "text"
    },
    onRequestedFileAction: {
      control: "object"
    },
    onDragOver: {
      table: {
        disable: true
      }
    },
    onDragLeave: {
      table: {
        disable: true
      }
    },
    onDragEnter: {
      table: {
        disable: true
      }
    },
    onDrop: {
      table: {
        disable: true
      }
    },
    onChange: {
      table: {
        disable: true
      }
    }
  }
};

export default meta;

const files: FileType[] = [];

const Template: StoryFn<Props & { url: string }> = args => {
  const [_, updateArgs] = useArgs();
  const onChange = (e: FileType[]) => {
    setUpdatedFiles(e);
  };

  const { updatedFiles, setUpdatedFiles } = useUploadFile(args.fileList, {
    url: args.url,
    withCredentials: true,
    responseErrorPath: "message"
  });

  useEffect(() => {
    if (areArraysDifferent(args.fileList, updatedFiles, "status")) {
      updateArgs({ ...args, fileList: updatedFiles });
    }
  }, [updatedFiles]);

  const updateFileList = (action: FILE_ACTION, name: FileType["name"]) => {
    let fileList: any[] = [];
    switch (action) {
      case FILE_ACTION.RETRY:
        fileList = updatedFiles.map(file => {
          if (file.name === name) {
            delete file.status;
          }
          return file;
        });
        break;
      case FILE_ACTION.REMOVE:
      case FILE_ACTION.DELETE:
        fileList = updatedFiles.filter(file => file.name !== name);
        break;
      case FILE_ACTION.DOWNLOAD:
        fileList = updatedFiles;
        break;
      case FILE_ACTION.ABORT:
        fileList = updatedFiles.filter(file => file.name !== name);
        break;
    }
    setUpdatedFiles(fileList);
  };
  const onDrop = (e: FileType[]) => {
    setUpdatedFiles(e);
  };

  return (
    <Form onSubmit={() => {}}>
      <FileUpload
        {...args}
        fileList={updatedFiles}
        onChange={onChange}
        onDrop={onDrop}
        onRequestedFileAction={updateFileList}
      />
    </Form>
  );
};

export const FileUploadComponent = Template.bind({});

FileUploadComponent.args = {
  accept: ".mp4, .jpg, .jpeg",
  multiple: true,
  dragAndDropText: "Drag and drop or",
  title: "Label",
  subText: "Caption",
  fileList: files,
  invalidDropErrorMessage: "Invalid file format. Supported formats are: $accept.",
  noMultipleFileDropErrorMessage: "You can upload only a single file.",
  downloadFileLink: "http://localhost:4000/download.link"
};

export const FileUploadComponentWithServerInteraction = Template.bind({});

FileUploadComponentWithServerInteraction.args = {
  accept: ".mp4, .jpg, .jpeg",
  multiple: true,
  dragAndDropText: "Drag and drop or",
  title: "Label",
  subText: "Caption",
  fileList: files,
  url: "http://localhost:4000/upload",
  invalidDropErrorMessage: "Invalid file format. Supported formats are: $accept.",
  noMultipleFileDropErrorMessage: "You can upload only a single file.",
  downloadFileLink: "http://localhost:4000/download.link"
};

// Mock upload file and return success response
FileUploadComponentWithServerInteraction.parameters = {
  mockAddonConfigs: {
    globalMockData: [],
    ignoreQueryParams: true, // Whether or not to ignore query parameters globally
    refreshStoryOnUpdate: true, // This property re-renders the story if there's any data changes
    disableUsingOriginal: false, // This property disables the toggle (on/off) option to use the original endpoint
    disable: false // This property disables the panel from all the stories
  },
  mockData: [
    {
      url: "http://localhost:4000/upload",
      method: "POST",
      status: 201,
      body: {},
      response: {
        data: "File successfully uploaded on server"
      }
    }
  ]
};
