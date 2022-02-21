import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { RadioGroup as RadioGroupComponent, Props } from "../../src/Form/RadioGroup/RadioGroup";
import { Radio } from "../../src/Form/Radio/Radio";

const meta: Meta = {
  title: "RadioGroup",
  component: RadioGroupComponent,
  argTypes: {
    value: {
      options: ["option1", "option2", "option3", "option4"],
      control: { type: "radio" },
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => {
  return (
    <RadioGroupComponent errorMessage="This is an error" value="option1" name="my-group" {...args}>
      <Radio helperText="Testing" value="option1">
        Option 1
      </Radio>
      <Radio value="option2">Option 2</Radio>
      <Radio value="option3">Option 3</Radio>
      <Radio value="option4">Option 4</Radio>
    </RadioGroupComponent>
  );
};

export const RadioGroup = Template.bind({});

RadioGroup.args = {};
