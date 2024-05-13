/*
 * Copyright 2022 OneWelcome B.V.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import React, { Fragment, useState } from "react";
import { Meta } from "@storybook/react";
import { Button, Checkbox, InputWrapper, Typography, Wizard, WizardSteps } from "../../src";
import {
  Props as WizardActionsProps,
  WizardActions
} from "../../src/components/Wizard/WizardActions/WizardActions";
import { Step } from "../../src/components/Wizard/BaseWizardSteps/BaseWizardSteps";
import WizardDocumentation from "./Wizard.mdx";
import { Modal } from "../../src/components/Notifications/Modal/Modal";
import { ModalContent } from "../../src/components/Notifications/Modal/ModalContent/ModalContent";
import { ModalActions } from "../../src/components/Notifications/Modal/ModalActions/ModalActions";
import { ModalHeader } from "../../src/components/Notifications/Modal/ModalHeader/ModalHeader";

const meta: Meta = {
  title: "components/Layout/Wizard/Wizard",
  component: Wizard,
  parameters: {
    docs: {
      page: WizardDocumentation
    }
  },
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
    initialStepNo: 1,
    mode: "add"
  }
};

const onNext = (stepNo: number) => {
  if (stepNo === 3) {
    return window.confirm("Does the validation passed?");
  }
  return true;
};

const onSaveAndClose = () => {
  alert("Save clicked");
};

const wizardActionsProps: WizardActionsProps = {
  actions: {
    previous: {
      label: "Previous",
      onClick: () => true
    },
    next: {
      label: "Next",
      onClick: onNext
    },
    saveAndClose: {
      label: "Save & close",
      onClick: onSaveAndClose
    }
  }
};

export default meta;

const Template = args => {
  const [step, setStep] = useState(args.initialStepNo);

  return (
    <Wizard {...args} onStepChange={(stepNo: number) => setStep(stepNo)}>
      <div>
        <WizardSteps onStepClick={() => true} />
      </div>
      <div>
        <p>Step {step! + 1} content.</p>
      </div>
      <div>
        <WizardActions {...wizardActionsProps} />
      </div>
    </Wizard>
  );
};

export const BasicWizard = Template.bind({});

const WizardModalTemplate = () => {
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState(0);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [exampleInput, setExampleInput] = useState("");
  const [exampleInput2, setExampleInput2] = useState("");
  const [steps, setSteps] = useState([
    {
      label: "Step 1"
    },
    {
      label: "Step 2"
    },
    {
      label: "Step 3"
    }
  ] as Step[]);

  const onCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
    const newSteps = [...steps];
    newSteps[1] = { ...newSteps[1], disabled: !checkboxChecked };
    setSteps(newSteps);
  };

  const onClose = () => setOpen(false);
  const modalId = "modal-with-wizard";
  return (
    <Fragment>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Wizard steps={steps} mode="add" onStepChange={(stepNo: number) => setStep(stepNo)}>
        <Modal id={modalId} open={open} onClose={onClose}>
          <ModalHeader id={`${modalId}-label`} title="Example modal with wizard">
            <WizardSteps style={{ paddingBottom: 0 }} onStepClick={() => true} />
          </ModalHeader>
          <ModalContent id={`${modalId}-description`}>
            <form id="modalForm">
              <Typography variant="body">
                This modal shows various options of form controls. It is not meant to be a realistic
                example of any of our forms.
                <br /> Clicking Save, Cancel or Close may bring you to a different screen than you
                came from.
              </Typography>
              {step === 0 && (
                <Fragment>
                  <Checkbox
                    id="checkbox"
                    name="checkbox"
                    type="checkbox"
                    checked={checkboxChecked}
                    onChange={onCheckboxChange}
                  >
                    Checking this checkbox affects the activity of step 2
                  </Checkbox>
                </Fragment>
              )}
              {step === 1 && (
                <InputWrapper
                  label="Some input"
                  helperText="Helper text for this text field. Description should be short and not repeat the
            label."
                  name="first-name"
                  value={exampleInput}
                  onChange={event => setExampleInput(event.target.value)}
                  type="text"
                />
              )}
              {step === 2 && (
                <InputWrapper
                  label="Some 2 input"
                  helperText="Helper text for this text field. Description should be short and not repeat the
            label."
                  name="first-name"
                  value={exampleInput2}
                  onChange={event => setExampleInput2(event.target.value)}
                  type="text"
                />
              )}
            </form>
          </ModalContent>
          <ModalActions cancelAction={{ label: "Cancel" }}>
            <WizardActions actions={{ ...wizardActionsProps.actions }} />
          </ModalActions>
        </Modal>
      </Wizard>
    </Fragment>
  );
};

export const WizardInModal = WizardModalTemplate.bind({});

WizardInModal.parameters = {
  controls: { hideNoControlsWarning: true }
};
