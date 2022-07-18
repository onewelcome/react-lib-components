import React, { ComponentPropsWithRef, useEffect, useRef, useState } from 'react';
import { Input, Type, Props as InputProps } from '../../Input/Input';
import classes from './InputWrapper.module.scss';
import { Wrapper, WrapperProps } from '../Wrapper/Wrapper';
import { useWrapper } from '../../../hooks/useWrapper';

interface PartialInputProps extends Partial<InputProps> {}

export interface Props extends ComponentPropsWithRef<'div'>, WrapperProps {
  label: string;
  type: Type;
  name: string;
  inputProps?: PartialInputProps;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const useLabelOffset = (
  wrapper: React.RefObject<HTMLDivElement>,
  input: React.RefObject<HTMLInputElement>,
  floatingLabelActive: boolean,
  prefix?: string
) => {
  const [labelOffset, setLabelOffset] = useState({});

  const resetLabelOffset = () => setLabelOffset({ left: undefined });

  useEffect(() => {
    if (wrapper.current && input.current && prefix) {
      if (floatingLabelActive) {
        resetLabelOffset();
      } else {
        const prefixDifference =
          input.current.getBoundingClientRect().left -
          wrapper.current.getBoundingClientRect().left +
          4;

        setLabelOffset({ left: `${prefixDifference}px` });
      }
    }
  }, [wrapper.current, input.current, prefix, floatingLabelActive]);

  return { labelOffset };
};

export const InputWrapper = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      type,
      name,
      inputProps,
      helperText,
      helperProps,
      value,
      className,
      error,
      onChange,
      onBlur,
      onFocus,
      ...rest
    }: Props,
    ref
  ) => {
    const {
      errorId,
      floatingLabelActive,
      setFloatingLabelActive,
      hasFocus,
      setHasFocus,
      helperId,
      labelId,
    } = useWrapper(value, inputProps?.placeholder, type);
    const { prefix, suffix } = inputProps || {};
    const wrapper = useRef<HTMLDivElement>(null);
    const input = useRef<HTMLInputElement>(null);
    const hasValueOrActiveFloatingLabel = !!value || floatingLabelActive;
    const labelClasses = [classes['input-label']];
    const { labelOffset } = useLabelOffset(
      (ref as React.RefObject<HTMLDivElement>) || wrapper,
      (inputProps && (inputProps.ref as React.RefObject<HTMLInputElement>)) || input,
      floatingLabelActive,
      prefix
    );

    hasFocus && labelClasses.push(classes['focus']);

    return (
      <Wrapper
        {...rest}
        ref={ref || wrapper}
        name={name}
        className={`${classes['input-wrapper']} ${className ?? ''}`}
        labelProps={{
          id: labelId,
          className: labelClasses.join(' '),
          style: { ...labelOffset },
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
          prefix={hasValueOrActiveFloatingLabel ? prefix : ''}
          suffix={hasValueOrActiveFloatingLabel ? suffix : ''}
          wrapperProps={{
            className: `${floatingLabelActive ? classes['floating-label-active'] : ''} ${
              inputProps?.wrapperProps?.className ?? ''
            }`,
          }}
          ref={(inputProps && inputProps.ref) || input}
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
            e.target.placeholder ||
            inputProps?.placeholder?.length ||
            type === 'datetime-local' ||
            type === 'time' ||
            type === 'date'
              ? setFloatingLabelActive(true)
              : setFloatingLabelActive(false);
          }}
          className={`${floatingLabelActive ? classes['floating-label'] : ''} ${
            inputProps?.className ?? ''
          }`}
          name={name}
          error={error}
          id={name}
          value={value}
          type={type}
        />
      </Wrapper>
    );
  }
);
