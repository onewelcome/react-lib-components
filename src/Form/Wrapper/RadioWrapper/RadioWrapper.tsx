import React, { Fragment, ReactElement, useEffect } from 'react';
import classes from './RadioWrapper.module.scss';
import { Wrapper, WrapperProps } from '../Wrapper/Wrapper';
import { useWrapper } from '../../../hooks/useWrapper';
import { Icons } from '../../../Icon/Icon';
import { Fieldset, Props as FieldsetProps } from '../../../Form/Fieldset/Fieldset';
import { generateID } from '../../../util/helper';

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

  const renderChildren = () => {
    /** Always convert children to an array, even if only 1 Radio component is passed */
    let clonedChildren = !Array.isArray(children) ? [children] : children;

    /** In order to have the individual Radios have their "aria-describedby" property point to the error message in this RadioWrapper, we have to clone the children and add these props. */
    return clonedChildren.map((child) => (
      <Fragment key={generateID()}>
        {React.cloneElement(child, {
          parentErrorId: errorId,
          error: error,
          checked: child.props.value === value,
          name: name,
          parentHelperId: helperText ? helperId : false,
          onChange: onChange,
        })}
      </Fragment>
    ));
  };

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
