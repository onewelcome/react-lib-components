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
  Textarea as TextareaComponent,
  Props
} from "../../../src/components/Form/Textarea/Textarea";
import TextareaDocumentation from "./Textarea.mdx";

const meta: Meta = {
  title: "components/Inputs/Raw/TextArea",
  component: TextareaComponent,
  parameters: {
    docs: {
      page: TextareaDocumentation
    }
  },
  argTypes: {
    value: {
      control: "text"
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

const Template: StoryFn<Props> = args => <TextareaComponent {...args} />;

export const Textarea = Template.bind({});

Textarea.args = {};

export const TextareaInReadOnlyMode = Template.bind({});

TextareaInReadOnlyMode.storyName = "Textarea In Read-only Mode";
TextareaInReadOnlyMode.args = {
  value: "This is example text for textarea.",
  readOnlyView: true
};
