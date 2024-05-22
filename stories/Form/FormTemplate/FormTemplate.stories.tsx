import { Meta, Story } from "@storybook/react";
import {
  FormAside,
  FormStepProps,
  Props as FormAsideProps
} from "../../../src/components/Form/FormAside/FormAside";
import {
  FormTemplate,
  FormTemplate as FormTemplateComponent,
  Props
} from "../../../src/components/Form/FormTemplate/FormTemplate";
import { FormHeader } from "../../../src/components/Form/FormHeader/FormHeader";
import FormTemplateDocumentation from "./FormTemplate.mdx";
import React, { ReactElement } from "react";
import { FormSection } from "../../../src/components/Form/FormSection/FormSection";
import { Form } from "../../Form/Form.stories";
import { FormControl } from "../../Form/Elements/FormControl.stories";
import { Fieldset } from "../../Form/Elements/Fieldset.stories";
import { Button, ButtonProps, Icon, Icons } from "../../../src";

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

const formAsideProps: FormAsideProps = {
  direction: "vertical",
  textPosition: "bottom",
  steps: initialStepperState
};

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

const meta: Meta = {
  title: "Components/layout/FormTemplate",
  component: FormTemplateComponent,
  parameters: {
    docs: {
      page: FormTemplateDocumentation
    }
  },
  args: formAsideProps
};

export default meta;

const formAsideComponent = <FormAside {...formAsideProps}></FormAside>;

const Template: Story<Props> = args => (
  <FormTemplate formAside={formAsideComponent} formHeader={formHeaderComponent}>
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
);

export const FormTemplateComponent1 = Template.bind({});
