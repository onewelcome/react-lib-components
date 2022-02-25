import React from 'react';
import { TextareaWrapper } from './TextareaWrapper';
import { render } from '@testing-library/react';

describe('TextareaWrapper should render', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <TextareaWrapper
        helperText="Helpertext"
        errorMessage="Errormessage"
        error={false}
        value="This is a value"
        onChange={() => jest.fn()}
        label="Label"
        name="Textarea"
      />
    );
    const textareawrapper = container?.querySelector('.wrapper');

    expect(textareawrapper).toBeDefined();
  });
});
