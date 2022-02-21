import React, { HTMLAttributes, useEffect, useState } from "react";
import { Icon, Icons } from "../../Icon/Icon";
import { FormHelperText } from "../FormHelperText/FormHelperText";
import classes from "./Radio.module.scss";
import { generateID } from "../../util/helper";

export interface Props extends HTMLAttributes<HTMLInputElement> {
  children: string;
  name?: string;
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
  errorMessage?: string;
  value: string;
  checked?: boolean;
  errorMessageId?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio = ({
  children,
  name,
  helperText,
  errorMessageId,
  errorMessage,
  disabled,
  value,
  error,
  checked = false,
  onChange,
  ...rest
}: Props) => {
  const [identifier, setIdentifier] = useState("");
  const [describedBy, setDescribedBy] = useState("");
  const [errorId] = useState(generateID(15, errorMessage));

  useEffect(() => {
    const id = generateID(15, name);

    setIdentifier(id);
  }, []);

  useEffect(() => {
    if (error && errorMessageId) {
      setDescribedBy(errorMessageId);
    }

    if (!error || (!errorMessageId && !errorMessage)) {
      setDescribedBy(`${identifier}-description`);
    }

    if (errorMessage && !errorMessageId && error) {
      setDescribedBy(errorId);
    }
  }, [identifier, error]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    /** We have to clone the native event we got here and change the "target" property to the value. Otherwise, this regular event has "on" as it's event.target.value, which is useless. */
    const nativeEvent: any = event.nativeEvent || event;
    const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);

    Object.defineProperty(clonedEvent, "target", {
      writable: true,
      value: { value: value },
    });

    onChange && onChange(clonedEvent);
  };

  /** Default return value is the default radio */
  return (
    <div className={`${classes["radio-wrapper"]} ${error ? classes.error : ""} ${disabled ? classes.disabled : ""}`}>
      <div className={classes["radio-container"]}>
        <input
          disabled={disabled}
          tabIndex={0}
          className={classes["native-input"]}
          onChange={onChangeHandler}
          checked={checked}
          aria-invalid={error ? true : false}
          aria-checked={checked}
          aria-describedby={describedBy}
          name={name}
          value={value}
          id={identifier}
          type="radio"
          {...rest}
        />

        {checked && <Icon className={classes.input} icon={Icons.Radio} />}
        {!checked && <Icon className={classes.input} icon={Icons.Circle} />}

        <label htmlFor={identifier}>{children}</label>
      </div>
      {helperText && (!error || errorMessageId || !errorMessage) && (
        <FormHelperText id={`${identifier}-description`} className={classes["helper-text"]} indent={28}>
          {helperText}
        </FormHelperText>
      )}
      {errorMessage && !errorMessageId && error && (
        <span className={classes["error-message"]}>
          <Icon className={classes["error-icon"]} icon={Icons.Warning} />
          <span id={errorId}>{errorMessage}</span>
        </span>
      )}
    </div>
  );
};
