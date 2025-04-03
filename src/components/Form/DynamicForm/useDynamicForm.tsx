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

import * as Yup from "yup";
import { ControlType, Field } from "./DynamicForms.interface";

type NestedObject = {
  [key: string]: any;
};

const createYupSchema = (schema: { [key: string]: Yup.AnySchema }, config: Field) => {
  const { id, validations = [] } = config;
  let validator = getSchemaNameWithControl(config.controlType);
  if (config.isArray || config.isComplex) {
    const nestedSchema = config.subAttributes?.reduce(createYupSchema, {});
    if (nestedSchema) {
      const yupObject = Yup.object().shape(nestedSchema);
      schema[config.id] = config.isArray ? Yup.array().of(yupObject) : yupObject;
    }
  } else {
    validations.forEach(validation => {
      const { type, value, message } = validation;
      validator = (validator as any)[type](value, message);
    });
    schema[id] = validator;
  }
  return schema;
};

const getSchemaNameWithControl = (control: ControlType): Yup.AnySchema => {
  switch (control) {
    case "checkbox":
      return Yup.boolean();
    default:
      return Yup.string();
  }
};
const generateYupSchema = (fields: Field[]) => {
  let schema = fields.reduce(createYupSchema, {});
  return Yup.object().shape(schema);
};

export interface UseDynamicFormikProps {
  formControls: Field[];
  userInfo: any;
}

export const useDynamicForm = ({ formControls, userInfo }: UseDynamicFormikProps) => {
  const validationSchema = generateYupSchema(formControls);
  // Need to create the schema for the formik because validation was not working at the initial level
  // when directly clicked on the submit button...
  // For Example "obj.obj"="" is not supported we need to create schema like as {"obj":{"obj":""}}
  // The following method is doing the same thing, This method reading the keys
  // Such as "name", "address.primaryAddress" and convert them into {"name":"", "address":{"primaryAddress":""}}
  const createFormikInitialObject = (keys: Field[]): NestedObject => {
    const result: NestedObject = {};
    keys.forEach(key => {
      if (key.isArray) {
        result[key.id] = [createFormikInitialObject(key.subAttributes ?? [])];
        return;
      }
      if (key.isComplex) {
        result[key.id] = createFormikInitialObject(key.subAttributes ?? []);
        return;
      }
      result[key.id] = key.defaultValue;
    });
    return result;
  };

  return {
    enableReinitialize: true,
    initialValues: userInfo ?? createFormikInitialObject(formControls.map(p => p)),
    validationSchema,
    validationOnBlur: true,
    validateOnChange: false,
    validateOnMount: false
  };
};
