import { useFormSelector } from './useFormSelector';
import { renderHook } from '@testing-library/react-hooks';

test('we should get the correct return values and describedBy is the same as identifier', () => {
  const { result } = renderHook(() =>
    useFormSelector({
      name: 'test',
      errorMessage: 'errormessage',
      error: false,
      parentErrorId: 'parenterrorid',
      helperText: 'helpertext',
      parentHelperId: 'parenthelperid',
    })
  );

  expect(result.current.describedBy).toHaveLength(15);
  expect(result.current.errorId).toHaveLength(15);
  expect(result.current.identifier).toHaveLength(15);

  expect(result.current.describedBy).toBe(result.current.identifier);
});

test('describedBy should be the parenterrorid', () => {
  const { result } = renderHook(() =>
    useFormSelector({
      name: 'test',
      errorMessage: 'errormessage',
      error: true,
      parentErrorId: 'parenterrorid',
      helperText: 'helpertext',
      parentHelperId: 'parenthelperid',
    })
  );

  expect(result.current.describedBy).toBe('parenterrorid');
});
