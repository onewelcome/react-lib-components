import React, { Fragment, ReactElement } from 'react';
import classes from './CheckboxWrapper.module.scss';
import { useWrapper } from '../../../hooks/useWrapper';
import { Wrapper, WrapperProps } from '../Wrapper/Wrapper';
import { Icons } from '../../../Icon/Icon';

export interface Props extends Omit<WrapperProps, 'value'> {
  children: ReactElement[] | ReactElement;
  legendId?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxWrapper = ({
  children,
  error = false,
  errorMessage,
  helperText,
  name,
  onChange,
}: Props) => {
  const { errorId, helperId } = useWrapper();

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
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(event),
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
        className: `${classes['checkbox-wrapper-helper']} ${
          error ? classes['checkbox-wrapper-error'] : ''
        }`,
      }}
      error={error}
      errorMessage={errorMessage}
      errorMessageIcon={Icons.Warning}
      errorId={errorId}
    >
      {renderChildren()}
    </Wrapper>
  );
};
