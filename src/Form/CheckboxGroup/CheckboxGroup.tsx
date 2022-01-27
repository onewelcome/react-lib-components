import React, { HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const CheckboxGroup = ({ children, ...rest }: Props) => {
  return <div {...rest}>{children} </div>;
};
