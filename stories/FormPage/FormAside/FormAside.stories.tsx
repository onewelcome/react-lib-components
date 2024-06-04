import { Meta, StoryFn } from "@storybook/react";
import {
  FormStepper,
  FormStepProps,
  Props
} from "../../../src/components/Layout/FormPage/FormWithStepper/FormStepper/FormStepper";
import FormAsideDocumentation from "./FormAside.mdx";
import React from "react";
import { FormSection } from "../../../src/components/Layout/FormPage/FormWithStepper/FormSection/FormSection";
import { FormWithStepper } from "../../../src/components/Layout/FormPage/FormWithStepper/FormWithStepper";
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
  component: FormStepper,
  parameters: {
    docs: {
      page: FormAsideDocumentation
    }
  },
  args: formAsideProps
};

export default meta;

const formAsideComponent = <FormStepper {...formAsideProps}></FormStepper>;

const Template: StoryFn<Props> = args => (
  <>
    <FormWithStepper formAside={formAsideComponent}>
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
    </FormWithStepper>
  </>
);

export const FormAsideComponent = Template.bind({});
