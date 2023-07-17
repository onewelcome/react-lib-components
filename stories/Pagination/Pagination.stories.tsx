/*
 * Copyright 2022 OneWelcome B.V.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  Pagination as PaginationComponent,
  Props
} from "../../src/components/Pagination/Pagination";
import PaginationDocumentation from "./Pagination.mdx";

const meta: Meta = {
  title: "components/Navigation/Pagination",
  component: PaginationComponent,
  parameters: {
    docs: {
      page: PaginationDocumentation
    }
  },
  argTypes: {
    translate: {
      control: {
        type: "object"
      }
    },
    pageSize: {
      options: ["10", "25", "50"],
      control: {
        type: "radio"
      }
    }
  }
};

export default meta;

const Template: Story<Props> = args => (
  <div style={{ margin: "0 auto" }}>
    <PaginationComponent {...args} />
  </div>
);

export const Pagination = Template.bind({});

Pagination.args = {
  currentPage: 1,
  pageSize: 10,
  totalElements: 1000,
  translate: {
    totalItems: "items in total",
    itemsPerPage: "Items per page",
    itemsPerPageLabel: "Select how many items per page you want to see.",
    currentPage: "of %1 pages",
    currentPageLabel: "What page you are currently on."
  }
};
