import React, { ComponentPropsWithRef, ReactChild, ReactElement } from 'react';
import classes from './SelectWrapper.module.scss';
import { Wrapper, WrapperProps } from '../Wrapper/Wrapper';
import { Select, Props as SelectProps } from '../../Select/Select';
import { useWrapper } from '../../../hooks/useWrapper';

interface PartialSelectProps extends Partial<SelectProps> {}

export interface Props
  extends Omit<ComponentPropsWithRef<'div'>, 'onChange'>,
    Omit<WrapperProps, 'onChange' | 'error'> {
  children: ReactChild | ReactChild[];
  placeholder?: string;
  value: string;
  error?: boolean;
  selectProps?: PartialSelectProps;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onClear?: () => void;
}

export const SelectWrapper = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      error,
      value,
      placeholder,
      selectProps,
      helperProps,
      onChange,
      onClear,
      ...rest
    }: Props,
    ref
  ) => {
    const { errorId, floatingLabelActive, helperId, labelId } = useWrapper(value, placeholder);

    return (
      <Wrapper
        {...rest}
        ref={ref}
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
  }
);
