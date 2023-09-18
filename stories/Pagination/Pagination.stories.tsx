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

import React, { useEffect, useState } from "react";
import { Meta, Story } from "@storybook/react";
import {
  PageSize,
  Pagination as PaginationComponent,
  Props
} from "../../src/components/Pagination/Pagination";
import PaginationDocumentation from "./Pagination.mdx";
import { within, userEvent, waitFor, getByRole } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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

const Template: Story<Props> = args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [pageSize, setPageSize] = useState(args.pageSize);

  const onPageSizeChange = (pageSize: PageSize) => {
    setPageSize(pageSize);
    setCurrentPage(1);
  };
  const onPageChange = (pageNo: number) => {
    setCurrentPage(pageNo);
  };

  useEffect(() => {
    if (args.currentPage !== currentPage) {
      setCurrentPage(args.currentPage);
    }
    if (args.pageSize !== pageSize) {
      setPageSize(args.pageSize);
    }
  }, [args.pageSize, args.currentPage]);

  return (
    <div style={{ margin: "0 auto" }}>
      <PaginationComponent
        {...args}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageSizeChange={onPageSizeChange}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export const Pagination = Template.bind({});

Pagination.play = async ({ canvasElement, args, step }) => {
  const canvas = within(canvasElement);

  const waitForStoryToBeReady = async () => {
    await waitFor(() =>
      expect(canvas.queryByText(args.translate.itemsPerPage)).toBeInTheDocument()
    );
  };

  await step("Select items per page changes number of pages", async () => {
    await waitForStoryToBeReady();
    const pageSizeButton = canvas.getByRole("button", {
      expanded: false,
      name: args.translate!.itemsPerPage
    });

    await waitFor(() => expect(pageSizeButton).toHaveTextContent("10"));
    expect(canvas.queryByText(args.translate.currentPage.replace("%1", "25"))).toBeInTheDocument();

    await userEvent.click(pageSizeButton);

    const itemPerPage25 = canvas.getByRole("option", { name: "25" });
    await userEvent.click(itemPerPage25);
    expect(pageSizeButton).toHaveTextContent("25");
    expect(canvas.queryByText(args.translate.currentPage.replace("%1", "10"))).toBeInTheDocument();
  });

  await step("Select pages", async () => {
    const pageSizeButton = canvas.getByRole("button", {
      expanded: false,
      name: args.translate!.itemsPerPage
    });
    const pageNoButton = canvas.getByRole("button", {
      expanded: false,
      name: args.translate!.currentPageLabel
    });
    const firstPageButton = canvas.getByRole("button", {
      hidden: true,
      name: "first"
    });
    const prevPageButton = canvas.getByRole("button", {
      hidden: true,
      name: "previous"
    });
    const nextPageButton = canvas.getByRole("button", {
      hidden: true,
      name: "next"
    });
    const lastPageButton = canvas.getByRole("button", {
      hidden: true,
      name: "last"
    });

    const expectPageNavigationButtonAvailability = (
      forPage: "firstPage" | "oneOfMiddlePages" | "lastPage"
    ) => {
      if (forPage === "firstPage") {
        expect(firstPageButton).toBeDisabled();
        expect(prevPageButton).toBeDisabled();
        expect(nextPageButton).not.toBeDisabled();
        expect(lastPageButton).not.toBeDisabled();
      } else if (forPage === "lastPage") {
        expect(firstPageButton).not.toBeDisabled();
        expect(prevPageButton).not.toBeDisabled();
        expect(nextPageButton).toBeDisabled();
        expect(lastPageButton).toBeDisabled();
      } else {
        expect(firstPageButton).not.toBeDisabled();
        expect(prevPageButton).not.toBeDisabled();
        expect(nextPageButton).not.toBeDisabled();
        expect(lastPageButton).not.toBeDisabled();
      }
    };

    const selectItemsPerPage = async (size: "10" | "25" | "50") => {
      await userEvent.click(pageSizeButton);
      const selectedSize = canvas.getByRole("option", { name: size });
      await userEvent.click(selectedSize);
      await waitFor(() => expect(pageSizeButton).toHaveTextContent(size));
    };

    await step("Select first page by changing page size", async () => {
      await waitForStoryToBeReady();

      await selectItemsPerPage("10");
      expectPageNavigationButtonAvailability("firstPage");
    });

    await step(
      "Select first page by changing page size and then select last page using select component",
      async () => {
        await waitForStoryToBeReady();
        await selectItemsPerPage("50");
        await waitFor(() => expect(pageNoButton).toHaveTextContent("1"));
        expectPageNavigationButtonAvailability("firstPage");
        await userEvent.click(pageNoButton);
        const pageNo5 = canvas.getByRole("option", { name: "5" });
        await userEvent.click(pageNo5);
        expectPageNavigationButtonAvailability("lastPage");
      }
    );

    await step("Select page one by one", async () => {
      await waitForStoryToBeReady();
      await userEvent.click(pageSizeButton);
      const itemPerPage50 = canvas.getByRole("option", { name: "50" });
      await userEvent.click(itemPerPage50);
      await waitFor(() => expect(pageSizeButton).toHaveTextContent("50"));
      await waitFor(() => expect(pageNoButton).toHaveTextContent("1"));
      expectPageNavigationButtonAvailability("firstPage");
      await userEvent.click(nextPageButton);
      expectPageNavigationButtonAvailability("oneOfMiddlePages");
      await userEvent.click(nextPageButton);
      expectPageNavigationButtonAvailability("oneOfMiddlePages");
      await userEvent.click(nextPageButton);
      expectPageNavigationButtonAvailability("oneOfMiddlePages");
      await userEvent.click(nextPageButton);
      expectPageNavigationButtonAvailability("lastPage");
    });

    await step("Select last page using select component (using search option)", async () => {
      await waitForStoryToBeReady();
      await selectItemsPerPage("10");

      await userEvent.click(pageNoButton);
      await waitFor(() =>
        expect(getByRole(pageNoButton.parentElement!, "textbox")).toBeInTheDocument()
      );
      await userEvent.tab();
      await waitFor(() => expect(canvas.getByRole("option", { name: "25" })).toBeInTheDocument());
      await userEvent.keyboard("25");
      const page25 = canvas.getByRole("option", { name: "25" });
      await userEvent.click(page25);

      await waitFor(() => expect(pageNoButton).toHaveTextContent("25"));
      expect(
        canvas.queryByText(args.translate.currentPage.replace("%1", "25"))
      ).toBeInTheDocument();
      expectPageNavigationButtonAvailability("lastPage");
    });
  });
};

Pagination.args = {
  currentPage: 1,
  pageSize: "10",
  totalElements: 250,
  translate: {
    totalItems: "items in total",
    itemsPerPage: "Items per page",
    itemsPerPageLabel: "Select how many items per page you want to see.",
    currentPage: "of %1 pages",
    currentPageLabel: "What page you are currently on."
  }
};
