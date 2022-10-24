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

import React, { Fragment, useContext, useEffect } from "react";
import { Step } from "./BaseWizardSteps/BaseWizardSteps";
import { WizardStateContext, WizardStateProvider } from "./WizardStateProvider";
import { setWizardState } from "./wizardStateReducer";

export type WizardMode = "add" | "edit";

export interface Props {
  steps: Step[];
  mode: WizardMode;
  initialStepNo?: number;
  onStepChange: (stepNo: number) => void;
  children: React.ReactNode;
}

const useSetWizardState = (steps: Step[], mode: WizardMode) => {
  const { dispatch } = useContext(WizardStateContext);

  useEffect(() => {
    dispatch(setWizardState(steps, mode));
  }, [steps, mode]);
};

const useStepChanging = (onStepChange: (stepNo: number) => void) => {
  const {
    state: { currentStepNo }
  } = useContext(WizardStateContext);

  useEffect(() => {
    onStepChange(currentStepNo);
  }, [currentStepNo]);
};

const WizardContent = ({ steps, mode, onStepChange, children }: Props) => {
  useSetWizardState(steps, mode);
  useStepChanging(onStepChange);

  return <Fragment>{children}</Fragment>;
};

export const Wizard = (props: Props) => {
  const { steps, initialStepNo: currentStepNo = 0, mode } = props;
  return (
    <WizardStateProvider initialState={{ steps, currentStepNo, mode }}>
      <WizardContent {...props} />
    </WizardStateProvider>
  );
};
