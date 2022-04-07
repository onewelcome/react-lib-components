import React, { ReactElement, useEffect } from 'react';
import { Icon, Icons } from '../../Icon/Icon';
import { Props as FormHelperTextProps } from '../FormHelperText/FormHelperText';
import classes from './Checkbox.module.scss';
import { useFormSelector } from '../../hooks/useFormSelector';
import { FormSelector } from '../form.interfaces';
import { HTMLProps } from '../../interfaces';
import { FormSelectorWrapper } from '../FormSelectorWrapper/FormSelectorWrapper';

export interface CheckboxProps extends FormSelector<HTMLInputElement> {
  children: string | ReactElement[];
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

    if (typeof children === 'object' && indeterminate === undefined) {
      throw new Error(
        'If you have nested checkboxes you have to manage the indeterminate state by passing a boolean to the `indeterminate` prop.'
      );
    }
  }, []);

  const determineLabel = () => {
    if (label) {
      return label;
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
      {React.Children.map(children as ReactElement[], (child) => {
        return (
          <li>
            <Checkbox
              {...child.props}
              parentHelperId={parentHelperId}
              parentErrorId={parentErrorId}
              error={error}
            >
              {child.props.children}
            </Checkbox>
          </li>
        );
      })}
    </ul>
  );

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
      nestedChildren={typeof children === 'object' && renderNestedCheckboxes()}
    >
      <input
        {...rest}
        disabled={disabled}
        className={classes['native-input']}
        checked={checked}
        onChange={(event) => {
          onChange && onChange(event);
        }}
        aria-invalid={error as boolean}
        aria-checked={indeterminate ? 'mixed' : checked}
        aria-describedby={describedBy}
        id={`${identifier}-checkbox`}
        name={name}
        type="checkbox"
      />

      {indeterminate && <Icon className={classes.input} icon={Icons.MinusSquare} />}
      {checked && !indeterminate && <Icon className={classes.input} icon={Icons.CheckmarkSquare} />}
      {!checked && !indeterminate && <Icon className={classes.input} icon={Icons.Square} />}
      <label htmlFor={`${identifier}-checkbox`}>{determineLabel()}</label>
    </FormSelectorWrapper>
  );
};
