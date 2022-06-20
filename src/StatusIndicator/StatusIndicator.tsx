import React, { ComponentPropsWithRef, ReactNode } from 'react';

export interface Props extends ComponentPropsWithRef<'div'> {
  children?: ReactNode;
}

export const StatusIndicator = ({ children, ...rest }: Props) => {
  return <div {...rest}>{children} </div>;
};
