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
  loading?: boolean;
}

export const IdentityProviderButton: ForwardRefRenderFunction<HTMLButtonElement, Props> = ({
  children,
  iconUrl,
  imgAltText,
  idpType,
  customization,
  loading,
  ...rest
}) => {
  const DEFAULT_BACKGROUND_COLOR = "#FFFFFF";
  const DEFAULT_BORDER_COLOR = "#000000";
  const DEFAULT_TEXT_COLOR = "#000000";
  const DEFAULT_FOCUS_OUTLINE_COLOR = "var(--color-black50)";
  const DEFAULT_HOVER_COLOR = "var(--color-black10)";
  const DEFAULT_PRESSED_COLOR = "var(--color-black20)";

  const generateCSSProperties = () => {
    return {
      "--button-primary-default-color": customization?.backgroundColor ?? DEFAULT_BACKGROUND_COLOR,
      borderColor: customization?.borderColor ?? DEFAULT_BORDER_COLOR,
      "--button-fill-text-color": customization?.textColor ?? DEFAULT_TEXT_COLOR,
      "--color-focus": customization?.focusBorderColor ?? DEFAULT_FOCUS_OUTLINE_COLOR,
      "--button-primary-focused-color":
        customization?.focusBackgroundColor ?? DEFAULT_BACKGROUND_COLOR,
      "--button-primary-hover-color": customization?.hoverBackgroundColor ?? DEFAULT_HOVER_COLOR,
      "--button-primary-pressed-color":
        customization?.pressedBackgroundColor ?? DEFAULT_PRESSED_COLOR
    } as CSSProperties;
  };

  return (
    <Button
      style={generateCSSProperties()}
      color="primary"
      variant="fill"
      className={classes["idp-button"]}
      loading={loading}
      {...rest}
    >
      <span className={classes["idp-button--with-icon"]}>
        <img
          height={24}
          width={24}
          src={iconUrl || `/ui-resources-static/common/idb/icons/${idpType}.svg`}
          alt={imgAltText || "Identity Provider icon"}
        />
        {children}
      </span>
    </Button>
  );
};
