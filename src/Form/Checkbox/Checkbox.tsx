import React, { HTMLAttributes, ReactElement, useEffect, useState } from "react";
import { Icon, Icons } from "../..";
import { FormHelperText } from "../FormHelperText/FormHelperText";
import classes from "./Checkbox.module.scss";

export interface DefaultCheckboxProps extends Omit<CheckboxProps, "label" | "children"> {
  children: string;
  name: string;
  indeterminate?: boolean;
}

export interface NestedCheckboxProps extends Omit<CheckboxProps, "children" | "label"> {
  children: ReactElement[];
  label: string;
}

export interface ChildState {
  [childName: string]: boolean;
}

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  children: string | ReactElement[];
  name: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  checked?: boolean;
  onCheck?: (checkedState: boolean, identifier: string) => void;
}

const DefaultCheckbox = ({
  children,
  name,
  helperText,
  indeterminate = false,
  onCheck,
  error,
  checked = false,
  ...rest
}: DefaultCheckboxProps) => {
  const [identifier, setIdentifier] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const onChangeHandler = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (onCheck) {
      onCheck(isChecked, name);
    }
  }, [isChecked]);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

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

  /** Default return value is the default checkbox */
  return (
    <div className={`${classes["checkbox-wrapper"]} ${error ? classes.error : ""}`}>
      <div className={classes["checkbox-container"]}>
        <input
          className={classes["native-input"]}
          onChange={onChangeHandler}
          checked={isChecked}
          aria-checked={indeterminate ? "mixed" : isChecked}
          id={identifier}
          type="checkbox"
          {...rest}
        />
        {indeterminate && <Icon className={classes.input} icon={Icons.MinusSquare} />}
        {isChecked && !indeterminate && <Icon className={classes.input} icon={Icons.CheckmarkSquare} />}
        {!isChecked && !indeterminate && <Icon className={classes.input} icon={Icons.Square} />}
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

const NestedCheckbox = ({ children, name, label, helperText, error, ...rest }: NestedCheckboxProps) => {
  const [indeterminate, setIndeterminate] = useState(false);
  const [childState, setChildState] = useState<ChildState[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    children.forEach((child: ReactElement<DefaultCheckboxProps>) => {
      setChildState((prevState): ChildState[] => {
        return [...prevState, { [child.props.name]: child.props.checked ? child.props.checked : false }];
      });
    });
  }, []);

  useEffect(() => {
    /** If some are true and some are false, it's the indetermined state. */
    if (childState.some((obj) => Object.values(obj)[0] === true) && childState.some((obj) => Object.values(obj)[0] === false)) {
      setIndeterminate(true);
      setIsChecked(false);
    }

    /** If all are true, we're in the completely checked state. */
    if (childState.every((obj) => Object.values(obj)[0] === true)) {
      setIsChecked(true);
      setIndeterminate(false);
    }

    /** If all are false, we are in the non-checked and non-indetermined state. */
    if (childState.every((obj) => Object.values(obj)[0] === false)) {
      setIsChecked(false);
      setIndeterminate(false);
    }
  }, [childState]);

  const onChangeHandler = (child: ReactElement, isChecked: boolean, identifier: string) => {
    console.log(child);
    childState.find((el) => {
      if (el[identifier] !== undefined) {
        setChildState((prevState: ChildState[]) => {
          const filteredPreviousState = prevState.filter((child) => {
            if (Object.keys(child)[0] !== identifier) {
              return child;
            }

            return;
          });

          return [...filteredPreviousState, { [identifier]: isChecked }];
        });
      }
    });
  };

  /** We two way bind the data of the individual children checkboxes to the ChildState. We match them here and return the value */
  const getCheckedState = (child: ReactElement) => {
    const element = childState.find((el) => {
      return Object.keys(el)[0] === child.props.name;
    });

    if (element) {
      return Object.values(element)[0];
    }

    return false;
  };

  /** If we click the parent checkbox all children checkboxes should initially become checked. If they're already all checked, uncheck them. */
  const parentOnChangeHandler = () => {
    setChildState((prevState): ChildState[] => {
      const allChildrenToTrue = prevState.map((child) => {
        return { [Object.keys(child)[0]]: !isChecked };
      });

      return allChildrenToTrue;
    });

    setIsChecked(!isChecked);
  };

  return (
    <div className={classes["nested-checkbox-wrapper"]}>
      <DefaultCheckbox
        helperText={helperText}
        onChange={parentOnChangeHandler}
        checked={isChecked}
        indeterminate={indeterminate}
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
              <DefaultCheckbox checked={getCheckedState(child)} onCheck={onChangeHandler} {...child.props}>
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
