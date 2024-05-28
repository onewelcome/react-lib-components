import { Meta, StoryFn } from "@storybook/react";
import { FormAside, FormStepProps, Props } from "../../../src/components/Form/FormAside/FormAside";
import FormAsideDocumentation from "./FormAside.mdx";
import React from "react";

const initialStepperState: FormStepProps[] = [
  {
    status: "done",
    label: "Step 1",
    targetScrollView: "samlBaseInfo"
  },
  {
    status: "error",
    label: "Step 2",
    targetScrollView: "samlConnectionDetail"
  },
  {
    status: "current",
    label: "Step 3",
    targetScrollView: "samlFederationRequest"
  },
  {
    status: "waiting",
    label: "Step 4",
    targetScrollView: "samlAttributeMapping"
  }
];

const formAsideProps: Props = {
  direction: "vertical",
  textPosition: "bottom",
  steps: initialStepperState
};

const meta: Meta = {
  title: "Components/layout/FormAside",
  component: FormAside,
  parameters: {
    docs: {
      page: FormAsideDocumentation
    }
  },
  args: formAsideProps
};

export default meta;

// const formAsideComponent = <FormAside {...formAsideProps}></FormAside>;

const Template: StoryFn<Props> = () => (
  <FormAside {...formAsideProps}></FormAside>
);

export const FormAsideComponent = Template.bind({});
