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
  InputWrapper as InputWrapperComponent,
  Props
} from "../../../src/components/Form/Wrapper/InputWrapper/InputWrapper";
import InputWrapperDocumentation from "./InputWrapper.mdx";
import { Icon } from "../../Icon/Icon.stories";
import { Icons } from "../../../src";

const meta: Meta = {
  title: "components/Inputs/Input (Wrapper)",
  component: InputWrapperComponent,
  parameters: {
    docs: {
      page: InputWrapperDocumentation
    }
  },
  argTypes: {
    onChange: {
      action: "onChange event fired",
      control: false
    },
    onBlur: {
      action: "onBlur event fired"
    },
    onFocus: {
      action: "onFocus event fired"
    },
    type: {
      options: [
        "text",
        "email",
        "file",
        "number",
        "password",
        "search",
        "tel",
        "time",
        "url",
        "datetime-local",
        "date"
      ],
      control: {
        type: "select"
      }
    },
    required: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  }
};

export default meta;

const Template: StoryFn<Props> = args => {
  return <InputWrapperComponent {...args} />;
};

export const InputWrapper = Template.bind({});

InputWrapper.args = {
  label: "Example label",
  type: "text",
  name: "Example name",
  helperText: "This is helpertext",
  onChange: () => {},
  errorMessage: "This is an error message",
  error: false,
  value: "",
  inputProps: {
    prefix: "https://",
    suffix: "",
    className: "input-classname",
    wrapperProps: { className: "wrapper-classname" }
  }
};

export const InputWrapperWithError = Template.bind({});

InputWrapperWithError.args = {
  label: "Example label",
  type: "text",
  name: "Example name",
  helperText: "This is helpertext",
  onChange: () => {},
  errorMessage: "This is an error message",
  error: true,
  value: "www.example.com",
  inputProps: {
    prefix: "https://",
    suffix: "",
    className: "input-classname",
    wrapperProps: { className: "wrapper-classname" }
  }
};

export const InputWrapperWithSuccess = Template.bind({});

InputWrapperWithSuccess.args = {
  label: "Example label",
  type: "text",
  name: "Example name",
  helperText: "This is helpertext",
  onChange: () => {},
  errorMessage: "This is an error message",
  error: false,
  success: true,
  value: "www.example.com",
  inputProps: {
    prefix: "https://",
    suffix: "",
    className: "input-classname",
    wrapperProps: { className: "wrapper-classname" }
  }
};

export const InputWrapperWithIconPrefix = Template.bind({});

InputWrapperWithIconPrefix.args = {
  label: "Example label",
  type: "text",
  name: "Example name",
  helperText: "This is helpertext",
  onChange: () => {},
  errorMessage: "This is an error message",
  error: false,
  value: "example value",
  inputProps: {
    prefix: <Icon icon={Icons.Bell} />,
    suffix: "",
    className: "input-classname",
    wrapperProps: { className: "wrapper-classname" }
  }
};

export const InputWrapperWithIconSuffix = Template.bind({});

InputWrapperWithIconSuffix.args = {
  label: "Example label",
  type: "text",
  name: "Example name",
  helperText: "This is helpertext",
  onChange: () => {},
  errorMessage: "This is an error message",
  error: false,
  value: "www.example.com",
  inputProps: {
    prefix: "https://",
    suffix: <Icon icon={Icons.Bell} />,
    className: "input-classname",
    wrapperProps: { className: "wrapper-classname" }
  }
};

export const InputWrapperWithIconPrefixAndSuffix = Template.bind({});

InputWrapperWithIconPrefixAndSuffix.args = {
  label: "Example label",
  type: "text",
  name: "Example name",
  helperText: "This is helpertext",
  onChange: () => {},
  errorMessage: "This is an error message",
  error: false,
  value: "example value",
  inputProps: {
    prefix: <Icon icon={Icons.Bell} />,
    suffix: <Icon icon={Icons.Bell} />,
    className: "input-classname",
    wrapperProps: { className: "wrapper-classname" }
  }
};

export const InputWrapperRequired = Template.bind({});

InputWrapperRequired.args = {
  label: "Example label",
  type: "text",
  name: "Example name",
  helperText: "This is helpertext",
  onChange: () => {},
  errorMessage: "This is an error message",
  error: false,
  value: "example value",
  required: true
};

export const InputWrapperInReadOnlyMode = Template.bind({});

InputWrapperInReadOnlyMode.storyName = "Input Wrapper In Read-only Mode";
InputWrapperInReadOnlyMode.args = {
  label: "Example label",
  type: "text",
  name: "Example name",
  helperText: "This is helpertext",
  onChange: () => {},
  errorMessage: "This is an error message",
  error: false,
  value: "example value",
  readOnlyView: true
};
