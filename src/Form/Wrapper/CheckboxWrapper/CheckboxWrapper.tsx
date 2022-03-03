import React, { Fragment, ReactElement, useEffect } from 'react';
import classes from './CheckboxWrapper.module.scss';
import { useWrapper } from '../../../hooks/useWrapper';
import { Wrapper, WrapperProps } from '../Wrapper/Wrapper';
import { Icons } from '../../../Icon/Icon';
import { Fieldset, Props as FieldsetProps } from '../../../Form/Fieldset/Fieldset';

export interface Props extends Omit<WrapperProps, 'value'> {
  children: ReactElement[] | ReactElement;
  fieldsetProps?: FieldsetProps;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxWrapper = ({
  children,
  error = false,
  errorMessage,
  helperText,
  required,
  fieldsetProps,
  name,
}: Props) => {
  const { errorId, helperId } = useWrapper();

  useEffect(() => {
    if (fieldsetProps?.title === undefined) {
      console.error(
        `You should give your Fieldset component a title prop so a legend element is rendered. This error was thrown in CheckboxWrapper. You can add this title prop through the fieldsetProps prop by passing an object (fieldsetProps={{ title: "title here" }})`
      );
    }
  }, []);

  const renderChildren = () => {
    /** Always convert children to an array, even if only 1 Checkbox component is passed */
    if (!Array.isArray(children)) {
      children = [children];
    }

    /** In order to have the individual checkboxes have their "aria-describedby" property point to the error message in this CheckboxWrapper, we have to clone the children and add these props. */
    return children?.map((child, index) => (
      <Fragment key={index}>
        {React.cloneElement(child, {
          errorMessageId: errorId,
          error: error,
          parentHelperId: helperText ? helperId : false,
        })}
      </Fragment>
    ));
  };

  return (
    <Wrapper
      name={name}
      helperId={helperId}
      helperText={helperText}
      required={required}
      helperProps={{
        className: `${classes['checkbox-wrapper-helper']} ${
          error ? classes['checkbox-wrapper-error'] : ''
        }`,
      }}
      error={error}
      errorMessage={errorMessage}
      errorMessageIcon={Icons.Warning}
      errorId={errorId}
    >
      <Fieldset {...fieldsetProps}>{renderChildren()}</Fieldset>
    </Wrapper>
  );
};
