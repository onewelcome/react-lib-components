import React, { ReactElement } from 'react';
import { FormGroup, Props as FormGroupProps } from '../../FormGroup/FormGroup';
import { Label, Props as LabelProps } from '../../Label/Label';
import classes from './Wrapper.module.scss';
import { Props as HelperProps } from '../../FormHelperText/FormHelperText';
import { HTMLProps } from '../../../interfaces';

export interface Props extends Omit<FormGroupProps, 'children'> {
  children: ReactElement | ReactElement[];
  floatingLabelActive?: boolean;
  floatingLabel?: boolean;
  helperIndent?: number;
  label?: string;
  labelProps?: LabelProps;
  name: string;
  /** This does NOT add validation! It simply adds an asterix on the Label! */
  required?: boolean;
  innerClassName?: string;
}

/** For components that extend this component we create an interface (InputWrapper, SelectWrapper, etc.) */
export interface WrapperProps extends HTMLProps<HTMLDivElement> {
  errorMessage?: string;
  error: boolean;
  helperText?: string;
  helperProps?: HelperProps;
  label?: string;
  name: string;
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
  helperIndent,
  labelProps,
  label,
  disabled,
  name,
  innerClassName,
  ...rest
}: Props) => {
  const renderChildren = () =>
    React.Children.map(children, (child) =>
      React.cloneElement(child, {
        disabled,
      })
    );

  return (
    <div {...rest} className={`${classes.wrapper} ${className ? className : ''}`}>
      <FormGroup
        error={error}
        errorMessage={errorMessage}
        errorId={errorId}
        errorMessageIcon={errorMessageIcon}
        errorMessageIconPosition={errorMessageIconPosition}
        helperText={helperText}
        helperId={helperId}
        helperProps={helperProps}
        helperIndent={helperIndent}
      >
        <div
          className={`${floatingLabel ? classes['floating-wrapper'] : ''} ${
            innerClassName ? innerClassName : ''
          }`}
        >
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
          {renderChildren()}
        </div>
      </FormGroup>
    </div>
  );
};
