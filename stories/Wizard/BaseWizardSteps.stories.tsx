import React from "react";
import { Meta, Story } from "@storybook/react";
import { BaseWizardSteps, Step, Props } from "../../src/Wizard/BaseWizardSteps/BaseWizardSteps";

const onClick = (stepNo: number, step: Step) => {
  alert("Clicked stepNo:" + stepNo + ", label:" + step.label);
};

const meta: Meta = {
  title: "WizardSteps",
  component: BaseWizardSteps,
  args: {
    steps: [
      {
        label: "Step 1",
        onClick,
      },
      {
        label: "Step 2",
        onClick,
      },
      {
        label: "Step 3",
        onClick,
        disabled: true,
      },
      {
        label: "Step 4",
        onClick,
      },
      {
        label: "Very long label for step 5",
        onClick,
        disabled: true,
      },
      {
        label: "Last step",
        onClick,
      },
    ],
    currentStepNo: 3,
    stepScreenReaderLabel: "Step",
  },
};

export default meta;

const Template: Story<Props> = (args) => <BaseWizardSteps {...args} />;

export const WizardStepsStory = Template.bind({});
