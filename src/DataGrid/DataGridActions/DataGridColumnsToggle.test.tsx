import React, { useEffect, useRef } from "react";
import { DataGridColumnsToggle, Props } from "./DataGridColumnsToggle";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultParams: Props = {
  open: true,
  headers: [
    { headline: "Name", name: "name" },
    { headline: "Date", name: "date", hidden: true }
  ],
  onClose: jest.fn(),
  onToggleClicked: jest.fn()
};

const createDataGridColumnsToggle = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <DataGridColumnsToggle {...parameters} data-testid="dataGridColumnsToggle" />
  );
  const dataGridColumnsToggle = queries.getByTestId("dataGridColumnsToggle");

  return {
    ...queries,
    dataGridColumnsToggle
  };
};

describe("DataGridColumnsToggle should render", () => {
  it("renders without crashing", () => {
    const { dataGridColumnsToggle, getByLabelText, getByText } = createDataGridColumnsToggle();

    expect(dataGridColumnsToggle).toBeDefined();
    expect(getByText("Show columns")).toBeDefined();
    expect(getByLabelText(defaultParams.headers[0].headline)).toBeChecked();
    expect(getByLabelText(defaultParams.headers[1].headline)).not.toBeChecked();
  });
});

describe("DataGridColumnsToggle should be interactive", () => {
  it("clicking on close calls onClose callback", () => {
    const { getByRole } = createDataGridColumnsToggle();

    userEvent.click(getByRole("button"));

    expect(defaultParams.onClose).toBeCalledTimes(1);
  });

  it("clicking outside of container (on backdrop layer) calls onClose callback", () => {
    createDataGridColumnsToggle();

    userEvent.click(document.querySelector(".backdrop")!);

    expect(defaultParams.onClose).toBeCalledTimes(1);
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

      return <DataGridColumnsToggle {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
