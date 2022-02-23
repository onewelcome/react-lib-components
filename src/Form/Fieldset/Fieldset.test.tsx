import React from 'react';
import { Fieldset } from './Fieldset';
import { render } from '@testing-library/react';
import { Form } from '../Form';
import { FormControl } from '../FormControl/FormControl';
import { Input } from '../..';
import { Select } from '../Select/Select';
import { Option } from '../Select/Option';

const createFieldset = () => {
  const queries = render(
    <Form style={{ padding: '20px', backgroundColor: '#F5F8F8' }}>
      <Fieldset data-testid="fieldset1" title="Example" titleStyle="h2">
        <FormControl>
          <Input placeholder="This is a placeholder" name="example" type="text" />
        </FormControl>
        <FormControl>
          <Select value="placeholder" onChange={jest.fn}>
            <Option value="option1">Option1</Option>
            <Option value="option2">Option2</Option>
            <Option value="option3">Option3</Option>
          </Select>
        </FormControl>
      </Fieldset>
      <Fieldset data-testid="fieldset2" noBackground noPadding title="Example2" titleStyle="body">
        <FormControl data-testid="formcontrol_grid3" grid={3}>
          <Select value="placeholder" onChange={jest.fn} onClear={jest.fn}>
            <Option disabled value="test">
              Prefix
            </Option>
            <Option value="mr">Mr.</Option>
            <Option value="mrs">Mrs.</Option>
          </Select>
          <Input name="first_name" type="text" />
          <Input name="last_name" type="text" />
        </FormControl>
      </Fieldset>
    </Form>
  );

  const fieldset1 = queries.getByTestId('fieldset1');
  const fieldset2 = queries.getByTestId('fieldset2');

  return {
    ...queries,
    fieldset1,
    fieldset2,
  };
};

describe('Fieldset should render', () => {
  it('renders without crashing', () => {
    const { fieldset1, fieldset2 } = createFieldset();

    expect(fieldset1).toBeTruthy();
    expect(fieldset2).toBeTruthy();
  });
});

describe('Fieldset should get proper attributes and classes', () => {
  it('has no padding class', () => {
    const { fieldset2 } = createFieldset();

    expect(fieldset2).toHaveClass('no-padding');
  });

  it('has no background styling', () => {
    const { fieldset2 } = createFieldset();

    expect(fieldset2.style.backgroundColor).toBe('');
  });

  it('has a correct legend and title <span> element', () => {
    const { fieldset1 } = createFieldset();

    expect(fieldset1.querySelector('legend')).toHaveTextContent('Example');
    expect(fieldset1.querySelector('legend')).toHaveTextContent('Example');
    expect(fieldset1.querySelector('.title')).toHaveClass('style-h2');
  });

  it('renders its children correctly', () => {
    const { fieldset1, fieldset2 } = createFieldset();

    expect(fieldset1.querySelector('.form-control')).toBeTruthy();
    expect(fieldset2.querySelector('.form-control')).toBeTruthy();
  });
});
