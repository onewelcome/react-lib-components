import React, { useEffect, useRef, useState } from 'react';
import { Input, Type, Props as InputProps } from '../../Input/Input';
import classes from './InputWrapper.module.scss';
import { Wrapper, WrapperProps } from '../Wrapper/Wrapper';
import { useWrapper } from '../../../hooks/useWrapper';

interface OptionalInputProps extends Omit<InputProps, 'type'> {}

export interface Props extends WrapperProps {
  label: string;
  type: Type;
  name: string;
  inputProps?: OptionalInputProps;
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
  const {
    errorId,
    floatingLabelActive,
    setFloatingLabelActive,
    hasFocus,
    setHasFocus,
    helperId,
    labelId,
  } = useWrapper(value, inputProps?.placeholder, type);
  const [labelStyleObject, setLabelStyleObject] = useState({});

  const wrapper = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  const labelClasses = [classes['input-label']];

  hasFocus && labelClasses.push(classes['focus']);

  useEffect(() => {
    if (wrapper.current && input.current && inputProps?.prefix) {
      const prefixDifference =
        input.current.getBoundingClientRect().left -
        wrapper.current.getBoundingClientRect().left +
        4;

      setLabelStyleObject({
        left: `${prefixDifference}px`,
      });
    }
  }, [wrapper.current, input.current, inputProps?.prefix]);

  return (
    <Wrapper
      {...rest}
      ref={wrapper}
      name={name}
      className={classes['input-wrapper']}
      labelProps={{
        id: labelId,
        className: labelClasses.join(' '),
        style: { ...labelStyleObject },
      }}
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
        wrapperProps={{ className: floatingLabelActive ? classes['floating-label-active'] : '' }}
        ref={input}
        aria-labelledby={labelId}
        aria-describedby={error ? errorId : helperId}
        onChange={onChange}
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
