import React, { LegacyRef, ReactElement } from 'react';
import { FormGroup, Props as FormGroupProps } from '../../FormGroup/FormGroup';
import { Label, Props as LabelProps } from '../../Label/Label';
import classes from './Wrapper.module.scss';
import { Props as HelperProps } from '../../FormHelperText/FormHelperText';
import { HTMLProps } from '../../../interfaces';

export interface Props extends Omit<FormGroupProps, 'children' | 'ref'> {
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
  ref?: LegacyRef<HTMLDivElement>;
}

/** For components that extend this component we create an interface (InputWrapper, SelectWrapper, etc.) */
export interface WrapperProps extends Omit<HTMLProps<HTMLDivElement>, 'ref'> {
  errorMessage?: string;
  error: boolean;
  helperText?: string;
  helperProps?: HelperProps;
  label?: string;
  name: string;
  required?: boolean;
}

export const Wrapper = React.forwardRef(
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
    ref: LegacyRef<HTMLDivElement>
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
