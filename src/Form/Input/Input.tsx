import React, { HTMLAttributes, useState } from 'react';

type type =
  | 'text'
  | 'email'
  | 'file'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'time'
  | 'url'
  | 'datetime'
  | 'hidden';

export interface Props extends HTMLAttributes<HTMLInputElement> {
  type: type;
  name: string;
  value?: string;
  id?: string;
  validation?: (value: string) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input = ({ validation, onBlur, onChange, ...rest }: Props) => {
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsTouched(true);

    if (!validation || !event.currentTarget.value) return;
    validation(event.currentTarget.value);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isTouched || !validation || !event.currentTarget.value) return;

    validation(event.currentTarget.value);
  };

  return <input onChange={onChangeHandler} onBlur={onBlurHandler} {...rest} />;
};
