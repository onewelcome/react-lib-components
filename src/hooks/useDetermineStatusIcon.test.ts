import { renderHook } from "@testing-library/react-hooks";
import { useDetermineStatusIcon } from "./useDetermineStatusIcon";

describe("it should return the correct icon", () => {
  it("should return an icon of type success", () => {
    const { result } = renderHook(useDetermineStatusIcon, {
      initialProps: { success: true, error: false }
    });

    expect(result.current).toBeDefined();
    expect(result.current?.props?.className).toContain("success-icon");
  });

  it("should return an icon of type success", () => {
    const { result } = renderHook(useDetermineStatusIcon, {
      initialProps: { success: true, error: true }
    });

    expect(result.current).toBeDefined();
    expect(result.current?.props?.className).toContain("error-icon");
  });

  it("should return null", () => {
    const { result } = renderHook(useDetermineStatusIcon);

    expect(result.current).toBeNull();
  });
});
