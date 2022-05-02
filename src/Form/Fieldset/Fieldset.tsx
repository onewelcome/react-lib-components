import React, { ReactElement } from 'react';
import readyclasses from '../../readyclasses.module.scss';
import classes from './Fieldset.module.scss';
import { HTMLProps } from '../../interfaces';
import { Typography, Variant } from '../../Typography/Typography';

export interface Props extends HTMLProps<HTMLFieldSetElement> {
  children?: ReactElement | ReactElement[];
  legend: string;
  legendStyle?: Variant;
  hideLegend?: boolean;
  background?: string;
  noPadding?: boolean;
  noBackground?: boolean;
  required?: boolean;
  error?: boolean;
}

export const Fieldset = ({
  children,
  className,
  legend,
  legendStyle = 'body',
  hideLegend = false,
  noBackground,
  background = noBackground ? '' : '#FFF',
  noPadding = false,
  disabled = false,
  required = false,
  error = false,
  ...rest
}: Props) => {
  const renderChildren = () => {
    if (!children) return;

    return React.Children.map(children, (child: ReactElement) =>
      React.cloneElement(child, {
        disabled: child.props.disabled !== undefined ? child.props.disabled : disabled,
      })
    );
  };

  return (
    <fieldset
      {...rest}
      disabled={disabled}
      style={{ backgroundColor: background, ...rest.style }}
      className={`${classes.fieldset} ${noPadding ? classes['no-padding'] : ''} ${className ?? ''}`}
    >
      {legend && <legend className={readyclasses['sr-only']}>{legend}</legend>}
      {legend && !hideLegend && (
        <Typography
          variant={legendStyle}
          tag="span"
          aria-hidden="true"
          className={`${classes['legend']} ${required ? classes['required'] : ''} ${
            error ? classes['error'] : ''
          }`}
        >
          {legend}
        </Typography>
      )}
      {renderChildren()}
    </fieldset>
  );
};
