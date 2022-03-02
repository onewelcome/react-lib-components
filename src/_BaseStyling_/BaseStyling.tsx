import React, { Fragment, HTMLAttributes, ReactChild, useEffect, useState } from 'react';

interface CSSProperties {
  colorPrimary?: string;
  colorSecondary?: string;
  colorTertiary?: string;
  buttonBorderRadius?: string;
  buttonBorderWidth?: string;
  buttonFontSize?: string;
  buttonBorderStyle?: string;
  buttonFillTextColor?: string;
  buttonOutlineHoverTextColor?: string;
  inputBorderColor?: string;
  inputBorderRadius?: string;
  inputBorderWidth?: string;
  inputBorderStyle?: string;
  modalShadowColor?: string;
  modalBackgroundColor?: string;
  modalHeaderBackgroundColor?: string;
  fontFamily?: string;
  fontSize?: string;
  default?: string;
  success?: string;
  error?: string;
  disabled?: string;
  greyedOut?: string;
  warning?: string;
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  properties?: CSSProperties;
}

export const BaseStyling = ({ children, properties = {} }: Props) => {
  const [colors, setColors] = useState<CSSProperties>({
    colorPrimary: '#9e006b',
    colorSecondary: '#003b5e',
    colorTertiary: '#ff1e4e',
    buttonBorderRadius: '20px',
    buttonBorderWidth: '2px',
    buttonFontSize: '16px',
    buttonBorderStyle: 'solid',
    buttonFillTextColor: '#FFF',
    buttonOutlineHoverTextColor: '#FFF',
    inputBorderColor: '#e9e9eb',
    inputBorderRadius: '8px',
    inputBorderWidth: '1px',
    inputBorderStyle: 'solid',
    modalShadowColor: 'rgba(0, 0, 0, 0.16)',
    modalBackgroundColor: '#F5F8F8',
    modalHeaderBackgroundColor: '#FFF',
    fontFamily: "'Red Hat Display', sans-serif",
    fontSize: '1rem',
    default: '#0f0f1e',
    success: '#008A28',
    error: '#e22a1d',
    disabled: '#e9e9eb',
    greyedOut: '#6f6f76',
    warning: '#ff6105',
  });

  /** We need a loading state, because otherwise you see the colors flash from the default to the possible overridden ones. */
  const [isLoading, setIsLoading] = useState(true);

  /** Check if the properties prop object is filled with anything. If it is, we want to shallow merge it with the default BaseStyling. */
  useEffect(() => {
    if (Object.keys(properties).length !== 0) {
      const mergedState = { ...colors, ...properties };
      setColors(mergedState);
    }

    setIsLoading(false);
  }, []);

  /** Set the actual CSS properties on the HTML :root object */
  const setCSSProperties = (CSSPropertiesObject: CSSProperties) => {
    for (const [key, value] of Object.entries(CSSPropertiesObject)) {
      const formattedPropertyName = key.replaceAll(/([A-Z])/g, (val) => `-${val.toLowerCase()}`);
      document.documentElement.style.setProperty(`--${formattedPropertyName}`, value);
    }
  };

  setCSSProperties(colors);

  /** Only render if we're not loading */
  return !isLoading ? <Fragment>{children}</Fragment> : null;
};
