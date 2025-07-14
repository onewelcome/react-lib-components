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

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { useScroll } from "./useScroll";

describe("function should be executed", () => {
  it("should execute", () => {
    const scrollHandler = jest.fn();

    const Component = () => {
      useScroll(scrollHandler);
      return <div>Test</div>;
    };

    render(<Component />);

    expect(scrollHandler).not.toBeCalled();
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    expect(scrollHandler).toBeCalledTimes(1);
  });
});
