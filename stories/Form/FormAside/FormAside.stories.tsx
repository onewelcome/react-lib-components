import { Meta, Story } from "@storybook/react";
import {
  FormAside,
  FormAside as FormAsideComponent,
  FormStepProps,
  Props
} from "../../../src/components/Form/FormAside/FormAside";
import FormAsideDocumentation from "./FormAside.mdx";
import React from "react";
import { FormSection } from "../../../src/components/Form/FormSection/FormSection";
import { FormTemplate } from "../../../src/components/Form/FormTemplate/FormTemplate";
import { Form } from "../../Form/Form.stories";
import { FormControl } from "../../Form/Elements/FormControl.stories";
import { Fieldset } from "../../Form/Elements/Fieldset.stories";

const initialStepperState: FormStepProps[] = [
  {
    status: "done",
    label: "Step 1",
    targetScrollViewId: "samlBaseInfo"
  },
  {
    status: "done",
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
  title: "Components/layout/FormAside",
  component: FormAsideComponent,
  parameters: {
    docs: {
      page: FormAsideDocumentation
    }
  },
  args: formAsideProps
};

export default meta;

const formAsideComponent = <FormAside {...formAsideProps}></FormAside>;

const Template: Story<Props> = args => (
  <>
    <FormTemplate formAside={formAsideComponent}>
      <div>
        <FormSection
          id="samlBaseInfo"
          header="Step 1 Form Section"
          subtext="Form Section sub-header."
        >
          <Form></Form>
        </FormSection>
        <FormSection
          id="samlConnectionDetail"
          header="Step 2 Form Section"
          subtext="Form Section Subheader"
        >
          <FormControl></FormControl>
        </FormSection>
        <FormSection
          id="samlFederationRequest"
          header="Step 3 Form section"
          subtext="Form Section Subheader"
        >
          <Form></Form>
        </FormSection>
        <FormSection
          id="samlAttributeMapping"
          header="Step 4 Form section"
          subtext="Form Section Subheader"
        >
          <Fieldset></Fieldset>
        </FormSection>
      </div>
    </FormTemplate>
  </>
);

export const FormAsideComponent1 = Template.bind({});
