import React, { HTMLProps } from 'react';

export interface Props extends HTMLProps<HTMLAnchorElement> {
  children: string;
}

//@TODO: remove, and use Michal's Link component
export const Link = ({ children, ...restProps }: Props) => {
  return (
    <a {...restProps} style={{ lineHeight: '1.5rem' }}>
      {children}
    </a>
  );
};
