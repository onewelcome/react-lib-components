import React, { Fragment, ReactElement } from 'react';
import readyclasses from '../../readyclasses.module.scss';
import classes from './Fieldset.module.scss';
import { HTMLProps } from '../../interfaces';

type TitleStyle = 'h1' | 'h2' | 'h3' | 'body' | 'body-bold';

export interface Props extends HTMLProps<HTMLFieldSetElement> {
  children?: ReactElement | ReactElement[];
  title: string;
  titleStyle?: TitleStyle;
  hideTitle?: boolean;
  background?: string;
  noPadding?: boolean;
  noBackground?: boolean;
}

export const Fieldset = ({
  children,
  className,
  title,
  titleStyle = 'body',
  hideTitle = false,
  noBackground,
  background = noBackground ? '' : '#FFF',
  noPadding = false,
  disabled = false,
  ...rest
}: Props) => {
  const validTitleStyles = ['h1', 'h2', 'h3', 'body', 'body-bold'];

  if (!validTitleStyles.includes(titleStyle)) {
    throw new Error(
      `You entered an invalid titleStyle. You can choose from: ${validTitleStyles}, you entered: ${titleStyle}`
    );
  }

  const renderChildren = () => {
    let clonedChildren = !Array.isArray(children) ? [children] : children;

    return (clonedChildren as ReactElement[]).map((child, index) => (
      <Fragment key={index}>
        {React.cloneElement(child, {
          fieldsetDisabled: disabled,
        })}
      </Fragment>
    ));
  };

  return (
    <fieldset
      {...rest}
      disabled={disabled}
      style={{ backgroundColor: background, ...rest.style }}
      className={`${classes.fieldset} ${noPadding ? classes['no-padding'] : ''} ${className ?? ''}`}
    >
      {title && <legend className={readyclasses['sr-only']}>{title}</legend>}
      {title && !hideTitle && (
        <span className={`style-${titleStyle} ${classes.title}`} aria-hidden="true">
          {title}
        </span>
      )}
      {renderChildren()}
    </fieldset>
  );
};
