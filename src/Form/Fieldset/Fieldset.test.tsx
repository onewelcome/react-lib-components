import React from 'react';
import { Fieldset, Props } from './Fieldset';
import { render } from '@testing-library/react';
import { FormControl } from '../FormControl/FormControl';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { Option } from '../Select/Option';

const defaultParams: Props = {
  legend: 'Example',
  legendStyle: 'h2',
  children: [
    <FormControl data-testid="form-control">
      <Input placeholder="This is a placeholder" name="example" type="text" />
    </FormControl>,
    <FormControl data-testid="form-control">
      <Select name="Example select" value="placeholder" onChange={jest.fn}>
        <Option value="option1">Option1</Option>
        <Option value="option2">Option2</Option>
        <Option value="option3">Option3</Option>
      </Select>
    </FormControl>,
  ],
};

const createFieldset = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<Fieldset {...parameters} data-testid="fieldset" />);
  const fieldset = queries.getByTestId('fieldset');

  return {
    ...queries,
    fieldset,
  };
};

describe('Fieldset should render', () => {
  it('renders without crashing', () => {
    const { fieldset } = createFieldset();

    expect(fieldset).toBeTruthy();
  });
});

describe('Fieldset should get proper attributes and classes', () => {
  it('has no padding class', () => {
    const { fieldset } = createFieldset((defaultParams) => ({ ...defaultParams, noPadding: true }));

    expect(fieldset).toHaveClass('no-padding');
  });

  it('has no background styling', () => {
    const { fieldset } = createFieldset((defaultParams) => ({
      ...defaultParams,
      noBackground: true,
    }));

    expect(fieldset.style.backgroundColor).toBe('');
  });

  it('has a correct legend and title <span> element', () => {
    const { getByText } = createFieldset();

    const legend = getByText(/example/i, { selector: 'legend' });
    const title = getByText(/example/i, { selector: 'span' });

    expect(legend).toHaveTextContent('Example');
    expect(legend).toBeTruthy();
    expect(title).toHaveClass('typography_style_h2');
    expect(title).toBeTruthy();
    expect(title).toHaveTextContent('Example');
  });

  it('renders its children correctly', () => {
    const { getAllByTestId } = createFieldset();

    const formcontrols = getAllByTestId('form-control');

    expect(formcontrols).toBeTruthy();
    expect(formcontrols).toHaveLength(2);
  });
});
