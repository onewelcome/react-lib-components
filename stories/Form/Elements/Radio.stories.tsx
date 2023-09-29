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
import { Props, Radio as RadioComponent } from "../../../src/components/Form/Radio/Radio";
import { Fieldset } from "../../../src";
import RadioDocumentation from "./Radio.mdx";

const meta: Meta = {
  title: "components/Inputs/Raw/Radio",
  component: RadioComponent,
  parameters: {
    docs: {
      page: RadioDocumentation
    }
  },
  argTypes: {
    parentHelperId: {
      table: {
        disable: true
      },
      control: false
    },
    parentErrorId: {
      table: {
        disable: true
      },
      control: false
    },
    errorMessageId: {
      table: {
        disable: true
      },
      control: false
    },
    checked: {
      type: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  }
};

export default meta;
const Template: StoryFn<Props> = args => (
  <Fieldset legend="Radio button group" legendStyle={"body-bold"}>
    <RadioComponent
      {...args}
      helperText="Example helpertext"
      errorMessage="Example error message"
      value="example-radio"
    >
      Label
    </RadioComponent>
  </Fieldset>
);

export const Radio = Template.bind({});

Radio.args = {};

export const RadioLabelOverflow = Template.bind({});

RadioLabelOverflow.decorators = [
  () => {
    return (
      <div style={{ width: "200px" }}>
        <RadioComponent
          helperText="Example helper text"
          value="example-radio"
          errorMessage={"Oh crap!"}
        >
          It seems to be a good idea to test the label and how it wraps if there is not enough space
          for it. What do you think?
        </RadioComponent>
      </div>
    );
  }
];

export const RadioStates = Template.bind({});

const radioStates = [
  { checked: false, error: false, disabled: false },
  { checked: false, error: true, disabled: false },
  { checked: true, error: false, disabled: false },
  { checked: true, error: true, disabled: false },
  { checked: true, error: false, disabled: true },
  { checked: false, error: false, disabled: true }
];

RadioStates.decorators = [
  () => {
    return (
      <>
        {radioStates.map((states, index) => (
          <RadioComponent
            key={index}
            helperText="Example helper text"
            value="example-radio"
            checked={states.checked}
            disabled={states.disabled}
            error={states.error}
            errorMessage={"Oh crap!"}
          >
            Label
          </RadioComponent>
        ))}
      </>
    );
  }
];
