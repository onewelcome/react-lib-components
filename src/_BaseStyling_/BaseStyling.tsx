import React, { Fragment, HTMLAttributes, ReactChild, useEffect } from 'react';

interface CSSProperties {
  ColorPrimary: string;
  ColorSecondary: string;
  ColorTertiary: string;
  DefaultFontSize: string;
  ButtonPrimaryColor: string;
  ButtonSecondaryColor: string;
  ButtonTertiaryColor: string;
  ButtonborderRadius: string;
  ButtonBorderWidth: string;
  ButtonFontSize: string;
  ButtonBorderStyle: string;
  ButtonOutlineHoverTextColor: string;
  Default: string;
  Success: string;
  Error: string;
  Disabled: string;
  GreyedOut: string;
  Warning: string;
}

const defaultColorScheme: CSSProperties = {
  ColorPrimary: '#9e006b',
  ColorSecondary: '#003b5e',
  ColorTertiary: '#ff1e4e',
  DefaultFontSize: '16px',
  ButtonPrimaryColor: '#9e006b',
  ButtonSecondaryColor: '#003b5e',
  ButtonTertiaryColor: '#ff1e4e',
  ButtonborderRadius: '20px',
  ButtonBorderWidth: '2px',
  ButtonFontSize: '16px',
  ButtonBorderStyle: 'solid',
  ButtonOutlineHoverTextColor: '#FFF',
  Default: '#0f0f1e',
  Success: '#008A28',
  Error: '#e22a1d',
  Disabled: '#e9e9eb',
  GreyedOut: '#6f6f76',
  Warning: '#ff6105',
};

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  properties: CSSProperties;
}

export const BaseStyling = ({ children, properties }: Props) => {
  const CSSProperties = defaultColorScheme;

  useEffect(() => {
    // We will do a shallow merge with defaultColorScheme and set the CSS properties on the :root object.
    if (Object.keys(properties).length !== 0) {
      for (const [key, value] of Object.entries(properties)) {
        if (CSSProperties.hasOwnProperty(key)) {
        }
      }
    }

    setCSSProperties(CSSProperties);
  }, []);

  const setCSSProperties = (CSSPropertiesObject: CSSProperties) => {};

  return <Fragment>{children}</Fragment>;
};
