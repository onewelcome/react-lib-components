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
  colorSuccess?: string;
  colorWarning?: string;
  colorDanger?: string;
  colorPrimary100?: string;
  colorPrimary300?: string;
  colorPrimary500?: string;
  colorPrimary600?: string;
  colorPrimary700?: string;
  colorPrimary900?: string;
  colorBlueGrey100?: string;
  colorBlueGrey200?: string;
  colorBlueGrey300?: string;
  colorBlueGrey400?: string;
  colorBlueGrey25?: string;
  colorBlueGrey25Transparent?: string;
  colorBlueGrey50?: string;
  colorBlueGrey500?: string;
  colorBlueGrey700?: string;
  colorBlueGrey800?: string;
  colorBlueGrey900?: string;
  colorGreen100?: string;
  colorGreen200?: string;
  colorGreen500?: string;
  colorGreen600?: string;
  colorGreen700?: string;
  colorLightBlue500?: string;
  colorLightBlue600?: string;
  colorShadowBlue?: string;
  colorOrange100?: string;
  colorOrange500?: string;
  colorOrange600?: string;
  colorOrange700?: string;
  colorRed100?: string;
  colorRed200?: string;
  colorRed500?: string;
  colorRed600?: string;
  colorRed700?: string;
  colorWhite?: string;
  colorBlack100?: string;
  colorBlack20?: string;
  colorBlack10?: string;
  defaultPressedColor?: string;
  defaultHoverColor?: string;
  defaultLineHeight?: string;
  dataGridLineHeight?: string;
  focusBorderRadius?: string;
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
  buttonSuccessDefaultColor?: string;
  buttonSuccessHoverColor?: string;
  buttonSuccessFocusedColor?: string;
  buttonSuccessPressedColor?: string;
  buttonDangerDefaultColor?: string;
  buttonDangerHoverColor?: string;
  buttonDangerFocusedColor?: string;
  buttonDangerPressedColor?: string;
  buttonWarningDefaultColor?: string;
  buttonWarningHoverColor?: string;
  buttonWarningFocusedColor?: string;
  buttonWarningPressedColor?: string;
  buttonDefaultColor?: string;
  buttonDefaultHoverColor?: string;
  buttonDefaultFocusedColor?: string;
  buttonDefaultPressedColor?: string;
  buttonOutlineActiveTextColor?: string;
  checkboxUncheckedHoverColor?: string;
  checkboxUncheckedPressedColor?: string;
  checkboxCheckedHoverColor?: string;
  checkboxCheckedPressedColor?: string;
  radioHoverBackgroundColor?: string;
  radioPressedBackgroundColor?: string;
  radioHoverColor?: string;
  radioPressedColor?: string;
  defaultBorderRadius?: string;
  inputBorderRadius?: string;
  inputBorderWidth?: string;
  inputBorderWidthFocus?: string;
  inputBorderStyle?: string;
  inputBorderColor?: string;
  inputBackgroundColor?: string;
  inputHelperTextColor?: string;
  inputHoverBackgroundColor?: string;
  inputDisabledBackgroundColor?: string;
  dragBackgroundColor?: string;
  dragBorderStyle?: string;
  modalShadowColor?: string;
  modalBackgroundColor?: string;
  modalBackdropColor?: string;
  skeletonBackgroundColor?: string;
  skeletonAnimationColorRgb?: string;

  /**
   * @deprecated
   */
  snackbarTextColor?: string;
  /**
   * @deprecated
   */
  snackbarInfoBackgroundColor?: string;
  /**
   * @deprecated
   */
  snackbarSuccessBackgroundColor?: string;
  /**
   * @deprecated
   */
  snackbarErrorBackgroundColor?: string;
  /**
   * @deprecated
   */
  snackbarWarningBackgroundColor?: string;
  /**
   * @deprecated
   */
  snackbarBorderRadius?: string;

  alertTextColor?: string;
  alertTextInvertedColor?: string;

  alertNeutralBackgroundColor?: string;
  alertInfoBackgroundColor?: string;
  alertSuccessBackgroundColor?: string;
  alertErrorBackgroundColor?: string;
  alertWarningBackgroundColor?: string;

  alertNeutralInvertedColor?: string;
  alertInfoInvertedColor?: string;
  alertSuccessInvertedColor?: string;
  alertErrorInvertedColor?: string;
  alertWarningInvertedColor?: string;

  alertBorderWidth?: string;
  alertBorderRadius?: string;

  stepperWaitingColor?: string;
  stepperWaitingHoverColor?: string;
  stepperWaitingActiveColor?: string;
  stepperWaitingDisabledColor?: string;
  stepperCurrentColor?: string;
  stepperCurrentHoverColor?: string;
  stepperCurrentActiveColor?: string;
  stepperCurrentDisabledColor?: string;
  stepperDoneColor?: string;
  stepperDoneHoverColor?: string;
  stepperDoneActiveColor?: string;
  stepperDoneDisabledColor?: string;
  stepperErrorColor?: string;
  stepperErrorHoverColor?: string;
  stepperErrorActiveColor?: string;
  stepperErrorDisabledColor?: string;
  stepperDefaultTextColor?: string;
  stepperLineColor?: string;
  stepperLineBoldColor?: string;
  stepperLineDisabledColor?: string;
  stepperLineBoldDisabledColor?: string;
  stepperLabelColor?: string;
  stepperCaptionColor?: string;
  stepperCaptionErrorColor?: string;
  stepperLabelDisabledColor?: string;
  stepperCaptionDisabledColor?: string;
  stepperCaptionErrorDisabledColor?: string;
  bannerBorderRadius?: string;
  bannerBorderWidth?: string;
  dataGridRowBackgroundColor?: string;
  dataGridRowHoverBackgroundColor?: string;
  progressBarBackgroundColor?: string;
  tabsBackgroundColor?: string;
  tabActiveBorderHeight?: string;
  tabActiveBorderColor?: string;
  tabActiveTextColor?: string;
  tablistBorderWidth?: string;
  tablistBorderStyle?: string;
  tablistBorderColor?: string;
  tabTextColor?: string;
  tabHoverColor?: string;
  tabPressedColor?: string;
  toggleBackgroundColor?: string;
  tooltipBackgroundColor?: string;
  wizardStepIndicatorFutureColor?: string;
  contextMenuHoverColor?: string;
  contextMenuPressedColor?: string;
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
  fontSizeFormLabel?: string;
  fontSize?: string;
  fontSizeH1?: string;
  fontSizeH2?: string;
  fontSizeH3?: string;
  fontSizeH4?: string;
  fontSizeSub?: string;
  fontSizeCode?: string;
  formControlFontSize?: string;
  fontSizeDataGrid?: string;
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactElement[] | ReactElement | string[] | string | number[] | number;
  properties?: CSSProperties;
}

