import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../../src/Button/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

const Template: Story<Props> = () => <Button>This is an example</Button>;

export const Default = Template.bind({});

Default.args = {};
