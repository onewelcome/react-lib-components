import React from 'react';
import { Icon, Icons } from '../../Icon/Icon';
import { FormHelperText } from '../FormHelperText/FormHelperText';
import classes from './Radio.module.scss';
import { useFormSelector } from '../../hooks/useFormSelector';
import { FormSelector } from '../form.interfaces';

export interface Props extends FormSelector<HTMLInputElement> {
  children: string;
  value: string;
}

export const Radio = ({
  children,
  className,
  name,
  helperText,
  parentErrorId,
  errorMessage,
  disabled,
  value,
  error,
  parentHelperId,
  checked = false,
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
      className={`${classes['radio-wrapper']} ${error ? classes.error : ''} ${
        disabled ? classes.disabled : ''
      } ${className ?? ''}`}
    >
      <div className={classes['radio-container']}>
        <input
          {...rest}
          disabled={disabled}
          tabIndex={0}
          className={classes['native-input']}
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
        <FormHelperText id={`${identifier}`} className={classes['helper-text']}>
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