export const BaseStyling = ({ children, properties = {} }: Props) => {
  const defaultProperties: CSSProperties = {
    colorPrimary100: "#CDD0EA",
    colorPrimary300: "#6871BF",
    colorPrimary500: "#041295",
    colorPrimary600: "#030F77",
    colorPrimary700: "#020B59",
    colorPrimary900: "#01041E",
    colorBlueGrey25: "#F7F7F9",
    colorBlueGrey25Transparent: "rgba(247, 247, 249, .8)",
    colorBlueGrey50: "#EEEFF3",
    colorBlueGrey100: "#DEDEE6",
    colorBlueGrey200: "#BCBECE",
    colorBlueGrey300: "#9A9DB5",
    colorBlueGrey400: "#797D9C",
    colorBlueGrey500: "#5D607E",
    colorBlueGrey700: "#383A4B",
    colorBlueGrey800: "#252733",
    colorBlueGrey900: "#131319",
    colorGreen100: "#D1E6DA",
    colorGreen200: "#A2CDB4",
    colorGreen500: "#178244",
    colorGreen600: "#126836",
    colorGreen700: "#0E4E29",
    colorLightBlue500: "#00BCDD",
    colorLightBlue600: "#0096B1",
    colorOrange100: "#FFE0B2",
    colorOrange500: "#E07900",
    colorOrange600: "#B36100",
    colorOrange700: "#864900",
    colorRed100: "#FFCDD2",
    colorRed200: "#F3A599",
    colorRed500: "#E01E00",
    colorRed600: "#B31800",
    colorRed700: "#861200",
    colorBlack100: "#000000",
    colorBlack20: "rgba(0, 0, 0, 0.2)",
    colorBlack10: "rgba(0, 0, 0, 0.1)",
    colorShadowBlue: "#7078C3",
    colorWhite: "#FFFFFF",
    colorFocus: "var(--color-primary300)",
    colorPrimary: "var(--color-primary500)",
    colorSuccess: "var(--color-green500)",
    colorWarning: "var(--color-orange500)",
    colorDanger: "var(--color-red500)",
    defaultPressedColor: "var(--color-blue-grey100)",
    defaultHoverColor: "var(--color-blue-grey25)",
    defaultLineHeight: "1.5", //FIXME: UCL-395
    dataGridLineHeight: "1.25",
    defaultBorderRadius: "0.25rem",
    focusBorderRadius: "0.125rem",
    buttonBorderRadius: "0.125rem",
    buttonBorderWidth: "2px",
    buttonFontSize: "0.875rem",
    buttonBorderStyle: "solid",
    buttonFillTextColor: "var(--light)",
    buttonPrimaryDefaultColor: "var(--color-primary500)",
    buttonPrimaryHoverColor: "var(--color-primary600)",
    buttonPrimaryFocusedColor: "var(--color-primary500)",
    buttonPrimaryPressedColor: "var(--color-primary700)",
    buttonSuccessDefaultColor: "var(--color-green500)",
    buttonSuccessHoverColor: "var(--color-green600)",
    buttonSuccessFocusedColor: "var(--color-green500)",
    buttonSuccessPressedColor: "var(--color-green700)",
    buttonDangerDefaultColor: "var(--color-red500)",
    buttonDangerHoverColor: "var(--color-red600)",
    buttonDangerFocusedColor: "var(--color-red500)",
    buttonDangerPressedColor: "var(--color-red700)",
    buttonWarningDefaultColor: "var(--color-orange500)",
    buttonWarningHoverColor: "var(--color-orange600)",
    buttonWarningFocusedColor: "var(--color-orange500)",
    buttonWarningPressedColor: "var(--color-orange700)",
    buttonDefaultColor: "var(--color-blue-grey700)",
    buttonDefaultHoverColor: "var(--color-blue-grey800)",
    buttonDefaultFocusedColor: "var(--color-blue-grey700)",
    buttonDefaultPressedColor: "var(--color-blue-grey800)",
    buttonOutlineHoverTextColor: "var(--color-primary600)",
    checkboxUncheckedHoverColor: "var(--color-blue-grey50)",
    checkboxUncheckedPressedColor: "var(--default-pressed-color)",
    checkboxCheckedHoverColor: "var(--color-primary600)",
    checkboxCheckedPressedColor: "var(--color-primary700)",
    radioHoverBackgroundColor: "var(--color-blue-grey50)",
    radioPressedBackgroundColor: "var(--default-pressed-color)",
    radioHoverColor: "var(--color-primary600)",
    radioPressedColor: "var(--color-primary700)",
    inputBorderRadius: "2px",
    inputBorderWidth: "1px",
    inputBorderWidthFocus: "1px",
    inputBorderStyle: "solid",
    inputBorderColor: "var(--color-blue-grey500)",
    inputBackgroundColor: "var(--light)",
    inputHelperTextColor: "var(--color-blue-grey500)",
    inputHoverBackgroundColor: "var(--default-hover-color)",
    inputDisabledBackgroundColor: "var(--input-hover-background-color)",
    dragBackgroundColor: "var(--color-blue-grey25-transparent)",
    dragBorderStyle: "solid",
    modalShadowColor: "rgba(0, 0, 0, 0.16)",
    modalBackgroundColor: "var(--light)",
    modalBackdropColor: "var(--default)",
    skeletonBackgroundColor: "var(--disabled)",
    skeletonAnimationColorRgb: "255, 255, 255",

    snackbarTextColor: "var(--light)",
    snackbarInfoBackgroundColor: "var(--color-primary500)",
    snackbarSuccessBackgroundColor: "var(--color-green500)",
    snackbarErrorBackgroundColor: "var(--color-red500)",
    snackbarWarningBackgroundColor: "var(--color-orange500)",
    snackbarBorderRadius: "2px",

    alertTextColor: "var(--default)",
    alertTextInvertedColor: "var(--light)",

    alertNeutralBackgroundColor: "var(--color-blue-grey50)",
    alertNeutralInvertedColor: "var(--color-blue-grey500)",

    alertInfoBackgroundColor: "var(--color-primary100)",
    alertInfoInvertedColor: "var(--color-primary500)",

    alertSuccessBackgroundColor: "var(--color-green100)",
    alertSuccessInvertedColor: "var(--color-green500)",

    alertErrorBackgroundColor: "var(--color-red100)",
    alertErrorInvertedColor: "var(--color-red500)",

    alertWarningBackgroundColor: "var(--color-orange100)",
    alertWarningInvertedColor: "var(--color-orange500)",

    alertBorderWidth: "4px",
    alertBorderRadius: "2px",

    stepperWaitingColor: "var(--color-blue-grey200)",
    stepperWaitingHoverColor: "var(--color-blue-grey300)",
    stepperWaitingActiveColor: "var(--color-blue-grey400)",
    stepperWaitingDisabledColor: "var(--color-blue-grey100)",
    stepperCurrentColor: "var(--color-primary500)",
    stepperCurrentHoverColor: "var(--color-primary600)",
    stepperCurrentActiveColor: "var(--color-primary700)",
    stepperCurrentDisabledColor: "var(--color-primary100)",
    stepperDoneColor: "var(--color-green500)",
    stepperDoneHoverColor: "var(--color-green600)",
    stepperDoneActiveColor: "var(--color-green700)",
    stepperDoneDisabledColor: "var(--color-green200)",
    stepperErrorColor: "var(--color-red500)",
    stepperErrorHoverColor: "var(--color-red600)",
    stepperErrorActiveColor: "var(--color-red700)",
    stepperErrorDisabledColor: "var(--color-red200)",
    stepperDefaultTextColor: "var(--color-white)",
    stepperLineColor: "var(--color-blue-grey300)",
    stepperLineBoldColor: "var(--color-blue-grey700)",
    stepperLineDisabledColor: "var(--color-blue-grey100)",
    stepperLineBoldDisabledColor: "var(--color-blue-grey300)",
    stepperLabelColor: "var(--color-blue-grey900)",
    stepperCaptionColor: "var(--color-blue-grey500)",
    stepperCaptionErrorColor: "var(--color-red500)",
    stepperLabelDisabledColor: "var(--color-blue-grey400)",
    stepperCaptionDisabledColor: "var(--color-blue-grey400)",
    stepperCaptionErrorDisabledColor: "var(--color-red200)",
    bannerBorderRadius: "2px",
    bannerBorderWidth: "0 0 0 4px",
    dataGridRowBackgroundColor: "transparent",
    dataGridRowHoverBackgroundColor: "var(--default-hover-color)",
    progressBarBackgroundColor: "var(--disabled)",
    tabsBackgroundColor: "var(--light)",
    tabActiveBorderHeight: "0.25rem",
    tabActiveBorderColor: "var(--color-primary)",
    tabActiveTextColor: "var(--color-primary)",
    tablistBorderWidth: "0.0625rem",
    tablistBorderStyle: "solid",
    tablistBorderColor: "var(--color-blue-grey100)",
    tabTextColor: "var(--color-blue-grey900)",
    tabHoverColor: "var(--default-hover-color)",
    tabPressedColor: "var(--default-pressed-color)",
    toggleBackgroundColor: "var(--color-blue-grey100)",
    tooltipBackgroundColor: "var(--default)",
    wizardStepIndicatorFutureColor: "var(--color-blue-grey200)",
    contextMenuHoverColor: "var(--default-hover-color)",
    contextMenuPressedColor: "var(--default-pressed-color)",
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
    fontSizeFormLabel: "0.875rem", //FIXME: UCL-395
    fontSize: "1rem", //FIXME: UCL-395
    fontSizeH1: "2.5rem",
    fontSizeH2: "1.625rem",
    fontSizeH3: "1.5rem",
    fontSizeH4: "1.25rem",
    fontSizeSub: ".75rem",
    fontSizeCode: "1rem",
    formControlFontSize: "0.875rem", //FIXME: UCL-395
    fontSizeDataGrid: "0.875rem" //FIXME: UCL-395
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
