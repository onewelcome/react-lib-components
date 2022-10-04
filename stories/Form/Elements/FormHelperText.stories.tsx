import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  FormHelperText as FormHelperTextComponent,
  Props
} from "../../../src/Form/FormHelperText/FormHelperText";
import FormHelperTextDocumentation from "./FormHelperText.mdx";

const meta: Meta = {
  title: "Stories/Form/Elements/FormHelperText",
  component: FormHelperTextComponent,
  parameters: {
    docs: {
      page: FormHelperTextDocumentation
    }
  }
};

export default meta;

const Template: Story<Props> = args => (
  <FormHelperTextComponent {...args}>content</FormHelperTextComponent>
);

export const FormHelperText = Template.bind({});

FormHelperText.args = {
  error: false
};
