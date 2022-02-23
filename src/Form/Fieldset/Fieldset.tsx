import React, { HTMLAttributes, ReactChild } from 'react';

type TitleStyle = 'h1' | 'h2' | 'h3' | 'body' | 'body-bold';

export interface Props extends HTMLAttributes<HTMLFieldSetElement> {
  children?: ReactChild | ReactChild[];
  title: string;
  titleStyle: TitleStyle;
}

export const Fieldset = ({ children, title, ...rest }: Props) => {
  return (
    <fieldset {...rest}>
      <legend>{title}</legend>
      <span aria-hidden="true"></span>
    </fieldset>
  );
};
