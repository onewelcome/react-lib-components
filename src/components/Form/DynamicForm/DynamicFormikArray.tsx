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

/* tslint:disable:no-any */
import { FieldArray } from "formik";
import React from "react";
import { DynamicForm, Props } from "./DynamicForm";
import { Field } from "./DynamicForms.interface";
import classes from "./DynamicFormikArray.module.scss";

export const DynamicFormikArray = ({ formControls, parentFieldId, formikAlias }: Props) => {
  const { errors, touched, values } = formikAlias;
  return (
    <>
      {formControls.map((field: Field, ind: number) => {
        const key = parentFieldId ? `${parentFieldId}.${field.id}` : field.id;
        return (
          <FieldArray name={key} key={key}>
            {() => (
              <>
                {Array.isArray(values) &&
                  values?.map((f: any, index: number) => {
                    return (
                      <div key={`${index}${parentFieldId}`}>
                        <DynamicForm
                          parentFieldId={`${key}[${index}]`}
                          formControls={field.subAttributes ?? []}
                          formikAlias={{
                            ...formikAlias,
                            errors: errors?.[index],
                            touched: touched?.[index],
                            values: values?.[index]
                          }}
                          // index={index}
                        />
                        <hr className={classes.separator}></hr>
                      </div>
                    );
                  })}
              </>
            )}
          </FieldArray>
        );
      })}
    </>
  );
};
/* tslint:enable:no-any */
