import React, { Fragment, HTMLProps, ReactElement } from 'react';
import { Icon, Icons } from '../Icon/Icon';
import classes from './Breadcrumbs.module.scss';
import { Link, Props as LinkProps } from './Link';

type ChildrenType = ReactElement<LinkProps, typeof Link>;

export interface Props extends HTMLProps<HTMLElement> {
  children: ChildrenType | ChildrenType[];
  'aria-label': string;
}

export const Breadcrumbs = ({
  children,
  'aria-label': ariaLabel,
  className = '',
  ...restProps
}: Props) => {
  const items = React.Children.map(children, (child, index) => {
    const isLastElement = Array.isArray(children) ? index === children.length - 1 : true;
    return (
      <Fragment key={child.key}>
        {React.cloneElement(child, isLastElement ? { disabled: true, 'aria-current': 'page' } : {})}
        {!isLastElement && <Icon icon={Icons.ChevronRight} className={classes['icon']} />}
      </Fragment>
    );
  });
  return (
    <nav {...restProps} aria-label={ariaLabel} className={`${classes['breadcrumbs']} ${className}`}>
      {items}
    </nav>
  );
};
