import React, { ComponentPropsWithRef, useState } from "react";
import { Icon, Props as IconProps, Icons } from "../../Icon/Icon";
import classes from "./Textarea.module.scss";
import { FormElement } from "../form.interfaces";

interface IconPropsPartial extends Omit<Partial<IconProps>, "ref"> {}

export interface Props extends ComponentPropsWithRef<"textarea">, FormElement {
  wrapperProps?: ComponentPropsWithRef<"div">;
  errorProps?: IconPropsPartial;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      error = false,
      disabled = false,
      className,
      rows = 4,
      wrapperProps,
      errorProps,
      onFocus,
      onBlur,
      ...rest
    }: Props,
    ref
  ) => {
    const [focus, setFocus] = useState(false);

    const wrapperClasses = [classes["textarea-wrapper"]];
    const outlineClasses = [classes["outline"]];

    wrapperProps?.className && wrapperClasses.push(wrapperProps.className);
    disabled &&
      wrapperClasses.push(classes["disabled"]) &&
      outlineClasses.push(classes["disabled"]);
    error && wrapperClasses.push(classes["error"]) && outlineClasses.push(classes["error"]);
    focus && wrapperClasses.push(classes["focus"]) && outlineClasses.push(classes["focus"]);

    return (
      <div {...wrapperProps} className={wrapperClasses.join(" ")}>
        <textarea
          {...rest}
          ref={ref}
          rows={rows}
          className={`${error ? classes["error"] : ""} ${classes["textarea"]} ${className ?? ""}`}
          disabled={disabled}
          onFocus={event => {
            setFocus(true);
            onFocus && onFocus(event);
          }}
          onBlur={event => {
            setFocus(false);
            onBlur && onBlur(event);
          }}
        />
        {error && (
          <Icon
            {...errorProps}
            className={`${classes["warning"]} ${errorProps?.className ?? ""}`}
            icon={Icons.Error}
          />
        )}
        <span className={outlineClasses.join(" ")}></span>
      </div>
    );
  }
);
