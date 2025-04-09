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

import React, { ComponentPropsWithRef, ForwardRefRenderFunction } from "react";
import {
  InputWrapper,
  Radio,
  RadioWrapper,
  SelectWrapper,
  Option,
  Checkbox,
  Button,
  Typography
} from "@onewelcome/react-lib-components";
import { Field, KeyValue } from "./DynamicForms.interface";
import classes from "./DynamicFormElements.module.scss";
import { castToBoolean } from "../../../util/helper";
import { DynamicFormikArray } from "./DynamicFormikArray";
import { FormikErrors, FormikTouched } from "formik";
import { withReadOnly } from "../../withReadOnly";

type FormikChangeHandler = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLDivElement>;
type FormikBlurHandler = React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLDivElement>;
type FormValues = Record<string, unknown | string | number | boolean>;

export interface Props extends ComponentPropsWithRef<"form"> {
  formControls: Field[];
  formikAlias: FormikAlias;
  parentFieldId?: string;
}

export interface FormikAlias {
  touched?: FormikTouched<FormValues | undefined>;
  values?: FormValues;
  errors?: FormikErrors<FormValues | undefined>;
  setFieldTouched: (
    field: string,
    isTouched?: boolean,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<FormValues>>;
  setFieldValue: (
    field: string,
    value: FormValues,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<FormValues>>;
  handleChange?: (event: FormikChangeHandler) => void;
  handleBlur?: (event: FormikBlurHandler) => void;
}

const DynamicFormElements: ForwardRefRenderFunction<HTMLFormElement, Props> = ({
  formControls,
  formikAlias,
  parentFieldId
}: Props) => {
  const { errors, touched, values, handleChange, handleBlur, setFieldTouched, setFieldValue } =
    formikAlias;
  const onChange = (key: string, val: string | number | boolean): void => {
    setFieldTouched(key, true);
    setFieldValue(key, val);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>, field: Field) => {
    onChange(getMappedFormikKey(field), event.target.value);
  };

  // Used this method to creating the dropdown...
  const getDropDown = (field: Field) => {
    return (
      <SelectWrapper
        {...getInputProps(field)}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          handleSelectChange(event, field);
        }}
      >
        {((field.possibleValues as KeyValue[]) || []).map(p => {
          return (
            <Option
              id={p.key}
              key={p.key}
              value={p.value}
              isSelected={p.value === field.defaultValue}
            >
              {p.value}
            </Option>
          );
        })}
      </SelectWrapper>
    );
  };

  // Used this method to create the Radio List...
  const getRadio = (field: Field) => {
    return (
      <RadioWrapper
        fieldsetProps={{
          legend: ""
        }}
        {...getInputProps(field)}
      >
        {(field.possibleValues as KeyValue[]).map(p => {
          return (
            <Radio key={p.key} value={p.value}>
              {p.key}
            </Radio>
          );
        })}
      </RadioWrapper>
    );
  };

  // Used this method to create the checkbox List ...
  const getCheckbox = (field: Field) => {
    const commonProps = getCommonProps(field);
    const fieldValue = values?.[field.id];
    return (
      <span className={classes.flexContainer}>
        <Checkbox
          {...commonProps}
          data-testid={getMappedFormikKey(field)}
          checked={castToBoolean(
            typeof fieldValue === "boolean" || typeof fieldValue === "string" ? fieldValue : false
          )}
          onChange={event => onChange(commonProps.name, !values?.[field.id])}
          disabled={!(field.isEditable ?? true)}
        />
        {field.isRequired && field.isEditable && (
          <span data-testid="asterisk" className={classes.asterisk}></span>
        )}
      </span>
    );
  };

  // Used this method to created the Textbox ...
  const getTextBox = (field: Field) => {
    return (
      <InputWrapper type={field.inputType ? field.inputType : "text"} {...getInputProps(field)} />
    );
  };

