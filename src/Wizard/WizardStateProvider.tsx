import React, { createContext, Dispatch, useReducer } from "react";
import { WizardActions, WizardStateType, reducer, initialState } from "./wizardStateReducer";

const WizardStateContext = createContext<{
  state: WizardStateType;
  dispatch: Dispatch<WizardActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export interface Props {
  children?: React.ReactNode;
}

const WizardStateProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <WizardStateContext.Provider value={{ state, dispatch }}>{children}</WizardStateContext.Provider>;
};

export { WizardStateProvider, WizardStateContext };
