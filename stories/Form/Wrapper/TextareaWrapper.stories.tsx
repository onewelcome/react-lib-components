import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { TextareaWrapper, Props } from '../../../src/Form/Wrapper/TextareaWrapper/TextareaWrapper';
import { Button } from '../../../src/Button/Button';

const meta: Meta = {
  title: 'Form/Wrapper/TextareaWrapper',
  component: TextareaWrapper,
  argTypes: {
    required: {
      control: 'boolean',
    },
    fieldsetDisabled: {
      control: 'boolean',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => {
  const [error, setError] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');

  return (
    <div>
      <TextareaWrapper
        label="Example textarea"
        name="Textarea"
        helperText="Example textarea helpertext"
        errorMessage="Textarea error message"
        onChange={(e) => setTextareaValue(e.target.value)}
        error={error}
        value={textareaValue}
        {...args}
      />
    </div>
  );
};

export const TextareaWrapperEl = Template.bind({});

TextareaWrapperEl.args = {};
