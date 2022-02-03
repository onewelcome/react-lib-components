import React, { Fragment } from 'react';
import { Select, Props } from './Select';
import { render } from '@testing-library/react';
import { Option } from './Option';

const createSelect = (params?: Props, moreThan10 = false) => {
  const renderOptions = (moreThan10: boolean) => {
    if (moreThan10) {
      return (
        <Fragment>
          <Option value="option1">Option1</Option>
          <Option value="option2">Option2</Option>
          <Option value="option3">Option3</Option>
          <Option value="option4">Option4</Option>
          <Option value="option5">Option5</Option>
          <Option value="option6">Option6</Option>
          <Option selected value="option7">
            Option7
          </Option>
          <Option value="option8">Option8</Option>
          <Option value="option9">Option9</Option>
          <Option value="option10">Option10</Option>
          <Option value="option11">Option11</Option>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Option value="option1">Option1</Option>
          <Option value="option2">Option2</Option>
          <Option value="option3">Option3</Option>
          <Option value="option4">Option4</Option>
          <Option value="option5">Option5</Option>
          <Option value="option6">Option6</Option>
          <Option selected value="option7">
            Option7
          </Option>
          <Option value="option8">Option8</Option>
          <Option value="option9">Option9</Option>
        </Fragment>
      );
    }
  };

  const queries = render(
    <Select data-testid="select" {...params}>
      {renderOptions(moreThan10)}
    </Select>
  );
  const select = queries.getByTestId('select');

  return {
    ...queries,
    select,
  };
};

describe('Select should render', () => {
  it('renders without crashing', () => {
    const { select, debug } = createSelect();

    debug();
    expect(select).toBeDefined();
  });
});
