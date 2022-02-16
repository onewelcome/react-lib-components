import React, { HTMLAttributes, ReactElement, useEffect, useState } from "react";
import { Icon, Icons } from "../..";
import { FormHelperText } from "../FormHelperText/FormHelperText";
import classes from "./Checkbox.module.scss";

export interface DefaultCheckboxProps extends Omit<CheckboxProps, "label" | "children"> {
  children: string;
  name: string;
  onInternalCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface NestedCheckboxProps extends Omit<CheckboxProps, "children" | "label"> {
  children: ReactElement[];
  label: string;
}

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  children: string | ReactElement[];
  name: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  checked?: boolean;
  indeterminate?: boolean;
  onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChildChange?: (event: React.ChangeEvent<HTMLInputElement>, child?: React.ReactElement<CheckboxProps>) => void;
}

const DefaultCheckbox = ({
  children,
  name,
  helperText,
  indeterminate = false,
  error,
  checked = false,
  onCheck,
  onInternalCheck,
  ...rest
}: DefaultCheckboxProps) => {
  const [identifier, setIdentifier] = useState("");

  useEffect(() => {
    if (!name) {
      throw new Error("Please pass a 'name' prop to your <Checkbox> component.");
    }

    /** We will make sure to mesh the generate id and name property together to basically create a unique ID */
    let hashCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "$", "%", "^", "&", "#"];
    let id = "";

    /** Generate an id of at least 15 characters in length */
    for (let i = 0; i < 15; i++) {
      let nameCharacter = name[i] !== undefined ? name[i] : "";
      id = id + nameCharacter + hashCharacters[Math.floor(Math.random() * hashCharacters.length)];
    }

    setIdentifier(id);
  }, []);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onCheck) {
      onCheck(event);
    }
    if (onInternalCheck) {
      onInternalCheck(event);
    }
  };

  /** Default return value is the default checkbox */
  return (
    <div className={`${classes["checkbox-wrapper"]} ${error ? classes.error : ""}`}>
      <div className={classes["checkbox-container"]}>
        <input
          className={classes["native-input"]}
          onChange={onChangeHandler}
          checked={checked}
          aria-checked={indeterminate ? "mixed" : checked}
          id={identifier}
          type="checkbox"
          {...rest}
        />
        {indeterminate && <Icon className={classes.input} icon={Icons.MinusSquare} />}
        {checked && !indeterminate && <Icon className={classes.input} icon={Icons.CheckmarkSquare} />}
        {!checked && !indeterminate && <Icon className={classes.input} icon={Icons.Square} />}
        <label htmlFor={identifier}>{children}</label>
      </div>
      {helperText && (
        <FormHelperText className={classes["helper-text"]} indent={28}>
          {helperText}
        </FormHelperText>
      )}
    </div>
  );
};

const NestedCheckbox = ({
  children,
  name,
  label,
  helperText,
  error,
  indeterminate,
  checked,
  onCheck,
  onChildChange,
  ...rest
}: NestedCheckboxProps) => {
  const handleChildOnCheck = (child: ReactElement<DefaultCheckboxProps>, event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("FIRE");

    if (onChildChange) {
      onChildChange(event, child);
    }
  };

  return (
    <div className={classes["nested-checkbox-wrapper"]}>
      <DefaultCheckbox
        helperText={helperText}
        onCheck={onCheck}
        indeterminate={indeterminate}
        checked={checked}
        error={error}
        name={name}
        {...rest}
      >
        {label}
      </DefaultCheckbox>
      <ul className={classes["checkbox-list"]}>
        {children.map((child, index) => {
          return (
            <li key={index}>
              <DefaultCheckbox {...child.props} onInternalCheck={handleChildOnCheck.bind(null, child)}>
                {child.props.children}
              </DefaultCheckbox>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const Checkbox = ({ children, label, ...rest }: CheckboxProps) => {
  if (typeof children === "object") {
    if (label === undefined) {
      throw new Error("Your parent Checkbox component needs to have a label prop.");
    }

    return (
      <NestedCheckbox label={label} {...rest}>
        {children}
      </NestedCheckbox>
    );
  } else if (typeof children === "string") {
    return <DefaultCheckbox {...rest}>{children}</DefaultCheckbox>;
  } else {
    throw new Error("You've passed invalid children to the Checkbox component");
  }
};
