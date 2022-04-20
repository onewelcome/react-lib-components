import React, { Fragment, HTMLProps, ReactElement } from 'react';
import { Icon, Icons } from '../Icon/Icon';
import { Link, Props as LinkProps } from '../Link/Link';
import { Typography } from '../Typography/Typography';
import classes from './Breadcrumbs.module.scss';

type ChildrenType = ReactElement<LinkProps, typeof Link>;

export interface Props extends HTMLProps<HTMLElement> {
  children: ChildrenType | ChildrenType[];
  'aria-label': string;
}

export const Breadcrumbs = ({
  children,
  'aria-label': ariaLabel,
  className = '',
  ...rest
}: Props) => {
  const items = React.Children.map(children, (child, index) => {
    const isLastElement = Array.isArray(children) ? index === children.length - 1 : true;
    if (isLastElement) {
      return (
        <Typography
          key={child.key}
          variant="body"
          tag="span"
          className={classes['last']}
          aria-current="page"
        >
          {child.props.children}
        </Typography>
      );
    } else {
      return (
        <Fragment key={child.key}>
          {React.cloneElement(child)}
          <Icon icon={Icons.ChevronRight} className={classes['icon']} />
        </Fragment>
      );
    }
  });
  return (
    <nav {...rest} aria-label={ariaLabel} className={`${classes['breadcrumbs']} ${className}`}>
      {items}
    </nav>
  );
};
