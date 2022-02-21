import React from "react";
import { Meta, Story } from "@storybook/react";
import { Radio, Props } from "../../src/Form/Radio/Radio";

const meta: Meta = {
  title: "Radio",
  component: Radio,
  argTypes: {
    parentHelperId: {
      table: {
        disable: true,
      },
      control: false,
    },
    errorMessageId: {
      table: {
        disable: true,
      },
      control: false,
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => (
  <Radio value="value" {...args}>
    Label
  </Radio>
);

export const RadioEl = Template.bind({});

RadioEl.args = {};
