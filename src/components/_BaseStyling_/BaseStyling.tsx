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

import React, { HTMLAttributes, ReactElement, useEffect, useRef, useState } from "react";

interface CSSProperties {
  colorFocus?: string;
  colorPrimary?: string;
  colorSecondary?: string;
  colorTertiary?: string;
  colorPrimary300?: string;
  colorPrimary500?: string;
  colorPrimary600?: string;
  colorPrimary700?: string;
  colorPrimary900?: string;
  colorBlueGrey100?: string;
  colorBlueGrey200?: string;
  colorBlueGrey400?: string;
  colorBlueGrey25?: string;
  colorBlueGrey25Transparent?: string;
  colorBlueGrey50?: string;
  colorBlueGrey500?: string;
  colorBlueGrey700?: string;
  colorBlueGrey800?: string;
  colorBlueGrey900?: string;
  colorGreen500?: string;
  colorGreen600?: string;
  colorGreen700?: string;
  colorLightBlue500?: string;
  colorLightBlue600?: string;
  colorShadowBlue?: string;
  colorOrange500?: string;
  colorOrange600?: string;
  colorOrange700?: string;
  colorRed500?: string;
  colorWhite?: string;
  colorRed600?: string;
  colorRed700?: string;
  colorBlack100?: string;
  colorBlack10?: string;
  colorBlack20?: string;
  defaultLineHeight?: string;
  buttonBorderRadius?: string;
  buttonBorderWidth?: string;
  buttonFontSize?: string;
  buttonBorderStyle?: string;
  buttonPrimaryDefaultColor?: string;
  buttonPrimaryPressedColor?: string;
  buttonFillTextColor?: string;
  buttonPrimaryHoverColor?: string;
  buttonPrimaryFocusedColor?: string;
  buttonOutlineHoverTextColor?: string;
  buttonSecondaryDefaultColor?: string;
  buttonSecondaryHoverColor?: string;
  buttonSecondaryFocusedColor?: string;
  buttonSecondaryPressedColor?: string;
  buttonWarningDefaultColor?: string;
  buttonWarningHoverColor?: string;
  buttonWarningFocusedColor?: string;
  buttonWarningPressedColor?: string;
  buttonDangerDefaultColor?: string;
  buttonDangerHoverColor?: string;
  buttonDangerFocusedColor?: string;
  buttonDangerPressedColor?: string;
  buttonDefaultColor?: string;
  buttonDefaultHoverColor?: string;
  buttonDefaultFocusedColor?: string;
  buttonDefaultPressedColor?: string;
  buttonOutlineActiveTextColor?: string;
  inputBorderRadius?: string;
  inputBorderWidth?: string;
  inputBorderWidthFocus?: string;
  inputBorderStyle?: string;
  inputBackgroundColor?: string;
  dragBackgroundColor?: string;
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
  bannerBorderWidth?: string;
  dataGridRowBackgroundColor?: string;
  dataGridRowHoverBackgroundColor?: string;
  tabsBackgroundColor?: string;
  tabActiveBorderHeight?: string;
  tabActiveBorderColor?: string;
  tablistBorderWidth?: string;
  tablistBorderStyle?: string;
  tablistBorderColor?: string;
  tabTextColor?: string;
  wizardStepIndicatorFutureColor?: string;
  default?: string;
  success?: string;
  error?: string;
  info?: string;
  disabled?: string;
  greyedOut?: string;
  lightGreyBorder?: string;
  warning?: string;
  light?: string;
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
  children?: ReactElement[] | ReactElement | string[] | string | number[] | number;
  properties?: CSSProperties;
}

