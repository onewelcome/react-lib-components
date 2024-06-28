import { renderHook, waitFor } from "@testing-library/react";
import { useContentHeaderCollapse } from "./useContentHeaderCollapse";

describe("we should get the correct return values", () => {
  it("should return collapse true", () => {
    const { result } = renderHook(() => useContentHeaderCollapse(true));

    expect(result.current.collapsed).toBeTruthy();
  });

  it("should return collapse false", () => {
    const { result } = renderHook(() => useContentHeaderCollapse(false));

    expect(result.current.collapsed).toBeFalsy();
  });

  it("should return collapse true on scroll event fire", async () => {
    const { result } = renderHook(() => useContentHeaderCollapse(false));
    // send sample data...
    result.current.handleScroll({
      target: {
        scrollTop: 1000,
        scrollHeight: 1000,
        clientHeight: 0
      }
    });

    await waitFor(async () => {
      await expect(result.current.collapsed).toBeTruthy();
    });
  });
});
