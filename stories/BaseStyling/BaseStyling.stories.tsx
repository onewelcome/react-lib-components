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

import React, { Fragment } from "react";
import { Meta, Story } from "@storybook/react";
import { BaseStyling as BaseStylingComponent, Props } from "../../src/_BaseStyling_/BaseStyling";
import BaseStylingDocumentation from "./BaseStyling.mdx";
import { ArgsTable } from "@storybook/addon-docs";
import { Button } from "../../src/Button/Button";

const meta: Meta = {
  title: "components/layout/BaseStyling",
  component: BaseStylingComponent,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true }
    },
    docs: {
      page: BaseStylingDocumentation
    }
  }
};

export default meta;

const Template: Story<Props> = args => {
  console.log(args);
  return (
    <BaseStylingComponent {...args}>
      <Fragment>
        <Button>Example</Button>
      </Fragment>
    </BaseStylingComponent>
  );
};

export const BaseStyling = Template.bind({});

BaseStyling.args = {
  properties: {
    colorFocus: "#9e006b",
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
  }
};

const shouldBeColorPicker = [
  "colorFocus",
  "colorPrimary",
  "colorSecondary",
  "colorTertiary",
  "buttonFillTextColor",
  "buttonFillBackgroundColor",
  "buttonOutlineHoverTextColor",
  "inputBackgroundColor",
  "modalShadowColor",
  "modalBackgroundColor",
  "modalHeaderBackgroundColor",
  "snackbarTextColor",
  "snackbarInfoBackgroundColor",
  "snackbarSuccessBackgroundColor",
  "snackbarErrorBackgroundColor",
  "dataGridRowBackgroundColor",
  "dataGridRowHoverBackgroundColor",
  "tabsBackgroundColor",
  "tablistBorderColor",
  "tabTextColor",
  "default",
  "success",
  "error",
  "disabled",
  "greyedOut",
  "lightGreyBorder",
  "warning",
  "light",
  "grey"
];

BaseStyling.argTypes = {};

shouldBeColorPicker.forEach(arg => {
  BaseStyling.argTypes[arg] = { control: "color" };
});

<ArgsTable />;
