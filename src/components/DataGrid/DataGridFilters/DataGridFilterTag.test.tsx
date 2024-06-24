import React from "react";
import { DataGridFilterTag, DataGridFilterTagProps } from "./DataGridFilterTag";
import { getByLabelText, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultParams: DataGridFilterTagProps = {
  mode: "ADD",
  onFilterRemove: jest.fn(),
  triggerRef: null,
  onFilterOpen: jest.fn()
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

describe("DataGridFilterTag should render", () => {
  it("should render without crashing", () => {
    const { DataGridFilterTagComponent } = createDataGridFilterTag();

    expect(DataGridFilterTagComponent).toBeDefined();
  });

  it("should render DataGridFilterTag in add mode", () => {
    const { getByText } = createDataGridFilterTag(prev => ({ ...prev, addButtonCaption: "Add" }));

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
