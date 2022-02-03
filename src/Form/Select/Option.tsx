import React, { HTMLAttributes, useEffect, useState } from 'react';
import classes from './Select.module.scss';

export interface Props extends HTMLAttributes<HTMLLIElement> {
  children: string;
  value: string;
  disabled?: boolean;
  selected?: boolean;
  label?: string;
  filter?: string;
  onOptionSelect?: (option: { label: string; value: string }) => void;
}

export const Option = ({
  children,
  selected = false,
  onOptionSelect,
  value,
  filter,
  ...rest
}: Props) => {
  const [showOption, setShowOption] = useState(true);

  const onSelectHandler = () => {
    if (onOptionSelect) onOptionSelect({ label: children, value: value });
  };

  useEffect(() => {
    if (filter) {
      setShowOption(
        children.toLowerCase().match(filter.toLowerCase()) !== null
      );
    } else {
      setShowOption(true);
    }
  }, [filter]);

  if (!showOption) return null;

  return (
    <li
      className={selected ? classes['selected-option'] : ''}
      onClick={onSelectHandler}
      onKeyPress={(e) => {
        e.key === 'Enter' && onSelectHandler();
      }}
      aria-selected={selected}
      role="option"
      tabIndex={0}
      {...rest}
    >
      {children}
    </li>
  );
};
