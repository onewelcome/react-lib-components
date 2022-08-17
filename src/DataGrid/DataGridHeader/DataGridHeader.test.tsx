import React, { useEffect, useRef } from "react";
import { DataGridHeader, Props } from "./DataGridHeader";
import { getByRole, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultParams: Props = {
  headers: [
    { name: "firstName", headline: "First name" },
    { name: "lastName", headline: "Last name" }
  ]
};

const createDataGridHeader = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const container = document.createElement("table");
  const queries = render(<DataGridHeader {...parameters} data-testid="dataGridHeader" />, {
    container
  });
  const dataGridHeader = queries.getByTestId("dataGridHeader");

  return {
    ...queries,
    dataGridHeader
  };
};

describe("DataGridHeader should render", () => {
  it("renders without crashing", () => {
    const { dataGridHeader, getAllByRole, getByRole } = createDataGridHeader();

    expect(dataGridHeader).toBeDefined();
    expect(getAllByRole("columnheader")).toHaveLength(2);
    expect(getByRole("cell")).toBeDefined(); //context-menu empty cell

    expect(dataGridHeader.querySelectorAll("[data-icon]")).toHaveLength(0);
  });

  it("renders without hidden cell", () => {
    const { dataGridHeader, getByRole } = createDataGridHeader(params => ({
      ...params,
      headers: [...params.headers].map((header, idx) => ({ ...header, hidden: idx === 1 }))
    }));

    expect(dataGridHeader).toBeDefined();
    expect(getByRole("columnheader")).toHaveTextContent(defaultParams.headers[0].headline);
    expect(getByRole("cell")).toBeDefined(); //context-menu empty cell

    expect(dataGridHeader.querySelectorAll("[data-icon]")).toHaveLength(0);
  });

  it("renders without contenxt-menu empty cell", () => {
    const { dataGridHeader, getAllByRole, queryByRole } = createDataGridHeader(params => ({
      ...params,
      disableContextMenuColumn: true
    }));

    expect(dataGridHeader).toBeDefined();
    expect(getAllByRole("columnheader")).toHaveLength(2);
    expect(queryByRole("cell")).toBeNull(); //context-menu empty cell
  });

  it("renders headers cells without sorting indicators even when initialSort is provided", () => {
    const { dataGridHeader } = createDataGridHeader(params => ({
      ...params,
      initialSort: [{ name: params.headers[0].name, direction: "ASC" }]
    }));

    expect(dataGridHeader.querySelectorAll("[data-icon]")).toHaveLength(0);
  });

  it("renders headers cells with sorting indicators", () => {
    const onSort = jest.fn();
    const { dataGridHeader } = createDataGridHeader(params => ({
      ...params,
      onSort
    }));

    const sortingIcons = dataGridHeader.querySelectorAll("[data-icon]");
    expect(sortingIcons).toHaveLength(4);
    sortingIcons.forEach(icon => expect(icon).not.toHaveClass("hidden"));
  });

  it("renders headers cells with sorting indicators when initialSort provided with direction ASC", () => {
    const onSort = jest.fn();
    const { dataGridHeader, getAllByRole } = createDataGridHeader(params => ({
      ...params,
      initialSort: [{ name: params.headers[0].name, direction: "ASC" }],
      onSort
    }));

    expect(dataGridHeader.querySelectorAll("[data-icon]:not(.hidden)")).toHaveLength(3);
    const [firstNameCell, lastNameCell] = getAllByRole("columnheader");
    expect(firstNameCell).toHaveAttribute("aria-sort", "ascending");
    expect(lastNameCell).not.toHaveAttribute("aria-sort");
  });

  it("renders headers cells with sorting indicators when initialSort provided with direction DESC", () => {
    const onSort = jest.fn();
    const { dataGridHeader, getAllByRole } = createDataGridHeader(params => ({
      ...params,
      initialSort: [{ name: params.headers[1].name, direction: "DESC" }],
      onSort
    }));

    expect(dataGridHeader.querySelectorAll("[data-icon]:not(.hidden)")).toHaveLength(3);
    const [firstNameCell, lastNameCell] = getAllByRole("columnheader");
    expect(firstNameCell).not.toHaveAttribute("aria-sort");
    expect(lastNameCell).toHaveAttribute("aria-sort", "descending");
  });
});

