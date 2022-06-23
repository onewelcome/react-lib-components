import React, { ComponentPropsWithRef, ReactElement, ReactNode, useEffect } from 'react';
import { Icon, Icons } from '../../Icon/Icon';
import { Props as FormHelperTextProps } from '../FormHelperText/FormHelperText';
import classes from './Checkbox.module.scss';
import { useFormSelector } from '../../hooks/useFormSelector';
import {
  FormSelectorWrapper,
  Props as FormSelectorWrapperProps,
} from '../FormSelectorWrapper/FormSelectorWrapper';
import { FormSelector } from '../form.interfaces';

const isToggle = (children: ReactNode) => (children as ReactElement)?.props?.['data-toggle'];

export interface Props extends ComponentPropsWithRef<'input'>, FormSelector {
  children: ReactNode;
  label?: string;
  indeterminate?: boolean;
  helperProps?: FormHelperTextProps;
  formSelectorWrapperProps?: FormSelectorWrapperProps;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      children,
      name,
      helperText,
      helperProps,
      indeterminate,
      parentErrorId,
      errorMessage,
      disabled,
      label,
      parentHelperId,
      className,
      error,
      checked = false,
      formSelectorWrapperProps,
      onChange,
      ...rest
    }: Props,
    ref
  ) => {
    const { errorId, identifier, describedBy } = useFormSelector({
      name,
      helperText,
      parentErrorId,
      errorMessage,
      error,
      parentHelperId,
    });

    useEffect(() => {
      if (!name) {
        console.error("Please pass a 'name' prop to your <Checkbox> component.");
      }

      if (typeof children === 'object' && !isToggle(children) && indeterminate === undefined) {
        throw new Error(
          'If you have nested checkboxes you have to manage the indeterminate state by passing a boolean to the `indeterminate` prop.'
        );
      }
    }, []);

    const determineLabel = () => {
      if (label) {
        return label;
      } else if (children === undefined) {
        throw new Error(
          'Please make sure to pass either a string or more Checkbox components as a child of your Checkbox component.'
        );
      }

      if (typeof children === 'string') {
        return children;
      }

      throw new Error(
        'If you pass Checkboxes as a child component (to create nested checkbox tree) you need to pass a label to the parent checkbox.'
      );
    };

    const renderNestedCheckboxes = () => (
      <ul className={classes['checkbox-list']}>
        {React.Children.map(children as ReactNode[], (child) => {
          return (
            <li>
              <Checkbox
                {...(child as ReactElement).props}
                parentHelperId={parentHelperId}
                parentErrorId={parentErrorId}
                error={error}
                disabled={disabled ? disabled : (child as Props).disabled}
              >
                {(child as ReactElement).props.children}
              </Checkbox>
            </li>
          );
        })}
      </ul>
    );

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) {
        return;
      }
      onChange && onChange(event);
    };

    const renderToggle = () => React.Children.toArray(children).filter(isToggle);

    const iconClasses = [classes['input'], disabled ? classes['disabled'] : ''];

    /** Default return value is the default checkbox */
    return (
      <FormSelectorWrapper
        {...formSelectorWrapperProps}
        className={`${classes['checkbox-wrapper']} ${className ? className : ''}`}
        containerProps={{ className: classes['checkbox-container'] }}
        helperText={helperText}
        helperProps={helperProps}
        parentErrorId={parentErrorId}
        errorId={errorId}
        errorMessage={errorMessage}
        error={error}
        disabled={disabled}
        identifier={identifier}
        nestedChildren={
          typeof children === 'object' && !isToggle(children) && renderNestedCheckboxes()
        }
      >
        <input
          {...rest}
          ref={ref}
          disabled={disabled}
          className={`${classes['native-input']} ${error ? classes['error'] : ''}`}
          checked={checked}
          onChange={onChangeHandler}
          aria-invalid={error as boolean}
          aria-checked={indeterminate ? 'mixed' : checked}
          aria-describedby={describedBy}
          id={`${identifier}-checkbox`}
          name={name}
          type="checkbox"
        />
        {renderToggle()}

        {indeterminate && <Icon className={iconClasses.join(' ')} icon={Icons.MinusSquare} />}
        {checked && !indeterminate && (
          <Icon className={iconClasses.join(' ')} icon={Icons.CheckmarkSquare} />
        )}
        {!checked && !indeterminate && (
          <Icon className={iconClasses.join(' ')} icon={Icons.Square} />
        )}
        <label htmlFor={`${identifier}-checkbox`}>{determineLabel()}</label>
      </FormSelectorWrapper>
    );
  }
);
