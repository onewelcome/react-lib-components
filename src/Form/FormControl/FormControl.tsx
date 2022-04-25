import React, { ReactElement } from 'react';
import classes from './FormControl.module.scss';
import { HTMLProps } from '../../interfaces';

export interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactElement | ReactElement[];
  grid?: 1 | 2 | 3;
  align?: 'top' | 'start' | 'middle' | 'center' | 'bottom' | 'end' | 'stretch';
}

export const FormControl = ({
  children,
  disabled,
  className,
  grid,
  align = 'center',
  ...rest
}: Props) => {
  const renderChildren = () =>
    React.Children.map(children, (child) => {
      if (!child) {
        return null;
      }

      const childElement = React.cloneElement(child, {
        disabled: child.props.disabled !== undefined ? child.props.disabled : disabled,
      });

      if (grid && grid > 1) {
        return <div className={`${classes['col-' + grid]} ${classes.column}`}>{childElement}</div>;
      }

      return childElement;
    });

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
