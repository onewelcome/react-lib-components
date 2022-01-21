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
  buttonPrimaryColor?: string;
  buttonSecondaryColor?: string;
  buttonTertiaryColor?: string;
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
  });

  useEffect(() => {
    // We will do a shallow merge with defaultColorScheme and set the CSS properties on the :root object.
    if (Object.keys(properties).length !== 0) {
      for (const [prop, value] of Object.entries(properties)) {
        setColors((prevState) => {
          const previousState = prevState;
          previousState[prop as keyof CSSProperties] = value;
          {
            return {
              ...previousState,
            };
          }
        });
      }
    }

    setCSSProperties(colors);
  }, []);

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

  return <Fragment>{children}</Fragment>;
};
