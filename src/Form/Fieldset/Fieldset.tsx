import React, { ReactElement } from 'react';
import readyclasses from '../../readyclasses.module.scss';
import classes from './Fieldset.module.scss';
import { HTMLProps } from '../../interfaces';
import { Typography, Variant } from '../../Typography/Typography';

export interface Props extends HTMLProps<HTMLFieldSetElement> {
  children?: ReactElement | ReactElement[];
  title: string;
  titleVariant?: Variant;
  hideTitle?: boolean;
  background?: string;
  noPadding?: boolean;
  noBackground?: boolean;
}

export const Fieldset = ({
  children,
  className,
  title,
  titleVariant = 'body',
  hideTitle = false,
  noBackground,
  background = noBackground ? '' : '#FFF',
  noPadding = false,
  disabled = false,
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
      {title && <legend className={readyclasses['sr-only']}>{title}</legend>}
      {title && !hideTitle && (
        <Typography variant={titleVariant} tag="span" aria-hidden="true" className={classes.title}>
          {title}
        </Typography>
      )}
      {renderChildren()}
    </fieldset>
  );
};
