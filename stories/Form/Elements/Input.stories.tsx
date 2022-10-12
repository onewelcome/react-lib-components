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
