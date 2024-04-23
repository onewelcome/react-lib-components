import { Meta, Story } from "@storybook/react";
import {
  FormHeader,
  FormHeader as FormHeaderComponent,
  Props
} from "../../../src/components/Form/FormHeader/FormHeader";
import FormHeaderDocumentation from "./FormHeader.mdx";
import React from "react";
import { ButtonProps, Icon, Icons } from "../../../src";

const getReactNode = (icons: Icons) => {
  return (<Icon icon={icons} />) as React.ReactNode;
};

const formButtonList: Array<ButtonProps> = [
  {
    title: "Cancel",
    onClick: () => {
      alert("Cancel button is clicked.");
    },
    variant: "text"
  },
  {
    title: "Save Draft",
    disabled: true
  },
  {
    title: "Submit",
    type: "submit",
    startIcon: getReactNode(Icons.ReplyOutline),
    onClick: () => {
      alert("Submit button clicked.");
    }
  }
];

const meta: Meta = {
  title: "Components/layout/FormHeader",
  component: FormHeaderComponent,
  parameters: {
    docs: {
      page: FormHeaderDocumentation
    }
  },
  args: {
    title: "Form Header Text",
    children: (
      <p>
        Form <i>Description</i>
      </p>
    ),
    formButtonList: formButtonList
  }
};

export default meta;

const defaultArgs: Props = {
  title: "Form Header Text",
  children: (
    <p>
      Form <i>Description</i>
    </p>
  ),
  formButtonList: formButtonList
};

const Template: Story<Props> = args => <FormHeader {...args} />;
export const FormHeaderComponent1 = Template.bind({});

FormHeaderComponent1.args = {
  ...defaultArgs
};

export const FormHeaderComponent2 = Template.bind({});

FormHeaderComponent2.args = {
  ...defaultArgs,
  formButtonList: formButtonList.slice(0, 2)
};
