import React, { HTMLAttributes, useEffect, useState } from "react";
import { Icon, Icons } from "../..";
import { FormHelperText } from "../FormHelperText/FormHelperText";
import classes from "./Checkbox.module.scss";

export interface Props extends HTMLAttributes<HTMLInputElement> {
  children: string;
  name: string;
  error?: boolean;
  helperText?: string;
}

export const Checkbox = ({ children, name, helperText, ...rest }: Props) => {
  const [identifier, setIdentifier] = useState("");
  const [checked, setChecked] = useState(false);

  const onChangeHandler = () => {
    setChecked(!checked);
  };

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

  return (
    <div className={classes["checkbox-wrapper"]}>
      <div className={classes["checkbox-container"]}>
        <input className={classes["native-input"]} onChange={onChangeHandler} checked={checked} id={identifier} type="checkbox" {...rest} />
        {checked ? <Icon className={classes.input} icon={Icons.CheckmarkSquare} /> : <Icon className={classes.input} icon={Icons.Square} />}
        <label htmlFor={identifier}>{children}</label>
      </div>
      {helperText && <FormHelperText indent={30}>{helperText}</FormHelperText>}
    </div>
  );
};
