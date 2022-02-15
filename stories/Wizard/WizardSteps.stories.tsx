import React from "react";
import { Meta, Story } from "@storybook/react";
import { WizardSteps, Step, Props } from "../../src/Wizard/WizardSteps/WizardSteps";

const onClick = (step: Step) => {
  alert("Clicked " + step.label);
  return true;
};

const meta: Meta = {
  title: "WizardSteps",
  component: WizardSteps,
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

const Template: Story<Props> = (args) => <WizardSteps {...args} />;

export const WizardStepsStory = Template.bind({});
