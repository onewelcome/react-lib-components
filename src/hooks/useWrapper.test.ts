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

import { renderHook, act } from "@testing-library/react-hooks";
import { useWrapper } from "./useWrapper";

describe("it should give the correct results based on no value, no placeholder and default text input", () => {
  it("should execute correctly", () => {
    const { result } = renderHook(() => useWrapper("", undefined, "text"));

    expect(result.current.helperId).toHaveLength(20);
    expect(result.current.errorId).toHaveLength(20);
    expect(result.current.labelId).toHaveLength(20);
    expect(result.current.floatingLabelActive).toBe(false);

    act(() => {
      result.current.setFloatingLabelActive(true);
    });

    expect(result.current.floatingLabelActive).toBe(true);

    act(() => {
      result.current.setFloatingLabelActive(false);
    });

    expect(result.current.floatingLabelActive).toBe(false);

    act(() => {
      result.current.setHasFocus(true);
    });

    expect(result.current.floatingLabelActive).toBe(true);
  });
});

describe("it should have floating label active because of the value", () => {
  it("should have active floating label state", () => {
    const { result } = renderHook(() => useWrapper("value", undefined, "text"));

    expect(result.current.floatingLabelActive).toBe(true);
  });
  it("should have floating label active because input type is datetime-local", () => {
    const { result } = renderHook(() => useWrapper("", undefined, "datetime-local"));

    expect(result.current.floatingLabelActive).toBe(true);
  });
  it("should have floating label active because of placeholder", () => {
    const { result } = renderHook(() => useWrapper("", "placeholder", "text"));

    expect(result.current.floatingLabelActive).toBe(true);
  });
});
