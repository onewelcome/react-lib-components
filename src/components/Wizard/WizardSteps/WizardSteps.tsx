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

import React, { ForwardRefRenderFunction, ComponentPropsWithRef, useContext } from "react";
import { WizardStateContext } from "../WizardStateProvider";
import { BaseWizardSteps } from "../BaseWizardSteps/BaseWizardSteps";
import { changeCurrentStepNo } from "../wizardStateReducer";

export interface Props extends ComponentPropsWithRef<"div"> {
  onStepClick: (currentStepNo: number, selectedStepNo: number) => boolean;
}

const WizardStepsComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { onStepClick, ...rest }: Props,
  ref
) => {
  const {
    state: { currentStepNo, mode, steps },
    dispatch
  } = useContext(WizardStateContext);

  const onClick = (selectedStepNo: number) => {
    onStepClick(currentStepNo, selectedStepNo) && dispatch(changeCurrentStepNo(selectedStepNo));
  };

  return (
    <BaseWizardSteps
      {...rest}
      ref={ref}
      onClick={onClick}
      steps={steps}
      currentStepNo={currentStepNo}
      futureStepsClickable={mode === "edit"}
    />
  );
};

/**
 * @deprecated
 */
export const WizardSteps = React.forwardRef(WizardStepsComponent);
