import React, {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from 'react';
import classes from './Link.module.scss';
import { LinkProps } from './types';

type AnchorType = 'external' | 'internal' | 'download';

export interface Props extends ComponentPropsWithRef<'a'> {
  children?: ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary';
  display?: 'link' | 'button';
  buttonVariant?: 'outline' | 'text' | 'fill';
  type?: AnchorType;
  to: string;
  disabled?: boolean;
  component?: ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>;
}

export const Link = React.forwardRef<HTMLAnchorElement, Props>(
  (
    {
      children,
      className,
      disabled = false,
      to,
      color = 'primary',
      type = 'internal',
      display = 'link',
      buttonVariant = 'fill',
      component,
      ...rest
    }: Props,
    ref
  ) => {
    const determineTarget = () => {
      if (rest.target) {
        return rest.target;
      }

      if (type === 'external') {
        return '_blank';
      }

      return '';
    };

    const classNames =
      display === 'link'
        ? [classes['link'], classes[color]]
        : [classes['button'], classes[buttonVariant], classes[color]];
    disabled && classNames.push(classes['disabled']);
    className && classNames.push(className);

    if (component) {
      return React.createElement(component, {
        ...rest,
        ref: ref,
        to: to,
        className: classNames.join(' '),
        'aria-disabled': disabled,
        style: {
          ...rest.style,
        },
        children: children,
      });
    }

    return (
      <a
        {...rest}
        ref={ref}
        download={type === 'download'}
        rel={type === 'external' ? 'noopener noreferer' : undefined}
        href={!disabled ? to : undefined}
        className={classNames.join(' ')}
        aria-disabled={disabled}
        target={determineTarget()}
        style={{
          ...rest.style,
        }}
      >
        {children}
      </a>
    );
  }
);
