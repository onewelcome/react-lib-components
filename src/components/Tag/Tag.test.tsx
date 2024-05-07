import React, { useRef, useEffect } from "react";
import { Tag as TagComponent, Props } from "./Tag";
import { render } from "@testing-library/react";
import { Icons } from "../Icon/Icon";

const defaultParams: Props = {};

const createTag = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <TagComponent {...parameters} data-testid="Tag">
      Tag content
    </TagComponent>
  );
  const Tag = queries.getByTestId("Tag");

  return {
    ...queries,
    Tag
  };
};

describe("Tag should render", () => {
  it("renders without crashing", () => {
    const { Tag } = createTag();

    expect(Tag).toBeDefined();
  });

  it("should render the enabled version", () => {
    const { Tag } = createTag(defaultParams => ({ ...defaultParams, variant: "enabled" }));

    expect(Tag).toHaveClass("tag-enabled");
  });

  it("should render the disabled version", () => {
    const { Tag } = createTag(defaultParams => ({ ...defaultParams, variant: "disabled" }));

    expect(Tag).toHaveClass("tag-disabled");
  });

  it("should render the custom version", () => {
    const { Tag } = createTag(defaultParams => ({
      ...defaultParams,
      backgroundColor: "blue",
      color: "white",
      icon: Icons.Calendar
    }));

    const icon = Tag.querySelector("[data-icon]");

    expect(Tag).toHaveClass("tag");
    expect(Tag).toHaveStyle("background-color: blue");
    expect(Tag).toHaveStyle("color: white");
    expect(Tag).toHaveTextContent("Tag content");
    expect(icon).toHaveClass("icon-calendar");
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

      return <TagComponent {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
