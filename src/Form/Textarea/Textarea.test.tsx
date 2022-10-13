import React, { useEffect, useRef } from "react";
import { Textarea, Props } from "./Textarea";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

const createTextarea = (params?: Props) => {
  const queries = render(<Textarea data-testid="textarea" {...params} />);
  const textarea = queries.getByTestId("textarea");

  return {
    ...queries,
    textarea
  };
};

describe("Textarea should render", () => {
  it("renders without crashing", () => {
    const { textarea } = createTextarea();
    expect(textarea).toBeTruthy();
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

      return <Textarea data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe("Textarea properties", () => {
  it("is disabled", () => {
    const { textarea } = createTextarea({ disabled: true });

    expect(textarea).toHaveAttribute("disabled");
  });

  it("has 20 columns", () => {
    const { textarea } = createTextarea({ cols: 20 });

    expect(textarea).toHaveAttribute("cols", "20");
  });

  it("has autofocus", () => {
    const { textarea } = createTextarea({ autoFocus: true });

    expect(textarea).toHaveFocus();
  });
});

describe("Textarea listeners", () => {
  it("executes the functions", async () => {
    const onChangeHandler = jest.fn();
    const onKeyUpHandler = jest.fn();
    const onKeyDownHandler = jest.fn();

    const { textarea } = createTextarea({
      onKeyUp: onKeyUpHandler,
      onKeyDown: onKeyDownHandler,
      onChange: onChangeHandler
    });

    act(() => {
      textarea.focus();
    });

    expect(textarea).toHaveFocus();

    await userEvent.keyboard("test");

    expect(onKeyUpHandler).toHaveBeenCalled();
    expect(onKeyDownHandler).toHaveBeenCalled();
    expect(onChangeHandler).toHaveBeenCalled();
  });
});

describe("Error status", () => {
  it("has error class, and an icon", () => {
    const { textarea } = createTextarea({ error: true });

    expect(textarea).toHaveClass("error");
    expect(textarea.nextElementSibling).toHaveClass("icon-error-circle");
  });
});
