import React, { Fragment, HTMLAttributes, ReactElement } from "react";
import { Icon, Icons } from "../../Icon/Icon";
import { FormHelperText } from "../FormHelperText/FormHelperText";
import classes from "./RadioGroup.module.scss";
import { generateID } from "../../util/helper";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  error?: boolean;
  helperText?: string;
  errorMessage?: string;
  children: ReactElement[] | ReactElement;
  value: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroup = ({ children, error = false, errorMessage, helperText, value, name, onChange, ...rest }: Props) => {
  const errorId = generateID(15, errorMessage);

  const childRadioOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
  };

  const renderChildren = () => {
    /** Always convert children to an array, even if only 1 Checkbox component is passed */
    if (!Array.isArray(children)) {
      children = [children];
    }

    /** In order to have the individual checkboxes have their "aria-describedby" property point to the error message in this RadioGroup, we have to clone the children and add these props. */
    return children?.map((child, index) => (
      <Fragment key={index}>
        {React.cloneElement(child, {
          errorMessageId: errorId,
          error: error,
          checked: child.props.value === value,
          name: name,
          onChange: childRadioOnChangeHandler,
        })}
      </Fragment>
    ));
  };

  return (
    <div className={`${classes["radio-group"]} ${error ? classes.error : ""}`} {...rest}>
      {renderChildren()}
      <div className={classes["helper-text"]}>
        {helperText && !error && <FormHelperText indent={0}>{helperText}</FormHelperText>}
        {error && errorMessage && (
          <span className={classes["error-message"]}>
            <Icon className={classes["error-icon"]} icon={Icons.Warning} />
            <span className={classes.message} id={errorId}>
              {errorMessage}
            </span>
          </span>
        )}
      </div>
    </div>
  );
};
