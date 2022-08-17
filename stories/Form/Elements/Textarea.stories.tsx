import React from "react";
import { Meta, Story } from "@storybook/react";
import { Textarea as TextareaComponent, Props } from "../../../src/Form/Textarea/Textarea";
import TextareaDocumentation from "./Textarea.mdx";

const meta: Meta = {
  title: "Stories/Form/Elements/TextArea",
  component: TextareaComponent,
  parameters: {
    docs: {
      page: TextareaDocumentation
    }
  },
  argTypes: {
    value: {
      control: "text"
    },
    disabled: {
      control: "boolean"
    }
  }
};

export default meta;

const Template: Story<Props> = args => <TextareaComponent {...args} />;

export const Textarea = Template.bind({});

Textarea.args = {};
