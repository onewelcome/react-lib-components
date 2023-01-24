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
import { dateTypes, Input as InputComponent, Props } from "../../../src/Form/Input/Input";
import { Form } from "../../../src/Form/Form";
import InputDocumentation from "./Input.mdx";

const meta: Meta = {
  title: "components/Inputs/Raw/Input",
  component: InputComponent,
  parameters: {
    docs: {
      page: InputDocumentation
    }
  },
  argTypes: {
    className: {
      table: { disable: true },
      control: false
    },
    labelledBy: {
      table: { disable: true },
      control: false
    },
    value: {
      control: "text"
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
        "url",
        "hidden",
        ...dateTypes
      ],
      control: "select"
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

/** This is not how to properly use the validation. */
const Template: Story<Props> = args => {
  return (
    <Form onSubmit={() => {}}>
      <InputComponent id="input-component" {...args} />
    </Form>
  );
};

export const Input = Template.bind({});

Input.args = {
  type: "text",
  name: "input"
};
