import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Skeleton as SkeletonComponent, Props } from '../../src/Skeleton/Skeleton';
import { Typography } from '../../src/Typography/Typography';
import SkeletonDocumentation from './Skeleton.mdx';

const meta: Meta = {
  title: 'Stories/UI/Skeleton',
  component: SkeletonComponent,
  parameters: {
    docs: {
      page: SkeletonDocumentation,
    },
  },
  argTypes: {
    height: {
      control: {
        type: 'number',
      },
    },
    width: {
      control: {
        type: 'number',
      },
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <SkeletonComponent {...args} />;

export const Skeleton = Template.bind({});
Skeleton.args = {
  variant: 'text',
};

export const RectangleSkeleton = Template.bind({});
RectangleSkeleton.args = {
  variant: 'rectangle',
  height: 50,
  width: 100,
};

const TypographySkeletonTemplate: Story<Props> = (args) => (
  <Typography variant="h1">
    <SkeletonComponent {...args} />
  </Typography>
);
export const TypographySkeleton = TypographySkeletonTemplate.bind({});
TypographySkeleton.storyName = 'Skeleton inside Typography';
TypographySkeleton.args = {};
