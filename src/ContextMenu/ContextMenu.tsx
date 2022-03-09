import React, { HTMLProps, ReactElement, useState } from 'react';
import { Props as ButtonProps } from '../Button/Button';
import { Props as IconButtonProps } from '../Button/IconButton';
import { Popover, Placement, Offset } from '../Popover/Popover';
import { Props as ContextMenuItemProps } from './ContextMenuItem';
import classes from './ContextMenu.module.scss';

export interface Props extends HTMLProps<HTMLDivElement> {
  trigger: ReactElement<ButtonProps> | ReactElement<IconButtonProps>;
  children: ReactElement<ContextMenuItemProps> | ReactElement<ContextMenuItemProps>[];
  placement?: Placement;
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
  placement,
  offset,
  ...rest
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | EventTarget>(null);

  if (!id) {
    throw new Error('You need to provide an ID to the context menu');
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.target);
    onShow();
  };

  const renderTrigger = () => {
    return React.cloneElement(trigger, {
      id: id,
      ['aria-haspopup']: 'true',
      ['aria-controls']: `${id}-menu`,
      ['aria-expanded']: show,
      onClick: handleClick,
    });
  };

  return (
    <div className={classes['context-menu']} {...rest}>
      {renderTrigger()}
      <Popover placement={placement} offset={offset} anchorEl={anchorEl} show={show}>
        <ul className={classes.menu} id={`${id}-menu`} aria-describedby={id} role="menu">
          {children}
        </ul>
      </Popover>
    </div>
  );
};
