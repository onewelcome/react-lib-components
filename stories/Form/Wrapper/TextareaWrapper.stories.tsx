import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import {
  TextareaWrapper as TextareaWrapperComponent,
  Props
} from "../../../src/Form/Wrapper/TextareaWrapper/TextareaWrapper";
import TextareaWrapperDocumentation from "./TextareaWrapper.mdx";

const meta: Meta = {
  title: "components/Inputs/Textarea (Wrapper)",
  component: TextareaWrapperComponent,
  parameters: {
    docs: {
      page: TextareaWrapperDocumentation
    }
  },
  argTypes: {
    required: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  }
};

export default meta;

const Template: Story<Props> = args => <TextareaWrapperComponent {...args} />;
export const TextareaWrapper = Template.bind({});

TextareaWrapper.args = {
  error: false,
  value: "Example value",
  onChange: () => {},
  label: "Example textarea",
  name: "Textarea",
  helperText: "Example textarea helpertext"
};
