import React, { HTMLProps } from 'react';
import { Input, Type, Props as InputProps } from '../../Input/Input';
import classes from './InputWrapper.module.scss';
import { Wrapper } from '../Wrapper/Wrapper';
import { useWrapper } from '../../../hooks/useWrapper';

export interface Props extends HTMLProps<HTMLDivElement> {
  label: string;
  type: Type;
  name: string;
  inputProps?: InputProps;
  helperText: string;
  errorMessage: string;
  error: boolean;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const InputWrapper = ({
  label,
  type,
  name,
  inputProps,
  helperText,
  errorMessage,
  placeholder,
  value,
  error,
  onChange,
  onBlur,
  onFocus,
  ...rest
}: Props) => {
  const { errorId, floatingLabelActive, setFloatingLabelActive, setHasFocus, helperId, labelId } =
    useWrapper(value, placeholder);

  return (
    <Wrapper
      name={name}
      label={label}
      labelProps={{ id: labelId }}
      floatingLabelActive={floatingLabelActive}
      errorId={errorId}
      error={error}
      errorMessage={errorMessage}
      helperId={helperId}
      helperText={helperText}
      helperProps={{ className: classes['input-wrapper-helper'], indent: 15 }}
      {...rest}
    >
      <Input
        aria-labelledby={labelId}
        aria-describedby={error ? errorId : helperId}
        {...inputProps}
        onChange={(e) => onChange && onChange(e)}
        onFocus={(e) => {
          onFocus && onFocus(e);
          setHasFocus(true);
          setFloatingLabelActive(true);
        }}
        onBlur={(e) => {
          onBlur && onBlur(e);
          setHasFocus(false);
          e.target.value || inputProps?.placeholder?.length
            ? setFloatingLabelActive(true)
            : setFloatingLabelActive(false);
        }}
        className={floatingLabelActive ? classes['floating-label'] : ''}
        name={name}
        error={error}
        id={name}
        value={value}
        type={type}
      />
    </Wrapper>
  );
};
