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

import React, { useCallback, useEffect, useState } from "react";
import { fireEvent, waitFor } from "@testing-library/dom";
import {
  generateID,
  filterProps,
  debounce,
  throttle,
  differenceBy,
  getValueByPath,
  isEqual
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

    await fireEvent.resize(window);
    await fireEvent.resize(window);
    await fireEvent.resize(window);
    await fireEvent.resize(window);
    await fireEvent.resize(window);

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
        setVariable(Math.random());
      };

      useEffect(() => {
        window.addEventListener("resize", debounce(incrementVariable, 200));
      }, []);

      return null;
    };

    const exampleFunction = jest.fn();

    render(<ExampleComponent debouncedFunction={exampleFunction} />);

    await fireEvent.resize(window);
    await fireEvent.resize(window);
    await fireEvent.resize(window);
    await fireEvent.resize(window);
    await fireEvent.resize(window);

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
        setVariable(Math.random());
      }, []);

      useEffect(() => {
        window.addEventListener("resize", throttle(incrementVariable, 1));
      }, []);

      return null;
    };

    const exampleFunction = jest.fn();

    render(<ExampleComponent throttledFunction={exampleFunction} />);

    await fireEvent.resize(window);
    await fireEvent.resize(window);
    await fireEvent.resize(window);
    await fireEvent.resize(window);
    await fireEvent.resize(window);
    await fireEvent.resize(window);
    await fireEvent.resize(window);
    await fireEvent.resize(window);
    await fireEvent.resize(window);
    await fireEvent.resize(window);

    expect(exampleFunction).not.toHaveBeenCalledTimes(1);
    expect(exampleFunction).not.toHaveBeenCalledTimes(10);
  });
});

describe("differenceBy works as expected", () => {
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

    const result = differenceBy(arr1, arr2, "name");
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

    const result = differenceBy(arr1, arr2, "name");
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

    const result = differenceBy(arr1, arr2, "name");
    expect(result).toBe(true);
  });
});

describe("return correct values from getValueByPath", () => {
  it("should return the correct value form a multi layered object", () => {
    const val = "test";
    const obj = {
      firstNode: {
        secondNode: {
          thirdNode: {
            val
          }
        }
      }
    };

    const result = getValueByPath(obj, "firstNode.secondNode.thirdNode.val");
    expect(result).toBe(val);
  });
});

describe("verifies if isEqual returns the correct value", () => {
  it("should return true for equal values objects", () => {
    const obj1 = {
      name1: "test1",
      name2: {
        val: "test2"
      }
    };

    const obj2 = {
      name1: "test1",
      name2: {
        val: "test2"
      }
    };

    const res = isEqual(obj1, obj2);
    expect(res).toBe(true);
  });

  it("should return false for unequal values objects", () => {
    const obj1 = {
      name1: "test1",
      name2: {
        val: "test2"
      }
    };

    const obj2 = {
      name1: "test1"
    };

    const res = isEqual(obj1, obj2);
    expect(res).toBe(false);
  });

  it("should return false for falsy values", () => {
    const obj1 = {
      name1: "test1",
      name2: {
        val: "test2"
      }
    };
    const obj2 = null;

    const res = isEqual(obj1, obj2);
    expect(res).toBe(false);
  });

  it("should return false for different types", () => {
    const obj1 = [
      {
        name1: "test1",
        name2: {
          val: "test2"
        }
      }
    ];
    const obj2 = {
      name1: "test1",
      name2: {
        val: "test2"
      }
    };

    const res = isEqual(obj1, obj2);
    expect(res).toBe(false);
  });
});
