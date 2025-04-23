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
import {
  DynamicFormField,
  KeyValue,
  FormAlias,
  ChangeEvent,
  FocusEvent
} from "./DynamicForms.interface";
import classes from "./DynamicFormElements.module.scss";
import styles from "./DynamicFormArray.module.scss";
import { castToBoolean } from "../../../util/helper";
import { SelectWrapper } from "../Wrapper/SelectWrapper/SelectWrapper";
import { Option } from "../Select/SingleSelect/Option";
import { RadioWrapper } from "../Wrapper/RadioWrapper/RadioWrapper";
import { Radio } from "../Radio/Radio";
import { Checkbox } from "../Checkbox/Checkbox";
import { InputWrapper } from "../Wrapper/InputWrapper/InputWrapper";
import { Button } from "../../Button/Button";
import { Typography } from "../../Typography/Typography";

export interface DynamicFormElementProps {
  formControls: DynamicFormField[];
  formAlias: FormAlias;
  parentFieldId?: string;
}

const DynamicFormArray = ({ formControls, parentFieldId, formAlias }: DynamicFormElementProps) => {
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

export const DynamicFormElements = ({
  formControls,
  formAlias,
  parentFieldId
}: DynamicFormElementProps) => {
  const { errors, touched, values, handleChange, handleBlur, setFieldTouched, setFieldValue } =
    formAlias;
  const onChange = async (key: string, val: string | number | boolean): Promise<void> => {
    await setFieldTouched(key, true);
    await setFieldValue(key, val);
  };

  const handleSelectChange = async (
    event: React.ChangeEvent<HTMLSelectElement>,
    field: DynamicFormField
  ) => {
    await onChange(getMappedFormKey(field), event.target.value);
  };

  // Used this method to creating the dropdown...
  const getDropDown = (field: DynamicFormField) => {
    return (
      <SelectWrapper
        {...getInputProps(field)}
        onChange={async (event: React.ChangeEvent<HTMLSelectElement>) => {
          await handleSelectChange(event, field);
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
  const getRadio = (field: DynamicFormField) => {
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
  const getCheckbox = (field: DynamicFormField) => {
    const commonProps = getCommonProps(field);

    return (
      <span className={classes.flexContainer}>
        <Checkbox
          {...commonProps}
          data-testid={getMappedFormKey(field)}
          checked={castToBoolean(values?.[field.id] as string | boolean)}
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
  const getTextBox = (field: DynamicFormField) => {
    return <InputWrapper type={field.inputType ?? "text"} {...getInputProps(field)} />;
  };

  const getMappedFormKey = (field: DynamicFormField) => {
    return parentFieldId ? `${parentFieldId}.${field.id}` : field.id;
  };

  const getCommonProps = (field: DynamicFormField) => {
    const key = getMappedFormKey(field);

    return {
      label: field.label,
      name: key,
      "data-testid": key,
      error: (touched?.[field.id] && errors?.[field.id]) as boolean,
      errorMessage: errors?.[field.id] as string
    };
  };

  const getInputProps = (field: DynamicFormField) => {
    const commonProps = getCommonProps(field);

    return {
      ...commonProps,
      required: field.isRequired ?? false,
      readOnlyView: !(field.isEditable ?? true),
      value: values?.[field.id] as string,
      onChange: (event: ChangeEvent) => handleChange?.(event),
      onBlur: (event: FocusEvent) => handleBlur?.(event)
    };
  };

  const getControl = (field: DynamicFormField) => {
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

  const getArrayLikeStructure = (field: DynamicFormField) => {
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
              errors: errors?.[field.id] as Record<string, unknown> | undefined,
              touched: touched?.[field.id] as Record<string, unknown> | undefined,
              values: values?.[field.id] as Record<string, unknown> | undefined
            }}
          ></DynamicFormArray>
        </>
      );
    }

    return <></>;
  };

  const getComplexStructure = (field: DynamicFormField) => {
    if (field.subAttributes?.length && !field.isArray) {
      return (
        <>
          <Typography variant="h3" className={classes.groupLabel}>
            {field.label}
          </Typography>
          <DynamicFormElements
            parentFieldId={getMappedFormKey(field)}
            formControls={field.subAttributes ?? []}
            formAlias={{
              ...formAlias,
              errors: errors?.[field.id] as Record<string, unknown> | undefined,
              touched: touched?.[field.id] as Record<string, unknown> | undefined,
              values: values?.[field.id] as Record<string, unknown> | undefined
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
