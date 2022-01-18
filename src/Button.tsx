import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

const Button: FC<Props> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
