import React, { ReactElement, useEffect } from 'react';
import classes from './RadioWrapper.module.scss';
import { Wrapper, WrapperProps } from '../Wrapper/Wrapper';
import { useWrapper } from '../../../hooks/useWrapper';
import { Icons } from '../../../Icon/Icon';
import { Fieldset, Props as FieldsetProps } from '../../../Form/Fieldset/Fieldset';

export interface Props extends WrapperProps {
  children: ReactElement | ReactElement[];
  fieldsetProps: FieldsetProps;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioWrapper = ({
  children,
  error,
  name,
  helperText,
  helperProps,
  fieldsetProps,
  value,
  onChange,
  disabled,
  ...rest
}: Props) => {
  const { errorId, helperId } = useWrapper(value);

  useEffect(() => {
    // @ts-ignore
    // @TODO remove ignore after merging UCL-89
    if (fieldsetProps.legend === undefined) {
      console.error(
        `You should give your Fieldset component a legend prop so a legend element is rendered. This error was thrown in RadioWrapper. You can add this legend prop through the fieldsetProps prop by passing an object (fieldsetProps={{ legend: "legend here" }})`
      );
    }
  }, []);

  const renderChildren = () =>
    React.Children.map(children, (child) =>
      React.cloneElement(child, {
        parentErrorId: errorId,
        error: error,
        checked: child.props.value === value,
        name: name,
        parentHelperId: helperText ? helperId : false,
        onChange: onChange,
        disabled: child.props.disabled !== undefined ? child.props.disabled : disabled,
      })
    );

  return (
    //@ts-ignore
    //@TODO remove ignore when UCL-89 is merged
    <Fieldset {...fieldsetProps} error={error} disabled={disabled}>
      <Wrapper
        {...rest}
        disabled={disabled}
        name={name}
        helperId={helperId}
        helperText={helperText}
        helperProps={{
          ...helperProps,
          className: `${classes['radio-wrapper-helper']} ${
            error ? classes['radio-wrapper-error'] : ''
          } ${helperProps?.className ?? ''}`,
        }}
        error={error}
        errorId={errorId}
        errorMessageIcon={Icons.Warning}
        floatingLabel={false}
      >
        {renderChildren()}
      </Wrapper>
    </Fieldset>
  );
};
