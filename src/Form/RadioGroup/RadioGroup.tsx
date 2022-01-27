import React, { HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const RadioGroup = ({ children }: Props) => {
  return <div>{children}</div>;
};
