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

import React, { HTMLAttributes, ReactElement } from "react";
import { Props as FormAsideProps, FormStepper } from "./FormStepper/FormStepper";
import classes from "./FormWithStepper.module.scss";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  stepper?: ReactElement<FormAsideProps, typeof FormStepper>;
}

export const FormWithStepper = ({ children, stepper, ...rest }: Props) => {
  return (
    <div className={`${classes["wrapper"]} ${rest.className}`} {...rest}>
      <div className={classes["content"]}>
        {stepper}
        <div className={classes["form-section"]}>{children}</div>
      </div>
    </div>
  );
};
