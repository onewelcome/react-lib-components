import React from "react";
import { Meta, Story } from "@storybook/react";
import { IconButton as IconButtonComponent, Props } from "../../src/Button/IconButton";
import { Icon, Icons } from "../../src/Icon/Icon";
import IconButtonDocumentation from "./IconButton.mdx";

const meta: Meta = {
  title: "components/Inputs/IconButton",
  component: IconButtonComponent,
  parameters: {
    docs: {
      page: IconButtonDocumentation
    }
  },
  argTypes: {
    color: {
      options: ["default", "primary", "secondary", "tertiary"],
      control: {
        type: "radio"
      }
    },
    variant: {
      options: ["text", "fill", "outline"],
      control: {
        type: "radio"
      }
    }
  }
};

export default meta;

const Template: Story<Props> = args => (
  <IconButtonComponent {...args}>
    <Icon icon={Icons.Calendar} />
  </IconButtonComponent>
);

export const IconButton = Template.bind({});

IconButton.args = {
  color: "primary",
  variant: "text",
  iconSize: "m",
  type: "button",
  title: "components/Calendar"
};
IconButton.storyName = "IconButton";
