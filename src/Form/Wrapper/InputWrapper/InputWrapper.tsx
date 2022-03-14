import React from 'react';
import { Input, Type, Props as InputProps } from '../../Input/Input';
import classes from './InputWrapper.module.scss';
import { Wrapper, WrapperProps } from '../Wrapper/Wrapper';
import { useWrapper } from '../../../hooks/useWrapper';

interface optionalInputProps extends Omit<InputProps, 'type'> {}

export interface Props extends WrapperProps {
  label: string;
  type: Type;
  name: string;
  inputProps?: optionalInputProps;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const InputWrapper = ({
  type,
  name,
  inputProps,
  helperText,
  helperProps,
  value,
  error,
  onChange,
  onBlur,
  onFocus,
  ...rest
}: Props) => {
  const { errorId, floatingLabelActive, setFloatingLabelActive, setHasFocus, helperId, labelId } =
    useWrapper(value, inputProps?.placeholder, type);

  return (
    <Wrapper
      {...rest}
      name={name}
      className={classes['input-wrapper']}
      labelProps={{ id: labelId }}
      floatingLabelActive={floatingLabelActive}
      errorId={errorId}
      error={error}
      helperId={helperId}
      helperText={helperText}
      helperProps={{
        ...helperProps,
        className: `${classes['input-wrapper-helper']} ${helperProps?.className ?? ''} `,
      }}
      helperIndent={20}
    >
      <Input
        {...inputProps}
        aria-labelledby={labelId}
        aria-describedby={error ? errorId : helperId}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e)}
        onFocus={(e) => {
          onFocus && onFocus(e);
          setHasFocus(true);
          setFloatingLabelActive(true);
        }}
        onBlur={(e) => {
          onBlur && onBlur(e);
          setHasFocus(false);
          e.target.value ||
          inputProps?.placeholder?.length ||
          type === 'datetime-local' ||
          type === 'time'
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
