import React, { HTMLAttributes, ReactElement, useEffect } from 'react';
import { Icon, Icons } from '../..';
import { FormHelperText } from '../FormHelperText/FormHelperText';
import classes from './Checkbox.module.scss';
import { useFormSelector } from '../useFormSelector';

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
  onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  onCheck,
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

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onCheck && onCheck(event);
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
              <Checkbox errorMessageId={errorMessageId} error={error} {...child.props}>
                {child.props.children}
              </Checkbox>
            </li>
          );
        })}
      </ul>
    );
  };

  /** Default return value is the default checkbox */
  return (
    <div
      className={`${classes['checkbox-wrapper']} ${error ? classes.error : ''} ${
        disabled ? classes.disabled : ''
      }`}
    >
      <div className={classes['checkbox-container']}>
        <input
          disabled={disabled}
          className={classes['native-input']}
          onChange={onChangeHandler}
          checked={checked}
          aria-invalid={error ? true : false}
          aria-checked={indeterminate ? 'mixed' : checked}
          aria-describedby={describedBy}
          id={identifier}
          type="checkbox"
          {...rest}
        />

        {indeterminate && <Icon className={classes.input} icon={Icons.MinusSquare} />}
        {checked && !indeterminate && (
          <Icon className={classes.input} icon={Icons.CheckmarkSquare} />
        )}
        {!checked && !indeterminate && <Icon className={classes.input} icon={Icons.Square} />}

        <label htmlFor={identifier}>{determineLabel()}</label>
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
