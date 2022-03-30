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
  ...rest
}: Props) => {
  const { errorId, helperId } = useWrapper(value);

  useEffect(() => {
    if (fieldsetProps.title === undefined) {
      console.error(
        `You should give your Fieldset component a title prop so a legend element is rendered. This error was thrown in RadioWrapper. You can add this title prop through the fieldsetProps prop by passing an object (fieldsetProps={{ title: "title here" }})`
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
      })
    );

  return (
    <Fieldset {...fieldsetProps}>
      <Wrapper
        {...rest}
        name={name}
        label=""
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
