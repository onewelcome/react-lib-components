import React, { HTMLProps, ReactElement, useEffect, useRef, useState } from 'react';
import { Props as ButtonProps } from '../Button/Button';
import { Props as IconButtonProps } from '../Button/IconButton';
import { Popover } from '../Popover/Popover';
import { Placement, Offset } from '../hooks/usePosition';
import { Props as ContextMenuItemProps } from './ContextMenuItem';
import classes from './ContextMenu.module.scss';
import { useBodyClick } from '../hooks/useBodyClick';
import { createPortal } from 'react-dom';

export interface Props extends HTMLProps<HTMLDivElement> {
  trigger: ReactElement<ButtonProps> | ReactElement<IconButtonProps>;
  children: ReactElement<ContextMenuItemProps> | ReactElement<ContextMenuItemProps>[];
  placement?: Placement;
  transformOrigin?: Placement;
  offset?: Offset;
  id: string;
  show?: boolean;
  domRoot?: HTMLElement;
  onShow?: () => void;
  onClose?: () => void;
}

export const ContextMenu = ({
  trigger,
  children,
  id,
  show = false,
  onShow,
  onClose,
  placement = { horizontal: 'right', vertical: 'top' },
  offset = { top: 0, bottom: 0, left: 0, right: 0 },
  transformOrigin = { horizontal: 'left', vertical: 'top' },
  domRoot = document.body,
  ...rest
}: Props) => {
  const anchorEl = useRef<HTMLButtonElement>(null);
  const [showContextMenu, setShowContextMenu] = useState(show);

  if (!id) {
    throw new Error('You need to provide an ID to the context menu');
  }

  useBodyClick(
    (event) => {
      return showContextMenu && anchorEl.current !== event.target;
    },
    () => {
      setShowContextMenu(false);
    },
    showContextMenu
  );

  useEffect(() => {
    if (showContextMenu === true) {
      onShow && onShow();
    } else {
      onClose && onClose();
    }
  }, [showContextMenu]);

  const renderTrigger = () =>
    React.cloneElement(trigger, {
      id: id,
      'aria-haspopup': 'true',
      'aria-controls': `${id}-menu`,
      'aria-expanded': show,
      onClick: () => setShowContextMenu(!showContextMenu),
      ref: anchorEl,
    });

  return (
    <div {...rest} className={classes['context-menu']}>
      {renderTrigger()}
      {createPortal(
        <Popover
          placement={placement}
          transformOrigin={transformOrigin}
          offset={offset}
          anchorEl={anchorEl}
          show={showContextMenu}
        >
          <ul className={classes.menu} id={`${id}-menu`} aria-describedby={id} role="menu">
            {children}
          </ul>
        </Popover>,
        domRoot
      )}
    </div>
  );
};
