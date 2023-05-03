import { renderHook, act } from "@testing-library/react";
import { useDebouncedCallback } from "./useDebouncedCallback";

const BASE_DELAY = 300;
const EXTRA_DELAY = 200;

const sleep = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));

describe("Testing the useDebouncedCallback hook", () => {
  it("should run callback after specified delay", async () => {
    const delay = BASE_DELAY;
    const callback = jest.fn();

    const { result } = renderHook(() => useDebouncedCallback(callback, delay));

    expect(callback).toHaveBeenCalledTimes(0);
    act(result.current);
    await sleep(delay + EXTRA_DELAY);

    expect(callback).toHaveBeenCalledTimes(1);

    act(result.current);
    await sleep(delay + EXTRA_DELAY);

    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("should pass args through to callback function", async () => {
    let mutableValue = "";
    const delay = BASE_DELAY;
    const callback = jest.fn(arg => (mutableValue = `got arg ${arg}`));

    const { result } = renderHook(() => useDebouncedCallback(callback, delay));

    act(() => result.current("passthrough"));
    await sleep(delay + EXTRA_DELAY);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(mutableValue).toBe(`got arg passthrough`);
  });

  it("should cancel pending call if fn is called again", async () => {
    const delay = BASE_DELAY;
    const callback = jest.fn();

    const { result } = renderHook(() => useDebouncedCallback(callback, delay));

    expect(callback).toHaveBeenCalledTimes(0);
    act(result.current);
    await sleep(delay / 2);

    act(result.current);
    await sleep(delay + EXTRA_DELAY);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should cancel pending call if callback changes", async () => {
    const delay = BASE_DELAY;
    const callback1 = jest.fn();
    const callback2 = jest.fn();

    const { result, rerender } = renderHook(
      ({ callback, delay }: { callback: () => unknown; delay: number }) =>
        useDebouncedCallback(callback, delay),
      { initialProps: { callback: callback1, delay } }
    );

    act(result.current);
    await sleep(delay / 2);

    rerender({ callback: callback2, delay });
    act(result.current);
    await sleep(delay + EXTRA_DELAY);

    expect(callback1).toHaveBeenCalledTimes(0);
    expect(callback2).toHaveBeenCalledTimes(1);
  });

  it("should cancel pending call if delay changes", async () => {
    const delay1 = BASE_DELAY;
    const delay2 = BASE_DELAY * 2;
    const callback = jest.fn();

    const { result, rerender } = renderHook(
      ({ callback, delay }: { callback: () => unknown; delay: number }) =>
        useDebouncedCallback(callback, delay),
      { initialProps: { callback, delay: delay1 } }
    );

    act(result.current);
    await sleep(delay1 / 2);

    rerender({ callback, delay: delay2 });
    act(result.current);
    await sleep(delay2 + EXTRA_DELAY);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should cancel pending call if dependencies change", async () => {
    const delay = BASE_DELAY;
    const callback = jest.fn();

    const { result, rerender } = renderHook(
      ({
        callback,
        delay,
        dependencies
      }: {
        callback: () => unknown;
        delay: number;
        dependencies: any[];
      }) => useDebouncedCallback(callback, delay, dependencies),
      { initialProps: { callback, delay, dependencies: ["a"] } }
    );

    act(result.current);
    await sleep(delay / 2);

    rerender({ callback, delay, dependencies: ["b"] });
    act(result.current);
    await sleep(delay + EXTRA_DELAY);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should support async callbacks", async () => {
    const makeAsyncCall = jest.fn(
      () =>
        new Promise(async resolve => {
          await sleep(delay / 2);
          resolve(null);
        })
    );

    const delay = BASE_DELAY;
    const callback = jest.fn(async () => {
      await makeAsyncCall();
    });

    const { result } = renderHook(() => useDebouncedCallback(callback, delay));

    await act(async () => result.current());
    await sleep(delay + EXTRA_DELAY);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(makeAsyncCall).toHaveBeenCalledTimes(1);
  });
});
