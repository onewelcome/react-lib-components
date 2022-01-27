import React, { HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLFormElement> {
  children?: ReactChild;
}

export const Form = ({ children, ...rest }: Props) => {
  return <form {...rest}>{children}</form>;
};
