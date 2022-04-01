import React, { HTMLProps } from 'react';
import classes from './ContextMenuItem.module.scss';

export interface Props extends Omit<HTMLProps<HTMLLIElement>, 'onClick'> {
  children?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ContextMenuItem = ({ children, onClick, ...rest }: Props) => {
  return (
    <li {...rest} role="menuitem" className={classes['context-menu-item']}>
      <button onClick={(event) => onClick && onClick(event)}>{children}</button>
    </li>
  );
};
