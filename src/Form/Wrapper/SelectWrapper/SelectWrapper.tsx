import React, { ReactChild, ReactElement } from 'react';
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
  onChange,
  onClear,
  ...rest
}: Props) => {
  const { errorId, floatingLabelActive, helperId, labelId } = useWrapper(value, placeholder);

  return (
    <Wrapper
      {...rest}
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
        value={value}
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
