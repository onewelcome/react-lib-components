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

import React, {
  ComponentPropsWithRef,
  ForwardRefRenderFunction,
  Fragment,
  ReactElement
} from "react";
import { Icon, Icons } from "../Icon/Icon";
import { Link, Props as LinkProps } from "../Link/Link";
import { Typography } from "../Typography/Typography";
import classes from "./Breadcrumbs.module.scss";

type ChildrenType = ReactElement<LinkProps, typeof Link>;

export interface Props extends ComponentPropsWithRef<"div"> {
  children: ChildrenType | ChildrenType[];
  ariaLabel: string;
}

const BreadcrumbsComponent: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { children, ariaLabel, className = "", ...rest }: Props,
  ref
) => {
  const items = React.Children.map(children, (child, index) => {
    const isLastElement = Array.isArray(children) ? index === children.length - 1 : true;
    const isFirstElement = Array.isArray(children) && index === 0;
    let item = React.cloneElement(child, {
      className: classes["breadcrumb-link"],
      ...(isFirstElement
        ? {
            prefixIcon: <Icon icon={Icons.HomeFilled} style={{ marginRight: "0.35rem" }} />
          }
        : {})
    } as LinkProps);

    if (isLastElement) {
      return (
        <Typography
          key={child.key}
          variant="body"
          tag="span"
          className={classes["last"]}
          aria-current="page"
        >
          {child.props.children}
        </Typography>
      );
    } else {
      return (
        <Fragment key={child.key}>
          {item}
          <Icon icon={Icons.ChevronRight} className={classes["icon"]} />
        </Fragment>
      );
    }
  });
  return (
    <nav
      {...rest}
      ref={ref}
      aria-label={ariaLabel}
      className={`${classes["breadcrumbs"]} ${className}`}
    >
      {items}
    </nav>
  );
};

export const Breadcrumbs = React.forwardRef(BreadcrumbsComponent);
