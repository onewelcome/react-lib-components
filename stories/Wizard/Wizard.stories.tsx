import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { Wizard, Props } from "../../src/Wizard/Wizard";
import { WizardSteps } from "../../src/Wizard/WizardSteps/WizardSteps";
import { WizardActions } from "../../src/Wizard/WizardActions/WizardActions";

const meta: Meta = {
  title: "Wizard",
  component: Wizard,
  args: {
    steps: [
      {
        label: "Step 1",
      },
      {
        label: "Step 2",
      },
      {
        label: "Step 3",
        disabled: true,
      },
      {
        label: "Step 4",
      },
      {
        label: "Very long label for step 5",
        disabled: true,
      },
      {
        label: "Last step",
      },
    ],
    initialStepNo: 0,
    mode: "edit",
    stepScreenReaderLabel: "Step",
  },
};

export default meta;

const Template: Story<Props> = (args) => {
  const [step, setStep] = useState(args.initialStepNo);

  const onNext = (stepNo: number) => {
    if (stepNo === 3) {
      return confirm("Does the validation passed?");
    }
    return true;
  };

  const onCancel = () => {
    alert("Cancel clicked");
  };

  const onSaveAndClose = (stepNo: number) => {
    alert("Save clicked");
  };

  return (
    <Wizard {...args} onStepChange={(stepNo: number) => setStep(stepNo)}>
      <div>
        <WizardSteps onStepClick={() => true} />
      </div>
      <div>
        <p>Step {step + 1} content.</p>
      </div>
      <div>
        <WizardActions
          cancelButtonLabel="Cancel"
          previousButtonLabel="Previous"
          nextButtonLabel="Next"
          saveAndCloseButtonLabel="Save & close"
          onNext={onNext}
          onCancel={onCancel}
          onSaveAndClose={onSaveAndClose}
        />
      </div>
    </Wizard>
  );
};

export const WizardStory = Template.bind({});
