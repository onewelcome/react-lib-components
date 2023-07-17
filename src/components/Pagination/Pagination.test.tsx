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

import React, { useEffect, useRef } from "react";
import { Pagination, Props } from "./Pagination";
import { act, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultParams: Props = {
  currentPage: 1,
  totalElements: 500,
  onPageChange: jest.fn(),
  onPageSizeChange: jest.fn()
};

const createPagination = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;

  if (params) {
    parameters = params(defaultParams);
  }

  const queries = render(<Pagination data-testid="pagination" {...parameters} />);

  const pagination = queries.getByTestId("pagination");

  return {
    ...queries,
    pagination
  };
};

describe("Pagination should render", () => {
  it("renders without crashing", () => {
    const { pagination } = createPagination();

    expect(pagination).toBeTruthy();
  });
});

describe("Pagination events", () => {
  it("should correctly translate user input to pagination component", async () => {
    const onPageChange = jest.fn();

    const onPageSizeChange = jest.fn();

    const { pagination } = createPagination(defaultParams => ({
      ...defaultParams,
      currentPage: 10,
      onPageChange: onPageChange,
      onPageSizeChange: onPageSizeChange
    }));

    const next = pagination.querySelector('[data-paginate="next"]')!;
    const previous = pagination.querySelector('[data-paginate="previous"]')!;
    const first = pagination.querySelector('[data-paginate="first"]')!;
    const last = pagination.querySelector('[data-paginate="last"]')!;
    const pageSizeSelect = pagination.querySelector(".page-size-select")!;
    const currentPageInput = pagination.querySelector("#current-value-input")!;

    await userEvent.click(next);

    await waitFor(() => expect(onPageChange).toHaveBeenCalledWith(11));

    await userEvent.click(previous);
    await waitFor(() => expect(onPageChange).toHaveBeenCalledWith(9));

    await userEvent.click(first);
    await waitFor(() => expect(onPageChange).toHaveBeenCalledWith(0));

    await userEvent.click(last);
    await waitFor(() => expect(onPageChange).toHaveBeenCalledWith(50));

    await userEvent.click(pageSizeSelect.querySelector("button")!);

    const option25 = pageSizeSelect.querySelector('[data-value="25"]')!;

    await userEvent.click(option25);

    await waitFor(() => expect(onPageSizeChange).toHaveBeenCalledWith(25));
  });
});

describe("different current pages and their effect on what renders", () => {
  it("is on the first page and does not render previous and first", () => {
    const { pagination, debug } = createPagination();

    debug(undefined, 99999);

    expect(pagination.querySelector('[data-paginate="next"]')).toBeTruthy();
    expect(pagination.querySelector('[data-paginate="previous"]')).toHaveAttribute("disabled");
  });

  it("is on the second page and does not render first", async () => {
    const { pagination } = createPagination(defaultParams => ({
      ...defaultParams,
      currentPage: 2
    }));

    expect(pagination.querySelector('[data-paginate="first"]')).toHaveAttribute("disabled");
  });

  it("is on the second to last page and does not render last", () => {
    const { pagination } = createPagination(defaultParams => ({
      ...defaultParams,
      currentPage: 499
    }));

    expect(pagination.querySelector('[data-paginate="last"]')).toHaveAttribute("disabled");
  });

  it("is on the last page and does not render next & last", () => {
    const { pagination } = createPagination(defaultParams => ({
      ...defaultParams,
      currentPage: 500
    }));

    expect(pagination.querySelector('[data-paginate="last"]')).toHaveAttribute("disabled");
    expect(pagination.querySelector('[data-paginate="next"]')).toHaveAttribute("disabled");
  });
});

describe("omitted attributes still renders correctly", () => {
  it("still renders next if totalItems prop isn't given and we're on the first page", () => {
    const { pagination } = createPagination(defaultParams => ({
      ...defaultParams,
      totalElements: undefined
    }));

    expect(pagination.querySelector(".page")).toBeFalsy();
    expect(pagination.querySelector('[data-paginate="next"]')).toBeTruthy();
    expect(pagination.querySelector('[data-paginate="previous"]')).toHaveAttribute("disabled");
  });

  it("still renders next if totalItems prop isn't given and we're on the first page", () => {
    const { pagination } = createPagination(defaultParams => ({
      ...defaultParams,
      currentPage: 4,
      totalElements: undefined
    }));

    expect(pagination.querySelector(".page")).toBeFalsy();
    expect(pagination.querySelector('[data-paginate="next"]')).toBeTruthy();
    expect(pagination.querySelector('[data-paginate="previous"]')).toBeTruthy();
  });
});

describe("ref should work", () => {
  it("should give back the proper data prop, this also checks if the component propagates ...rest properly", () => {
    const ExampleComponent = ({
      propagateRef
    }: {
      propagateRef?: (ref: React.RefObject<HTMLElement>) => void;
    }) => {
      const ref = useRef(null);

      useEffect(() => {
        if (ref.current) {
          propagateRef && propagateRef(ref);
        }
      }, [ref]);

      return <Pagination {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
