import React, { Fragment, ReactElement, useEffect } from 'react';
import classes from './CheckboxWrapper.module.scss';
import { useWrapper } from '../../../hooks/useWrapper';
import { Wrapper, WrapperProps } from '../Wrapper/Wrapper';
import { Icons } from '../../../Icon/Icon';
import { Fieldset, Props as FieldsetProps } from '../../../Form/Fieldset/Fieldset';

export interface Props extends WrapperProps {
  children: ReactElement[] | ReactElement;
  fieldsetProps: FieldsetProps;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxWrapper = ({
  children,
  error = false,
  helperText,
  helperProps,
  fieldsetProps,
  onChange,
  ...rest
}: Props) => {
  const { errorId, helperId } = useWrapper();

  useEffect(() => {
    if (fieldsetProps.title === undefined) {
      console.error(
        `You should give your Fieldset component a title prop so a legend element is rendered. This error was thrown in CheckboxWrapper. You can add this title prop through the fieldsetProps prop by passing an object (fieldsetProps={{ title: "title here" }})`
      );
    }
  }, []);

  const renderChildren = () => {
    /** Always convert children to an array, even if only 1 Checkbox component is passed */
    let clonedChildren = !Array.isArray(children) ? [children] : children;

    /** In order to have the individual checkboxes have their "aria-describedby" property point to the error message in this CheckboxWrapper, we have to clone the children and add these props. */
    return clonedChildren?.map((child, index) => (
      <Fragment key={index}>
        {React.cloneElement(child, {
          onChange: onChange,
          parentErrorId: errorId,
          error: error,
          parentHelperId: helperText ? helperId : false,
        })}
      </Fragment>
    ));
  };

  return (
    <Fieldset {...fieldsetProps}>
      <Wrapper
        {...rest}
        label=""
        helperId={helperId}
        helperText={helperText}
        helperProps={{
          className: `${classes['checkbox-wrapper-helper']} ${
            error ? classes['checkbox-wrapper-error'] : ''
          }`,
        }}
        error={error}
        errorMessageIcon={Icons.Warning}
        errorId={errorId}
      >
        {renderChildren()}
      </Wrapper>
    </Fieldset>
  );
};
