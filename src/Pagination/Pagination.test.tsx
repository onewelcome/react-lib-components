import React, { useEffect, useRef } from "react";
import { Pagination, Props } from "./Pagination";
import { render, waitFor } from "@testing-library/react";
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
  it("should give us the correct values", async () => {
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

    userEvent.click(next);

    await waitFor(() => expect(onPageChange).toHaveBeenCalledWith(11));

    userEvent.click(previous);
    await waitFor(() => expect(onPageChange).toHaveBeenCalledWith(9));

    userEvent.click(first);
    await waitFor(() => expect(onPageChange).toHaveBeenCalledWith(0));

    userEvent.click(last);
    await waitFor(() => expect(onPageChange).toHaveBeenCalledWith(50));

    userEvent.click(pageSizeSelect.querySelector("button")!);

    const option25 = pageSizeSelect.querySelector('[data-value="25"]')!;

    userEvent.click(option25);

    await waitFor(() => expect(onPageSizeChange).toHaveBeenCalledWith(25));

    (currentPageInput as HTMLInputElement).focus();

    userEvent.keyboard("{backspace}{backspace}30{enter}");

    await waitFor(() => expect(onPageChange).toHaveBeenCalledWith(30));
  });
});

describe("different current pages and their effect on what renders", () => {
  it("is on the first page and does not render previous and first", () => {
    const { pagination } = createPagination();

    expect(pagination.querySelector(".next")).toBeTruthy();
    expect(pagination.querySelector(".previous")).toBeFalsy();
  });

  it("is on the second page and does not render first", () => {
    const { pagination } = createPagination(defaultParams => ({
      ...defaultParams,
      currentPage: 2
    }));

    expect(pagination.querySelector('[data-paginate="first"]')).toBeFalsy();
    expect((pagination.querySelector(".current-value-input input") as HTMLInputElement).value).toBe(
      "2"
    );
  });

  it("is on the second to last page and does not render last", () => {
    const { pagination } = createPagination(defaultParams => ({
      ...defaultParams,
      currentPage: 499
    }));

    expect(pagination.querySelector('[data-paginate="last"]')).toBeFalsy();
  });

  it("is on the last page and does not render next & last", () => {
    const { pagination } = createPagination(defaultParams => ({
      ...defaultParams,
      currentPage: 500
    }));

    expect(pagination.querySelector('[data-paginate="last"]')).toBeFalsy();
    expect(pagination.querySelector('[data-paginate="next"]')).toBeFalsy();
  });
});

describe("omitted attributes still renders correctly", () => {
  it("still renders next if totalItems prop isn't given and we're on the first page", () => {
    const { pagination } = createPagination(defaultParams => ({
      ...defaultParams,
      totalElements: undefined
    }));

    expect(pagination.querySelector(".page")).toBeFalsy();
    expect(pagination.querySelector(".next")).toBeTruthy();
    expect(pagination.querySelector(".previous")).toBeFalsy();
  });

  it("still renders next if totalItems prop isn't given and we're on the first page", () => {
    const { pagination } = createPagination(defaultParams => ({
      ...defaultParams,
      currentPage: 4,
      totalElements: undefined
    }));

    expect(pagination.querySelector(".page")).toBeFalsy();
    expect(pagination.querySelector(".next")).toBeTruthy();
    expect(pagination.querySelector(".previous")).toBeTruthy();
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
