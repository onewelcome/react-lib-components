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
import { DynamicFormElementProps, DynamicFormElements, FormikAlias } from "./DynamicFormElements";
import { DynamicValue, Field } from "./DynamicForms.interface";
import classes from "./DynamicFormikArray.module.scss";
import styles from "./DynamicFormElements.module.scss";
import { Typography } from "../../Typography/Typography";

export function getArrayLikeStructure(
  field: Field,
  parentFieldId: string | undefined,
  formikAlias: FormikAlias,
  errors: DynamicValue,
  touched: DynamicValue,
  values: DynamicValue
) {
  if (field.subAttributes?.length && field.isArray) {
    return (
      <>
        <Typography variant="h3" className={styles.groupLabel}>
          {field.label}
        </Typography>
        <DynamicFormikArray
          parentFieldId={parentFieldId}
          formControls={[field]}
          formikAlias={{
            ...formikAlias,
            errors: errors?.[field.id],
            touched: touched?.[field.id],
            values: values?.[field.id]
          }}
        ></DynamicFormikArray>
      </>
    );
  }
  return <></>;
}

export const DynamicFormikArray = ({
  formControls,
  parentFieldId,
  formikAlias
}: DynamicFormElementProps) => {
  const { errors, touched, values } = formikAlias;
  return (
    <>
      {formControls.map((field: Field, ind: number) => {
        const key = parentFieldId ? `${parentFieldId}.${field.id}` : field.id;
        return (
          <>
            {Array.isArray(values) &&
              values?.map((f: unknown, index: number) => {
                return (
                  <div key={`${index}${parentFieldId}`}>
                    <DynamicFormElements
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
        );
      })}
    </>
  );
};