  const getMappedFormikKey = (field: Field) => {
    return parentFieldId ? `${parentFieldId}.${field.id}` : field.id;
  };

  const getCommonProps = (field: Field) => {
    const key = getMappedFormikKey(field);

    return {
      label: field.label,
      name: key,
      "data-testid": key,
      error: !!(touched?.[field.id] && errors?.[field.id]),
      errorMessage: errors?.[field.id]
    };
  };

  const getInputProps = (field: Field) => {
    const commonProps = getCommonProps(field);

    return {
      ...commonProps,
      required: field.isRequired ?? false,
      readOnlyView: !(field.isEditable ?? true),
      value: String(values?.[field.id] ?? ""),
      onChange: (event: FormikChangeHandler) => handleChange?.(event),
      onBlur: (event: FormikBlurHandler) => handleBlur?.(event)
    };
  };

  const getControl = (field: Field) => {
    switch (field.controlType) {
      case "select": {
        return getDropDown(field);
      }
      case "radio": {
        return getRadio(field);
      }
      case "checkbox": {
        return getCheckbox(field);
      }
      case "label": {
        return <label>{field.id}</label>;
      }
      case "button":
      case "submit": {
        return (
          <Button type={field.controlType} value={field.label}>
            {field.label}
          </Button>
        );
      }
      default:
        return getTextBox(field);
    }
  };

  const getArrayLikeStructure = (field: Field) => {
    const fieldTouched = touched?.[field.id];
    const fieldError = errors?.[field.id];
    const fieldValue = values?.[field.id];
    if (field.subAttributes?.length && field.isArray) {
      return (
        <>
          <Typography variant="h3" className={classes.groupLabel}>
            {field.label}
          </Typography>
          <DynamicFormikArray
            parentFieldId={parentFieldId}
            formControls={[field]}
            formikAlias={{
              ...formikAlias,
              errors:
                typeof fieldError === "object" && fieldError !== null
                  ? (fieldError as FormikErrors<FormValues>)
                  : undefined,
              touched:
                typeof fieldTouched === "object" && fieldTouched !== null
                  ? (fieldTouched as FormikTouched<FormValues>)
                  : undefined,
              values:
                typeof fieldValue === "object" && fieldValue !== null
                  ? (fieldValue as FormValues)
                  : undefined
            }}
          ></DynamicFormikArray>
        </>
      );
    }
    return <></>;
  };

  const getComplexStructure = (field: Field) => {
    const fieldTouched = touched?.[field.id];
    const fieldError = errors?.[field.id];
    const fieldValue = values?.[field.id];
    if (field.subAttributes?.length && !field.isArray) {
      return (
        <>
          <Typography variant="h3" className={classes.groupLabel}>
            {field.label}
          </Typography>
          <DynamicFormElements
            parentFieldId={getMappedFormikKey(field)}
            formControls={field.subAttributes ?? []}
            formikAlias={{
              ...formikAlias,
              errors:
                typeof fieldError === "object" && fieldError !== null
                  ? (fieldError as FormikErrors<FormValues>)
                  : undefined,
              touched:
                typeof fieldTouched === "object" && fieldTouched !== null
                  ? (fieldTouched as FormikTouched<FormValues>)
                  : undefined,
              values:
                typeof fieldValue === "object" && fieldValue !== null
                  ? (fieldValue as FormValues)
                  : undefined
            }}
          ></DynamicFormElements>
        </>
      );
    }
    return <></>;
  };

  return (
    <>
      {formControls.map(field => (
        <>
          {!field.isArray && !field.isComplex && (
            <div key={field.id}>
              <div className={classes.formField}>{getControl(field)}</div>
              <br></br>
            </div>
          )}
          {field.isComplex && getComplexStructure(field)}
          {field.isArray && getArrayLikeStructure(field)}
        </>
      ))}
    </>
  );
};

export const DynamicForm = withReadOnly(React.forwardRef(DynamicFormElements));
