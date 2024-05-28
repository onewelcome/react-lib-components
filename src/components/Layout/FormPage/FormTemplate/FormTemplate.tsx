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
import { Props as FormAsideProps, FormAside } from "../FormAside/FormAside";
import classes from "./FormTemplate.module.scss";
import { FormHeader, Props as FormHeaderProps } from "../../../Form/FormHeader/FormHeader";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  formHeader?: ReactElement<FormHeaderProps, typeof FormHeader>;
  formAside?: ReactElement<FormAsideProps, typeof FormAside>;
}

export const FormTemplate = ({ children, formAside, formHeader, ...rest }: Props) => {
  return (
    <div className={`${classes["wrapper"]} ${rest.className}`} {...rest}>
      {formHeader}
      <div className={classes["content"]}>
        {formAside}
        <div className={classes["form-section"]}>{children}</div>
      </div>
    </div>
  );
};
