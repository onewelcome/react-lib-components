import { Meta, StoryFn } from "@storybook/react";
import {
  FormAside,
  FormStepProps,
  Props
} from "../../../src/components/Layout/FormPage/FormAside/FormAside";
import FormAsideDocumentation from "./FormAside.mdx";
import React from "react";
import { FormSection } from "../../../src/components/Layout/FormPage/FormSection/FormSection";
import { FormTemplate } from "../../../src/components/Layout/FormPage/FormTemplate/FormTemplate";
import { FormControlExample } from "../../Form/Examples/FormControlExample";

const initialStepperState: FormStepProps[] = [
  {
    status: "done",
    label: "Step 1",
    targetScrollViewId: "samlBaseInfo"
  },
  {
    status: "error",
    label: "Step 2",
    targetScrollViewId: "samlConnectionDetail"
  },
  {
    status: "current",
    label: "Step 3",
    targetScrollViewId: "samlFederationRequest"
  },
  {
    status: "waiting",
    label: "Step 4",
    targetScrollViewId: "samlAttributeMapping"
  }
];

const formAsideProps: Props = {
  direction: "vertical",
  textPosition: "bottom",
  steps: initialStepperState
};

const meta: Meta = {
  title: "Components/layout/FormPage/FormAside",
  component: FormAside,
  parameters: {
    docs: {
      page: FormAsideDocumentation
    }
  },
  args: formAsideProps
};

export default meta;

const formAsideComponent = <FormAside {...formAsideProps}></FormAside>;

const Template: StoryFn<Props> = args => (
  <>
    <FormTemplate formAside={formAsideComponent}>
      <div>
        <FormSection
          id="samlBaseInfo"
          header="Step 1 Form Section"
          subtext="Form Section sub-header."
        >
          <FormControlExample></FormControlExample>
        </FormSection>
        <FormSection
          id="samlConnectionDetail"
          header="Step 2 Form Section"
          subtext="Form Section Subheader"
        >
          <FormControlExample></FormControlExample>
        </FormSection>
        <FormSection
          id="samlFederationRequest"
          header="Step 3 Form section"
          subtext="Form Section Subheader"
        >
          <FormControlExample></FormControlExample>
        </FormSection>
        <FormSection
          id="samlAttributeMapping"
          header="Step 4 Form section"
          subtext="Form Section Subheader"
        >
          <FormControlExample></FormControlExample>
        </FormSection>
      </div>
    </FormTemplate>
  </>
);

export const FormAsideComponent = Template.bind({});
