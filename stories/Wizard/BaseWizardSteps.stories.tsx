import React from "react";
import { Meta, Story } from "@storybook/react";
import { BaseWizardSteps, Props } from "../../src/Wizard/BaseWizardSteps/BaseWizardSteps";

const onClick = (stepNo: number) => {
  alert("Clicked stepNo:" + stepNo);
};

const meta: Meta = {
  title: "Stories/Form/Wizard/WizardSteps",
  component: BaseWizardSteps,
  args: {
    steps: [
      {
        label: "Step 1"
      },
      {
        label: "Step 2"
      },
      {
        label: "Step 3",
        disabled: true
      },
      {
        label: "Step 4"
      },
      {
        label: "Very long label for step 5",
        disabled: true
      },
      {
        label: "Last step"
      }
    ],
    currentStepNo: 3,
    stepScreenReaderLabel: "Step",
    onClick
  }
};

export default meta;

const Template: Story<Props> = args => <BaseWizardSteps {...args} />;

export const WizardSteps = Template.bind({});
WizardSteps.storyName = "WizardSteps";
