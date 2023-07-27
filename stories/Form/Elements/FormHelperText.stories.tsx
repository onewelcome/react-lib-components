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
  FormHelperText as FormHelperTextComponent,
  Props
} from "../../../src/components/Form/FormHelperText/FormHelperText";
import FormHelperTextDocumentation from "./FormHelperText.mdx";

const meta: Meta = {
  title: "components/Data Display/FormHelperText",
  component: FormHelperTextComponent,
  parameters: {
    docs: {
      page: FormHelperTextDocumentation
    }
  }
};

export default meta;

const Template: Story<Props> = args => (
  <FormHelperTextComponent {...args}>content</FormHelperTextComponent>
);

export const FormHelperText = Template.bind({});

FormHelperText.args = {
  error: false
};

export const FormHelperTextError = Template.bind({});

FormHelperTextError.args = {
  error: true
};

export const FormHelperTextSuccess = Template.bind({});

FormHelperTextSuccess.args = {
  success: true
};

export const FormHelperTextDisabled = Template.bind({});

FormHelperTextDisabled.args = {
  disabled: true
};
