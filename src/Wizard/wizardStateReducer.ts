import { Reducer } from "react";
import { Step } from "./BaseWizardSteps/BaseWizardSteps";
import { WizardMode } from "./Wizard";

const initialState = {
  currentStepNo: 0,
  mode: "add",
  steps: [],
} as WizardStateType;

type WizardStateType = {
  steps: Step[];
  currentStepNo: number;
  mode: WizardMode;
  stepScreenReaderLabel?: string;
};

interface SetWizardStateAction {
  type: "WIZARD_SET_STATE";
  payload: {
    steps: Step[];
    mode: WizardMode;
    stepScreenReaderLabel: string;
  };
}

interface ChangeCurrentStepNoAction {
  type: "WIZARD_CHANGE_CURRENT_STEP_NO";
  payload: number;
}

const setWizardState = (steps: Step[], mode: WizardMode, stepScreenReaderLabel: string): SetWizardStateAction => {
  return { type: "WIZARD_SET_STATE", payload: { steps, mode, stepScreenReaderLabel } };
};

const changeCurrentStepNo = (currentStepNo: number): ChangeCurrentStepNoAction => {
  return { type: "WIZARD_CHANGE_CURRENT_STEP_NO", payload: currentStepNo };
};

type WizardActions = SetWizardStateAction | ChangeCurrentStepNoAction;

const reducer: Reducer<WizardStateType, WizardActions> = (state, action) => {
  switch (action.type) {
    case "WIZARD_SET_STATE":
      return { ...state, ...action.payload };
    case "WIZARD_CHANGE_CURRENT_STEP_NO":
      return { ...state, currentStepNo: action.payload };
    default:
      return state;
  }
};

export { initialState, setWizardState, changeCurrentStepNo, reducer, WizardActions, WizardStateType };
