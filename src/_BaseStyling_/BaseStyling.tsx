import React, {
  Fragment,
  HTMLAttributes,
  ReactChild,
  useEffect,
  useState,
} from 'react';

interface CSSProperties {
  colorPrimary?: string;
  colorSecondary?: string;
  colorTertiary?: string;
  defaultFontSize?: string;
  defaultLineHeight?: string;
  buttonBorderRadius?: string;
  buttonBorderWidth?: string;
  buttonFontSize?: string;
  buttonBorderStyle?: string;
  buttonFillTextColor?: string;
  buttonOutlineHoverTextColor?: string;
  default?: string;
  success?: string;
  error?: string;
  disabled?: string;
  greyedOut?: string;
  warning?: string;
  fontFamily?: string;
  fontSizeH1?: string;
  fontSizeH2?: string;
  fontSizeH3?: string;
  fontSizeH4?: string;
  fontSizeSub?: string;
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
    defaultFontSize: '16px',
    defaultLineHeight: '26px',
    buttonBorderRadius: '20px',
    buttonBorderWidth: '2px',
    buttonFontSize: '16px',
    buttonBorderStyle: 'solid',
    buttonFillTextColor: '#FFF',
    buttonOutlineHoverTextColor: '#FFF',
    default: '#0f0f1e',
    success: '#008A28',
    error: '#e22a1d',
    disabled: '#e9e9eb',
    greyedOut: '#6f6f76',
    warning: '#ff6105',
    fontFamily: 'Helvetica, sans-serif',
    fontSizeH1: '40px',
    fontSizeH2: '26px',
    fontSizeH3: '24px',
    fontSizeH4: '20px',
    fontSizeSub: '12px',
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
      const formattedPropertyName = key.replaceAll(
        /([A-Z])/g,
        (val) => `-${val.toLowerCase()}`
      );
      document.documentElement.style.setProperty(
        `--${formattedPropertyName}`,
        value
      );
    }
  };

  setCSSProperties(colors);

  /** Only render if we're not loading */
  return !isLoading ? <Fragment>{children}</Fragment> : null;
};
