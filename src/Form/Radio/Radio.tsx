import React from 'react';
import { Icon, Icons } from '../../Icon/Icon';
import { FormHelperText, Props as HelperProps } from '../FormHelperText/FormHelperText';
import classes from './Radio.module.scss';
import { useFormSelector } from '../../hooks/useFormSelector';
import { FormSelector } from '../form.interfaces';
import { HTMLProps } from '../../interfaces';

export interface Props extends FormSelector<HTMLInputElement> {
  children: string;
  value: string;
  wrapperProps?: HTMLProps<HTMLDivElement>;
  helperProps?: HelperProps;
}

export const Radio = ({
  children,
  disabled,
  className,
  value,
  name,
  helperText,
  parentErrorId,
  parentHelperId,
  error,
  errorMessage,
  checked = false,
  wrapperProps,
  helperProps,
  onChange,
  ...rest
}: Props) => {
  const { errorId, identifier, describedBy } = useFormSelector({
    name,
    helperText,
    parentErrorId,
    errorMessage,
    error,
    parentHelperId,
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent) => {
    if (disabled) {
      return;
    }
    /** We have to clone the native event we got here and change the "target" property to the value. Otherwise, this regular event has "on" as it's event.target.value, which is useless. */
    const nativeEvent: any = event.nativeEvent || event;
    const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);

    Object.defineProperty(clonedEvent, 'target', {
      writable: true,
      value: { value: value },
    });

    onChange && onChange(clonedEvent);
  };

  /** Default return value is the default radio */
  return (
    <div
      {...wrapperProps}
      className={`${classes['radio-wrapper']} ${error ? classes.error : ''} ${
        disabled ? classes.disabled : ''
      } ${wrapperProps?.className ?? ''}`}
    >
      <div className={classes['radio-container']}>
        <input
          {...rest}
          disabled={disabled}
          tabIndex={0}
          className={`${classes['native-input']} ${className ?? ''}`}
          onChange={onChangeHandler}
          checked={checked}
          aria-invalid={error ? true : false}
          aria-checked={checked}
          aria-describedby={describedBy}
          name={name}
          value={value}
          id={`${identifier}-radio`}
          type="radio"
        />

        {checked && <Icon className={classes.input} icon={Icons.Radio} />}
        {!checked && <Icon className={classes.input} icon={Icons.Circle} />}

        <label onClick={onChangeHandler} htmlFor={`${identifier}-radio`}>
          {children}
        </label>
      </div>
      {helperText && (!error || parentErrorId || !errorMessage) && (
        <FormHelperText
          {...helperProps}
          id={`${identifier}`}
          className={`${classes['helper-text']} ${helperProps?.className ?? ''}`}
        >
          {helperText}
        </FormHelperText>
      )}
      {errorMessage && !parentErrorId && error && (
        <span className={classes['error-message']}>
          <Icon className={classes['error-icon']} icon={Icons.Warning} />
          <span id={errorId}>{errorMessage}</span>
        </span>
      )}
    </div>
  );
};
