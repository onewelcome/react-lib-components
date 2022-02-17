import { Reducer } from "react";
import { Step } from "./BaseWizardSteps/BaseWizardSteps";
import { WizardMode } from "./Wizard";

const initialState = {
  currentStepNo: 0,
};

type WizardStateType = {
  steps?: Step[];
  currentStepNo?: number;
  mode?: WizardMode;
  stepScreenReaderLabel?: string;
  onCancel?: () => void;
  /** Returning false cause keeping current step no (e.g. in case of validation failed) */
  onNext?: (stepNo: number) => boolean;
  onPrevious?: () => void;
  /** Returning false cause keeping current step no (e.g. in case of validation failed) */
  onSaveAndClose?: (stepNo: number) => void;
};

interface SetWizardStateAction {
  type: "WIZARD_SET_STATE";
  payload: WizardStateType;
}

interface ChangeCurrentStepNoAction {
  type: "WIZARD_CHANGE_CURRENT_STEP_NO";
  payload: number;
}

const setWizardState = (wizardStateProps: WizardStateType): SetWizardStateAction => {
  return { type: "WIZARD_SET_STATE", payload: wizardStateProps };
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