describe("DataGridHeader should be interactive", () => {
  it("clicking on cell call onSort callback", () => {
    const onSortHandler = jest.fn();
    const { getAllByRole } = createDataGridHeader(params => ({
      ...params,
      onSort: onSortHandler
    }));

    const [firstNameCell, lastNameCell] = getAllByRole("columnheader");
    userEvent.click(getByRole(firstNameCell, "button"));

    expect(onSortHandler).toBeCalledWith([
      { name: defaultParams.headers[0].name, direction: "ASC" }
    ]);
    expect(firstNameCell).toHaveAttribute("aria-sort", "ascending");
    expect(lastNameCell).not.toHaveAttribute("aria-sort");
  });

  it("clicking on multiple cells call onSort callback with one column selected when single-sorting is enabled", () => {
    const onSortHandler = jest.fn();
    const { getAllByRole } = createDataGridHeader(params => ({
      ...params,
      onSort: onSortHandler
    }));

    const [firstNameCell, lastNameCell] = getAllByRole("columnheader");

    userEvent.click(getByRole(firstNameCell, "button"));
    userEvent.click(getByRole(lastNameCell, "button"));
    expect(onSortHandler).toBeCalledWith([
      { name: defaultParams.headers[0].name, direction: "ASC" }
    ]);
    expect(onSortHandler).toBeCalledWith([
      { name: defaultParams.headers[1].name, direction: "ASC" }
    ]);
    expect(firstNameCell).not.toHaveAttribute("aria-sort");
    expect(lastNameCell).toHaveAttribute("aria-sort", "ascending");

    userEvent.click(getByRole(lastNameCell, "button"));
    expect(onSortHandler).toBeCalledWith([
      { name: defaultParams.headers[1].name, direction: "DESC" }
    ]);
    expect(firstNameCell).not.toHaveAttribute("aria-sort");
    expect(lastNameCell).toHaveAttribute("aria-sort", "descending");

    userEvent.click(getByRole(firstNameCell, "button"));
    expect(onSortHandler).toBeCalledWith([
      { name: defaultParams.headers[0].name, direction: "ASC" }
    ]);
    expect(firstNameCell).toHaveAttribute("aria-sort", "ascending");
    expect(lastNameCell).not.toHaveAttribute("aria-sort");

    userEvent.click(getByRole(firstNameCell, "button"));
    expect(onSortHandler).toBeCalledWith([
      { name: defaultParams.headers[1].name, direction: "DESC" }
    ]);
    expect(firstNameCell).toHaveAttribute("aria-sort", "descending");
    expect(lastNameCell).not.toHaveAttribute("aria-sort");

    userEvent.click(getByRole(firstNameCell, "button"));
    expect(onSortHandler).toBeCalledWith([]);
    expect(firstNameCell).not.toHaveAttribute("aria-sort");
    expect(lastNameCell).not.toHaveAttribute("aria-sort");
  });

  it("clicking on multiple cells call onSort callback with multiple columns selected when multi-sorting is enabled", () => {
    const onSortHandler = jest.fn();
    const { getAllByRole } = createDataGridHeader(params => ({
      ...params,
      enableMultiSorting: true,
      onSort: onSortHandler
    }));

    const [firstNameCell, lastNameCell] = getAllByRole("columnheader");

    userEvent.click(getByRole(firstNameCell, "button"));
    userEvent.click(getByRole(lastNameCell, "button"));
    expect(onSortHandler).toBeCalledWith([
      { name: defaultParams.headers[0].name, direction: "ASC" }
    ]);
    expect(onSortHandler).toBeCalledWith([
      { name: defaultParams.headers[1].name, direction: "ASC" },
      { name: defaultParams.headers[0].name, direction: "ASC" }
    ]);
    expect(firstNameCell).toHaveAttribute("aria-sort", "ascending");
    expect(lastNameCell).toHaveAttribute("aria-sort", "ascending");

    userEvent.click(getByRole(lastNameCell, "button"));
    expect(onSortHandler).toBeCalledWith([
      { name: defaultParams.headers[1].name, direction: "DESC" },
      { name: defaultParams.headers[0].name, direction: "ASC" }
    ]);
    expect(firstNameCell).toHaveAttribute("aria-sort", "ascending");
    expect(lastNameCell).toHaveAttribute("aria-sort", "descending");

    userEvent.click(getByRole(firstNameCell, "button"));
    expect(onSortHandler).toBeCalledWith([
      { name: defaultParams.headers[0].name, direction: "DESC" },
      { name: defaultParams.headers[1].name, direction: "DESC" }
    ]);
    expect(firstNameCell).toHaveAttribute("aria-sort", "descending");
    expect(lastNameCell).toHaveAttribute("aria-sort", "descending");

    userEvent.click(getByRole(firstNameCell, "button"));
    expect(onSortHandler).toBeCalledWith([
      { name: defaultParams.headers[1].name, direction: "DESC" }
    ]);
    expect(firstNameCell).not.toHaveAttribute("aria-sort");
    expect(lastNameCell).toHaveAttribute("aria-sort", "descending");

    userEvent.click(getByRole(lastNameCell, "button"));
    expect(onSortHandler).toBeCalledWith([]);
    expect(firstNameCell).not.toHaveAttribute("aria-sort");
    expect(lastNameCell).not.toHaveAttribute("aria-sort");
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

      return <DataGridHeader {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    const container = document.createElement("table");
    render(<ExampleComponent propagateRef={refCheck} />, { container });
  });
});
