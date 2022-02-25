import React, { ReactElement } from 'react';
import { FormGroup, Props as FormGroupProps } from '../../FormGroup/FormGroup';
import { Label, Props as LabelProps } from '../../Label/Label';
import classes from './Wrapper.module.scss';

export interface Props extends Omit<FormGroupProps, 'children'> {
  children: ReactElement | ReactElement[];
  floatingLabelActive?: boolean;
  label?: string;
  name: string;
  labelProps?: LabelProps;
  floatingLabel?: boolean;
}

/** For components that extend this component we create an interface (InputWrapper, SelectWrapper, etc.) */
export interface WrapperProps {
  label?: string;
  name: string;
  helperText: string;
  errorMessage: string;
  error: boolean;
  value: string;
}

export const Wrapper = ({
  children,
  error,
  errorMessage,
  errorId,
  errorMessageIcon,
  errorMessageIconPosition,
  helperText,
  helperId,
  floatingLabel = true,
  floatingLabelActive,
  helperProps,
  labelProps,
  label,
  name,
}: Props) => {
  return (
    <div className="wrapper">
      <FormGroup
        error={error}
        errorMessage={errorMessage}
        errorId={errorId}
        errorMessageIcon={errorMessageIcon}
        errorMessageIconPosition={errorMessageIconPosition}
        helperText={helperText}
        helperId={helperId}
        helperProps={helperProps}
      >
        <div className={floatingLabel ? classes['floating-wrapper'] : ''}>
          {label && (
            <Label
              {...labelProps}
              className={`${classes.label} ${floatingLabel ? classes['floating-label'] : ''} ${
                floatingLabelActive && floatingLabel ? classes['floating-label-active'] : ''
              } ${labelProps?.className ? labelProps.className : ''}`}
              htmlFor={name}
            >
              {label}
            </Label>
          )}
          {children}
        </div>
      </FormGroup>
    </div>
  );
};
