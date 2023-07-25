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

const Template: Story<Props> = args => <TextareaWrapperComponent {...args} />;
export const TextareaWrapper = Template.bind({});

TextareaWrapper.args = {
  error: false,
  success: false,
  value: "Example value",
  onChange: () => {},
  label: "Example textarea",
  name: "Textarea",
  helperText: "Example textarea helpertext",
  errorMessage: "This is an error message"
};
