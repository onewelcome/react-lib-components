import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Pagination, Props } from '../../src/Pagination/Pagination';

const meta: Meta = {
  title: 'Pagination',
  component: Pagination,
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

const Template: Story<Props> = (args) => <Pagination {...args} />;

export const PaginationEl = Template.bind({});

PaginationEl.args = {
  currentPage: 1,
  totalElements: 700,
  pageSize: 10,
  translate: {
    totalItems: 'Total items',
    itemsPerPage: 'Items per page',
    currentPage: 'Page %1 of %2',
  },
};
