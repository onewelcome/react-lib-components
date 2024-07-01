import { Meta, StoryFn } from "@storybook/react";
import {
  ContentHeader as ContentHeaderComponent,
  Props
} from "../../src/components/Layout/ContentHeader/ContentHeader";
import ContentHeaderDocumentation from "./ContentHeader.mdx";
import React, { Fragment, ReactElement, useState } from "react";
import { Button, ButtonProps, Icon, Icons } from "../../src";

import {
  FormStepper,
  FormStepProps,
  Props as FormStepperProps
} from "../../src/components/Layout/FormPage/FormWithStepper/FormStepper/FormStepper";
import {
  FormWithStepper,
  Props as FormWithStepperProps
} from "../../src/components/Layout/FormPage/FormWithStepper/FormWithStepper";
import { FormSection } from "../../src";
import { FormControlExample } from "../Form/Examples/FormControlExample";
import { StepStatus } from "../../src/components/Stepper/Step";
import { useFullHeightCollapse } from "../../src/hooks/useFullHeightCollapse";

const contentButtonList: ReactElement<ButtonProps, typeof Button>[] = [
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
  title: "Components/Layout/ContentHeader",
  component: ContentHeaderComponent,
  parameters: {
    docs: {
      page: ContentHeaderDocumentation
    }
  },
  args: {
    title: "Content Header Text",
    children: "Content Description",
    buttons: contentButtonList,
    collapsed: false
  },
  argTypes: {
    children: {
      control: false
    }
  }
};

export default meta;

const Template: StoryFn<Props> = args => <ContentHeaderComponent {...args} />;

export const ContentHeader = Template.bind({});

export const ContentHeaderWithSubtitle = Template.bind({});

ContentHeaderWithSubtitle.args = {
  children: (
    <Fragment>
      Content <i>Description</i>
    </Fragment>
  ),
  subtitle: "Explore Stories, One Page at a Time",
  buttons: contentButtonList.slice(0, 2)
};

//--- ContentHeader Collapse Example ----//

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

const Template1: StoryFn<FormWithStepperProps> = args => {
  
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
  const { collapsed, handleScroll } = useFullHeightCollapse(false);
  return (
    <>
    <ContentHeader title="Form Header" collapsed={collapsed}>
    <p>Form Header Description</p>
  </ContentHeader>
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
    </>
  );
};

export const ContentHeaderWithCollapseHeader = Template1.bind({});

ContentHeaderWithCollapseHeader.args = {
  children: (
    <p>Form Header Description</p>
  ),
  buttons: [],
  collapsed: false
};