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

import { act, renderHook } from "@testing-library/react";
import { useContentHeaderCollapse } from "./useContentHeaderCollapse";

describe('useContentHeaderCollapse', () => {
  it('should initialize with the given isCollapsed value', () => {
    const { result } = renderHook(() => useContentHeaderCollapse(true));
    expect(result.current.collapsed).toBe(true);

    const { result: result2 } = renderHook(() => useContentHeaderCollapse(false));
    expect(result2.current.collapsed).toBe(false);
  });

  it('should default to false if isCollapsed is not provided', () => {
    const { result } = renderHook(() => useContentHeaderCollapse());
    expect(result.current.collapsed).toBe(false);
  });
  
  it('should update collapsed state based on scroll position', () => {
    const { result } = renderHook(() => useContentHeaderCollapse(false));
    const mockEvent = {
      target: {
        scrollTop: 50,
        scrollHeight: 300,
        clientHeight: 100
      }
    };

    act(() => {
      result.current.handleScroll(mockEvent as unknown as React.UIEvent<HTMLDivElement>);
    });

    expect(result.current.collapsed).toBe(true);

    const mockEventTop= {
      target: {
        scrollTop: 0,
        scrollHeight: 300,
        clientHeight: 100
      }
    };

    act(() => {
      result.current.handleScroll(mockEventTop  as unknown as React.UIEvent<HTMLDivElement>);
    });

    expect(result.current.collapsed).toBe(false);
  });
});

