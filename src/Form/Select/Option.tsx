import React, { useEffect, useState } from 'react';
import classes from './Select.module.scss';
import { HTMLProps } from '../../interfaces';

export interface Props extends HTMLProps<HTMLLIElement> {
  children: string;
  value: string;
  disabled?: boolean;
  selected?: boolean;
  label?: string;
  filter?: string;
  onOptionSelect?: (event: React.SyntheticEvent<HTMLLIElement>) => void;
}

export const Option = ({
  children,
  className,
  selected = false,
  onOptionSelect,
  disabled,
  value,
  filter,
  ...rest
}: Props) => {
  const [showOption, setShowOption] = useState(true);

  const onSelectHandler = (event: React.SyntheticEvent<HTMLLIElement>) => {
    if (onOptionSelect) onOptionSelect(event);
  };

  useEffect(() => {
    if (filter) {
      setShowOption(children.toLowerCase().match(filter.toLowerCase()) !== null);
    } else {
      setShowOption(true);
    }
  }, [filter]);

  if (!showOption) return null;

  return (
    <li
      {...rest}
      className={`${selected ? classes['selected-option'] : ''} ${
        disabled ? classes.disabled : ''
      } ${className ?? ''}`}
      onClick={onSelectHandler}
      onKeyPress={(e) => {
        e.key === 'Enter' && onSelectHandler(e);
      }}
      aria-selected={selected}
      role="option"
      tabIndex={disabled ? -1 : 0}
    >
      {children}
    </li>
  );
};
