import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, Props } from "../../src/Button/Button";
import { Icon, Icons } from "../../src/Icon/Icon";
import ButtonsDocumentation from "./Button.mdx";

const meta: Meta = {
  title: "Stories/UI/Button",
  component: Button,
  parameters: {
    docs: {
      page: ButtonsDocumentation
    }
  },
  argTypes: {
    startIcon: {
      options: Icons,
      control: {
        type: "select"
      }
    },
    endIcon: {
      options: Icons,
      control: {
        type: "select"
      }
    }
  }
};

export default meta;

const Template: Story<Props> = args => {
  return (
    <Button
      {...args}
      title="This is a button"
      startIcon={args?.startIcon && <Icon icon={args?.startIcon as Icons} />}
      endIcon={args?.endIcon && <Icon icon={args?.endIcon as Icons} />}
    >
      This is a button
    </Button>
  );
};

export const FilledButton = Template.bind({});

FilledButton.args = {
  color: "primary",
  variant: "fill",
  type: "button"
};

export const OutlineButton = Template.bind({});

OutlineButton.args = {
  color: "primary",
  variant: "outline",
  type: "button"
};

export const TextButton = Template.bind({});

TextButton.args = {
  color: "primary",
  variant: "text",
  type: "button"
};

export const StartIconButton = Template.bind({});
export const EndIconButton = Template.bind({});

StartIconButton.args = {
  startIcon: <Icon icon={Icons.Calendar} />,
  color: "primary",
  variant: "fill",
  type: "button"
};

EndIconButton.args = {
  endIcon: <Icon icon={Icons.Calendar} />,
  color: "primary",
  variant: "fill",
  type: "button"
};

export const DisabledButton = Template.bind({});

DisabledButton.args = {
  disabled: true
};
