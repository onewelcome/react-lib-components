/*
 * Copyright 2022 OneWelcome B.V.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import React, { ComponentPropsWithRef, CSSProperties, ForwardRefRenderFunction } from "react";
import classes from "./IdentityProviderButton.module.scss";
import { Button } from "../Button/Button";

export interface SupportedCustomizationKeys {
  backgroundColor: string;
  focusBorderColor: string;
  focusBackgroundColor: string;
  hoverBackgroundColor: string;
  pressedBackgroundColor: string;
  textColor: string;
  borderColor: string;
}

export interface Props extends Omit<ComponentPropsWithRef<"button">, "color"> {
  iconUrl?: string;
  imgAltText?: string;
  idpType: string;
  customization?: SupportedCustomizationKeys;
}

export const IdentityProviderButton: ForwardRefRenderFunction<HTMLButtonElement, Props> = ({
  children,
  iconUrl,
  imgAltText,
  idpType,
  customization,
  ...rest
}) => {
  return (
    <Button
      style={
        {
          "--button-primary-default-color": customization?.backgroundColor ?? "#FFFFFF",
          borderColor: customization?.borderColor ?? "#000000",
          "--button-fill-text-color": customization?.textColor ?? "#000000",
          "--color-focus": customization?.focusBorderColor ?? "#CCCCCC",
          "--button-primary-focused-color": customization?.focusBackgroundColor ?? "#FFFFFF",
          "--button-primary-hover-color": customization?.hoverBackgroundColor ?? "#CCCCCC",
          "--button-primary-pressed-color": customization?.pressedBackgroundColor ?? "#999999"
        } as CSSProperties
      }
      color="primary"
      variant="fill"
      className={classes["idp-button"]}
      {...rest}
    >
      <span className={classes["idp-button--with-icon"]}>
        <img
          height={24}
          width={24}
          src={iconUrl || `/ui-resources-static/common/icons/${idpType}.svg`}
          alt={imgAltText || "Identity Provider icon"}
        />
        {children}
      </span>
    </Button>
  );
};
