import React, { ComponentPropsWithRef, useState } from "react";
import classes from "./TextareaWrapper.module.scss";
import { Wrapper, WrapperProps } from "../Wrapper/Wrapper";
import { Textarea, Props as TextareaProps } from "../../Textarea/Textarea";
import { useWrapper } from "../../../hooks/useWrapper";

export interface Props
  extends Omit<
      ComponentPropsWithRef<"div">,
      "onFocus" | "onChange" | "onBlur" | "onMouseEnter" | "onMouseLeave"
    >,
    Omit<WrapperProps, "onFocus" | "onChange" | "onBlur" | "onMouseEnter" | "onMouseLeave"> {
  placeholder?: string;
  textareaProps?: TextareaProps;
  value: string;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
}

export const TextareaWrapper = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      name,
      error,
      value,
      label,
      placeholder,
      textareaProps,
      helperProps,
      onChange,
      onFocus,
      onBlur,
      onMouseEnter,
      onMouseLeave,
      disabled,
      ...rest
    }: Props,
    ref
  ) => {
    const {
      errorId,
      floatingLabelActive,
      setFloatingLabelActive,
      hasFocus,
      setHasFocus,
      helperId,
      labelId
    } = useWrapper(value, placeholder);
    const [hover, setHover] = useState(false);

    const wrapperClasses: string[] = [];

    hasFocus && wrapperClasses.push(classes["focus"]);
    hover && wrapperClasses.push(classes["hover"]);
    disabled && wrapperClasses.push(classes["disabled"]);
    error && wrapperClasses.push(classes["error"]);

    return (
      <Wrapper
        {...rest}
        ref={ref}
        disabled={disabled}
        labelProps={{
          id: labelId,
          className: `${classes["textarea-label"]} ${wrapperClasses.join(" ")}`
        }}
        name={name}
        label={label}
        helperId={helperId}
        helperProps={{
          ...helperProps,
          className: classes["textarea-helper-text"]
        }}
        error={error}
        floatingLabelActive={floatingLabelActive}
        errorId={errorId}
      >
        <Textarea
          {...textareaProps}
          error={error}
          aria-labelledby={label && labelId}
          aria-describedby={error ? errorId : helperId}
          placeholder={placeholder}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          onFocus={e => {
            onFocus && onFocus(e);
            setHasFocus(true);
            setFloatingLabelActive(true);
          }}
          onBlur={e => {
            onBlur && onBlur(e);
            setHasFocus(false);
            e.target.value || e.target.placeholder || textareaProps?.placeholder?.length
              ? setFloatingLabelActive(true)
              : setFloatingLabelActive(false);
          }}
          onMouseEnter={e => {
            onMouseEnter && onMouseEnter(e);
            setHover(true);
          }}
          onMouseLeave={e => {
            onMouseLeave && onMouseLeave(e);
            setHover(false);
          }}
          className={`${classes["textarea"]} ${error ? classes["error"] : ""}`}
          wrapperProps={{
            className: `${wrapperClasses.join(" ")} ${classes["textarea-wrapper"]}`
          }}
          errorProps={{ className: classes["error-icon"] }}
        />
      </Wrapper>
    );
  }
);
