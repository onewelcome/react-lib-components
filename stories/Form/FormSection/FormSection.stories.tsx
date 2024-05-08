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
} from "../../../src/components/Form/FormSection/FormSection";
import FormSectionDocumentation from "./FormSection.mdx";

const meta: Meta = {
  title: "Components/layout/Form section",
  component: FormSection,
  parameters: {
    docs: {
      page: FormSectionDocumentation
    }
  },
  args: {
    header: "Form Section Header Text",
    children: (
      <input></input>
    ),
    subtext: "Form Section Subheader"
  }
};

export default meta;

const defaultArgs: Props = {
  header: "Form Section Header Text",
  children: (
    <input></input>
  ),
  subtext: "Form Section Subheader"
};

const Template: Story<Props> = args => <FormSection {...args} />;
export const FormSectionComponent = Template.bind({});

FormSectionComponent.args = {
  ...defaultArgs
};

