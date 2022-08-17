import { Reducer } from "react";
import { Step } from "./BaseWizardSteps/BaseWizardSteps";
import { WizardMode } from "./Wizard";

type WizardStateType = {
  steps: Step[];
  currentStepNo: number;
  mode: WizardMode;
  stepScreenReaderLabel: string;
};

interface SetWizardStateAction {
  type: "SET_STATE";
  payload: {
    steps: Step[];
    mode: WizardMode;
    stepScreenReaderLabel: string;
  };
}

interface ChangeCurrentStepNoAction {
  type: "CHANGE_CURRENT_STEP_NO";
  payload: number;
}

const setWizardState = (
  steps: Step[],
  mode: WizardMode,
  stepScreenReaderLabel: string
): SetWizardStateAction => {
  return { type: "SET_STATE", payload: { steps, mode, stepScreenReaderLabel } };
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
