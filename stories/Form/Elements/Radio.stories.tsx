import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Radio as RadioComponent, Props } from '../../../src/Form/Radio/Radio';
import { Fieldset } from '../../../src/Form/Fieldset/Fieldset';
import RadioDocumentation from './Radio.mdx';

const meta: Meta = {
  title: 'Stories/Form/Elements/Radio',
  component: RadioComponent,
  parameters: {
    docs: {
      page: RadioDocumentation,
    },
  },
  argTypes: {
    parentHelperId: {
      table: {
        disable: true,
      },
      control: false,
    },
    parentErrorId: {
      table: {
        disable: true,
      },
      control: false,
    },
    errorMessageId: {
      table: {
        disable: true,
      },
      control: false,
    },
    checked: {
      type: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
const Template: Story<Props> = (args) => (
  // @ts-ignore
  // @TODO remove @ts-ignore as soon as UCL-89 has been merged
  <Fieldset legend="Radio button group">
    <RadioComponent
      helperText="Example helpertext"
      errorMessage="Example error message"
      value="example-radio"
      {...args}
    >
      Label
    </RadioComponent>
  </Fieldset>
);

export const Radio = Template.bind({});

Radio.args = {};
