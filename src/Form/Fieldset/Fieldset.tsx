import React, { ReactElement, ReactNode } from 'react';
import readyclasses from '../../readyclasses.module.scss';
import classes from './Fieldset.module.scss';
import { HTMLProps } from '../../interfaces';
import { Typography, Variant } from '../../Typography/Typography';
import { Button } from '../../Button/Button';

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

    /* All right, so the issue is that whenever we try to add disabled and error to a component that doesn't accept it, 
    React will throw an error. However, it might occur that we want a component inside of Fieldset because of aesthetic purposes 
    (fieldset applies a sort of container with white background and if we want to display it inside of this container... then yea).
    So instead we supply an array of components that we want to ignore and check if child.type equals one of these. */
    const ignoredComponents: ReactNode[] = [Button];

    return React.Children.map(children, (child: ReactElement) => {
      if (ignoredComponents.includes(child.type)) {
        return child;
      }

      return React.cloneElement(child, {
        disabled: child.props.disabled !== undefined ? child.props.disabled : disabled,
        error: child.props.error !== undefined ? child.props.error : error,
      });
    });
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
