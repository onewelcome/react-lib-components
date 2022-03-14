import React, { Fragment, HTMLAttributes, ReactChild, useEffect, useState } from 'react';

interface CSSProperties {
  colorPrimary?: string;
  colorSecondary?: string;
  colorTertiary?: string;
  defaultLineHeight?: string;
  buttonBorderRadius?: string;
  buttonBorderWidth?: string;
  buttonFontSize?: string;
  buttonBorderStyle?: string;
  buttonFillTextColor?: string;
  buttonOutlineHoverTextColor?: string;
  modalShadowColor?: string;
  modalBackgroundColor?: string;
  modalHeaderBackgroundColor?: string;
  default?: string;
  success?: string;
  error?: string;
  disabled?: string;
  greyedOut?: string;
  warning?: string;
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
  const [colors, setColors] = useState<CSSProperties>({
    colorPrimary: '#9e006b',
    colorSecondary: '#003b5e',
    colorTertiary: '#ff1e4e',
    defaultLineHeight: '26px',
    buttonBorderRadius: '20px',
    buttonBorderWidth: '2px',
    buttonFontSize: '16px',
    buttonBorderStyle: 'solid',
    buttonFillTextColor: '#FFF',
    buttonOutlineHoverTextColor: '#FFF',
    modalShadowColor: 'rgba(0, 0, 0, 0.16)',
    modalBackgroundColor: '#F5F8F8',
    modalHeaderBackgroundColor: '#FFF',
    default: '#0f0f1e',
    success: '#008A28',
    error: '#e22a1d',
    disabled: '#e9e9eb',
    greyedOut: '#6f6f76',
    warning: '#ff6105',
    fontFamily: "'Red Hat Display', sans-serif",
    fontFamilyCode: "'Red Hat Mono', sans-serif",
    fontSize: '1rem',
    fontSizeH1: '2.5rem',
    fontSizeH2: '1.625rem',
    fontSizeH3: '1.5rem',
    fontSizeH4: '1.25rem',
    fontSizeSub: '.75rem',
    fontSizeCode: '1rem',
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
