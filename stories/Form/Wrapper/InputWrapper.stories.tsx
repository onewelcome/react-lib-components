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
import { Meta, Story } from "@storybook/react";
import {
  InputWrapper as InputWrapperComponent,
  Props
} from "../../../src/Form/Wrapper/InputWrapper/InputWrapper";
import InputWrapperDocumentation from "./InputWrapper.mdx";

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

declare global {
  var onInputChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default meta;

const Template: Story<Props> = args => {
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
