import { CSSProperties } from 'react';

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
const defaultUnit = 'rem';
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
        .join(' ');
      return { ...prev, [spacing]: cssSpacingValue };
    }, style ?? {});
  }
  return style;
};
