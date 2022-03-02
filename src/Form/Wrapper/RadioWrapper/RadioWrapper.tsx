import React, { Fragment, ReactElement, useEffect } from 'react';
import classes from './RadioWrapper.module.scss';
import { Wrapper, WrapperProps } from '../Wrapper/Wrapper';
import { useWrapper } from '../../../hooks/useWrapper';
import { Icons } from '../../../Icon/Icon';
import { Fieldset, Props as FieldsetProps } from '../../../Form/Fieldset/Fieldset';

export interface Props extends WrapperProps {
  children: ReactElement | ReactElement[];
  fieldsetProps?: FieldsetProps;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioWrapper = ({
  children,
  name,
  helperText,
  error,
  errorMessage,
  fieldsetProps,
  value,
  onChange,
}: Props) => {
  const { errorId, helperId } = useWrapper(value);

  useEffect(() => {
    if (fieldsetProps?.title === undefined) {
      console.error(
        `You should give your Fieldset component a title prop so a legend element is rendered. This error was thrown in RadioWrapper. You can add this title prop through the fieldsetProps prop by passing an object (fieldsetProps={{ title: "title here" }})`
      );
    }
  }, []);

  const renderChildren = () => {
    /** Always convert children to an array, even if only 1 Radio component is passed */
    if (!Array.isArray(children)) {
      children = [children];
    }

    /** In order to have the individual Radios have their "aria-describedby" property point to the error message in this RadioWrapper, we have to clone the children and add these props. */
    return children?.map((child, index) => (
      <Fragment key={index}>
        {React.cloneElement(child, {
          errorMessageId: errorId,
          error: error,
          checked: child.props.value === value,
          name: name,
          parentHelperId: helperText ? helperId : false,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => onChange(e),
        })}
      </Fragment>
    ));
  };

  return (
    <Wrapper
      name={name}
      helperId={helperId}
      helperText={helperText}
      helperProps={{
        className: `${classes['radio-wrapper-helper']} ${
          error ? classes['radio-wrapper-error'] : ''
        }`,
      }}
      error={error}
      errorMessage={errorMessage}
      errorId={errorId}
      errorMessageIcon={Icons.Warning}
      floatingLabel={false}
    >
      <Fieldset
        noPadding={fieldsetProps?.noPadding}
        noBackground={fieldsetProps?.noBackground}
        title={fieldsetProps?.title}
        titleStyle={fieldsetProps?.titleStyle}
      >
        {renderChildren()}
      </Fieldset>
    </Wrapper>
  );
};
