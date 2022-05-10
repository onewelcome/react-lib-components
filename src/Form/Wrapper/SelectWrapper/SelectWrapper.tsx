import React, { ReactChild, ReactElement, useEffect, useState } from 'react';
import classes from './SelectWrapper.module.scss';
import { Wrapper, WrapperProps } from '../Wrapper/Wrapper';
import { Select, Props as SelectProps } from '../../Select/Select';
import { useWrapper } from '../../../hooks/useWrapper';

export interface Props extends Omit<WrapperProps, 'onChange' | 'error'> {
  children: ReactChild | ReactChild[];
  placeholder?: string;
  value: string;
  error?: boolean;
  selectProps?: SelectProps;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onClear?: () => void;
}

export const SelectWrapper = ({
  children,
  error,
  value,
  placeholder,
  selectProps,
  helperProps,
  name,
  onChange,
  onClear,
  ...rest
}: Props) => {
  const [selectValue, setSelectValue] = useState(value);
  const { errorId, floatingLabelActive, helperId, labelId } = useWrapper(value, placeholder);

  useEffect(() => {
    setSelectValue(value);
  }, [value]);

  return (
    <Wrapper
      {...rest}
      name={name}
      floatingLabelActive={floatingLabelActive}
      errorId={errorId}
      helperId={helperId}
      labelProps={{ id: labelId, className: classes['select-label'] }}
      helperProps={{
        ...helperProps,
        className: `${classes['select-helper-text']} ${helperProps?.className ?? ''}`,
      }}
      error={error}
    >
      <Select
        {...selectProps}
        name={name}
        value={selectValue}
        labeledBy={labelId}
        error={error}
        describedBy={error ? errorId : helperId}
        onChange={onChange}
        onClear={onClear}
        placeholder={placeholder}
        className={`${floatingLabelActive ? classes['floating-label-active'] : ''} ${
          selectProps?.className ?? ''
        }`}
      >
        {children as ReactElement[]}
      </Select>
    </Wrapper>
  );
};
