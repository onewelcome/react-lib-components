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

import { act, renderHook, waitFor } from "@testing-library/react";
import { useFiltersReducer } from "./useFiltersReducer";

describe("useFiltersReducer", () => {
  it("adds filter to the state", () => {
    const {
      result: {
        current: { state, addFilter }
      }
    } = renderHook(() => useFiltersReducer([]));

    expect(state.filters).toHaveLength(0);

    act(() =>
      addFilter({
        id: "",
        column: "",
        operator: "",
        value: []
      })
    );

    waitFor(() => expect(state.filters).toHaveLength(1));
  });

  it("edits filter in the state", () => {
    const {
      result: {
        current: { state, editFilter }
      }
    } = renderHook(() =>
      useFiltersReducer([
        {
          id: "1",
          column: "test",
          operator: "is",
          value: ["test"]
        }
      ])
    );

    expect(state.filters).toHaveLength(1);

    act(() =>
      editFilter({
        id: "1",
        column: "test",
        operator: "is not",
        value: ["test"]
      })
    );

    waitFor(() => expect(state.filters[0].operator).toEqual("is not"));
  });

  it("removes filter in the state", () => {
    const {
      result: {
        current: { state, deleteFilter }
      }
    } = renderHook(() =>
      useFiltersReducer([
        {
          id: "1",
          column: "test",
          operator: "is",
          value: ["test"]
        }
      ])
    );

    expect(state.filters).toHaveLength(1);

    act(() => deleteFilter("1"));

    waitFor(() => expect(state.filters).toHaveLength(0));
  });

  it("removes all filters in the state", () => {
    const {
      result: {
        current: { state, clearFilters }
      }
    } = renderHook(() =>
      useFiltersReducer([
        {
          id: "1",
          column: "test",
          operator: "is",
          value: ["test"]
        },
        {
          id: "2",
          column: "test",
          operator: "is",
          value: ["test"]
        }
      ])
    );

    expect(state.filters).toHaveLength(2);

    act(() => clearFilters());

    waitFor(() => expect(state.filters).toHaveLength(0));
  });
});
