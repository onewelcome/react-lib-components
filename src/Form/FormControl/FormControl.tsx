import React, { Fragment, HTMLProps, ReactElement } from 'react';
import classes from './FormControl.module.scss';

export interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactElement | ReactElement[];
  grid?: number;
  fieldsetDisabled?: boolean;
  align?: string;
}

export const FormControl = ({
  children,
  fieldsetDisabled,
  className,
  grid,
  align = 'center',
  ...rest
}: Props) => {
  const renderChildren = () => {
    if (!Array.isArray(children)) {
      children = [children];
    }

    return children.map((child, index) => {
      if (child === undefined) return;
      const childElement = React.cloneElement(child, {
        disabled: fieldsetDisabled,
      });

      if (grid && grid > 1) {
        return (
          <div key={index} className={`${classes['col-' + grid]} ${classes.column}`}>
            {childElement}
          </div>
        );
      }

      return <Fragment key={index}>{childElement}</Fragment>;
    });
  };

  return (
    <div
      data-formcontrol
      className={`${classes['form-control']} ${className ? className : ''} ${
        grid && grid > 1 ? `${classes.grid} ${classes['grid-' + grid]}` : ''
      } ${classes[align]}`}
      {...rest}
    >
      {renderChildren()}
    </div>
  );
};
