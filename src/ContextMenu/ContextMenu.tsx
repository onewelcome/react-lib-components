import React, { HTMLProps, ReactElement, useRef } from 'react';
import { Props as ButtonProps } from '../Button/Button';
import { Props as IconButtonProps } from '../Button/IconButton';
import { Popover } from '../Popover/Popover';
import { Placement, Offset } from '../hooks/usePosition';
import { Props as ContextMenuItemProps } from './ContextMenuItem';
import classes from './ContextMenu.module.scss';

export interface Props extends HTMLProps<HTMLDivElement> {
  trigger: ReactElement<ButtonProps> | ReactElement<IconButtonProps>;
  children: ReactElement<ContextMenuItemProps> | ReactElement<ContextMenuItemProps>[];
  placement?: Placement;
  transformOrigin?: Placement;
  offset?: Offset;
  id: string;
  show: boolean;
  onShow: () => void;
}

export const ContextMenu = ({
  trigger,
  children,
  id,
  show,
  onShow,
  placement = { horizontal: 'right', vertical: 'top' },
  offset = { top: 0, bottom: 0, left: 0, right: 0 },
  transformOrigin = { horizontal: 'left', vertical: 'top' },
  ...rest
}: Props) => {
  const anchorEl = useRef<HTMLButtonElement>(null);

  if (!id) {
    throw new Error('You need to provide an ID to the context menu');
  }

  const renderTrigger = () =>
    React.cloneElement(trigger, {
      id: id,
      ['aria-haspopup']: 'true',
      ['aria-controls']: `${id}-menu`,
      ['aria-expanded']: show,
      onClick: onShow,
      ref: anchorEl,
    });

  return (
    <div className={classes['context-menu']} {...rest}>
      {renderTrigger()}
      <Popover
        placement={placement}
        transformOrigin={transformOrigin}
        offset={offset}
        anchorEl={anchorEl}
        show={show}
      >
        <ul className={classes.menu} id={`${id}-menu`} aria-describedby={id} role="menu">
          {children}
        </ul>
      </Popover>
    </div>
  );
};
