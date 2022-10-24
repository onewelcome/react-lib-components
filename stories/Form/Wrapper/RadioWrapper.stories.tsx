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
  RadioWrapper as RadioWrapperComponent,
  Props
} from "../../..//src/Form/Wrapper/RadioWrapper/RadioWrapper";
import { Radio } from "../../../src/Form/Radio/Radio";
import RadioWrapperDocumentation from "./RadioWrapper.mdx";

const meta: Meta = {
  title: "components/Inputs/Radio (Wrapper)",
  component: RadioWrapperComponent,
  parameters: {
    docs: {
      page: RadioWrapperDocumentation
    }
  },
  argTypes: {
    value: {
      options: ["option1", "option2", "option3"],
      control: {
        type: "radio"
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

const Template: Story<Props> = args => {
  return (
    <div>
      <RadioWrapperComponent {...args}>
        <Radio helperText="Individual helper" value="option1">
          Option 1
        </Radio>
        <Radio value="option2">Option 2</Radio>
        <Radio value="option3">Option 3</Radio>
      </RadioWrapperComponent>
    </div>
  );
};

export const RadioWrapper = Template.bind({});

RadioWrapper.args = {
  error: false,
  errorMessage: "Errormessage",
  fieldsetProps: {
    legend: "Radio buttons",
    hideLegend: false,
    legendStyle: "h1",
    noPadding: true,
    noBackground: true
  },
  helperText: "Helpertext",
  value: "option1",
  name: "my-group",
  onChange: () => {}
};
