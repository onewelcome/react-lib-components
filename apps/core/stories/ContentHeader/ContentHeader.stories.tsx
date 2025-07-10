import { Meta, StoryFn } from "@storybook/react";
import {
  ContentHeader as ContentHeaderComponent,
  Props
} from "../../src/components/Layout/ContentHeader/ContentHeader";
import ContentHeaderDocumentation from "./ContentHeader.mdx";
import React, { Fragment, ReactElement, useState } from "react";
import {
  Button,
  ButtonProps,
  FormSection,
  Icon,
  Icons,
  Tag,
  useFullHeightCollapse
} from "../../src";

import {
  FormStepper,
  FormStepProps,
  Props as FormStepperProps
} from "../../src/components/Layout/FormPage/FormWithStepper/FormStepper/FormStepper";
import {
  FormWithStepper,
  Props as FormWithStepperProps
} from "../../src/components/Layout/FormPage/FormWithStepper/FormWithStepper";
import { FormControlExample } from "../Form/Examples/FormControlExample";
import { StepStatus } from "../../src/components/Stepper/Step";
import { conditionalPlay } from "../../.storybook/conditionalPlay";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { BrowserRouter, useNavigate } from "react-router-dom";

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
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ],
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

const Template: StoryFn<Props> = args => {
  const navigate = useNavigate();
  return <ContentHeaderComponent navigation={{ navigateFN: navigate }} {...args} />;
};

export const ContentHeader = Template.bind({});

ContentHeader.args = {
  navigation: undefined
};

export const ContentHeaderWithTags = Template.bind({});

ContentHeaderWithTags.args = {
  children: (
    <Fragment>
      Content <i>Description</i>
    </Fragment>
  ),
  buttons: contentButtonList.slice(0, 2),
  tags: [<Tag variant="enabled">Active</Tag>, <Tag variant="disabled">Default</Tag>]
};

export const ContentHeaderWithError = Template.bind({});

ContentHeaderWithError.args = {
  children: (
    <Fragment>
      Content <i>Description</i>
    </Fragment>
  ),
  buttons: contentButtonList.slice(0, 2),
  tags: [<Tag variant="enabled">Active</Tag>, <Tag variant="disabled">Default</Tag>],
  error: true,
  errorMessage: "Error message"
};

export const CollapsedContentHeaderWithError = Template.bind({});

CollapsedContentHeaderWithError.args = {
  children: (
    <Fragment>
      Content <i>Description</i>
    </Fragment>
  ),
  buttons: contentButtonList.slice(0, 2),
  tags: [<Tag variant="enabled">Active</Tag>, <Tag variant="disabled">Default</Tag>],
  error: true,
  errorMessage: "Error message",
  collapsed: true
};

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

const FormWithStepperTemplate: StoryFn<FormWithStepperProps> = args => {
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

export const ContentHeaderWithCollapseHeader = FormWithStepperTemplate.bind({});

ContentHeaderWithCollapseHeader.play = conditionalPlay(async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() => expect(canvas.getByText("Step 4")).toBeInTheDocument());

  const select = await canvas.getByText("Step 4");

  await userEvent.click(select);
});
