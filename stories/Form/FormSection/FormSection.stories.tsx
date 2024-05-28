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

import { Meta, Story } from "@storybook/react";
import React from "react";
import {
  FormSection,
  Props
} from "../../../src/components/Layout/FormPage/FormSection/FormSection";
import { InputWrapper } from "../../../src/components/Form/Wrapper/InputWrapper/InputWrapper";
import FormSectionDocumentation from "./FormSection.mdx";

const meta: Meta = {
  title: "Components/layout/FormSection",
  component: FormSection,
  parameters: {
    docs: {
      page: FormSectionDocumentation
    }
  },
  args: {
    header: "Form Section Header Text",
    children: (
      <InputWrapper
        errorMessage="This is an error"
        helperText="Helper text for this field. Description should be short and not repeat the label"
        label="Label for this inputfield"
        name="input1"
        onChange={() => { }}
        type="text"
        value=""
      />
    ),
    subtext: "Form Section Subheader"
  }
};

export default meta;

const Template: Story<Props> = args => <FormSection {...args} />;
export const FormSectionComponent = Template.bind({});