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

import React from "react";
import { DynamicFormElementProps, DynamicFormElements } from "./DynamicFormElements";
import { DynamicFormField } from "./DynamicForms.interface";
import classes from "./DynamicFormArray.module.scss";

export const DynamicFormArray = ({
  formControls,
  parentFieldId,
  formAlias
}: DynamicFormElementProps) => {
  const { errors, touched, values: arrayItems } = formAlias;

  return (
    <>
      {formControls.map((field: DynamicFormField, index: number) => {
        const key = parentFieldId ? `${parentFieldId}.${field.id}` : field.id;

        return (
          <>
            {Array.isArray(arrayItems) &&
              arrayItems?.map((item: Record<string, string>, index: number) => {
                return (
                  <div key={`${index}${parentFieldId}`}>
                    <DynamicFormElements
                      parentFieldId={`${key}[${index}]`}
                      formControls={field.subAttributes ?? []}
                      formAlias={{
                        ...formAlias,
                        errors: errors?.[index] as Record<string, unknown> | undefined,
                        touched: touched?.[index] as Record<string, unknown> | undefined,
                        values: item
                      }}
                      // index={index}
                    />
                    <hr className={classes.separator}></hr>
                  </div>
                );
              })}
          </>
        );
      })}
    </>
  );
};
