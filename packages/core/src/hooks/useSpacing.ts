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

import { CSSProperties } from "react";

export type SpacingMultiplier = 0 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type SpacingMultiplierStringOrNumber = `${SpacingMultiplier}` | SpacingMultiplier;
type MultiValueSpacingMultiplier =
  | `${SpacingMultiplier} ${SpacingMultiplier} ${SpacingMultiplier} ${SpacingMultiplier}`
  | `${SpacingMultiplier} ${SpacingMultiplier} ${SpacingMultiplier}`
  | `${SpacingMultiplier} ${SpacingMultiplier}`
  | SpacingMultiplierStringOrNumber;

export interface Spacing {
  padding?: MultiValueSpacingMultiplier;
  paddingTop?: SpacingMultiplierStringOrNumber;
  paddingBottom?: SpacingMultiplierStringOrNumber;
  paddingLeft?: SpacingMultiplierStringOrNumber;
  paddingRight?: SpacingMultiplierStringOrNumber;
  margin?: MultiValueSpacingMultiplier;
  marginTop?: SpacingMultiplierStringOrNumber;
  marginBottom?: SpacingMultiplierStringOrNumber;
  marginLeft?: SpacingMultiplierStringOrNumber;
  marginRight?: SpacingMultiplierStringOrNumber;
}

const defaultFactor = 0.25;
const defaultUnit = "rem";
const spacingNumberRegex = /(\d+\.?\d*)+/g;

export const useSpacing = (
  spacingProps?: Spacing,
  style?: CSSProperties
): CSSProperties | undefined => {
  if (spacingProps) {
    return Object.entries(spacingProps).reduce<CSSProperties>((prev, [spacing, multiplier]) => {
      const matches = String(multiplier).matchAll(spacingNumberRegex);
      const cssSpacingValue = Array.from(matches)
        .map(([multiplierValue]) => `${Number(multiplierValue) * defaultFactor}${defaultUnit}`)
        .join(" ");
      return { ...prev, [spacing]: cssSpacingValue };
    }, style ?? {});
  }
  return style;
};
