import React, { ComponentPropsWithRef, ReactNode } from 'react';
import classes from './Typography.module.scss';
import { Spacing, useSpacing } from '../hooks/useSpacing';

const validVariants = ['h1', 'h2', 'h3', 'h4', 'body', 'body-bold', 'sub-text', 'code'] as const;
export type Variant = typeof validVariants[number];

type Tags =
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

/** I couldn't find anything on the internet that indicated that ComponentPropsWithRef can take multiple tags. Since the TagName can be many different things I have to use any here. Using a mix of tags (like the Tags type) will throw an error. */
export interface Props extends ComponentPropsWithRef<any> {
  children: ReactNode;
  variant: Variant;
  tag?: Tags;
  spacing?: Spacing;
}

export const Typography = React.forwardRef<any, Props>(
  ({ children, variant, tag, style, spacing, className = '', ...rest }: Props, ref) => {
    if (!validVariants.includes(variant)) {
      throw new Error(
        `You entered an invalid variant. You can choose from: ${validVariants}, you entered: ${variant}`
      );
    }

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
        ref={ref}
        style={styleWithSpacing}
        className={`${classes['typography_style_' + variant]} ${className}`}
      >
        {children}
      </TagName>
    );
  }
);
