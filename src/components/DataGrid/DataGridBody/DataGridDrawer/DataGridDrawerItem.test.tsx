import React, { useEffect, useRef } from "react";
import { DataGridDrawerItem, Props } from "./DataGridDrawerItem";
import { render } from "@testing-library/react";

const defaultParams: Props = {
  title: "title",
  description: "description"
};

const createDataGridDrawerItem = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<DataGridDrawerItem {...parameters} data-testid="DataGridDrawerItem" />);
  const DataGridDrawerItemComponent = queries.getByTestId("DataGridDrawerItem");

  return {
    ...queries,
    DataGridDrawerItemComponent
  };
};

describe("DataGridDrawerItem should render", () => {
  it("should render without crashing", () => {
    const { DataGridDrawerItemComponent } = createDataGridDrawerItem();

    expect(DataGridDrawerItemComponent).toBeDefined();
  });

  it("should render title and description", () => {
    const { getByText } = createDataGridDrawerItem();

    expect(getByText("title")).toBeDefined();
    expect(getByText("description")).toBeDefined();
  });

  it("should render children", () => {
    const { getByText } = createDataGridDrawerItem(props => ({
      ...props,
      children: <div>child</div>
    }));

    expect(getByText("child")).toBeDefined();
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

      return <DataGridDrawerItem {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
