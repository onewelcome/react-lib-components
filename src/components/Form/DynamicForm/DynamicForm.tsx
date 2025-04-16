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
import { Typography } from "../../Typography/Typography";
import { DynamicValue, Field } from "./DynamicForms.interface";
import { DynamicFormArray } from "./DynamicFormArray";
import styles from "./DynamicFormElements.module.scss";

export const DynamicForm = ({
  formControls,
  formAlias,
  parentFieldId
}: DynamicFormElementProps) => {
  const { errors, touched, values } = formAlias;
  function getArrayLikeStructure(field: Field) {
    if (field.subAttributes?.length && field.isArray) {
      return (
        <>
          <Typography variant="h3" className={styles.groupLabel}>
            {field.label}
          </Typography>
          <DynamicFormArray
            parentFieldId={parentFieldId}
            formControls={[field]}
            formAlias={{
              ...formAlias,
              errors: errors?.[field.id] as DynamicValue,
              touched: touched?.[field.id] as DynamicValue,
              values: values?.[field.id] as DynamicValue
            }}
          ></DynamicFormArray>
        </>
      );
    }
    return <></>;
  }
  return (
    <>
      <DynamicFormElements
        formControls={formControls}
        formAlias={formAlias}
        parentFieldId={parentFieldId}
      />
      {formControls.map((field: Field) => (
        <>{field.isArray && getArrayLikeStructure(field)}</>
      ))}
    </>
  );
};
