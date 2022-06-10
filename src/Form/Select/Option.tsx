import React, { ComponentPropsWithRef, useEffect, useState } from 'react';
import classes from './Select.module.scss';

export interface Props extends ComponentPropsWithRef<'li'> {
  children: string;
  value: string;
  disabled?: boolean;
  selected?: boolean;
  label?: string;
  filter?: string;
  onOptionSelect?: (event: React.SyntheticEvent<HTMLLIElement>) => void;
}

export const Option = React.forwardRef<HTMLLIElement, Props>(
  (
    {
      children,
      className,
      selected = false,
      onOptionSelect,
      disabled,
      filter,
      value,
      ...rest
    }: Props,
    ref
  ) => {
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
        ref={ref}
        data-value={value}
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
  }
);
