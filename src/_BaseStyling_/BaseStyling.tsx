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

/**
 * If you add more CSS variables, and they are a color, make sure to go into /.storybook/addon/src/components/PanelContent.tsx
 * and make sure to add it to the shouldBeColorPicker array!
 */

import React, { Fragment, HTMLAttributes, ReactChild, useEffect, useState } from "react";

interface CSSProperties {
  colorFocus?: string;
  colorPrimary?: string;
  colorSecondary?: string;
  colorTertiary?: string;
  lightPink?: string;
  vividViolet?: string;
  colorPrimary300?: string;
  colorPrimary500?: string;
  colorPrimary600?: string;
  colorPrimary700?: string;
  colorPrimary900?: string;
  colorBlueGrey100?: string;
  colorBlueGrey200?: string;
  colorBlueGrey400?: string;
  colorBlueGrey25?: string;
  colorBlueGrey500?: string;
  colorBlueGrey700?: string;
  colorBlueGrey900?: string;
  colorGreen500?: string;
  colorLightBlue500?: string;
  colorLightBlue600?: string;
  colorOrange500?: string;
  colorRed500?: string;
  defaultLineHeight?: string;
  buttonBorderRadius?: string;
  buttonBorderWidth?: string;
  buttonFontSize?: string;
  buttonBorderStyle?: string;
  buttonFillTextColor?: string;
  buttonFillHoverBackgroundColor?: string;
  buttonOutlineHoverTextColor?: string;
  inputBorderRadius?: string;
  inputBorderWidth?: string;
  inputBorderWidthFocus?: string;
  inputBorderStyle?: string;
  inputBackgroundColor?: string;
  dragBorderStyle?: string;
  modalShadowColor?: string;
  modalBackgroundColor?: string;
  modalHeaderBackgroundColor?: string;
  skeletonBackgroundColor?: string;
  skeletonAnimationColorRgb?: string;
  snackbarTextColor?: string;
  snackbarInfoBackgroundColor?: string;
  snackbarSuccessBackgroundColor?: string;
  snackbarErrorBackgroundColor?: string;
  snackbarBorderRadius?: string;
  bannerBorderRadius?: string;
  dataGridRowBackgroundColor?: string;
  dataGridRowHoverBackgroundColor?: string;
  tabsBackgroundColor?: string;
  tabActiveBorderHeight?: string;
  tabActiveBorderColor?: string;
  tablistBorderWidth?: string;
  tablistBorderStyle?: string;
  tablistBorderColor?: string;
  tabTextColor?: string;
  default?: string;
  success?: string;
  error?: string;
  info?: string;
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
    colorPrimary300: "#6871BF",
    colorPrimary500: "#041295",
    colorPrimary600: "#030F77",
    colorPrimary700: "#020B59",
    colorPrimary900: "#01041E",
    colorBlueGrey25: "#F7F7F9",
    colorBlueGrey100: "#DEDEE6",
    colorBlueGrey200: "#BCBECE",
    colorBlueGrey400: "#797D9C",
    colorBlueGrey500: "#5D607E",
    colorBlueGrey700: "#383A4B",
    colorBlueGrey900: "#131319",
    colorGreen500: "#178244",
    colorLightBlue500: "#00BCDD",
    colorLightBlue600: "#0096B1",
    colorOrange500: "#E07900",
    colorRed500: "#E01E00",
    colorFocus: "var(--color-primary300)",
    colorPrimary: "var(--color-primary500)",
    colorSecondary: "var(--color-blue-grey700)",
    colorTertiary: "var(--color-light-blue600)",
    lightPink: "#9E006B1A",
    vividViolet: "#9E006B",
    defaultLineHeight: "1.5",
    buttonBorderRadius: "2px",
    buttonBorderWidth: "2px",
    buttonFontSize: "1rem",
    buttonBorderStyle: "solid",
    buttonFillTextColor: "var(--light)",
    buttonFillHoverBackgroundColor: "var(--light)",
    buttonOutlineHoverTextColor: "var(--light)",
    inputBorderRadius: "2px",
    inputBorderWidth: "1px",
    inputBorderWidthFocus: "2px",
    inputBorderStyle: "solid",
    inputBackgroundColor: "var(--light)",
    modalShadowColor: "rgba(0, 0, 0, 0.16)",
    modalBackgroundColor: "#f5f8f8",
    modalHeaderBackgroundColor: "var(--light)",
    skeletonBackgroundColor: "var(--disabled)",
    skeletonAnimationColorRgb: "255, 255, 255",
    snackbarTextColor: "var(--light)",
    snackbarInfoBackgroundColor: "#003b5e",
    snackbarSuccessBackgroundColor: "#008a28",
    snackbarErrorBackgroundColor: "#d9291c",
    snackbarBorderRadius: "8px",
    bannerBorderRadius: "8px",
    dataGridRowBackgroundColor: "transparent",
    dataGridRowHoverBackgroundColor: "#f5e6f0",
    tabsBackgroundColor: "var(--light)",
    tabActiveBorderHeight: "2px",
    tabActiveBorderColor: "var(--color-primary)",
    tablistBorderWidth: "1px",
    tablistBorderStyle: "solid",
    tablistBorderColor: "#C3C3C7",
    tabTextColor: "#0f0f1e",
    default: "#0f0f1e",
    success: "#008a28",
    error: "#d9291c",
    info: "var(--color-secondary)",
    disabled: "#e9e9eb",
    greyedOut: "#6f6f76",
    lightGreyBorder: "#e9e9eb",
    warning: "#ff6105",
    light: "#FFF",
    grey: "#c3c3c7",
    fontFamily: "Roboto, sans-serif",
    fontFamilyCode: "'Roboto Mono', monospace",
    fontSize: "1rem",
    fontSizeH1: "2.5rem",
    fontSizeH2: "1.625rem",
    fontSizeH3: "1.5rem",
    fontSizeH4: "1.25rem",
    fontSizeSub: ".75rem",
    fontSizeCode: "1rem",
    dragBorderStyle: "dashed"
  };

  /** We need a loading state, because otherwise you see the colors flash from the default to the possible overridden ones. */
  const [isLoading, setIsLoading] = useState(true);

  const setCSSProperties = (CSSPropertiesObject: CSSProperties) => {
    for (const [key, value] of Object.entries(CSSPropertiesObject)) {
      const formattedPropertyName = key.replace(/([A-Z])/g, val => `-${val.toLowerCase()}`);
      document.documentElement.style.setProperty(`--${formattedPropertyName}`, value);
    }
  };

  useEffect(() => {
    if (Object.keys(properties).length !== 0) {
      const mergedState = { ...defaultProperties, ...properties };
      setCSSProperties(mergedState);
    } else {
      setCSSProperties(defaultProperties);
    }
    setIsLoading(false);
  }, [properties]);

  return !isLoading ? <Fragment>{children}</Fragment> : null;
};
