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
import { Wizard, Props } from "../../src/components/Wizard/Wizard";
import { WizardSteps } from "../../src/components/Wizard/WizardSteps/WizardSteps";
import { WizardActions } from "../../src/components/Wizard/WizardActions/WizardActions";
import { Button } from "../../src/components/Button/Button";

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

export default meta;

const Template = args => {
  const [step, setStep] = useState(args.initialStepNo);

  const onNext = (stepNo: number) => {
    if (stepNo === 3) {
      return window.confirm("Does the validation passed?");
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
        <p>Step {step! + 1} content.</p>
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

export const BasicWizard = Template.bind({});

const WizardModalTemplate = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [exampleInput, setExampleInput] = useState("");
  const [exampleInputError, setExampleInputError] = useState(false);
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

  const onNext = (stepNo: number) => {
    if (stepNo === 1) {
      if (exampleInput.length === 0) {
        setExampleInputError(true);
        return false;
      }
      setExampleInputError(false);
    }
    return true;
  };

  const onSaveAndClose = (stepNo: number) => {
    alert("Wizard saved!");
    onClose();
  };

  const onClose = () => setOpen(false);
  const modalId = "modal-with-wizard";
  return (
    <Fragment>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal id={modalId} open={open} onClose={onClose}>
        <Wizard steps={steps} mode="add" onStepChange={(stepNo: number) => setStep(stepNo)}>
          <ModalHeader id={`${modalId}-label`} title="Example modal with wizard" onClose={onClose}>
            <WizardSteps style={{ paddingBottom: 0 }} onStepClick={() => true} />
          </ModalHeader>
          <ModalContent id={`${modalId}-description`}>
            <form id="modalForm">
              <p style={{ margin: 0, paddingInline: 20 }}>
                This modal shows various options of form controls. It is not meant to be a realistic
                example of any of our forms.
                <br /> Clicking Save, Cancel or Close may bring you to a different screen than you
                came from.
              </p>
              {step === 0 && (
                <Fragment>
                  <input
                    id="checkbox"
                    type="checkbox"
                    style={{
                      paddingBlock: 10,
                      marginTop: 20
                    }}
                    checked={checkboxChecked}
                    onChange={onCheckboxChange}
                  ></input>
                  <label htmlFor="checkbox">
                    Checking this checkbox affects the activity of step 2
                  </label>
                </Fragment>
              )}
              {step === 1 && (
                <Fragment>
                  <input
                    style={{
                      paddingBlock: 10,
                      marginTop: 20,
                      width: "100%",
                      boxSizing: "border-box"
                    }}
                    value={exampleInput}
                    onChange={event => setExampleInput(event.target.value)}
                  ></input>
                  <p
                    style={{
                      margin: 0,
                      paddingTop: 5,
                      paddingInline: 20,
                      fontSize: 11
                    }}
                  >
                    {exampleInputError ? (
                      <span style={{ color: "var(--error)" }}>This field is required</span>
                    ) : (
                      "Helper text for this text field. Description should be short and not repeat the label."
                    )}
                  </p>
                </Fragment>
              )}
              {step === 2 && (
                <Fragment>
                  <input
                    style={{
                      paddingBlock: 10,
                      marginTop: 20,
                      width: "100%",
                      boxSizing: "border-box"
                    }}
                  ></input>
                  <p
                    style={{
                      margin: 0,
                      paddingTop: 5,
                      paddingInline: 20,
                      fontSize: 11
                    }}
                  >
                    Helper text for this text field. Description should be short and not repeat the
                    label.
                  </p>
                </Fragment>
              )}
            </form>
          </ModalContent>
          <ModalActions>
            <WizardActions
              cancelButtonLabel="Cancel"
              previousButtonLabel="Previous"
              nextButtonLabel="Next"
              saveAndCloseButtonLabel="Save & close"
              onNext={onNext}
              onCancel={onClose}
              onSaveAndClose={onSaveAndClose}
            />
          </ModalActions>
        </Wizard>
      </Modal>
    </Fragment>
  );
};

export const WizardInModal = WizardModalTemplate.bind({});
WizardInModal.parameters = {
  controls: { hideNoControlsWarning: true }
};
