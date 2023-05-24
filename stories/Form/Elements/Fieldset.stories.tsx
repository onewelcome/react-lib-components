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

import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import {
  Fieldset as FieldsetComponent,
  Props
} from "../../../src/components/Form/Fieldset/Fieldset";
import { FormControl } from "../../../src/components/Form/FormControl/FormControl";
import { Option } from "../../../src/components/Form/Select/Option";
import { Form } from "../../../src/components/Form/Form";
import { SelectWrapper } from "../../../src/components/Form/Wrapper/SelectWrapper/SelectWrapper";
import FieldsetDocumentation from "./Fieldset.mdx";
import { InputWrapper } from "../../../src/components/Form/Wrapper/InputWrapper/InputWrapper";
import { Button } from "../../../src/components/Button/Button";

const meta: Meta = {
  title: "components/Layout/Fieldset",
  component: FieldsetComponent,
  parameters: {
    docs: {
      page: FieldsetDocumentation
    }
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean"
      }
    },
    background: {
      control: {
        type: "color"
      }
    }
  }
};

export default meta;

const Template: Story<Props> = args => {
  const [prefix, setPrefix] = useState("mr");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <Form style={{ padding: "20px", backgroundColor: "#F5F8F8" }}>
      <FieldsetComponent {...args} legend="Name">
        <FormControl grid={3} align="top">
          <SelectWrapper
            name="prefix"
            label="Prefix"
            value={prefix}
            onChange={event => setPrefix(event.target.value)}
          >
            <Option disabled value={""}>
              Prefix
            </Option>
            <Option value="mr">Mr.</Option>
            <Option value="mrs">Mrs.</Option>
          </SelectWrapper>
          <InputWrapper
            onChange={event => setFirstName(event.target.value)}
            label="First name"
            errorMessage={"Error message"}
            error={false}
            value={firstName}
            helperText={"Helper text"}
            name="first-name"
            type="text"
          />
          <InputWrapper
            onChange={event => setLastName(event.target.value)}
            label="Last name"
            errorMessage={"Error message"}
            error={false}
            value={lastName}
            helperText={"Helper text"}
            name="last-name"
            type="text"
          />
        </FormControl>
        <Button>Test</Button>
      </FieldsetComponent>
    </Form>
  );
};

export const Fieldset = Template.bind({});

Fieldset.args = {};
