import { Meta, Story } from "@storybook/react";
import {
  FormHeader,
  FormHeader as FormHeaderComponent,
  Props
} from "../../../src/components/Form/FormHeader/FormHeader";
import FormHeaderDocumentation from "./FormHeader.mdx";
import React, { ReactElement } from "react";
import { Button, ButtonProps, Icon, Icons } from "../../../src";

const getReactNode = (icons: Icons) => {
  return (<Icon icon={icons} />) as React.ReactNode;
};

const formButtonList: ReactElement<ButtonProps, typeof Button>[] = [
  <Button key="1" onClick={() => alert("Cancel button clicked.")} variant="text">
    Cancel
  </Button>,
  <Button key="2" disabled>
    Save Draft
  </Button>,
  <Button key="3" onClick={() => alert("Submit button clicked.")} startIcon={getReactNode(Icons.Circle)}>
    Submit
  </Button>
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
  buttons: []
};

const Template: Story<Props> = args => <FormHeader {...args} />;
export const FormHeaderComponent1 = Template.bind({});

FormHeaderComponent1.args = {
  ...defaultArgs,
  buttons:formButtonList
};

export const FormHeaderComponent2 = Template.bind({});

FormHeaderComponent2.args = {
  ...defaultArgs,
  buttons: formButtonList.slice(0, 2)
};
