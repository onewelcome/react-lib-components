import React, { HTMLAttributes, ReactElement, useEffect } from 'react';
import { Icon, Icons } from '../../Icon/Icon';
import { FormHelperText } from '../FormHelperText/FormHelperText';
import classes from './Checkbox.module.scss';
import { useFormSelector } from '../../hooks/useFormSelector';

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  children: string | ReactElement[];
  name: string;
  label?: string;
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
  errorMessage?: string;
  checked?: boolean;
  parentHelperId?: string;
  indeterminate?: boolean;
  errorMessageId?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({
  children,
  name,
  helperText,
  indeterminate,
  errorMessageId,
  errorMessage,
  disabled,
  label,
  parentHelperId,
  error,
  checked = false,
  onChange,
  ...rest
}: CheckboxProps) => {
  const { errorId, identifier, describedBy } = useFormSelector({
    name,
    helperText,
    errorMessageId,
    errorMessage,
    error,
    parentHelperId,
  });

  useEffect(() => {
    if (!name) {
      throw new Error("Please pass a 'name' prop to your <Checkbox> component.");
    }

    if (typeof children === 'object' && indeterminate === undefined) {
      throw new Error(
        'If you have nested checkboxes you have to manage the indeterminate state by passing a boolean to the `indeterminate` prop.'
      );
    }
  }, []);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent) => {
    onChange && onChange(event as React.ChangeEvent<HTMLInputElement>);
  };

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

  const renderNestedCheckboxes = () => {
    if (typeof children === 'string') return;
    return (
      <ul className={classes['checkbox-list']}>
        {children.map((child, index) => {
          return (
            <li key={index}>
              <Checkbox
                checked={checked}
                errorMessageId={errorMessageId}
                error={error}
                {...child.props}
              >
                {child.props.children}
              </Checkbox>
            </li>
          );
        })}
      </ul>
    );
  };

  console.log(onChange);

  /** Default return value is the default checkbox */
  return (
    <div
      className={`${classes['checkbox-wrapper']} ${error ? classes.error : ''} ${
        disabled ? classes.disabled : ''
      }`}
    >
      <div className={classes['checkbox-container']}>
        <label htmlFor={identifier}>
          <input
            disabled={disabled}
            className={classes['native-input']}
            checked={checked}
            onChange={onChangeHandler}
            aria-invalid={error ? true : false}
            aria-checked={indeterminate ? 'mixed' : checked}
            aria-describedby={describedBy}
            id={identifier}
            name={name}
            type="checkbox"
            {...rest}
          />

          {indeterminate && <Icon className={classes.input} icon={Icons.MinusSquare} />}
          {checked && !indeterminate && (
            <Icon className={classes.input} icon={Icons.CheckmarkSquare} />
          )}
          {!checked && !indeterminate && <Icon className={classes.input} icon={Icons.Square} />}

          {determineLabel()}
        </label>
      </div>
      {helperText && (!error || errorMessageId || !errorMessage) && (
        <FormHelperText
          id={`${identifier}-description`}
          className={classes['helper-text']}
          indent={28}
        >
          {helperText}
        </FormHelperText>
      )}
      {errorMessage && !errorMessageId && error && (
        <span className={classes['error-message']}>
          <Icon className={classes['error-icon']} icon={Icons.Warning} />
          <span id={errorId}>{errorMessage}</span>
        </span>
      )}
      {typeof children === 'object' && renderNestedCheckboxes()}
    </div>
  );
};
