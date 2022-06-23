import React, { ComponentPropsWithRef, createRef, RefObject, useEffect, useState } from 'react';
import classes from './Select.module.scss';

export interface Props extends ComponentPropsWithRef<'li'> {
  children: string;
  value: string;
  disabled?: boolean;
  isSelected?: boolean;
  selectOpened?: boolean;
  hasFocus?: boolean;
  shouldClick?: boolean;
  label?: string;
  filter?: string;
  childIndex?: number;
  onOptionSelect?: (ref: React.RefObject<HTMLLIElement>) => void;
  onFocusChange?: (childIndex: number) => void;
}

export const Option = React.forwardRef<HTMLLIElement, Props>(
  (
    {
      children,
      className,
      isSelected = false,
      shouldClick,
      hasFocus,
      selectOpened,
      childIndex,
      onOptionSelect,
      onFocusChange,
      disabled,
      filter,
      value,
      ...rest
    }: Props,
    ref
  ) => {
    const [showOption, setShowOption] = useState(true);

    let innerOptionRef = (ref as RefObject<HTMLLIElement>) || createRef<HTMLLIElement>();

    useEffect(() => {
      if (isSelected && innerOptionRef.current && shouldClick) {
        innerOptionRef.current.click();
      }
    }, [isSelected, shouldClick]);

    useEffect(() => {
      if (innerOptionRef.current && hasFocus && selectOpened) {
        onFocusChange && childIndex && onFocusChange(childIndex);
        innerOptionRef.current.focus();
      }
    }, [hasFocus, innerOptionRef, selectOpened]);

    const onSelectHandler = () => {
      if (onOptionSelect) onOptionSelect(innerOptionRef);
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
        ref={innerOptionRef}
        data-value={value}
        className={`${isSelected ? classes['selected-option'] : ''} ${
          disabled ? classes.disabled : ''
        } ${className ?? ''}`}
        onClick={onSelectHandler}
        onKeyDownCapture={(event) => (event.code === 'Enter' ? onSelectHandler() : '')}
        aria-selected={isSelected}
        role="option"
        tabIndex={disabled ? -1 : 0}
      >
        {children}
      </li>
    );
  }
);
