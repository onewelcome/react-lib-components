import React, { HTMLProps, ReactNode, useEffect, useState } from 'react';
import { Icon, Icons } from '../Icon/Icon';
import classes from './Tooltip.module.scss';

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'label'> {
  label: string | ReactNode;
  children: string;
}

export const Tooltip = ({ children, className, label, ...rest }: Props) => {
  const [identifier] = useState('jisoajfiaods');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!visible) return;

    function escapePressHandler(event: KeyboardEvent) {
      console.log(event);
      if (event.key === 'Escape') {
        setVisible(false);
      }
    }

    document.addEventListener('keyup', escapePressHandler);

    return () => {
      document.removeEventListener('keyup', escapePressHandler);
    };
  }, [visible]);

  const renderChildren = () => {
    if (React.isValidElement(label)) {
      return React.cloneElement(label, {
        onFocus: () => setVisible(true),
        onBlur: () => setVisible(false),
        'aria-describedby': identifier,
        tabIndex: 0,
      });
    }

    return (
      <span
        tabIndex={0}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        aria-describedby={identifier}
      >
        {label}
      </span>
    );
  };

  return (
    <div {...rest} className={`${classes.tooltip} ${className ?? ''}`}>
      {renderChildren()}
      <Icon
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        icon={Icons.InfoCircle}
      />
      {visible && (
        <div aria-hidden={!visible} id={identifier} className={classes.message}>
          {children}
        </div>
      )}
    </div>
  );
};
