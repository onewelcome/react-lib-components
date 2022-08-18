import React, { ComponentPropsWithRef, createRef, ReactNode } from "react";
import { Icon, Icons } from "../../Icon/Icon";
import { KeyValuePair } from "../../interfaces";
import { FormSelector } from "../form.interfaces";
import { FormHelperText, Props as FormHelperTextProps } from "../FormHelperText/FormHelperText";
import classes from "./FormSelectorWrapper.module.scss";

export interface Props extends ComponentPropsWithRef<"div">, FormSelector {
  children?: ReactNode;
  nestedChildren?: ReactNode;
  containerProps?: ComponentPropsWithRef<"div"> & KeyValuePair;
  helperProps?: FormHelperTextProps;
  disabled?: boolean;
  errorId?: string;
  identifier?: string;
}

export const FormSelectorWrapper = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      className,
      nestedChildren,
      containerProps,
      helperProps,
      error,
      disabled,
      helperText,
      errorMessage,
      parentErrorId,
      errorId,
      identifier,
      ...rest
    }: Props,
    ref
  ) => {
    const helperRef = helperProps?.ref || createRef();

    return (
      <div
        {...rest}
        ref={ref}
        className={`${error ? classes["error"] : ""} ${disabled ? classes["disabled"] : ""} ${
          className ?? ""
        }`}
      >
        <div {...containerProps}>{children}</div>
        {(helperText || (helperProps && helperProps.children)) &&
          (!error || parentErrorId || !errorMessage) && (
            <FormHelperText
              {...helperProps}
              ref={helperRef}
              id={`${identifier}`}
              className={`${classes["helper-text"]} ${helperProps?.className ?? ""} ${
                error ? classes["error"] : ""
              }`}
            >
              {(helperProps && helperProps.children) || helperText}
            </FormHelperText>
          )}
        {errorMessage && !parentErrorId && error && (
          <span className={classes["error-message"]}>
            <Icon className={classes["error-icon"]} icon={Icons.Error} />
            <span id={errorId}>{errorMessage}</span>
          </span>
        )}
        {nestedChildren}
      </div>
    );
  }
);
