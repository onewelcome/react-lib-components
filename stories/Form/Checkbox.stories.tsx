import React from "react";
import { Meta, Story } from "@storybook/react";
import { Checkbox, Props } from "../../src/Form/Checkbox/Checkbox";

const meta: Meta = {
  title: "Checkbox",
  component: Checkbox,
};

export default meta;

const Template: Story<Props> = (args) => (
  <Checkbox helperText="This is example helper text" name="name" {...args}>
    Example
  </Checkbox>
);

export const CheckboxEl = Template.bind({});

CheckboxEl.args = {};
