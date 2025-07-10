import React from "react";
import { render } from "@testing-library/react";
import { Spinner } from "./Spinner";

describe("Spinner Component", () => {
  it("should render with default props", () => {
    const { container } = render(<Spinner />);
    const svgElement = container.querySelector("svg");
    expect(svgElement).toBeInTheDocument();

    expect(svgElement).toHaveAttribute("width", "32");
    expect(svgElement).toHaveAttribute("height", "32");

    const circleElement = svgElement!.querySelectorAll("circle");
    expect(circleElement[0]).toBeInTheDocument();
    expect(circleElement[0]).toHaveAttribute("stroke-width", "2");

    expect(circleElement[1]).toBeInTheDocument();
    expect(circleElement[1]).toHaveAttribute("stroke-width", "2");
  });

  it("should render with custom props", () => {
    const { container } = render(<Spinner size={50} thickness={4} />);
    const svgElement = container.querySelector("svg");
    expect(svgElement).toBeInTheDocument();

    expect(svgElement).toHaveAttribute("width", "50");
    expect(svgElement).toHaveAttribute("height", "50");

    const circleElement = svgElement!.querySelectorAll("circle");
    expect(circleElement[0]).toBeInTheDocument();
    expect(circleElement[0]).toHaveAttribute("stroke-width", "4");

    expect(circleElement[1]).toBeInTheDocument();
    expect(circleElement[1]).toHaveAttribute("stroke-width", "4");
  });
});
