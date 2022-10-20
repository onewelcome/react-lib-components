import React, { ComponentPropsWithRef, ReactElement, ForwardRefExoticComponent } from "react";
import readyclasses from "../../readyclasses.module.scss";
import classes from "./Fieldset.module.scss";
import { Typography, Variant } from "../../Typography/Typography";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { Radio } from "../Radio/Radio";
import { Checkbox } from "../Checkbox/Checkbox";
import { Textarea } from "../Textarea/Textarea";
import { Toggle } from "../Toggle/Toggle";
import { Label } from "../Label/Label";
import { FormControl } from "../FormControl/FormControl";
import { FormSelectorWrapper } from "../FormSelectorWrapper/FormSelectorWrapper";
import { FormHelperText } from "../FormHelperText/FormHelperText";
import { InputWrapper } from "../Wrapper/InputWrapper/InputWrapper";
import { SelectWrapper } from "../Wrapper/SelectWrapper/SelectWrapper";
import { TextareaWrapper } from "../Wrapper/TextareaWrapper/TextareaWrapper";

export interface Props extends ComponentPropsWithRef<"fieldset"> {
  children?: ReactElement | ReactElement[];
  legend: string;
  legendStyle?: Variant;
  hideLegend?: boolean;
  background?: string;
  noPadding?: boolean;
  noBackground?: boolean;
  required?: boolean;
  error?: boolean;
  disablePropagation?: boolean;
}

export const Fieldset = React.forwardRef<HTMLFieldSetElement, Props>(
  (
    {
      children,
      className,
      legend,
      legendStyle = "body",
      hideLegend = false,
      noBackground,
      background = noBackground ? "" : "#FFF",
      noPadding = false,
      disabled = false,
      required = false,
      error = false,
      disablePropagation = false,
      ...rest
    }: Props,
    ref
  ) => {
    const renderChildren = () => {
      if (!children) {
        return;
      }

      /* All right, so the issue is that whenever we try to add disabled and error to a component that doesn't accept it,
    React will throw an error. However, it might occur that we want a component inside of Fieldset because of aesthetic purposes
    (fieldset applies a sort of container with white background and if we want to display it inside of this container... then yea).
    So instead we supply an array of components that we want to add the disabled and error prop to and check if child.type equals one of these. */
      const allowedComponents: ForwardRefExoticComponent<any>[] = [
        Input,
        Select,
        Radio,
        Checkbox,
        Textarea,
        Toggle,
        Label,
        FormControl,
        FormSelectorWrapper,
        FormHelperText,
        InputWrapper,
        SelectWrapper,
        TextareaWrapper
      ];

      const allowedComponentsDisplayNames = allowedComponents.map(
        component => component.displayName
      );

      return React.Children.map(children, (child: ReactElement) => {
        if (
          child.type === "string" &&
          allowedComponentsDisplayNames.includes(child.type) &&
          !disablePropagation
        ) {
          return React.cloneElement(child, {
            disabled: child.props.disabled ?? disabled,
            error: child.props.error ?? error
          });
        }

        return child;
      });
    };

    return (
      <fieldset
        {...rest}
        ref={ref}
        disabled={disabled}
        style={{ backgroundColor: background, ...rest.style }}
        className={`${classes.fieldset} ${noPadding ? classes["no-padding"] : ""} ${
          className ?? ""
        }`}
      >
        {legend && <legend className={readyclasses["sr-only"]}>{legend}</legend>}
        {legend && !hideLegend && (
          <Typography
            variant={legendStyle}
            tag="span"
            aria-hidden="true"
            className={`${classes["legend"]} ${required ? classes["required"] : ""} ${
              error ? classes["error"] : ""
            }`}
          >
            {legend}
          </Typography>
        )}
        {renderChildren()}
      </fieldset>
    );
  }
);
