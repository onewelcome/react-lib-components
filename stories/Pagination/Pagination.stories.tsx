import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Pagination as PaginationComponent, Props } from '../../src/Pagination/Pagination';

const meta: Meta = {
  title: 'Stories/UI/Pagination',
  component: PaginationComponent,
  argTypes: {
    translate: {
      control: {
        type: 'object',
      },
    },
    pageSize: {
      control: {
        type: 'radio',
        options: ['10', '25', '50'],
      },
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => (
  <div style={{ maxWidth: '800px', margin: '0 auto' }}>
    <PaginationComponent {...args} />
  </div>
);

export const Pagination = Template.bind({});

Pagination.args = {
  currentPage: 1,
  totalElements: 700,
  pageSize: 10,
  translate: {
    totalItems: 'Total items',
    itemsPerPage: 'Items per page',
    currentPage: 'Page %1 of %2',
  },
};
