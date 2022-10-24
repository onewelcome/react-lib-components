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

import { useFormSelector } from "./useFormSelector";
import { renderHook } from "@testing-library/react";

describe("we should get the correct return values and describedBy is the same as identifier", () => {
  it("should return correct values", () => {
    const { result } = renderHook(() =>
      useFormSelector({
        name: "test",
        errorMessage: "errormessage",
        error: false,
        parentErrorId: "parenterrorid",
        helperText: "helpertext",
        parentHelperId: "parenthelperid"
      })
    );

    expect(result.current.describedBy).toHaveLength(15);
    expect(result.current.errorId).toHaveLength(15);
    expect(result.current.identifier).toHaveLength(15);

    expect(result.current.describedBy).toBe(result.current.identifier);
  });
});

describe("describedBy should be the parenterrorid", () => {
  it("should be linked correctly", () => {
    const { result } = renderHook(() =>
      useFormSelector({
        name: "test",
        errorMessage: "errormessage",
        error: true,
        parentErrorId: "parenterrorid",
        helperText: "helpertext",
        parentHelperId: "parenthelperid"
      })
    );

    expect(result.current.describedBy).toBe("parenterrorid");
  });
});
