import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Toggle as ToggleComponent } from '../../..//src/Form/Toggle/Toggle';
import { CheckboxProps as Props } from '../../../src/Form/Checkbox/Checkbox';
import ToggleDocumentation from './Toggle.mdx';

const meta: Meta = {
  title: 'Stories/Form/Elements/Toggle',
  component: ToggleComponent,
  parameters: {
    docs: {
      page: ToggleDocumentation,
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
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => (
  <ToggleComponent {...args}>Example toggle</ToggleComponent>
);

export const Toggle = Template.bind({});

Toggle.args = {
  name: 'Example toggle',
  helperProps: { children: <a href="https://www.google.com">Test</a> },
};
