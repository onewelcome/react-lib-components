import React from "react";
import { DataGridToolbar, DataGridToolbarProps } from "./DataGridToolbar";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DataGridToolbarWrapper } from "./DataGridToolbarWrapper";

const defaultParams: DataGridToolbarProps = {
  columnsMetadata: [
    { name: "name", headline: "Name" },
    { name: "created", headline: "Created", operators: ["before", "after", "between"] },
    { name: "id", headline: "Identifier" },
    { name: "type", headline: "Type", defaultValues: ["Stock", "Bond"] },
    { name: "enabled", headline: "Status" }
  ]
};

const createDataGridToolbar = (
  params?: (defaultParams: DataGridToolbarProps) => DataGridToolbarProps
) => {
  let parameters: DataGridToolbarProps = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <DataGridToolbarWrapper data-testid="DataGridToolbar">
      <DataGridToolbar {...parameters} />
    </DataGridToolbarWrapper>
  );
  const DataGridToolbarComponent = queries.getByTestId("DataGridToolbar");

  return {
    ...queries,
    DataGridToolbarComponent
  };
};

describe("DataGridToolbar should render", () => {
  it("should render without crashing", () => {
    const { DataGridToolbarComponent } = createDataGridToolbar();

    expect(DataGridToolbarComponent).toBeDefined();
  });

  it("should allow to create a new filter", async () => {
    const { getByText, getByLabelText, getByRole } = createDataGridToolbar();

    const addFilterButton = getByText("Add filter");
    expect(addFilterButton).toBeDefined();

    await userEvent.click(addFilterButton);

    const columnSelect = getByLabelText("Filter by");
    const operatorSelect = getByLabelText("Operator");
    const valueSelect = getByLabelText("Value");

    expect(columnSelect).toBeDefined();
    expect(operatorSelect).toBeDefined();
    expect(valueSelect).toBeDefined();

    await userEvent.click(columnSelect);
    await userEvent.click(getByText("Created"));
    expect(columnSelect).toHaveTextContent("Created");

    await userEvent.click(operatorSelect);
    await userEvent.click(getByText("after"));

    await userEvent.click(valueSelect);
    const multiSelectInput = getByRole("combobox");
    await userEvent.type(multiSelectInput, "yesterday");
    const multiSelectButton = getByText("create new", { exact: false });
    await userEvent.click(multiSelectButton);

    await userEvent.click(getByText("Apply"));

    expect(getByText(/created/)).toBeDefined();
    expect(getByText(/yesterday/)).toBeDefined();
  });

  it("should reset filter form values when user closes the popover", async () => {
    const { getByText, getByLabelText, getByRole } = createDataGridToolbar();

    const addFilterButton = getByText("Add filter");
    expect(addFilterButton).toBeDefined();

    await userEvent.click(addFilterButton);

    const columnSelect = getByLabelText("Filter by");
    const operatorSelect = getByLabelText("Operator");
    const valueSelect = getByLabelText("Value");

    expect(columnSelect).toBeDefined();
    expect(operatorSelect).toBeDefined();
    expect(valueSelect).toBeDefined();

    await userEvent.click(columnSelect);
    await userEvent.click(getByText("Type"));
    expect(columnSelect).toHaveTextContent("Type");

    await userEvent.click(operatorSelect);
    await userEvent.click(getByText("contains"));
    expect(operatorSelect).toHaveTextContent("contains");

    await userEvent.click(valueSelect);
    const multiSelectInput = getByRole("combobox");
    await userEvent.type(multiSelectInput, "yesterday");
    const multiSelectButton = getByText("create new", { exact: false });
    await userEvent.click(multiSelectButton);

    await userEvent.click(getByText("Cancel"));
    await userEvent.click(addFilterButton);

    const secondColumnSelect = getByLabelText("Filter by");
    const secondOperatorSelect = getByLabelText("Operator");
    const secondValueSelect = getByLabelText("Value");

    expect(secondColumnSelect).toHaveTextContent("Name");
    expect(secondOperatorSelect).toHaveTextContent("is");
    expect(secondValueSelect).toHaveTextContent("");
  });

  it("should allow to edit an existing filter", async () => {
    const { getByText, getAllByText, getAllByLabelText, getByRole } = createDataGridToolbar(
      prev => ({
        ...prev,
        filterValues: [{ id: "test", column: "name", operator: "is", value: ["test"] }]
      })
    );

    const editFilterButton = getByText(/name/);
    expect(editFilterButton).toBeDefined();
    await userEvent.click(editFilterButton);

    const columnSelect = getAllByLabelText("Filter by")[0];
    const operatorSelect = getAllByLabelText("Operator")[0];
    const valueSelect = getAllByLabelText("Value")[0];

    expect(columnSelect).toBeDefined();
    expect(operatorSelect).toBeDefined();
    expect(valueSelect).toBeDefined();

    await userEvent.click(columnSelect);
    await userEvent.click(getAllByText("Created")[0]);
    expect(columnSelect).toHaveTextContent("Created");

    await userEvent.click(operatorSelect);
    await userEvent.click(getByText("after"));

    await userEvent.click(valueSelect);
    const multiSelectInput = getByRole("combobox");
    await userEvent.type(multiSelectInput, "yesterday");
    const multiSelectButton = getByText("create new", { exact: false });
    await userEvent.click(multiSelectButton);

    await userEvent.click(getAllByText("Apply")[0]);

    expect(getByText(/created/)).toBeDefined();
    expect(getByText(/yesterday/)).toBeDefined();
  });

  it("should allow to remove given filter when user presses the remove button", async () => {
    const { getByText, queryByText } = createDataGridToolbar(prev => ({
      ...prev,
      filterValues: [{ id: "test", column: "name", operator: "is", value: ["test"] }]
    }));

    expect(getByText(/name/)).toBeDefined();
    expect(getByText(/test/)).toBeDefined();

    const removeButton = getByText("Remove");
    expect(removeButton).toBeDefined();
    await userEvent.click(removeButton);

    expect(queryByText(/name/)).not.toBeInTheDocument();
    expect(queryByText(/test/)).not.toBeInTheDocument();
  });

  it("should remove all of the filters user presses the remove all button", async () => {
    const { getByText, queryByText } = createDataGridToolbar(prev => ({
      ...prev,
      filterValues: [
        { id: "test", column: "name", operator: "is", value: ["test"] },
        { id: "test2", column: "created", operator: "after", value: ["yesterday"] }
      ]
    }));

    expect(getByText(/name/)).toBeDefined();
    expect(getByText(/test/)).toBeDefined();

    expect(getByText(/created/)).toBeDefined();
    expect(getByText(/yesterday/)).toBeDefined();

    const removeAllButton = getByText("Clear all filters");
    expect(removeAllButton).toBeDefined();
    await userEvent.click(removeAllButton);

    expect(queryByText(/name/)).not.toBeInTheDocument();
    expect(queryByText(/test/)).not.toBeInTheDocument();

    expect(queryByText(/created/)).not.toBeInTheDocument();
    expect(queryByText(/yesterday/)).not.toBeInTheDocument();
  });
});
