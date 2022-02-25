import React, { Fragment, ReactElement } from 'react';
import classes from './RadioWrapper.module.scss';
import { Wrapper, WrapperProps } from '../Wrapper/Wrapper';
import { useWrapper } from '../../../hooks/useWrapper';
import { Icons } from '../../../Icon/Icon';

export interface Props extends WrapperProps {
  children: ReactElement | ReactElement[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioWrapper = ({
  children,
  name,
  helperText,
  error,
  errorMessage,
  value,
  onChange,
}: Props) => {
  const { errorId, helperId } = useWrapper(value);

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
      {renderChildren()}
    </Wrapper>
  );
};
