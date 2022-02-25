import React from 'react';
import { Wrapper } from './Wrapper';
import { render } from '@testing-library/react';
import { Input } from '../../Input/Input';

describe('Wrapper should render', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Wrapper floatingLabelActive={true} label="label" name="name" helperId="helperID">
        <Input onChange={jest.fn()} name="test" type="text" value="test" />
      </Wrapper>
    );
    const wrapper = container.querySelector('.wrapper');

    expect(wrapper).toBeDefined();
  });
});
