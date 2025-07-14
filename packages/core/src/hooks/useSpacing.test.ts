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

import { useSpacing } from "./useSpacing";

describe("useSpacing should set propert padding and margin css properties", () => {
  it("should set padding and margin for 4 values definition", () => {
    const styles = useSpacing({ padding: "0 0.5 1 2", margin: "0 0.5 1 2" });
    expect(styles).toHaveProperty("padding", "0rem 0.125rem 0.25rem 0.5rem");
    expect(styles).toHaveProperty("margin", "0rem 0.125rem 0.25rem 0.5rem");
  });

  it("should set padding and margin for 3 values definition", () => {
    const styles = useSpacing({ padding: "3 4 5", margin: "3 4 5" });
    expect(styles).toHaveProperty("padding", "0.75rem 1rem 1.25rem");
    expect(styles).toHaveProperty("margin", "0.75rem 1rem 1.25rem");
  });

  it("should set padding and margin for 2 values definition", () => {
    const styles = useSpacing({ padding: "6 7", margin: "6 7" });
    expect(styles).toHaveProperty("padding", "1.5rem 1.75rem");
    expect(styles).toHaveProperty("margin", "1.5rem 1.75rem");
  });

  it("should set padding and margin for 1 value definition", () => {
    const styles = useSpacing({ padding: 8, margin: "8" });
    expect(styles).toHaveProperty("padding", "2rem");
    expect(styles).toHaveProperty("margin", "2rem");
  });

  it("should set paddingLeft, paddingRight, paddingTop, paddingBottom, marginLeft, marginRight, marginTop, marginBottom css values when all provided", async () => {
    const styles = useSpacing({
      paddingLeft: "1",
      paddingRight: 1,
      paddingTop: "2",
      paddingBottom: 0.5,
      marginLeft: 3,
      marginRight: 4,
      marginTop: 5,
      marginBottom: 6
    });
    expect(styles).toHaveProperty("paddingLeft", "0.25rem");
    expect(styles).toHaveProperty("paddingRight", "0.25rem");
    expect(styles).toHaveProperty("paddingTop", "0.5rem");
    expect(styles).toHaveProperty("paddingBottom", "0.125rem");
    expect(styles).toHaveProperty("marginLeft", "0.75rem");
    expect(styles).toHaveProperty("marginRight", "1rem");
    expect(styles).toHaveProperty("marginTop", "1.25rem");
    expect(styles).toHaveProperty("marginBottom", "1.5rem");
    expect(styles?.padding).toBeUndefined();
    expect(styles?.margin).toBeUndefined();
  });
});

describe("useSpacing should add/repalce properties in passed style object", () => {
  it("should add properties to style object", () => {
    const styles = useSpacing({ padding: 8, margin: "8" }, { backgroundColor: "red" });
    expect(styles).toStrictEqual({ padding: "2rem", margin: "2rem", backgroundColor: "red" });
  });

  it("should add and replace properties to style object", () => {
    const styles = useSpacing(
      { padding: 8, margin: "8" },
      { padding: "2px", paddingTop: 2, backgroundColor: "red" }
    );
    expect(styles).toStrictEqual({
      padding: "2rem",
      margin: "2rem",
      paddingTop: 2,
      backgroundColor: "red"
    });
  });
});
