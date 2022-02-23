import React, { HTMLAttributes, ReactChild } from 'react';
import readyclasses from '../../readyclasses.module.scss';
import classes from './Fieldset.module.scss';

type TitleStyle = 'h1' | 'h2' | 'h3' | 'body' | 'body-bold';

export interface Props extends HTMLAttributes<HTMLFieldSetElement> {
  children?: ReactChild | ReactChild[];
  title: string;
  titleStyle: TitleStyle;
  background?: string;
  noPadding?: boolean;
  noBackground?: boolean;
}

export const Fieldset = ({
  children,
  title,
  titleStyle = 'body',
  noBackground,
  background = noBackground ? '' : '#FFF',
  noPadding = false,
  ...rest
}: Props) => {
  const validTitleStyles = ['h1', 'h2', 'h3', 'body', 'body-bold'];

  if (!validTitleStyles.includes(titleStyle)) {
    throw new Error(
      `You entered an invalid titleStyle. You can choose from: ${validTitleStyles}, you entered: ${titleStyle}`
    );
  }

  return (
    <fieldset
      style={{ backgroundColor: background }}
      className={`${classes.fieldset} ${noPadding ? classes['no-padding'] : ''}`}
      {...rest}
    >
      <legend className={readyclasses['sr-only']}>{title}</legend>
      <span className={`style-${titleStyle} ${classes.title}`} aria-hidden="true">
        {title}
      </span>
      {children}
    </fieldset>
  );
};
