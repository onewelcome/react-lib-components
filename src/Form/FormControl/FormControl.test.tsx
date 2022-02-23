import React from 'react';
import { FormControl } from './FormControl';
import { cleanup, render } from '@testing-library/react';
import { Form } from '../Form';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { Option } from '../Select/Option';
import { Checkbox } from '../Checkbox/Checkbox';
import { RadioGroup } from '../RadioGroup/RadioGroup';
import { Radio } from '../Radio/Radio';
import { CheckboxGroup } from '../CheckboxGroup/CheckboxGroup';

const createFormControl = () => {
  const queries = render(
    <Form style={{ padding: '20px', backgroundColor: '#F5F8F8' }}>
      <FormControl data-testid="formcontrol_nopadding_nobackground" noPadding noBackground>
        <Input placeholder="This is a placeholder" name="example" type="text" />
      </FormControl>
      <FormControl noBackground noPadding>
        <Select value="placeholder" onChange={jest.fn}>
          <Option value="option1">Option1</Option>
          <Option value="option2">Option2</Option>
          <Option value="option3">Option3</Option>
        </Select>
      </FormControl>
      <FormControl data-testid="formcontrol_grid3" grid={3} noPadding noBackground>
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
      <FormControl data-testid="formcontrol_grid2" grid={2} noPadding noBackground>
        <FormControl>
          <Checkbox onChange={jest.fn} name="newsletter" checked={false}>
            Subscribe to newsletter?
          </Checkbox>
        </FormControl>
        <Input name="last_name" type="text" />
      </FormControl>
      <FormControl grid={2} noPadding noBackground>
        <FormControl>
          <RadioGroup
            value="mobile"
            name="electronics"
            onChange={jest.fn}
            helperText="This is helper text"
          >
            <Radio value="mobile">Mobile</Radio>
            <Radio value="tv">TV</Radio>
            <Radio value="pc">PC</Radio>
          </RadioGroup>
        </FormControl>
        <FormControl data-testid="formcontrol_default">
          <CheckboxGroup>
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
          </CheckboxGroup>
        </FormControl>
      </FormControl>
    </Form>
  );

  const formControlNoPaddingNoBackground = queries.getByTestId(
    'formcontrol_nopadding_nobackground'
  );
  const formControlGrid3 = queries.getByTestId('formcontrol_grid3');
  const formControlGrid2 = queries.getByTestId('formcontrol_grid2');
  const formControlDefault = queries.getByTestId('formcontrol_default');

  return {
    ...queries,
    formControlNoPaddingNoBackground,
    formControlGrid3,
    formControlGrid2,
    formControlDefault,
  };
};

describe('FormControl should render', () => {
  it('renders without crashing', () => {
    const {
      formControlDefault,
      formControlGrid2,
      formControlGrid3,
      formControlNoPaddingNoBackground,
    } = createFormControl();

    expect(formControlDefault).toBeTruthy();
    expect(formControlGrid2).toBeTruthy();
    expect(formControlGrid3).toBeTruthy();
    expect(formControlNoPaddingNoBackground).toBeTruthy();

    cleanup();
  });
});

describe('FormControl attributes should be working correctly', () => {
  it('has the right classes and attributes', () => {
    const {
      formControlDefault,
      formControlGrid2,
      formControlGrid3,
      formControlNoPaddingNoBackground,
    } = createFormControl();

    expect(formControlDefault).toHaveStyle({ backgroundColor: 'rgb(255, 255, 255);' });
    expect(formControlNoPaddingNoBackground.style.backgroundColor).toBe('');
    expect(formControlNoPaddingNoBackground).toHaveClass('no-padding');
    expect(formControlGrid2).toHaveClass('grid');
    expect(formControlGrid2.querySelector('.column')).toHaveClass('col-2');
    expect(formControlGrid3).toHaveClass('grid');
    expect(formControlGrid3.querySelector('.column')).toHaveClass('col-3');

    cleanup();
  });
});

describe('FormControl children should render properly', () => {
  it('renders children', () => {
    const {
      formControlDefault,
      formControlGrid2,
      formControlGrid3,
      formControlNoPaddingNoBackground,
    } = createFormControl();

    expect(formControlDefault.querySelector('.form-selector-group .checkbox-wrapper')).toBeTruthy();
    expect(formControlNoPaddingNoBackground.querySelector('.input-wrapper')).toBeTruthy();
    expect(formControlGrid2.querySelector('.checkbox-wrapper')).toBeTruthy();
    expect(formControlGrid3.querySelector('.select.custom-select')).toBeTruthy();

    cleanup();
  });
});
