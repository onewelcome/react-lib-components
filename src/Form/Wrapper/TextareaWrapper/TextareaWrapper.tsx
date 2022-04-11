import React, { useState } from 'react';
import classes from './TextareaWrapper.module.scss';
import { Wrapper, WrapperProps } from '../Wrapper/Wrapper';
import { Textarea, Props as TextareaProps } from '../../Textarea/Textarea';
import { useWrapper } from '../../../hooks/useWrapper';

export interface Props
  extends Omit<WrapperProps, 'onFocus' | 'onChange' | 'onBlur' | 'onMouseEnter' | 'onMouseLeave'> {
  placeholder?: string;
  textareaProps?: TextareaProps;
  value: string;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
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
  onMouseEnter,
  onMouseLeave,
  disabled,
  ...rest
}: Props) => {
  const { errorId, floatingLabelActive, setFloatingLabelActive, setHasFocus, helperId, labelId } =
    useWrapper(value, placeholder);
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <Wrapper
      {...rest}
      disabled={disabled}
      labelProps={{
        id: labelId,
        className: classes['textarea-label'],
      }}
      name={name}
      label={label}
      helperId={helperId}
      helperProps={{ ...helperProps, className: classes['textarea-helper-text'] }}
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
          setFocus(true);
        }}
        onBlur={(e) => {
          onBlur && onBlur(e);
          setHasFocus(false);
          setFocus(false);
          e.target.value || textareaProps?.placeholder?.length
            ? setFloatingLabelActive(true)
            : setFloatingLabelActive(false);
        }}
        onMouseEnter={(e) => {
          onMouseEnter && onMouseEnter(e);
          setHover(true);
        }}
        onMouseLeave={(e) => {
          onMouseLeave && onMouseLeave(e);
          setHover(false);
        }}
        className={classes['textarea']}
        wrapperClassName={`${classes['textarea-wrapper']} ${focus ? classes['focus'] : ''} ${
          hover ? classes['hover'] : ''
        } ${disabled ? classes['disabled'] : ''} ${error ? classes['error'] : ''}`}
        errorClassName={classes['error-icon']}
      />
    </Wrapper>
  );
};
