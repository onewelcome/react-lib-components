import React, { ComponentPropsWithRef, Fragment, ReactElement } from "react";
import { Icon, Icons } from "../Icon/Icon";
import { Link, Props as LinkProps } from "../Link/Link";
import { Typography } from "../Typography/Typography";
import classes from "./Breadcrumbs.module.scss";

type ChildrenType = ReactElement<LinkProps, typeof Link>;

export interface Props extends ComponentPropsWithRef<"div"> {
  children: ChildrenType | ChildrenType[];
  ariaLabel: string;
}

export const Breadcrumbs = React.forwardRef<HTMLDivElement, Props>(
  ({ children, ariaLabel, className = "", ...rest }: Props, ref) => {
    const items = React.Children.map(children, (child, index) => {
      const isLastElement = Array.isArray(children) ? index === children.length - 1 : true;
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
            {React.cloneElement(child)}
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
  }
);
