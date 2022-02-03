import React, { HTMLAttributes, useEffect, useState } from 'react';
import classes from './Select.module.scss';

export interface Props extends HTMLAttributes<HTMLLIElement> {
  children: string;
  value: string;
  disabled?: boolean;
  selected?: { label: string; value: string };
  label?: string;
  filter?: string;
  onOptionSelect?: (option: { label: string; value: string }) => void;
}

export const Option = ({
  children,
  selected = { label: '', value: '' },
  onOptionSelect,
  value,
  filter,
  ...rest
}: Props) => {
  const [showOption, setShowOption] = useState(true);

  const onSelectHandler = () => {
    if (onOptionSelect) onOptionSelect({ label: children, value: value });
  };

  const determineSelected = () => {
    return selected.value === value;
  };

  useEffect(() => {
    if (filter) {
      setShowOption(children.match(filter) !== null);
    }
  }, [filter]);

  if (!showOption) return null;

  return (
    <li
      className={determineSelected() ? classes['selected-option'] : ''}
      onClick={onSelectHandler}
      aria-selected={determineSelected()}
      role="option"
      {...rest}
    >
      {children}
    </li>
  );
};
