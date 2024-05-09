import { Meta, Story } from "@storybook/react";
import {
  FormHeader,
  FormHeader as FormHeaderComponent,
  Props
} from "../../../src/components/Form/FormHeader/FormHeader";
import FormHeaderDocumentation from "./FormHeader.mdx";
import React, { Fragment, ReactElement } from "react";
import { Button, ButtonProps, Icon, Icons } from "../../../src";

const formButtonList: ReactElement<ButtonProps, typeof Button>[] = [
  <Button key="1" onClick={() => alert("Cancel button clicked.")} variant="text">
    Cancel
  </Button>,
  <Button key="2" disabled startIcon={<Icon icon={Icons.SaveOutline} />}>
    Save Draft
  </Button>,
  <Button
    key="3"
    onClick={() => alert("Submit button clicked.")}
    startIcon={<Icon icon={Icons.ReplyOutline} />}
  >
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
    formButtonList: formButtonList,
    isCollapsed: false
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
  buttons: [],
  isCollapsed: false
};

const Template: Story<Props> = args => <FormHeader {...args} />;

export const FormHeaderComponent1 = Template.bind({});

export const FormHeaderComponent2 = Template.bind({});

FormHeaderComponent2.args = {
  children: (
    <Fragment>
      Form <i>Description</i>
    </Fragment>
  ),
  buttons: formButtonList.slice(0, 2)
};
