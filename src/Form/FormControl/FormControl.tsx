import React, { Fragment, HTMLAttributes, ReactElement } from 'react';
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

      return <Fragment key={index}>{childElement}</Fragment>;
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
