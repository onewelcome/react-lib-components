import React from 'react';
import classes from './TextareaWrapper.module.scss';
import { Wrapper, WrapperProps } from '../Wrapper/Wrapper';
import { Textarea, Props as TextareaProps } from '../../Textarea/Textarea';
import { useWrapper } from '../../../hooks/useWrapper';

export interface Props extends Omit<WrapperProps, 'onFocus' | 'onChange' | 'onBlur'> {
  placeholder?: string;
  textareaProps?: TextareaProps;
  value: string;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export const TextareaWrapper = ({
  name,
  error,
  value,
  label,
  placeholder,
  textareaProps,
  helperProps,
  onChange,
  onFocus,
  onBlur,
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
  } = useWrapper(value, placeholder);

  return (
    <Wrapper
      {...rest}
      labelProps={{
        id: labelId,
        className: `${classes['textarea-label']} ${hasFocus ? classes['focus'] : ''}`,
      }}
      name={name}
      label={label}
      helperId={helperId}
      helperProps={{
        ...helperProps,
        className: classes['textarea-helper-text'],
      }}
      error={error}
      floatingLabelActive={floatingLabelActive}
      errorId={errorId}
    >
      <Textarea
        {...textareaProps}
        error={error}
        aria-labelledby={label && labelId}
        aria-describedby={error ? errorId : helperId}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={(e) => {
          onFocus && onFocus(e);
          setHasFocus(true);
          setFloatingLabelActive(true);
        }}
        onBlur={(e) => {
          onBlur && onBlur(e);
          setHasFocus(false);
          e.target.value || textareaProps?.placeholder?.length
            ? setFloatingLabelActive(true)
            : setFloatingLabelActive(false);
        }}
        className={classes.textarea}
      />
    </Wrapper>
  );
};
