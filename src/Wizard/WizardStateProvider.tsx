import React, { createContext, Dispatch, useReducer } from "react";
import { WizardActions, WizardStateType, reducer } from "./wizardStateReducer";

const WizardStateContext = createContext<{
  state: WizardStateType;
  dispatch: Dispatch<WizardActions>;
}>({
  state: {} as WizardStateType,
  dispatch: () => null
});

export interface Props {
  initialState: WizardStateType;
  children?: React.ReactNode;
}

const WizardStateProvider = ({ children, initialState }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <WizardStateContext.Provider value={{ state, dispatch }}>
      {children}
    </WizardStateContext.Provider>
  );
};

export { WizardStateProvider, WizardStateContext };
