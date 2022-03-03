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
  /** This does NOT add validation! It simply adds an asterix on the Label! */
  required?: boolean;
}

/** For components that extend this component we create an interface (InputWrapper, SelectWrapper, etc.) */
export interface WrapperProps {
  label?: string;
  name: string;
  helperText?: string;
  errorMessage?: string;
  error: boolean;
  value: string;
  required?: boolean;
}

export const Wrapper = ({
  children,
  className,
  error,
  errorMessage,
  errorId,
  errorMessageIcon,
  errorMessageIconPosition,
  helperText,
  helperId,
  floatingLabel = true,
  floatingLabelActive,
  required,
  helperProps,
  labelProps,
  label,
  name,
}: Props) => {
  return (
    <div data-wrapper className={`${classes.wrapper} ${className ? className : ''}`}>
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
              } ${labelProps?.className ? labelProps.className : ''} ${
                required ? classes.required : ''
              }`}
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
