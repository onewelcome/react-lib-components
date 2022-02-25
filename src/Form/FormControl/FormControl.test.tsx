import React from 'react';
import { FormControl } from './FormControl';
import { cleanup, render } from '@testing-library/react';
import { Form } from '../Form';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { Option } from '../Select/Option';
import { Checkbox } from '../Checkbox/Checkbox';
import { RadioWrapper } from '../Wrapper/RadioWrapper/RadioWrapper';
import { Radio } from '../Radio/Radio';
import { CheckboxWrapper } from '../Wrapper/CheckboxWrapper/CheckboxWrapper';

const createFormControl = () => {
  const queries = render(
    <Form style={{ padding: '20px', backgroundColor: '#F5F8F8' }}>
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
      <FormControl data-testid="formcontrol_grid2" grid={2}>
        <FormControl>
          <Checkbox onChange={jest.fn} name="newsletter" checked={false}>
            Subscribe to newsletter?
          </Checkbox>
        </FormControl>
        <Input name="last_name" type="text" />
      </FormControl>
      <FormControl grid={2}>
        <FormControl>
          <RadioWrapper
            label="Label"
            errorMessage="Errormessage"
            error={false}
            value="mobile"
            name="electronics"
            onChange={jest.fn}
            helperText="This is helper text"
          >
            <Radio value="mobile">Mobile</Radio>
            <Radio value="tv">TV</Radio>
            <Radio value="pc">PC</Radio>
          </RadioWrapper>
        </FormControl>
        <FormControl data-testid="formcontrol_default">
          <CheckboxWrapper
            onChange={jest.fn()}
            errorMessage="This is an error"
            error={false}
            helperText="Helpertext"
            name="Checkboxwrapper"
            label="Label"
          >
            <Checkbox
              onChange={jest.fn}
              checked={false}
              indeterminate={false}
              name="electronics"
              label="Electronics"
            >
              <Checkbox onChange={jest.fn} checked={false} name="tv">
                TV
              </Checkbox>
              <Checkbox onChange={jest.fn} checked={false} name="mobile">
                Mobile
              </Checkbox>
              <Checkbox onChange={jest.fn} checked={false} name="laptop">
                Laptop
              </Checkbox>
            </Checkbox>
          </CheckboxWrapper>
        </FormControl>
      </FormControl>
    </Form>
  );

  const formControlGrid3 = queries.getByTestId('formcontrol_grid3');
  const formControlGrid2 = queries.getByTestId('formcontrol_grid2');
  const formControlDefault = queries.getByTestId('formcontrol_default');

  return {
    ...queries,
    formControlGrid3,
    formControlGrid2,
    formControlDefault,
  };
};

describe('FormControl should render', () => {
  it('renders without crashing', () => {
    const { formControlDefault, formControlGrid2, formControlGrid3 } = createFormControl();

    expect(formControlDefault).toBeTruthy();
    expect(formControlGrid2).toBeTruthy();
    expect(formControlGrid3).toBeTruthy();

    cleanup();
  });
});

describe('FormControl attributes should be working correctly', () => {
  it('has the right classes and attributes', () => {
    const { formControlGrid2, formControlGrid3 } = createFormControl();

    expect(formControlGrid2).toHaveClass('grid');
    expect(formControlGrid2.querySelector('.column')).toHaveClass('col-2');
    expect(formControlGrid3).toHaveClass('grid');
    expect(formControlGrid3.querySelector('.column')).toHaveClass('col-3');

    cleanup();
  });
});

describe('FormControl children should render properly', () => {
  it('renders children', () => {
    const { formControlDefault, formControlGrid2, formControlGrid3 } = createFormControl();

    expect(formControlDefault.querySelector('.form-group .checkbox-wrapper')).toBeTruthy();
    expect(formControlGrid2.querySelector('.checkbox-wrapper')).toBeTruthy();
    expect(formControlGrid3.querySelector('.select.custom-select')).toBeTruthy();

    cleanup();
  });
});
