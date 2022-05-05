import React, { ReactElement, ReactNode, useEffect } from 'react';
import { Icon, Icons } from '../../Icon/Icon';
import { Props as FormHelperTextProps } from '../FormHelperText/FormHelperText';
import classes from './Checkbox.module.scss';
import { useFormSelector } from '../../hooks/useFormSelector';
import { FormSelector } from '../form.interfaces';
import { HTMLProps } from '../../interfaces';
import { FormSelectorWrapper } from '../FormSelectorWrapper/FormSelectorWrapper';

const isToggle = (children: ReactNode) => (children as ReactElement)?.props?.['data-toggle'];

export interface CheckboxProps extends FormSelector<HTMLInputElement> {
  children: ReactNode;
  label?: string;
  indeterminate?: boolean;
  helperProps?: FormHelperTextProps;
  wrapperProps?: HTMLProps<HTMLDivElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({
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
  wrapperProps,
  onChange,
  ...rest
}: CheckboxProps) => {
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
              disabled={disabled ? disabled : (child as CheckboxProps).disabled}
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
      {...wrapperProps}
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
      {!checked && !indeterminate && <Icon className={iconClasses.join(' ')} icon={Icons.Square} />}
      <label htmlFor={`${identifier}-checkbox`}>{determineLabel()}</label>
    </FormSelectorWrapper>
  );
};
