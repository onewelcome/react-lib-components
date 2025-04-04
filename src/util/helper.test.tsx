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

import React, { useCallback, useEffect, useState, act } from "react";
import { fireEvent, waitFor } from "@testing-library/dom";
import {
  debounce,
  filterProps,
  generateID,
  remToPx,
  throttle,
  areArraysDifferent,
  isJsonString,
  deepMerge
} from "./helper";
import { render } from "@testing-library/react";

/* Generate an ID of 20 characters with a string woven in */

describe("generateID should correctly generate IDs in the correct way", () => {
  it("generates an ID of length 20 with a string woven in", () => {
    const ID1 = generateID(20, "thistestingstring");
    expect(ID1.length).toBe(20);
  });

  it("genereates an ID without a string woven in", () => {
    const ID2 = generateID(20);
    expect(ID2.length).toBe(20);
  });
});

describe("filterprops should return the correct object", () => {
  it("gives back the props we told it to filter", () => {
    const propsObject = {
      "data-filter": true,
      "data-test": false,
      "aria-hidden": false,
      "aria-expanded": true,
      title: "test",
      className: "example-classname"
    };

    const returnedPropsObject = filterProps(propsObject, /^data-/);

    expect(returnedPropsObject).toStrictEqual({ "data-filter": true, "data-test": false });
  });

  it("gives back the propsObject without the props we told it to filter", () => {
    const propsObject = {
      "data-filter": true,
      "data-test": false,
      "aria-hidden": false,
      "aria-expanded": true,
      title: "test",
      className: "example-classname"
    };

    const returnedPropsObject = filterProps(propsObject, /^data-/, false);

    expect(returnedPropsObject).toStrictEqual({
      "aria-hidden": false,
      "aria-expanded": true,
      title: "test",
      className: "example-classname"
    });
  });
});

describe("debounce function", () => {
  it("debounced the resizing of the window, it will only execute 1 time", async () => {
    const debouncedFunction = jest.fn();

    window.addEventListener("resize", debounce(debouncedFunction, 200));

    act(() => {
      fireEvent.resize(window);
      fireEvent.resize(window);
      fireEvent.resize(window);
      fireEvent.resize(window);
      fireEvent.resize(window);
    });

    await waitFor(() => expect(debouncedFunction).toHaveBeenCalledTimes(1));
  });

  it("Works in a react component as well, it should only fire the exampleFunction once.", async () => {
    const ExampleComponent = ({
      debouncedFunction
    }: {
      debouncedFunction: (...args: unknown[]) => unknown;
    }) => {
      const [variable, setVariable] = useState(0);

      useEffect(() => {
        debouncedFunction(variable);
      }, [variable]);

      const incrementVariable = () => {
        act(() => {
          setVariable(Math.random());
        });
      };

      useEffect(() => {
        window.addEventListener("resize", debounce(incrementVariable, 200));
      }, []);

      return null;
    };

    const exampleFunction = jest.fn();

    render(<ExampleComponent debouncedFunction={exampleFunction} />);

    act(() => {
      fireEvent.resize(window);
      fireEvent.resize(window);
      fireEvent.resize(window);
      fireEvent.resize(window);
      fireEvent.resize(window);
    });

    expect(exampleFunction).toHaveBeenCalledTimes(1);
  });
});

describe("throttling works", () => {
  it("Works in a react component as well, it should only fire the exampleFunction once.", async () => {
    const ExampleComponent = ({
      throttledFunction
    }: {
      throttledFunction: (...args: unknown[]) => unknown;
    }) => {
      const [variable, setVariable] = useState(0);

      useEffect(() => {
        throttledFunction(variable);
      }, [variable]);

      const incrementVariable = useCallback(() => {
        act(() => {
          setVariable(Math.random());
        });
      }, []);

      useEffect(() => {
        window.addEventListener("resize", throttle(incrementVariable, 1));
      }, []);

      return null;
    };

    const exampleFunction = jest.fn();

    render(<ExampleComponent throttledFunction={exampleFunction} />);

    act(() => {
      fireEvent.resize(window);
      fireEvent.resize(window);
      fireEvent.resize(window);
      fireEvent.resize(window);
      fireEvent.resize(window);
      fireEvent.resize(window);
      fireEvent.resize(window);
      fireEvent.resize(window);
      fireEvent.resize(window);
      fireEvent.resize(window);
    });

    expect(exampleFunction).not.toHaveBeenCalledTimes(1);
    expect(exampleFunction).not.toHaveBeenCalledTimes(10);
  });
});

describe("areArraysDifferent works as expected", () => {
  it("should return true for different arrays", () => {
    const arr1 = [
      {
        name: "test1"
      },
      {
        name: "test2"
      }
    ];

    const arr2 = [
      {
        name: "test1"
      },
      {
        name: "test3"
      }
    ];

    const result = areArraysDifferent(arr1, arr2, "name");
    expect(result).toBe(true);
  });

  it("should return false for arrays with same values", () => {
    const arr1 = [
      {
        name: "test1"
      }
    ];

    const arr2 = [
      {
        name: "test1"
      }
    ];

    const result = areArraysDifferent(arr1, arr2, "name");
    expect(result).toBe(false);
  });

  it("should return false for falsy values", () => {
    const arr1 = [
      {
        name: "test1"
      }
    ];

    const arr2 = [
      {
        label: "test1"
      }
    ];

    const result = areArraysDifferent(arr1, arr2, "name");
    expect(result).toBe(true);
  });
});

describe("pixel to rem function works", () => {
  document.documentElement.style.setProperty("font-size", "16px");

  it.each([
    [1, 16],
    [1.25, 20],
    [1.5, 24],
    [1.75, 28],
    [2, 32]
  ])("%p rem equals %p px when font-size is 16px", async (rem: number, px: number) => {
    const result = remToPx(rem);

    expect(result).toBe(px);
  });
});

describe("isJsonString should work", () => {
  it("should return true when parameter is a valid JSON string", () => {
    const param = JSON.stringify({ test: 1 });

    expect(isJsonString(param)).toEqual(true);
  });

  it("should return false when parameter is a valid JSON string", () => {
    const param = { test: 2 };

    expect(isJsonString(param)).toEqual(false);
  });
});

describe("deepMerge function", () => {
  it("should return the first object if the second one is falsy", () => {
    const obj1 = { a: 1 };
    const obj2 = false;

    expect(deepMerge(obj1, obj2)).toEqual({ a: 1 });
  });

  it("should return a merged object with no nested object", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };

    expect(deepMerge(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });

  it("should return a merged object with nested object", () => {
    const obj1 = { a: 1, b: { x: 1, y: 2 } };
    const obj2 = { b: { y: 3, z: 4 }, c: 4 };

    expect(deepMerge(obj1, obj2)).toEqual({ a: 1, b: { x: 1, y: 3, z: 4 }, c: 4 });
  });

  it("should replace non-object values in the first object with values in the second object", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: { y: 3, z: 4 }, c: 4 };

    expect(deepMerge(obj1, obj2)).toEqual({ a: 1, b: { y: 3, z: 4 }, c: 4 });
  });

  it("should not merge array values but replace them", () => {
    const obj1 = { a: 1, b: [1, 2] };
    const obj2 = { b: [3, 4], c: 4 };

    expect(deepMerge(obj1, obj2)).toEqual({ a: 1, b: [3, 4], c: 4 });
  });
});
