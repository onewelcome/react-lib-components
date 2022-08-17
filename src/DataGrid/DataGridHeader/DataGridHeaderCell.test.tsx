import React, { useEffect, useRef } from "react";
import { DataGridHeaderCell, Props } from "./DataGridHeaderCell";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultParams: Props = { name: "name-123", headline: "Test" };

const createDataGridHeaderCell = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const container = document.createElement("tr");
  const queries = render(<DataGridHeaderCell {...parameters} data-testid="dataGridHeaderCell" />, {
    container
  });
  const dataGridHeaderCell = queries.getByTestId("dataGridHeaderCell");

  return {
    ...queries,
    dataGridHeaderCell
  };
};

describe("DataGridHeaderCell should render", () => {
  it("renders without crashing", () => {
    const { dataGridHeaderCell, queryByRole } = createDataGridHeaderCell();

    expect(dataGridHeaderCell).toBeDefined();
    expect(dataGridHeaderCell).toHaveTextContent(defaultParams.headline);
    expect(queryByRole("button")).toBeDefined();
    expect(dataGridHeaderCell.querySelectorAll("[data-icon]")).toHaveLength(2);
  });

  it("renders without sorting indicators (icons)", () => {
    const { dataGridHeaderCell } = createDataGridHeaderCell(params => ({
      ...params,
      disableSorting: true
    }));

    expect(dataGridHeaderCell.querySelector("[data-icon]")).toBeNull();
  });

  it("renders DESC and ASC sorting indicators (icons) when sorting is enabled and current sorting is not defined", () => {
    const { dataGridHeaderCell } = createDataGridHeaderCell();

    expect(dataGridHeaderCell).toBeDefined();
    const sortingIcons = dataGridHeaderCell.querySelectorAll("[data-icon]");
    expect(sortingIcons).toHaveLength(2);
    sortingIcons.forEach(icon => {
      expect(icon).toHaveClass("indicator");
      expect(icon).not.toHaveClass("active");
      expect(icon).not.toHaveClass("hidden");
    });
  });

  it("renders ASC sorting indicator (icon) when sorting is enabled and current sorting is ASC", () => {
    const { dataGridHeaderCell } = createDataGridHeaderCell(params => ({
      ...params,
      activeSortDirection: "ASC"
    }));

    expect(dataGridHeaderCell).toBeDefined();
    const sortingIcons = dataGridHeaderCell.querySelectorAll("[data-icon]");
    expect(sortingIcons).toHaveLength(2);
    sortingIcons.forEach(icon => expect(icon).toHaveClass("indicator"));
    expect(sortingIcons[0]).toHaveClass("indicator", "active", "icon-triangle-up");
    expect(sortingIcons[0]).not.toHaveClass("hidden");
    expect(sortingIcons[1]).toHaveClass("indicator", "hidden", "icon-triangle-down");
    expect(sortingIcons[1]).not.toHaveClass("active");
  });
});

it("renders DESC sorting indicator (icon) when sorting is enabled and current sorting is DESC", () => {
  const { dataGridHeaderCell } = createDataGridHeaderCell(params => ({
    ...params,
    activeSortDirection: "DESC"
  }));

  expect(dataGridHeaderCell).toBeDefined();
  const sortingIcons = dataGridHeaderCell.querySelectorAll("[data-icon]");
  expect(sortingIcons).toHaveLength(2);
  sortingIcons.forEach(icon => expect(icon).toHaveClass("indicator"));
  expect(sortingIcons[0]).toHaveClass("indicator", "hidden", "icon-triangle-up");
  expect(sortingIcons[0]).not.toHaveClass("active");
  expect(sortingIcons[1]).toHaveClass("indicator", "active", "icon-triangle-down");
  expect(sortingIcons[1]).not.toHaveClass("hidden");
});

describe("DataGridHeaderCell should be interactive", () => {
  it("clicking on cell calls onSort callback", () => {
    const onSortHandler = jest.fn();
    const { getByRole } = createDataGridHeaderCell(params => ({
      ...params,
      disableSorting: false,
      onSort: onSortHandler
    }));

    userEvent.click(getByRole("button"));

    expect(onSortHandler).toBeCalledWith(defaultParams.name);
  });
});

describe("ref should work", () => {
  it("should give back the proper data prop, this also checks if the component propagates ...rest properly", () => {
    const ExampleComponent = ({
      propagateRef
    }: {
      propagateRef: (ref: React.RefObject<HTMLElement>) => void;
    }) => {
      const ref = useRef(null);

      useEffect(() => {
        propagateRef(ref);
      }, [ref]);

      return <DataGridHeaderCell {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    const container = document.createElement("tr");
    render(<ExampleComponent propagateRef={refCheck} />, { container });
  });
});
