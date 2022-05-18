import React, { ReactElement, useEffect } from 'react';
import classes from './CheckboxWrapper.module.scss';
import { useWrapper } from '../../../hooks/useWrapper';
import { Wrapper, WrapperProps } from '../Wrapper/Wrapper';
import { Icons } from '../../../Icon/Icon';
import { Fieldset, Props as FieldsetProps } from '../../../Form/Fieldset/Fieldset';

export interface Props extends WrapperProps {
  children: ReactElement[] | ReactElement;
  fieldsetProps: FieldsetProps;
}

export const CheckboxWrapper = ({
  children,
  error = false,
  helperText,
  helperProps,
  fieldsetProps,
  ...rest
}: Props) => {
  const { errorId, helperId } = useWrapper();

  useEffect(() => {
    if (fieldsetProps.legend === undefined) {
      console.error(
        `You should give your Fieldset component a legend prop so a legend element is rendered. This error was thrown in CheckboxWrapper. You can add this legend prop through the fieldsetProps prop by passing an object (fieldsetProps={{ legend: "legend here" }})`
      );
    }
  }, []);

  const renderChildren = () =>
    React.Children.map(children, (child) =>
      React.cloneElement(child, {
        parentErrorId: errorId,
        error: error,
        parentHelperId: helperText ? helperId : false,
        disabled: rest.disabled,
      })
    );

  return (
    <Fieldset {...fieldsetProps} error={error} required={rest.required}>
      <Wrapper
        {...rest}
        label=""
        helperId={helperId}
        helperText={helperText}
        helperProps={{
          ...helperProps,
          className: `${classes['checkbox-wrapper-helper']} ${
            error ? classes['checkbox-wrapper-error'] : ''
          } ${helperProps?.className ?? ''}`,
        }}
        error={error}
        errorMessageIcon={Icons.Error}
        errorId={errorId}
      >
        {renderChildren()}
      </Wrapper>
    </Fieldset>
  );
};