export const BaseStyling = ({ children, properties = {} }: Props) => {
  const defaultProperties: CSSProperties = {
    colorBlack10: "#0000001a",
    colorPrimary300: "#6871BF",
    colorPrimary500: "#041295",
    colorPrimary600: "#030F77",
    colorPrimary700: "#020B59",
    colorPrimary900: "#01041E",
    colorBlueGrey25: "#F7F7F9",
    colorBlueGrey25Transparent: "#F7F7F980",
    colorBlueGrey50: "#EEEFF3",
    colorBlueGrey100: "#DEDEE6",
    colorBlueGrey200: "#BCBECE",
    colorBlueGrey400: "#797D9C",
    colorBlueGrey500: "#5D607E",
    colorBlueGrey700: "#383A4B",
    colorBlueGrey800: "#252733",
    colorBlueGrey900: "#131319",
    colorGreen500: "#178244",
    colorGreen600: "#126836",
    colorGreen700: "#0E4E29",
    colorLightBlue500: "#00BCDD",
    colorLightBlue600: "#0096B1",
    colorOrange500: "#E07900",
    colorOrange600: "#B36100",
    colorOrange700: "#864900",
    colorRed500: "#E01E00",
    colorRed600: "#B31800",
    colorRed700: "#861200",
    colorBlack100: "rgba(0, 0, 0, 1)",
    colorBlack20: "rgba(0, 0, 0, 0.2)",
    colorShadowBlue: "#7078C3",
    colorWhite: "#FFFFFF",
    colorFocus: "var(--color-primary300)",
    colorPrimary: "var(--color-primary500)",
    colorSecondary: "var(--color-green500)",
    colorTertiary: "var(--color-light-blue600)",
    defaultLineHeight: "1.5",
    buttonBorderRadius: "2px",
    buttonBorderWidth: "2px",
    buttonFontSize: "1rem",
    buttonBorderStyle: "solid",
    buttonFillTextColor: "var(--light)",
    buttonPrimaryDefaultColor: "var(--color-primary500)",
    buttonPrimaryHoverColor: "var(--color-primary600)",
    buttonPrimaryFocusedColor: "var(--color-primary500)",
    buttonPrimaryPressedColor: "var(--color-primary700)",
    buttonSecondaryDefaultColor: "var(--color-green500)",
    buttonSecondaryHoverColor: "var(--color-green600)",
    buttonSecondaryFocusedColor: "var(--color-green500)",
    buttonSecondaryPressedColor: "var(--color-green700)",
    buttonWarningDefaultColor: "var(--color-orange500)",
    buttonWarningHoverColor: "var(--color-orange600)",
    buttonWarningFocusedColor: "var(--color-orange500)",
    buttonWarningPressedColor: "var(--color-orange700)",
    buttonDangerDefaultColor: "var(--color-red500)",
    buttonDangerHoverColor: "var(--color-red600)",
    buttonDangerFocusedColor: "var(--color-red500)",
    buttonDangerPressedColor: "var(--color-red700)",
    buttonDefaultColor: "var(--color-blue-grey700)",
    buttonDefaultHoverColor: "var(--color-blue-grey800)",
    buttonDefaultFocusedColor: "var(--color-blue-grey700)",
    buttonDefaultPressedColor: "var(--color-blue-grey800)",
    buttonOutlineHoverTextColor: "var(--color-primary600)",
    inputBorderRadius: "2px",
    inputBorderWidth: "1px",
    inputBorderWidthFocus: "2px",
    inputBorderStyle: "solid",
    inputBackgroundColor: "var(--light)",
    dragBackgroundColor: "var(--color-blue-grey25-transparent)",
    dragBorderStyle: "solid",
    modalShadowColor: "rgba(0, 0, 0, 0.16)",
    modalBackgroundColor: "var(--color-blue-grey25)",
    modalHeaderBackgroundColor: "var(--light)",
    skeletonBackgroundColor: "var(--disabled)",
    skeletonAnimationColorRgb: "255, 255, 255",
    snackbarTextColor: "var(--light)",
    snackbarInfoBackgroundColor: "var(--color-primary500)",
    snackbarSuccessBackgroundColor: "var(--color-green500)",
    snackbarErrorBackgroundColor: "var(--color-red500)",
    snackbarBorderRadius: "2px",
    bannerBorderRadius: "2px",
    bannerBorderWidth: "0 0 0 4px",
    dataGridRowBackgroundColor: "transparent",
    dataGridRowHoverBackgroundColor: "var(--color-blue-grey25)",
    tabsBackgroundColor: "var(--light)",
    tabActiveBorderHeight: "4px",
    tabActiveBorderColor: "var(--color-primary)",
    tablistBorderWidth: "1px",
    tablistBorderStyle: "solid",
    tablistBorderColor: "var(--color-blue-grey100)",
    tabTextColor: "var(--color-blue-grey900)",
    wizardStepIndicatorFutureColor: "var(--color-blue-grey200)",
    default: "var(--color-blue-grey900)",
    success: "var(--color-green500)",
    error: "var(--color-red500)",
    info: "var(--color-primary500)",
    disabled: "var(--color-blue-grey100)",
    greyedOut: "var(--color-blue-grey400)",
    lightGreyBorder: "var(--color-blue-grey100)",
    warning: "var(--color-orange500)",
    light: "var(--color-white)",
    fontFamily: "Roboto, sans-serif",
    fontFamilyCode: "'Roboto Mono', monospace",
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
  const baseStylingWrapper = useRef(null);

  const setCSSProperties = (CSSPropertiesObject: CSSProperties) => {
    for (const [key, value] of Object.entries(CSSPropertiesObject)) {
      const formattedPropertyName = key.replace(/([A-Z])/g, val => `-${val.toLowerCase()}`);
      (baseStylingWrapper.current! as HTMLElement).style.setProperty(
        `--${formattedPropertyName}`,
        value
      );
    }
  };

  useEffect(() => {
    if (Object.keys(properties).length !== 0 && baseStylingWrapper.current) {
      const mergedState = { ...defaultProperties, ...properties };
      setCSSProperties(mergedState);
    } else if (baseStylingWrapper.current) {
      setCSSProperties(defaultProperties);
    }
    setIsLoading(false);
  }, [properties, baseStylingWrapper.current]);

  return (
    <div className="basestyling-wrapper" ref={baseStylingWrapper}>
      {!isLoading ? children : null}
    </div>
  );
};
