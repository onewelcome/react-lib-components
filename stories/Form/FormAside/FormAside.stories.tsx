import { Meta, StoryFn } from "@storybook/react";
import { FormAside, FormStepProps, Props } from "../../../src/components/Form/FormAside/FormAside";
import FormAsideDocumentation from "./FormAside.mdx";
import React from "react";
import { FormSection } from "../../../src/components/Form/FormSection/FormSection";
import { FormTemplate } from "../../../src/components/Form/FormTemplate/FormTemplate";
import { FormControlExample } from "../Examples/FormChildren.example.stories";

const initialStepperState: FormStepProps[] = [
  {
    status: "done",
    label: "Step 1",
    targetscrollviewid: "samlBaseInfo"
  },
  {
    status: "error",
    label: "Step 2",
    targetscrollviewid: "samlConnectionDetail"
  },
  {
    status: "current",
    label: "Step 3",
    targetscrollviewid: "samlFederationRequest"
  },
  {
    status: "waiting",
    label: "Step 4",
    targetscrollviewid: "samlAttributeMapping"
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
