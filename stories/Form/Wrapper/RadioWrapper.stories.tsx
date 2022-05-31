import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  RadioWrapper as RadioWrapperComponent,
  Props,
} from '../../..//src/Form/Wrapper/RadioWrapper/RadioWrapper';
import { Radio } from '../../../src/Form/Radio/Radio';
import RadioWrapperDocumentation from './RadioWrapper.mdx';

const meta: Meta = {
  title: 'Stories/Form/Wrapper/RadioWrapper',
  component: RadioWrapperComponent,
  parameters: {
    docs: {
      page: RadioWrapperDocumentation,
    },
  },
  argTypes: {
    value: {
      options: ['option1', 'option2', 'option3'],
      control: {
        type: 'radio',
      },
    },
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
  return (
    <div>
      <RadioWrapperComponent {...args}>
        <Radio helperText="Individual helper" value="option1">
          Option 1
        </Radio>
        <Radio value="option2">Option 2</Radio>
        <Radio value="option3">Option 3</Radio>
      </RadioWrapperComponent>
    </div>
  );
};

export const RadioWrapper = Template.bind({});

RadioWrapper.args = {
  error: false,
  errorMessage: 'Errormessage',
  fieldsetProps: {
    legend: 'Radio buttons',
    hideLegend: false,
    legendStyle: 'h1',
    noPadding: true,
    noBackground: true,
  },
  helperText: 'Helpertext',
  value: 'option1',
  name: 'my-group',
  onChange: () => {},
};
