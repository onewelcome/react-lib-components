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
import { Checkbox, Props as CheckboxProps } from "../../../src/components/Form/Checkbox/Checkbox";
import CheckboxDocumentation from "./Checkbox.mdx";
import { Link } from "../../../src";

const meta: Meta = {
  /* fixme: currently it's impossible to add conditional exclusions: https://github.com/storybookjs/storybook/issues/18233
   * when it's available we should include states only for chromatic
   * excludeStories: /.*CheckboxStates$/,
   * */
  title: "components/Inputs/Raw/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      page: CheckboxDocumentation
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
      control: {
        type: "boolean"
      }
    },
    disabled: {
      control: "boolean"
    },
    label: {
      control: "text"
    }
  }
};

export default meta;

const Template: StoryFn<CheckboxProps> = args => {
  return <Checkbox name={"name"} {...args} />;
};

export const SingleCheckbox = Template.bind({});

SingleCheckbox.args = {
  children: "Example",
  helperProps: {
    children: (
      <Link style={{ fontSize: "inherit" }} to="#">
        Go to our privacy policy
      </Link>
    )
  },
  name: "Checkbox"
};

export const NestedCheckbox = Template.bind({});

NestedCheckbox.args = {
  indeterminate: false,
  label: "Electronics",
  name: "electronics",
  children: [
    <Checkbox name="laptop" key="1">
      Option 1
    </Checkbox>,
    <Checkbox name="tv" key="2">
      Option 2
    </Checkbox>,
    <Checkbox name="microphones" key="3">
      Option 3
    </Checkbox>
  ]
};

export const CheckboxLabelOverflow = Template.bind({});

CheckboxLabelOverflow.decorators = [
  () => {
    return (
      <>
        <div style={{ width: "200px" }}>
          <Checkbox
            errorMessage={"Oh no!"}
            name="checkbox"
            helperProps={{
              children: "It is always nice to see a good old helper text!"
            }}
          >
            It seems to be a good idea to test the label and how it wraps if there is not enough
            space for it. What do you think?
          </Checkbox>
        </div>
      </>
    );
  }
];

export const CheckboxStates = Template.bind({});

const checkboxStates = [
  { checked: false, error: false, disabled: false, indeterminate: false },
  { checked: false, error: false, disabled: true, indeterminate: false },
  { checked: true, error: false, disabled: false, indeterminate: false },
  { checked: true, error: true, disabled: false, indeterminate: false },
  { checked: true, error: false, disabled: true, indeterminate: false },
  { checked: false, error: false, disabled: true, indeterminate: true },
  { checked: false, error: true, disabled: false, indeterminate: true },
  { checked: false, error: false, disabled: false, indeterminate: true }
];

CheckboxStates.decorators = [
  () => {
    return (
      <>
        {checkboxStates.map((states, index) => (
          <Checkbox
            key={index}
            disabled={states.disabled}
            checked={states.checked}
            error={states.error}
            errorMessage={"Oh no!"}
            indeterminate={states.indeterminate}
            name="checkbox"
            helperProps={{
              children: "It is always nice to see a good old helper text!"
            }}
          >
            Label
          </Checkbox>
        ))}
      </>
    );
  }
];

export const CheckboxWithReadOnlyMode = Template.bind({});

const readOnlyCheckboxStates = [
  { checked: false, error: false, disabled: false, indeterminate: false },
  { checked: true, error: false, disabled: false, indeterminate: false },
  { checked: false, error: false, disabled: false, indeterminate: false },
  { checked: false, error: false, disabled: false, indeterminate: false }
];

CheckboxWithReadOnlyMode.decorators = [
  () => {
    return (
      <>
        {readOnlyCheckboxStates.map((states, index) => (
          <Checkbox
            key={index}
            disabled={states.disabled}
            checked={states.checked}
            error={states.error}
            errorMessage={"Oh no!"}
            indeterminate={states.indeterminate}
            name="checkbox"
            readOnlyView={true}
          >
            Label
          </Checkbox>
        ))}
      </>
    );
  }
];
