import React, { Fragment, HTMLAttributes, ReactElement } from "react";
import classes from "./CheckboxGroup.module.scss";
import { FormHelperText } from "../FormHelperText/FormHelperText";
import { Icon, Icons } from "../..";
import { generateID } from "../../util/helper";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  error?: boolean;
  helperText?: string;
  errorMessage?: string;
  children: ReactElement[] | ReactElement;
}

export const CheckboxGroup = ({ children, error = false, errorMessage, helperText, ...rest }: Props) => {
  const errorId = generateID(15, errorMessage);

  const renderChildren = () => {
    /** Always convert children to an array, even if only 1 Checkbox component is passed */
    if (!Array.isArray(children)) {
      children = [children];
    }

    /** In order to have the individual checkboxes have their "aria-describedby" property point to the error message in this CheckboxGroup, we have to clone the children and add these props. */
    return children?.map((child, index) => (
      <Fragment key={index}>
        {React.cloneElement(child, {
          errorMessageId: errorId,
          error: error,
        })}
      </Fragment>
    ));
  };

  return (
    <div className={`${classes["checkbox-group"]} ${error ? classes.error : ""}`} {...rest}>
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
