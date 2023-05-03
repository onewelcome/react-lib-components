/*
 * Copyright 2022 OneWelcome B.V.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import React, { useEffect, useRef } from "react";
import { Textarea, Props } from "./Textarea";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const createTextarea = (params?: Props) => {
  const queries = render(<Textarea data-testid="textarea" {...params} />);
  const textarea = queries.getByRole("textbox");

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

    setTimeout(() => {
      expect(textarea).toHaveAttribute("autofocus");
    }, 0);
  });
});

describe("Textarea listeners", () => {
  it("executes the functions", () => {
    const onChangeHandler = jest.fn();
    const onKeyUpHandler = jest.fn();
    const onKeyDownHandler = jest.fn();

    const { textarea } = createTextarea({
      onKeyUp: onKeyUpHandler,
      onKeyDown: onKeyDownHandler,
      onChange: onChangeHandler
    });

    textarea.focus();

    expect(textarea).toHaveFocus();

    userEvent.keyboard("test");

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

describe("Success status", () => {
  it("success icon should be visible", () => {
    const { textarea } = createTextarea({ success: true });
    const icon = textarea.parentElement?.querySelector(".icon-checkmark-circle-breakout");
    expect(icon).toBeDefined();
  });
});
