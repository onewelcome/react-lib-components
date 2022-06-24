import React, { ComponentPropsWithRef, createRef, RefObject, useEffect } from 'react';
import classes from './Select.module.scss';

export interface Props extends ComponentPropsWithRef<'li'> {
  children: string;
  value: string;
  disabled?: boolean;
  isSelected?: boolean;
  selectOpened?: boolean;
  hasFocus?: boolean;
  shouldClick?: boolean;
  isSearching?: boolean;
  label?: string;
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
      isSearching,
      childIndex,
      onOptionSelect,
      onFocusChange,
      disabled,
      value,
      ...rest
    }: Props,
    ref
  ) => {
    let innerOptionRef = (ref as RefObject<HTMLLIElement>) || createRef<HTMLLIElement>();

    useEffect(() => {
      if (isSelected && innerOptionRef.current && shouldClick) {
        innerOptionRef.current.click();
      }
    }, [isSelected, shouldClick]);

    useEffect(() => {
      if (innerOptionRef.current && hasFocus && selectOpened && !isSearching) {
        onFocusChange && childIndex && onFocusChange(childIndex);
        innerOptionRef.current.focus();
      }
    }, [hasFocus, innerOptionRef, selectOpened, isSearching]);

    const onSelectHandler = () => {
      if (onOptionSelect) onOptionSelect(innerOptionRef);
    };

    return (
      <li
        {...rest}
        ref={innerOptionRef}
        data-value={value}
        className={`${isSelected ? classes['selected-option'] : ''} ${
          disabled ? classes.disabled : ''
        } ${className ?? ''}`}
        onClick={onSelectHandler}
        onKeyDownCapture={(event) => {
          if (event.code === 'Enter') {
            event.stopPropagation();
            event.preventDefault();

            onSelectHandler();
          }
        }}
        aria-selected={isSelected}
        role="option"
        tabIndex={disabled ? -1 : 0}
      >
        {children}
      </li>
    );
  }
);
