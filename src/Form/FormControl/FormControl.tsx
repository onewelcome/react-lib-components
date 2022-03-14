import React, { Fragment, ReactElement } from 'react';
import classes from './FormControl.module.scss';
import { HTMLProps } from '../../interfaces';

export interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactElement | ReactElement[];
  grid?: 1 | 2 | 3;
  fieldsetDisabled?: boolean;
  align?: 'top' | 'start' | 'middle' | 'center' | 'bottom' | 'end';
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
    let clonedChildren = !Array.isArray(children) ? [children] : children;

    return clonedChildren.map((child, index) => {
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
      {...rest}
      data-formcontrol
      className={`${classes['form-control']} ${className ? className : ''} ${
        grid && grid > 1 ? `${classes.grid} ${classes['grid-' + grid]}` : ''
      } ${classes[align]}`}
    >
      {renderChildren()}
    </div>
  );
};
