import React from 'react';
import classes from './TextareaWrapper.module.scss';
import { Wrapper } from '../Wrapper/Wrapper';
import { WrapperProps } from '../Wrapper/Wrapper';
import { Textarea, Props as TextareaProps } from '../../Textarea/Textarea';
import { useWrapper } from '../../../hooks/useWrapper';

export interface Props extends WrapperProps {
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textareaProps?: TextareaProps;
}

export const TextareaWrapper = ({
  label,
  name,
  helperText,
  error,
  errorMessage,
  value,
  placeholder,
  textareaProps,
  onChange,
}: Props) => {
  const { errorId, floatingLabelActive, setFloatingLabelActive, setHasFocus, helperId, labelId } =
    useWrapper(value, placeholder);

  return (
    <Wrapper
      label={label}
      labelProps={{
        id: labelId,
        className: classes['textarea-label'],
      }}
      name={name}
      helperId={helperId}
      helperText={helperText}
      helperProps={{ className: classes['textarea-helper-text'] }}
      error={error}
      errorMessage={errorMessage}
      floatingLabelActive={floatingLabelActive}
      errorId={errorId}
    >
      <Textarea
        error={error}
        aria-labelledby={labelId}
        aria-describedby={error ? errorId : helperId}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => {
          setHasFocus(true);
          setFloatingLabelActive(true);
        }}
        onBlur={(e) => {
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
