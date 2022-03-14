import React from 'react';
import { FormControl, Props } from './FormControl';
import { render } from '@testing-library/react';
import { Input } from '../Input/Input';

const defaultParams: Props = {
  grid: 3,
  align: 'center',
  children: [
    <Input placeholder="This is a placeholder" name="example" data-testid="input" type="text" />,
    <Input placeholder="This is a placeholder" name="example" data-testid="input" type="text" />,
    <Input placeholder="This is a placeholder" name="example" data-testid="input" type="text" />,
  ],
};

const createFormControl = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<FormControl {...parameters} data-testid="formcontrol" />);
  const formcontrol = queries.getByTestId('formcontrol');

  return {
    ...queries,
    formcontrol,
  };
};

describe('FormControl should render', () => {
  it('renders without crashing', () => {
    const { formcontrol } = createFormControl();

    expect(formcontrol).toBeTruthy();
  });
});

describe('FormControl attributes should be working correctly', () => {
  it('has the right classes and attributes', () => {
    const { formcontrol } = createFormControl();

    expect(formcontrol).toHaveClass('grid');
    expect(formcontrol.firstChild).toHaveClass('col-3');
  });
});

describe('FormControl children should render properly', () => {
  it('renders children', () => {
    const { getAllByTestId } = createFormControl();

    const inputs = getAllByTestId('input');

    expect(inputs).toBeTruthy();
    expect(inputs).toHaveLength(3);
  });
});
