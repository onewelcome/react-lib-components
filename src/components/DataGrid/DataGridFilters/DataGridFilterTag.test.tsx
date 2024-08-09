import React, { Fragment } from "react";
import { DataGridFilterTag, DataGridFilterTagProps } from "./DataGridFilterTag";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Filter } from "./DataGridFilters.interfaces";

const defaultParams: DataGridFilterTagProps = {
  mode: "ADD",
  onFilterRemove: jest.fn(),
  triggerRef: null,
  onFilterOpen: jest.fn()
};

const CustomTagContent = ({ filter }: { filter: Filter }) => {
  const { column, operator, value } = filter || {};

  return (
    <Fragment>
      {column} {operator} {value.length > 0 && <b>{value[0]}</b>}
      {value.length >= 2 && (
        <>
          lub <b> {value.length - 1} innych</b>
        </>
      )}
    </Fragment>
  );
};

const createDataGridFilterTag = (
  params?: (defaultParams: DataGridFilterTagProps) => DataGridFilterTagProps
) => {
  let parameters: DataGridFilterTagProps = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<DataGridFilterTag {...parameters} data-testid="DataGridFilterTag" />);
  const DataGridFilterTagComponent = queries.getByTestId("DataGridFilterTag");

  return {
    ...queries,
    DataGridFilterTagComponent
  };
};

describe("DataGridFilterTag", () => {
  it("should render without crashing", () => {
    const { DataGridFilterTagComponent } = createDataGridFilterTag();

    expect(DataGridFilterTagComponent).toBeDefined();
  });

  it("should render DataGridFilterTag in add mode", () => {
    const { getByText } = createDataGridFilterTag(prev => ({
      ...prev,
      translations: { addButtonCaption: "Add" }
    }));

    expect(getByText("Add")).toBeDefined();
  });

  it("should render DataGridFilterTag in edit mode", () => {
    const { getByText } = createDataGridFilterTag(prev => ({
      ...prev,
      mode: "EDIT",
      filter: { id: "test", column: "name", operator: "is", value: ["test"] }
    }));

    expect(getByText(/name/)).toBeDefined();
    expect(getByText(/is/)).toBeDefined();
    expect(getByText(/test/)).toBeDefined();
    expect(getByText("Remove")).toBeDefined();
  });

  it("should render DataGridFilterTag in edit mode with abriged filter values", () => {
    const { getByText } = createDataGridFilterTag(prev => ({
      ...prev,
      mode: "EDIT",
      filter: { id: "test", column: "name", operator: "is", value: ["test", "test2"] }
    }));

    expect(getByText(/name/)).toBeDefined();
    expect(getByText(/is/)).toBeDefined();
    expect(getByText(/test/)).toBeDefined();
    expect(getByText(/or/)).toBeDefined();
    expect(getByText(/1 other/)).toBeDefined();
  });

  it("should render DataGridFilterTag in edit mode with custom tag content", () => {
    const { getByText } = createDataGridFilterTag(prev => ({
      ...prev,
      mode: "EDIT",
      filter: { id: "test", column: "name", operator: "is", value: ["test", "test2"] },
      customEditTagContent: (
        <CustomTagContent
          filter={{ id: "test", column: "name", operator: "is", value: ["test", "test2"] }}
        />
      )
    }));

    expect(getByText(/name/)).toBeDefined();
    expect(getByText(/is/)).toBeDefined();
    expect(getByText(/test/)).toBeDefined();
    expect(getByText(/lub/)).toBeDefined();
    expect(getByText(/1 innych/)).toBeDefined();
  });

  it("should fire provided callbacks", async () => {
    const onOpen = jest.fn();
    const onRemove = jest.fn();
    const { getByText } = createDataGridFilterTag(prev => ({
      ...prev,
      onFilterOpen: onOpen,
      onFilterRemove: onRemove,
      mode: "EDIT",
      filter: { id: "test", column: "name", operator: "is", value: ["test", "test2"] }
    }));

    await userEvent.click(getByText(/name/));
    expect(onOpen).toHaveBeenCalled();

    await userEvent.click(getByText("Remove"));
    expect(onRemove).toHaveBeenCalled();
  });
});
