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

import React, { Fragment, HTMLAttributes, ReactChild, useEffect, useState } from "react";

interface CSSProperties {
  colorFocus?: string;
  colorPrimary?: string;
  colorSecondary?: string;
  colorTertiary?: string;
  defaultLineHeight?: string;
  buttonBorderRadius?: string;
  buttonBorderWidth?: string;
  buttonFontSize?: string;
  buttonBorderStyle?: string;
  buttonFillTextColor?: string;
  buttonFillBackgroundColor?: string;
  buttonOutlineHoverTextColor?: string;
  inputBorderRadius?: string;
  inputBorderWidth?: string;
  inputBorderWidthFocus?: string;
  inputBorderStyle?: string;
  inputBackgroundColor?: string;
  modalShadowColor?: string;
  modalBackgroundColor?: string;
  modalHeaderBackgroundColor?: string;
  snackbarTextColor?: string;
  snackbarInfoBackgroundColor?: string;
  snackbarSuccessBackgroundColor?: string;
  snackbarErrorBackgroundColor?: string;
  snackbarBorderRadius?: string;
  dataGridRowBackgroundColor?: string;
  dataGridRowHoverBackgroundColor?: string;
  tabsBackgroundColor?: string;
  tabBorderWidth?: string;
  tabBorderStyle?: string;
  tablistBorderWidth?: string;
  tablistBorderStyle?: string;
  tablistBorderColor?: string;
  tabTextColor?: string;
  default?: string;
  success?: string;
  error?: string;
  disabled?: string;
  greyedOut?: string;
  lightGreyBorder?: string;
  warning?: string;
  light?: string;
  grey?: string;
  fontFamily?: string;
  fontFamilyCode?: string;
  fontSize?: string;
  fontSizeH1?: string;
  fontSizeH2?: string;
  fontSizeH3?: string;
  fontSizeH4?: string;
  fontSizeSub?: string;
  fontSizeCode?: string;
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  properties?: CSSProperties;
}

export const BaseStyling = ({ children, properties = {} }: Props) => {
  const defaultProperties: CSSProperties = {
    colorFocus: "#0085f2",
    colorPrimary: "#9e006b",
    colorSecondary: "#003b5e",
    colorTertiary: "#ff1e4e",
    defaultLineHeight: "26px",
    buttonBorderRadius: "20px",
    buttonBorderWidth: "2px",
    buttonFontSize: "1rem",
    buttonBorderStyle: "solid",
    buttonFillTextColor: "#fff",
    buttonFillBackgroundColor: "#fff",
    buttonOutlineHoverTextColor: "#fff",
    inputBorderRadius: "8px",
    inputBorderWidth: "1px",
    inputBorderWidthFocus: "2px",
    inputBorderStyle: "solid",
    inputBackgroundColor: "#fff",
    modalShadowColor: "rgba(0, 0, 0, 0.16)",
    modalBackgroundColor: "#f5f8f8",
    modalHeaderBackgroundColor: "#fff",
    snackbarTextColor: "#fff",
    snackbarInfoBackgroundColor: "#003b5e",
    snackbarSuccessBackgroundColor: "#008a28",
    snackbarErrorBackgroundColor: "#d9291c",
    snackbarBorderRadius: "8px",
    dataGridRowBackgroundColor: "transparent",
    dataGridRowHoverBackgroundColor: "#f5e6f0",
    tabsBackgroundColor: "#FFF",
    tabBorderWidth: "2px",
    tabBorderStyle: "solid",
    tablistBorderWidth: "1px",
    tablistBorderStyle: "solid",
    tablistBorderColor: "#C3C3C7",
    tabTextColor: "#0f0f1e",
    default: "#0f0f1e",
    success: "#008a28",
    error: "#d9291c",
    disabled: "#e9e9eb",
    greyedOut: "#6f6f76",
    lightGreyBorder: "#e9e9eb",
    warning: "#ff6105",
    light: "#FFF",
    grey: "#c3c3c7",
    fontFamily: "'Red Hat Display', sans-serif",
    fontFamilyCode: "'Red Hat Mono', monospace",
    fontSize: "1rem",
    fontSizeH1: "2.5rem",
    fontSizeH2: "1.625rem",
    fontSizeH3: "1.5rem",
    fontSizeH4: "1.25rem",
    fontSizeSub: ".75rem",
    fontSizeCode: "1rem"
  };

  /** We need a loading state, because otherwise you see the colors flash from the default to the possible overridden ones. */
  const [isLoading, setIsLoading] = useState(true);

  /** Set the actual CSS properties on the HTML :root object */
  const setCSSProperties = (CSSPropertiesObject: CSSProperties) => {
    for (const [key, value] of Object.entries(CSSPropertiesObject)) {
      const formattedPropertyName = key.replace(/([A-Z])/g, val => `-${val.toLowerCase()}`);
      document.documentElement.style.setProperty(`--${formattedPropertyName}`, value);
    }
  };

  /** Check if the properties prop object is filled with anything. If it is, we want to shallow merge it with the default BaseStyling. */
  useEffect(() => {
    if (Object.keys(properties).length !== 0) {
      const mergedState = { ...defaultProperties, ...properties };
      setCSSProperties(mergedState);
    } else {
      setCSSProperties(defaultProperties);
    }
    setIsLoading(false);
  }, [properties]);

  /** Only render if we're not loading */
  return !isLoading ? <Fragment>{children}</Fragment> : null;
};
