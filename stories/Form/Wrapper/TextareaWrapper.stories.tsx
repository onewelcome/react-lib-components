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
import {
  TextareaWrapper as TextareaWrapperComponent,
  Props
} from "../../../src/components/Form/Wrapper/TextareaWrapper/TextareaWrapper";
import TextareaWrapperDocumentation from "./TextareaWrapper.mdx";

const meta: Meta = {
  title: "components/Inputs/Textarea (Wrapper)",
  component: TextareaWrapperComponent,
  parameters: {
    docs: {
      page: TextareaWrapperDocumentation
    }
  },
  argTypes: {
    required: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    },
    success: {
      control: "boolean"
    }
  }
};

export default meta;

const defaultArgs: Props = {
  error: false,
  success: false,
  value: "Example value",
  onChange: () => {},
  label: "Example textarea",
  name: "Textarea",
  helperText: "Example textarea helpertext",
  errorMessage: "This is an error message"
};

const Template: StoryFn<Props> = args => <TextareaWrapperComponent {...args} />;
export const TextareaWrapper = Template.bind({});

TextareaWrapper.args = {
  ...defaultArgs
};

export const TextareaWrapperError = Template.bind({});

TextareaWrapperError.args = {
  ...defaultArgs,
  error: true
};

export const TextareaWrapperSuccess = Template.bind({});

TextareaWrapperSuccess.args = {
  ...defaultArgs,
  success: true
};

export const TextareaWrapperDisabled = Template.bind({});

TextareaWrapperDisabled.args = {
  ...defaultArgs,
  disabled: true
};

export const TextareaWrapperRequired = Template.bind({});

TextareaWrapperRequired.args = {
  ...defaultArgs,
  required: true
};

export const TextareaWrapperInReadOnlyMode = Template.bind({});

TextareaWrapperInReadOnlyMode.storyName = "Textarea Wrapper In Read-only Mode";
TextareaWrapperInReadOnlyMode.args = {
  ...defaultArgs,
  readOnlyView: true
};

export const TextareaComposedHelperText = Template.bind({});

TextareaComposedHelperText.args = {
  ...defaultArgs,
  helperProps: {
    children: (
      <span>
        Composed helper <a href="/">text</a>
      </span>
    )
  }
};

export const TextareaComposedErrorText = Template.bind({});

TextareaComposedErrorText.args = {
  ...defaultArgs,
  error: true,
  helperText: undefined,
  errorMessage: undefined,
  errorMessageProps: {
    children: (
      <span style={{ color: "var(--error)" }}>
        Composed error <a href="/">text</a>
      </span>
    )
  }
};
