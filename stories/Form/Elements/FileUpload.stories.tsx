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
import { Meta, Story } from "@storybook/react";
import { FileType, FileUpload, Props } from "../../../src/Form/FileUpload/FileUpload";
import { Form } from "../../../src";
import { useArgs } from "@storybook/addons";
import { useUploadFile } from "../../../src/hooks/useUploadFile";
import { FILE_ACTION } from "../../../src/Form/FileUpload/FileItem/FileItem";
import { areArraysDifferent } from "../../../src/util/helper";
import FileUploadDocumentation from "./FileUpload.mdx";

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
    }
  }
};

export default meta;

const files: FileType[] = [];

const Template: Story<Props & { url: string }> = args => {
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
    let fileList = [];
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
  dragAndDropText: "Testing drop text",
  title: "File Upload Title Placeholder",
  fileList: files
};

export const FileUploadComponentWithServerInteraction = Template.bind({});

FileUploadComponentWithServerInteraction.args = {
  accept: ".mp4, .jpg, .jpeg",
  multiple: true,
  dragAndDropText: "Testing drop text",
  title: "File Upload Title Placeholder",
  fileList: files,
  url: "https://stark-caverns-56384.herokuapp.com/upload"
};
