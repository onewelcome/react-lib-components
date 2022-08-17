import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  Props,
  Typography as TypographyComponent,
  validVariants
} from "../../src/Typography/Typography";
import TypographyDocumentation from "./Typography.mdx";

const meta: Meta = {
  title: "Stories/UI/Typography",
  component: TypographyComponent,
  parameters: {
    docs: {
      page: TypographyDocumentation
    }
  },
  argTypes: {
    variant: {
      options: validVariants,
      control: "select"
    }
  }
};

export default meta;

const Template: Story<Props> = args => <TypographyComponent {...args}>content</TypographyComponent>;

export const Typography = Template.bind({});

Typography.args = {
  variant: "h1"
};
