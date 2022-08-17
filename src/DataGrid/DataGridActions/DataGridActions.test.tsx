import React, { useEffect, useRef } from "react";
import { DataGridActions, Props } from "./DataGridActions";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultParams: Props = {
  headers: [],
  onColumnToggled: jest.fn()
};

const createDataGridActions = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<DataGridActions {...parameters} data-testid="dataGridActions" />);
  const dataGridActions = queries.getByTestId("dataGridActions");

  return {
    ...queries,
    dataGridActions
  };
};

describe("DataGridActions should render", () => {
  it("renders without crashing", () => {
    const { container } = render(<DataGridActions {...defaultParams} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("renders all buttons", () => {
    const { dataGridActions, getAllByRole } = createDataGridActions(params => ({
      ...params,
      enableAddBtn: true,
      enableColumnsBtn: true,
      enableSearchBtn: true
    }));

    expect(dataGridActions).toBeDefined();
    const buttons = getAllByRole("button");
    expect(buttons).toHaveLength(5);
    expect(buttons[0]).toHaveTextContent("Add item");
    expect(buttons[1]).toHaveTextContent("Columns");
    expect(buttons[2]).toHaveTextContent("Show/hide columns");
    expect(buttons[3]).toHaveTextContent("Search");
    expect(buttons[4]).toHaveTextContent("Search");
  });

  it("renders only add button", () => {
    const { dataGridActions, getAllByRole } = createDataGridActions(params => ({
      ...params,
      enableAddBtn: true
    }));

    expect(dataGridActions).toBeDefined();
    const buttons = getAllByRole("button");
    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveTextContent("Add item");
  });

  it("renders only columns button", () => {
    const { dataGridActions, getAllByRole } = createDataGridActions(params => ({
      ...params,
      enableColumnsBtn: true
    }));

    expect(dataGridActions).toBeDefined();
    const buttons = getAllByRole("button");
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent("Columns");
    expect(buttons[1]).toHaveTextContent("Show/hide columns");
  });

  it("renders only search button", () => {
    const { dataGridActions, getAllByRole } = createDataGridActions(params => ({
      ...params,
      enableSearchBtn: true
    }));

    expect(dataGridActions).toBeDefined();
    const buttons = getAllByRole("button");
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent("Search");
    expect(buttons[1]).toHaveTextContent("Search");
  });

  it("renders buttons with overwritten props", () => {
    const addBtnProps = { children: "button1", title: "title1" };
    const columnsBtnProps = { children: "button2", title: "title2" };
    const searchBtnProps = { children: "button3", title: "title3" };
    const { dataGridActions, getAllByRole } = createDataGridActions(params => ({
      ...params,
      enableAddBtn: true,
      enableColumnsBtn: true,
      enableSearchBtn: true,
      addBtnProps,
      columnsBtnProps,
      searchBtnProps
    }));

    expect(dataGridActions).toBeDefined();
    const [addBtn, desktopColumnsBtn, mobileColumnsBtn, desktopSearchBtn, mobileSearchBtn] =
      getAllByRole("button");
    expect(addBtn).toHaveTextContent(addBtnProps.children);
    expect(addBtn).toHaveAttribute("title", addBtnProps.title);
    expect(desktopColumnsBtn).toHaveTextContent(columnsBtnProps.children);
    expect(desktopColumnsBtn).toHaveAttribute("title", columnsBtnProps.title);
    expect(mobileColumnsBtn).toHaveTextContent(columnsBtnProps.title);
    expect(desktopSearchBtn).toHaveTextContent(searchBtnProps.children);
    expect(desktopSearchBtn).toHaveAttribute("title", searchBtnProps.title);
    expect(mobileSearchBtn).toHaveTextContent(searchBtnProps.title);
  });
});

describe("DataGridActions should be interactive", () => {
  it("clicking on columns button opens show/hide columns popover", async () => {
    const toggleHeader = { name: "test", headline: "Label" };
    const { getAllByRole, findByLabelText } = createDataGridActions(params => ({
      ...params,
      enableColumnsBtn: true,
      headers: [toggleHeader]
    }));

    userEvent.click(getAllByRole("button")[0]);

    const toggle = await findByLabelText(toggleHeader.headline);
    expect(toggle).toBeDefined();
    expect(toggle).toBeChecked();

    userEvent.click(toggle);
    expect(defaultParams.onColumnToggled).toBeCalledWith(toggleHeader.name);
  });

  it("clicking on add button runs callback", () => {
    const onClick = jest.fn();
    const { getAllByRole } = createDataGridActions(params => ({
      ...params,
      enableAddBtn: true,
      addBtnProps: { onClick }
    }));

    userEvent.click(getAllByRole("button")[0]);

    expect(onClick).toBeCalledTimes(1);
  });

  it("clicking on search button runs callback", () => {
    const onClick = jest.fn();
    const { getAllByRole } = createDataGridActions(params => ({
      ...params,
      enableSearchBtn: true,
      searchBtnProps: { onClick }
    }));

    userEvent.click(getAllByRole("button")[0]);

    expect(onClick).toBeCalledTimes(1);
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

      return <DataGridActions {...defaultParams} data-ref="testing" enableAddBtn ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
