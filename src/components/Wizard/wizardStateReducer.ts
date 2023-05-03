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

import { Reducer } from "react";
import { Step } from "./BaseWizardSteps/BaseWizardSteps";
import { WizardMode } from "./Wizard";

type WizardStateType = {
  steps: Step[];
  currentStepNo: number;
  mode: WizardMode;
};

interface SetWizardStateAction {
  type: "SET_STATE";
  payload: {
    steps: Step[];
    mode: WizardMode;
  };
}

interface ChangeCurrentStepNoAction {
  type: "CHANGE_CURRENT_STEP_NO";
  payload: number;
}

const setWizardState = (steps: Step[], mode: WizardMode): SetWizardStateAction => {
  return { type: "SET_STATE", payload: { steps, mode } };
};

const changeCurrentStepNo = (currentStepNo: number): ChangeCurrentStepNoAction => {
  return { type: "CHANGE_CURRENT_STEP_NO", payload: currentStepNo };
};

type WizardActions = SetWizardStateAction | ChangeCurrentStepNoAction;

const reducer: Reducer<WizardStateType, WizardActions> = (state, action) => {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, ...action.payload };
    case "CHANGE_CURRENT_STEP_NO":
      return { ...state, currentStepNo: action.payload };
    default:
      return state;
  }
};

export { setWizardState, changeCurrentStepNo, reducer, WizardActions, WizardStateType };
