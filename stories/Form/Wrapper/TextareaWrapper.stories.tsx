import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { TextareaWrapper, Props } from '../../../src/Form/Wrapper/TextareaWrapper/TextareaWrapper';

const meta: Meta = {
  title: 'Stories/Form/Wrapper/TextareaWrapper',
  component: TextareaWrapper,
  argTypes: {
    required: {
      control: 'boolean',
    },
    disabled: {
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
