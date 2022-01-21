import React from 'react';
import { BaseButton, Props as BaseButtonProps } from './BaseButton';

export interface Props extends BaseButtonProps {
  children?: React.ReactNode;
}

export const IconButton = ({ children }: Props) => {
  return <BaseButton>{children}</BaseButton>;
};
