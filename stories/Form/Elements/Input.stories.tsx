import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input as InputComponent, inputTypes, Props } from "../../../src/Form/Input/Input";
import { Form } from "../../../src/Form/Form";
import InputDocumentation from "./Input.mdx";

const meta: Meta = {
  title: "Stories/Form/Elements/Input",
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
      options: inputTypes,
      control: "select"
    },
    disabled: {
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
