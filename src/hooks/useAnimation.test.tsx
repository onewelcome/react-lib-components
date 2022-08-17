import React, { Fragment } from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useAnimation } from "./useAnimation";

describe("useAnimation", () => {
  it("should execute", () => {
    const callback = jest.fn();

    const Component = () => {
      const { ref, animationStarted, startAnimation } = useAnimation<HTMLDivElement>(callback);

      return (
        <Fragment>
          <button data-testid="button" onClick={() => startAnimation()}>
            start animation
          </button>
          <div
            data-testid="animated-div"
            ref={ref}
            className={animationStarted ? "animation-started" : ""}
          >
            animated div
          </div>
        </Fragment>
      );
    };

    const { getByTestId } = render(<Component />);

    const animatedDiv = getByTestId("animated-div");
    const startButton = getByTestId("button");

    expect(animatedDiv).not.toHaveClass("animation-started");
    expect(callback).not.toBeCalled();

    userEvent.click(startButton);
    expect(animatedDiv).toHaveClass("animation-started");
    expect(callback).not.toBeCalled();

    fireEvent.animationEnd(animatedDiv);
    expect(animatedDiv).toHaveClass("animation-started");
    expect(callback).toBeCalled();
  });
});
