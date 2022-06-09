import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SlideInModal, Props } from '../../../src/Notifications/SlideInModal/SlideInModal';
import SlideInModalDocumentation from './SlideInModal.mdx';

const meta: Meta = {
  title: 'Stories/Notifications/SlideInModal',
  component: SlideInModal,
  parameters: {
    docs: {
      page: SlideInModalDocumentation,
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <SlideInModal {...args} />;

export const SlideInModalEl = Template.bind({});

SlideInModalEl.args = {};
