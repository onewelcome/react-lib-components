import React, { ComponentState, ReactNode } from 'react';
import { Button } from '../Button/Button';
import { Icon, Icons } from '../Icon/Icon';
import { HTMLProps } from '../interfaces';

export interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  addButtonLabel: string;
  onChange: (state: ComponentState) => void;
  state: ComponentState;
}

export const Repeater = ({ children, addButtonLabel, ...rest }: Props) => {
  return (
    <div {...rest}>
      {children}
      <Button variant="outline" startIcon={<Icon icon={Icons.Plus} />}>
        {addButtonLabel}
      </Button>
    </div>
  );
};
