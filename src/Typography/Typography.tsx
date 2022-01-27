import React, { HTMLAttributes, ReactChild } from 'react';
import classes from './Typography.module.scss';

export interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactChild;
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body'
    | 'body-bold'
    | 'sub-text'
    | 'code';
  tag?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'p'
    | 'div'
    | 'code'
    | 'span'
    | 'sup'
    | 'sub'
    | 'strong'
    | 'em'
    | 'small'
    | 'mark'
    | 'del'
    | 'ins'
    | 'blockquote';
}

export const Typography = ({ children, variant, tag, ...rest }: Props) => {
  /** If tag is undefined, we assign defaults */
  if (!tag) {
    switch (variant) {
      case 'h1':
        tag = 'h1';
        break;
      case 'h2':
        tag = 'h2';
        break;
      case 'h3':
        tag = 'h3';
        break;
      case 'h4':
        tag = 'h4';
        break;
      case 'body':
        tag = 'p';
        break;
      case 'body-bold':
        tag = 'p';
        break;
      case 'sub-text':
        tag = 'span';
        break;
      case 'code':
        tag = 'code';
        break;
      default:
        tag = 'div';
        break;
    }
  }

  let TagName = tag as
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'p'
    | 'div'
    | 'code'
    | 'span'
    | 'sup'
    | 'sub'
    | 'strong'
    | 'em'
    | 'small'
    | 'mark'
    | 'del'
    | 'ins'
    | 'blockquote';

  return (
    <TagName {...rest} className={classes['typography_style_' + variant]}>
      {children}
    </TagName>
  );
};
