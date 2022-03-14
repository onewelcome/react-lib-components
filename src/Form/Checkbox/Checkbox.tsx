import React, { HTMLProps, ReactElement, useEffect } from 'react';
import { Icon, Icons } from '../../Icon/Icon';
import { FormHelperText } from '../FormHelperText/FormHelperText';
import classes from './Checkbox.module.scss';
import { useFormSelector } from '../../hooks/useFormSelector';

export interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  children: string | ReactElement[];
  label?: string;
  error?: boolean;
  helperText?: string;
  errorMessage?: string;
  parentHelperId?: string;
  indeterminate?: boolean;
  errorMessageId?: string;
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
  className,
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

  const renderNestedCheckboxes = () => {
    return (
      <ul className={classes['checkbox-list']}>
        {(children as ReactElement[]).map((child, index) => {
          return (
            <li key={index}>
              <Checkbox
                parentHelperId={parentHelperId}
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

  /** Default return value is the default checkbox */
  return (
    <div
      className={`${classes['checkbox-wrapper']} ${error ? classes.error : ''} ${
        disabled ? classes.disabled : ''
      } ${className ?? ''}`}
    >
      <div className={classes['checkbox-container']}>
        <input
          disabled={disabled}
          className={classes['native-input']}
          checked={checked}
          onChange={(event) => {
            onChange && onChange(event);
          }}
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
        <label htmlFor={identifier}>{determineLabel()}</label>
      </div>
      {helperText && (!error || errorMessageId || !errorMessage) && (
        <FormHelperText id={`${identifier}`} className={classes['helper-text']} indent={28}>
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
