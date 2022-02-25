import React, { ReactChild, ReactElement } from 'react';
import classes from './SelectWrapper.module.scss';
import { Wrapper, WrapperProps } from '../Wrapper/Wrapper';
import { Select } from '../../Select/Select';
import { useWrapper } from '../../../hooks/useWrapper';

export interface Props extends WrapperProps {
  children: ReactChild | ReactChild[];

  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onClear?: () => void;
}

export const SelectWrapper = ({
  children,
  label,
  name,
  helperText,
  error,
  errorMessage,
  value,
  placeholder,
  onChange,
  onClear,
}: Props) => {
  const { errorId, floatingLabelActive, helperId, labelId } = useWrapper(value, placeholder);

  return (
    <Wrapper
      floatingLabelActive={floatingLabelActive}
      errorId={errorId}
      helperId={helperId}
      label={label}
      labelProps={{ id: labelId }}
      name={name}
      helperText={helperText}
      helperProps={{ className: classes['select-helper-text'] }}
      error={error}
      errorMessage={errorMessage}
    >
      <Select
        value={value}
        labeledBy={labelId}
        error={error}
        describedBy={error ? errorId : helperId}
        onChange={(e) => onChange && onChange(e)}
        onClear={onClear}
        placeholder={placeholder}
        className={floatingLabelActive ? classes['floating-label-active'] : ''}
      >
        {children as ReactElement[]}
      </Select>
    </Wrapper>
  );
};
