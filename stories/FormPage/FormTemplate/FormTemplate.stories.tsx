import { Meta, StoryFn } from "@storybook/react";
import {
  FormAside,
  FormStepProps,
  Props as FormAsideProps
} from "../../../src/components/Layout/FormPage/FormAside/FormAside";
import {
  FormTemplate,
  Props
} from "../../../src/components/Layout/FormPage/FormTemplate/FormTemplate";
import { FormHeader } from "../../../src/components/Layout/FormPage/FormHeader/FormHeader";
import FormTemplateDocumentation from "./FormTemplate.mdx";
import React, { ReactElement, useState } from "react";
import { FormSection } from "../../../src/components/Layout/FormPage/FormSection/FormSection";
import { FormControlExample } from "../../Form/Examples/FormControlExample";

import { Button, ButtonProps, Icon, Icons } from "../../../src";
import { StepStatus } from "../../../src/components/Stepper/Step";

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
    status: "waiting",
    label: "Step 3",
    targetScrollViewId: "samlFederationRequest"
  },
  {
    status: "waiting",
    label: "Step 4",
    targetScrollViewId: "samlAttributeMapping"
  }
];

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

const formHeaderComponent = (
  <FormHeader buttons={formButtonList} title="Form Header title">
    Form Header children{" "}
  </FormHeader>
);

const formAsideProps: FormAsideProps = {
  direction: "vertical",
  textPosition: "bottom",
  steps: initialStepperState
};

const meta: Meta = {
  title: "Components/layout/FormPage/FormTemplate",
  component: FormTemplate,
  parameters: {
    docs: {
      page: FormTemplateDocumentation
    }
  },
  args: formAsideProps
};

export default meta;


const Template: StoryFn<Props> = args => {

  const [steps, setSteps] = useState(initialStepperState);

  const updateStepStatus = (index: number, status: StepStatus) => {
    setSteps(prevState => {
      const props = prevState.concat();
      props[index].status = status;
      return props;
    });
  }

  const formAsideState = { ...formAsideProps, steps: steps };

  const formAsideComponent = <FormAside {...formAsideState}></FormAside>;

  return (
    <FormTemplate formAside={formAsideComponent} formHeader={formHeaderComponent}>
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
    </FormTemplate>
  );
};

export const FormTemplateComponent = Template.bind({});
