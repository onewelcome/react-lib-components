import React, { HTMLAttributes, ReactNode } from 'react';
import classes from './Typography.module.scss';
import { Spacing, useSpacing } from '../hooks/useSpacing';

export interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-bold' | 'sub-text' | 'code';
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
  spacing?: Spacing;
}

export const Typography = ({
  children,
  variant,
  tag,
  style,
  spacing,
  className = '',
  ...rest
}: Props) => {
  const styleWithSpacing = useSpacing(spacing, style);

  if (!tag) {
    switch (variant) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'code':
        tag = variant;
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
      default:
        tag = 'div';
        break;
    }
  }

  let TagName = tag;

  return (
    <TagName
      {...rest}
      style={styleWithSpacing}
      className={`${classes['typography_style_' + variant]} ${className}`}
    >
      {children}
    </TagName>
  );
};
