import React, { FC, ReactChild } from 'react';
import { BaseButton, Props as BaseButtonProps } from './BaseButton';

export interface Props extends BaseButtonProps {
  children?: React.ReactNode;
}

export const IconButton: FC<Props> = ({ children }) => {
  return <BaseButton>{children}</BaseButton>;
};
