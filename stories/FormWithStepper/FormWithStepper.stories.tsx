import { Meta, StoryFn } from "@storybook/react";
import {
  FormStepper,
  FormStepProps,
  Props as FormStepperProps
} from "../../src/components/Layout/FormPage/FormWithStepper/FormStepper/FormStepper";
import {
  FormWithStepper,
  Props
} from "../../src/components/Layout/FormPage/FormWithStepper/FormWithStepper";
import { FormSection } from "../../src";
import FormWithStepperDocumentation from "./FormWithStepper.mdx";
import React, { useState } from "react";
import { FormControlExample } from "../Form/Examples/FormControlExample";
import { StepStatus } from "../../src/components/Stepper/Step";
import { ContentHeader } from "../../src";
import { useContentHeaderCollapse } from "../../src/hooks/useContentHeaderCollapse";

const initialStepperState: FormStepProps[] = [
  {
    status: "current",
    label: "Step 1",
    targetScrollViewId: "samlBaseInfo"
  },
  {
    status: "waiting",
    label: "Step 2",
    targetScrollViewId: "samlConnectionDetail"
  },
  {
    status: "done",
    label: "Step 3",
    targetScrollViewId: "samlFederationRequest"
  },
  {
    status: "error",
    label: "Step 4",
    targetScrollViewId: "samlAttributeMapping"
  }
];

const formStepperProps: FormStepperProps = {
  direction: "vertical",
  textPosition: "bottom",
  steps: initialStepperState
};

const meta: Meta = {
  title: "Components/Layout/FormPage/FormWithStepper",
  component: FormWithStepper,
  parameters: {
    docs: {
      page: FormWithStepperDocumentation
    }
  },
  args: formStepperProps
};

export default meta;

const sampleFormWithStepper = (handleScroll?: any) => {
  const [steps, setSteps] = useState(initialStepperState);

  const updateStepStatus = (index: number, status: StepStatus) => {
    setSteps(prevState => {
      const props = prevState.concat();
      props[index].status = status;
      return props;
    });
  };

  const formStepperState = { ...formStepperProps, steps: steps };

  const formStepperComponent = <FormStepper {...formStepperState}></FormStepper>;

  return (
    <FormWithStepper stepper={formStepperComponent} onScroll={handleScroll}>
      <div>
        <FormSection
          id="samlBaseInfo"
          header="Step 1 Form Section"
          subtext="Form Section sub-header."
        >
          <FormControlExample index={0} updateStepStatus={updateStepStatus}></FormControlExample>
        </FormSection>
        <FormSection
          id="samlConnectionDetail"
          header="Step 2 Form Section"
          subtext="Form Section Subheader"
        >
          <FormControlExample index={1} updateStepStatus={updateStepStatus}></FormControlExample>
        </FormSection>
        <FormSection
          id="samlFederationRequest"
          header="Step 3 Form section"
          subtext="Form Section Subheader"
        >
          <FormControlExample index={2} updateStepStatus={updateStepStatus}></FormControlExample>
        </FormSection>
        <FormSection
          id="samlAttributeMapping"
          header="Step 4 Form section"
          subtext="Form Section Subheader"
        >
          <FormControlExample index={3} updateStepStatus={updateStepStatus}></FormControlExample>
        </FormSection>
      </div>
    </FormWithStepper>
  );
};

const Template: StoryFn<Props> = args => {
  return <>{sampleFormWithStepper(() => {})}</>;
};

const Template1: StoryFn<Props> = args => {
  const { collapsed, handleScroll } = useContentHeaderCollapse(false);
  return (
    <>
      <ContentHeader title="Form Header" collapsed={collapsed}>
        <p>Form Header Description</p>
      </ContentHeader>
      {sampleFormWithStepper(handleScroll)}
    </>
  );
};

export const FormWithStepperComponent = Template.bind({});
export const FormWithStepperAndScrollComponent = Template1.bind({});
