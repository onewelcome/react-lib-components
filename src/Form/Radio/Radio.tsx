import React from 'react';
import { Icon, Icons } from '../../Icon/Icon';
import { Props as HelperProps } from '../FormHelperText/FormHelperText';
import classes from './Radio.module.scss';
import { useFormSelector } from '../../hooks/useFormSelector';
import { FormSelector } from '../form.interfaces';
import { HTMLProps } from '../../interfaces';
import { FormSelectorWrapper } from '../FormSelectorWrapper/FormSelectorWrapper';

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
    <FormSelectorWrapper
      {...wrapperProps}
      className={`${classes['radio-wrapper']} ${className ?? ''}`}
      containerProps={{ className: classes['radio-container'] }}
      helperText={helperText}
      helperProps={helperProps}
      parentErrorId={parentErrorId}
      errorId={errorId}
      errorMessage={errorMessage}
      error={error}
      disabled={disabled}
      identifier={identifier}
    >
      <input
        {...rest}
        disabled={disabled}
        tabIndex={0}
        className={`${classes['native-input']} ${error ? classes['error'] : ''}`}
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
    </FormSelectorWrapper>
  );
};
