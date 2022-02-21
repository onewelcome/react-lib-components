import React, { Fragment, HTMLAttributes, ReactElement } from 'react';
import { generateID } from '../../util/helper';
import { FormSelectorGroup } from '../FormSelectorGroup/FormSelectorGroup';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  error?: boolean;
  helperText?: string;
  errorMessage?: string;
  children: ReactElement[] | ReactElement;
  value: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroup = ({
  children,
  error = false,
  errorMessage,
  helperText,
  value,
  name,
  onChange,
  ...rest
}: Props) => {
  const errorId = generateID(15, errorMessage);
  const helperId = generateID(15, helperText);

  const childRadioOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
  };

  const renderChildren = () => {
    /** Always convert children to an array, even if only 1 Checkbox component is passed */
    if (!Array.isArray(children)) {
      children = [children];
    }

    /** In order to have the individual checkboxes have their "aria-describedby" property point to the error message in this RadioGroup, we have to clone the children and add these props. */
    return children?.map((child, index) => (
      <Fragment key={index}>
        {React.cloneElement(child, {
          errorMessageId: errorId,
          error: error,
          checked: child.props.value === value,
          name: name,
          parentHelperId: helperText ? helperId : false,
          onChange: childRadioOnChangeHandler,
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
