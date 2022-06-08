import React, { ComponentPropsWithRef, ReactElement } from 'react';
import classes from './FormControl.module.scss';

export interface Props extends ComponentPropsWithRef<'div'> {
  children?: ReactElement | ReactElement[];
  grid?: 1 | 2 | 3;
  align?: 'top' | 'start' | 'middle' | 'center' | 'bottom' | 'end' | 'stretch';
  error?: boolean;
  disabled?: boolean;
}

export const FormControl = React.forwardRef<HTMLDivElement, Props>(
  ({ children, disabled, error, className, grid, align = 'center', ...rest }: Props, ref) => {
    const renderChildren = () =>
      React.Children.map(children, (child) => {
        if (!child) {
          return null;
        }

        const childElement = React.cloneElement(child, {
          disabled: child.props.disabled !== undefined ? child.props.disabled : disabled,
          error: child.props.error !== undefined ? child.props.error : error,
        });

        if (grid && grid > 1) {
          return (
            <div className={`${classes['col-' + grid]} ${classes.column}`}>{childElement}</div>
          );
        }

        return childElement;
      });

    return (
      <div
        {...rest}
        ref={ref}
        data-formcontrol
        className={`${classes['form-control']} ${className ? className : ''} ${
          grid && grid > 1 ? `${classes.grid} ${classes['grid-' + grid]}` : ''
        } ${classes[align]}`}
      >
        {renderChildren()}
      </div>
    );
  }
);
