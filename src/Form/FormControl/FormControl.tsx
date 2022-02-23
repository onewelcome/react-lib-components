import React, { HTMLAttributes, ReactChild } from 'react';
import classes from './FormControl.module.scss';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild | ReactChild[];
  grid?: number;
}

export const FormControl = ({
  children,

  className,
  grid,
  ...rest
}: Props) => {
  const renderGrid = () => {
    if (!children) {
      throw new Error('Please pass children to the FormControl element.');
    }

    if (grid && grid > 3) {
      throw new Error(
        'FormControl currently does not support more than 3 form fields next to each other'
      );
    }

    // Always turn children into an array.
    if (!Array.isArray(children)) {
      children = [children];
    }

    return children.map((child, index) => (
      <div key={index} className={`${classes['col-' + grid]} ${classes.column}`}>
        {child}
      </div>
    ));
  };

  return (
    <div
      className={`${classes['form-control']} ${className ? className : ''} ${
        grid && grid > 1 ? classes.grid : ''
      }`}
      {...rest}
    >
      {grid && grid > 1 ? renderGrid() : children}
    </div>
  );
};
