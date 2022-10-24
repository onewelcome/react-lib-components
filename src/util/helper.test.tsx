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

import { generateID, filterProps } from "./helper";

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
