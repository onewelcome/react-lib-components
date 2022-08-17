import React, { useEffect, useRef } from "react";
import { DataGridCell, Props } from "./DataGridCell";
import { render } from "@testing-library/react";

const defaultParams: Props = {
  children: "cell"
};

const createDataGridCell = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const container = document.createElement("tr");
  const queries = render(<DataGridCell {...parameters} data-testid="dataGridCell" />, {
    container
  });
  const dataGridCell = queries.getByTestId("dataGridCell");

  return {
    ...queries,
    dataGridCell
  };
};

describe("DataGridCell should render", () => {
  it("renders without crashing", () => {
    const { dataGridCell } = createDataGridCell();

    expect(dataGridCell).toBeDefined();
    expect(dataGridCell).toHaveClass("cell");
    expect(dataGridCell).toHaveTextContent(defaultParams.children as string);
  });

  it("renders with additional class", () => {
    const { dataGridCell } = createDataGridCell(params => ({ ...params, className: "test" }));

    expect(dataGridCell).toHaveClass("cell", "test");
  });

  it("renders loading state", () => {
    const { dataGridCell } = createDataGridCell(params => ({ ...params, isLoading: true }));

    const skeletonLoadingEl = dataGridCell.querySelector("div");
    expect(skeletonLoadingEl).toHaveClass("loading");
    expect(skeletonLoadingEl).toHaveAttribute("aria-busy", "true");
    expect(skeletonLoadingEl).toHaveAttribute("aria-live", "polite");
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

      return <DataGridCell {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    const container = document.createElement("tr");
    render(<ExampleComponent propagateRef={refCheck} />, { container });
  });
});
