import React, { HTMLAttributes, ReactElement } from 'react';
import classes from './FormControl.module.scss';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement | ReactElement[];
  grid?: number;
  fieldsetDisabled?: boolean;
}

export const FormControl = ({ children, fieldsetDisabled, className, grid, ...rest }: Props) => {
  const renderChildren = () => {
    if (!Array.isArray(children)) {
      children = [children];
    }

    if (grid && grid > 1) {
      if (!children) {
        throw new Error('Please pass children to the FormControl element.');
      }

      if (grid && grid > 3) {
        throw new Error(
          'FormControl currently does not support more than 3 form fields next to each other'
        );
      }
    }

    return children.map((child, index) => {
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

      return childElement;
    });
  };

  return (
    <div
      className={`${classes['form-control']} ${className ? className : ''} ${
        grid && grid > 1 ? classes.grid : ''
      }`}
      {...rest}
    >
      {renderChildren()}
    </div>
  );
};
