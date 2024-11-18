import { Meta, StoryFn } from "@storybook/react";
import SpinnerDocumentation from "./Spinner.mdx";
import React from "react";
import { Spinner, SpinnerProps } from "../../src/components/Spinner/Spinner";

const meta: Meta = {
  title: "Components/Feedback/Spinner",
  component: Spinner,
  parameters: {
    docs: {
      page: SpinnerDocumentation
    }
  },
  args: {
    size: undefined,
    borderWidth: undefined
  },
  argTypes: {
    size: {
      type: "number",
      control: false
    }
  }
};

export default meta;

const Template: StoryFn<SpinnerProps> = args => <Spinner {...args} />;

export const SpinnerDefault = Template.bind({});
