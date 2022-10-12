import React, { useEffect, useState } from "react";
import { Meta, Story } from "@storybook/react";
import {
  SelectWrapper as SelectWrapperComponent,
  Props
} from "../../../src/Form/Wrapper/SelectWrapper/SelectWrapper";
import { Option } from "../../../src/Form/Select/Option";

import SelectWrapperDocumentation from "./SelectWrapper.mdx";

const meta: Meta = {
  title: "components/Inputs/SelectWrapper (Wrapper)",
  component: SelectWrapperComponent,
  parameters: {
    docs: {
      page: SelectWrapperDocumentation
    }
  },
  argTypes: {
    value: {
      options: ["option1", "option2", "option3", "option4"],
      control: {
        type: "select"
      }
    },
    disabled: {
      control: "boolean"
    }
  }
};

export default meta;

const Template: Story<Props> = args => {
  return (
    <SelectWrapperComponent {...args}>
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
      <Option value="option4">Option 4</Option>
    </SelectWrapperComponent>
  );
};

export const SelectWrapper = Template.bind({});

SelectWrapper.args = {
  label: "Example select wrapper",
  name: "Example select",
  helperText: "Example helper text",
  error: false,
  errorMessage: "This is an error message",
  required: true
};
