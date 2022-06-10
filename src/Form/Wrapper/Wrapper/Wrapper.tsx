import React, { ComponentPropsWithRef, ReactElement } from 'react';
import { FormGroup, Props as FormGroupProps } from '../../FormGroup/FormGroup';
import { Label, Props as LabelProps } from '../../Label/Label';
import classes from './Wrapper.module.scss';
import { Props as HelperProps } from '../../FormHelperText/FormHelperText';
import { FormElement } from '../../form.interfaces';

export interface Props extends ComponentPropsWithRef<'div'>, FormGroupProps {
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
export interface WrapperProps extends FormElement {
  errorMessage?: string;
  helperText?: string;
  helperProps?: HelperProps;
  label?: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
}

export const Wrapper = React.forwardRef<HTMLDivElement, Props>(
  (
    {
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
    }: Props,
    ref
  ) => {
    const renderChildren = () =>
      React.Children.map(children, (child) =>
        React.cloneElement(child, {
          disabled,
        })
      );

    const labelClasses = [];

    floatingLabel && labelClasses.push(classes['floating-label']);
    floatingLabel && floatingLabelActive && labelClasses.push(classes['floating-label-active']);
    labelProps?.className && labelClasses.push(labelProps.className);
    required && labelClasses.push(classes['required']);
    error && labelClasses.push(classes['error']);

    return (
      <div {...rest} ref={ref} className={`${classes.wrapper} ${className ? className : ''}`}>
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
                className={`${classes.label} ${labelClasses.join(' ')}`}
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
  }
);
