import React, { Fragment, HTMLAttributes, ReactElement } from 'react';
import { generateID } from '../../util/helper';
import { FormSelectorGroup } from '../FormSelectorGroup/FormSelectorGroup';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  error?: boolean;
  helperText?: string;
  errorMessage?: string;
  children: ReactElement[] | ReactElement;
}

export const CheckboxGroup = ({
  children,
  error = false,
  errorMessage,
  helperText,
  ...rest
}: Props) => {
  const errorId = generateID(15, errorMessage);
  const helperId = generateID(15, helperText);

  const renderChildren = () => {
    /** Always convert children to an array, even if only 1 Checkbox component is passed */
    if (!Array.isArray(children)) {
      children = [children];
    }

    /** In order to have the individual checkboxes have their "aria-describedby" property point to the error message in this CheckboxGroup, we have to clone the children and add these props. */
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
    <FormSelectorGroup
      error={error}
      errorMessage={errorMessage}
      errorId={errorId}
      helperText={helperText}
      helperId={helperId}
      {...rest}
    >
      {renderChildren()}
    </FormSelectorGroup>
  );
};
