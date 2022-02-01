import React, { HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const FieldDescription = ({ children, ...rest }: Props) => {
  return <div {...rest}>{children} </div>;
};
