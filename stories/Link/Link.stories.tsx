import React from "react";
import { Meta, Story } from "@storybook/react";
import { Link as LinkComponent, Props } from "../../src/Link/Link";
import LinkDocumentation from "./Link.mdx";

const meta: Meta = {
  title: "components/Navigation/Link",
  component: LinkComponent,
  parameters: {
    docs: {
      page: LinkDocumentation
    }
  },
  argTypes: {
    buttonVariant: { control: "radio", if: { arg: "display", eq: "button" } }
  },
  args: {
    to: "https://www.google.com",
    type: "external",
    color: "primary",
    display: "link",
    buttonVariant: "fill"
  }
};

export default meta;

const Template: Story<Props> = args => <LinkComponent {...args}>content</LinkComponent>;

export const Link = Template.bind({});
