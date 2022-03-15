import { renderHook, act } from '@testing-library/react-hooks';
import { useWrapper } from './useWrapper';

test('it should give the correct results based on no value, no placeholder and default text input', () => {
  const { result } = renderHook(() => useWrapper('', undefined, 'text'));

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

test('it should have floating label active because of the value', () => {
  const { result } = renderHook(() => useWrapper('value', undefined, 'text'));

  expect(result.current.floatingLabelActive).toBe(true);
});

test('it should have floating label active because input type is datetime-local', () => {
  const { result } = renderHook(() => useWrapper('', undefined, 'datetime-local'));

  expect(result.current.floatingLabelActive).toBe(true);
});

test('it should have floating label active because of placeholder', () => {
  const { result } = renderHook(() => useWrapper('', 'placeholder', 'text'));

  expect(result.current.floatingLabelActive).toBe(true);
});
