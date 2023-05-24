/*
 * Copyright 2022 OneWelcome B.V.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import React, { ForwardRefRenderFunction, ComponentPropsWithRef, ReactNode } from "react";
import classes from "./Typography.module.scss";
import { Spacing, useSpacing } from "../../hooks/useSpacing";

export const validVariants = [
  "h1",
  "h2",
  "h3",
  "h4",
  "body",
  "body-bold",
  "sub-text",
  "code"
] as const;
export type Variant = (typeof validVariants)[number];

type Tags =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "div"
  | "code"
  | "span"
  | "sup"
  | "sub"
  | "strong"
  | "em"
  | "small"
  | "mark"
  | "del"
  | "ins"
  | "blockquote";

export interface Props extends ComponentPropsWithRef<any> {
  children: ReactNode;
  variant: Variant;
  tag?: Tags;
  spacing?: Spacing;
}

const TypographyComponent: ForwardRefRenderFunction<any, Props> = (
  { children, variant, tag, style, spacing, className = "", ...rest }: Props,
  ref
) => {
  if (!validVariants.includes(variant)) {
    throw new Error(
      `You entered an invalid variant. You can choose from: ${validVariants}, you entered: ${variant}`
    );
  }

  const styleWithSpacing = useSpacing(spacing, style);

  if (!tag) {
    switch (variant) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "code":
        tag = variant;
        break;
      case "body":
        tag = "p";
        break;
      case "body-bold":
        tag = "p";
        break;
      case "sub-text":
        tag = "span";
        break;
      default:
        tag = "div";
        break;
    }
  }

  let TagName = tag;

  return (
    <TagName
      {...rest}
      ref={ref}
      style={styleWithSpacing}
      className={`${classes["typography_style_" + variant]} ${className}`}
    >
      {children}
    </TagName>
  );
};

export const Typography = React.forwardRef(TypographyComponent);
