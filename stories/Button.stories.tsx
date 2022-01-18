import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Props } from '../src/Button';
import Button from '../src/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

const Template: Story<Props> = () => <Button>Text</Button>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
