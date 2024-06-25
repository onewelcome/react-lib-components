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

import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { FileItem, Props } from "../../../src/components/Form/FileUpload/FileItem/FileItem";
import FileItemDocumentation from "./FileItem.mdx";

const meta: Meta = {
  title: "components/Inputs/FileUpload/FileItem",
  component: FileItem,
  parameters: {
    docs: {
      page: FileItemDocumentation
    }
  },
  argTypes: {
    name: {
      control: {
        type: "text"
      }
    },
    status: {
      options: ["uploading", "completed", "error", "readonly", "retry"],
      control: {
        type: "select"
      }
    },
    error: {
      control: {
        type: "text"
      }
    }
  }
};

export default meta;

const Template: StoryFn<Props> = args => {
  return <FileItem {...args} />;
};

export const FileItemCompleted = Template.bind({});

FileItemCompleted.args = {
  name: "test.txt",
  status: "completed",
  downloadFileLink: "https://www.test.com/download"
};

export const FileItemError = Template.bind({});

FileItemError.args = {
  name: "test.txt",
  status: "error",
  error: "The maximum allowed file size is 2MB. Upload a smaller file."
};

export const FileItemProgress = Template.bind({});

FileItemProgress.args = {
  name: "test.txt",
  status: "uploading",
  progress: 50
};

export const FileItemReadOnly = Template.bind({});

FileItemReadOnly.args = {
  name: "test.txt",
  status: "readonly"
};
